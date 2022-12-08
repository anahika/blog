const Post = require("../models/post");
const FeaturedPost = require("../models/featuredPost");
const cloudinary = require("../cloud");
const { isValidObjectId } = require("mongoose");
const post = require("../models/post");
const Featured_post_counter = 4;

exports.createPost = async (req, res) => {
    console.log(req.body)
    const { title, content, meta, slug, tags, author, featured } = req.body;
    const { file } = req;
    const isAlreadyExits = await Post.findOne({ slug });

    if (isAlreadyExits) {
        return res.status(401).json({
            error: "Duplicate Slug Found"
        })
    }

    const newBlog = new Post({ title, content, meta, slug, tags, author });

    if (file) {
        const { secure_url: url, public_id } = await cloudinary.uploader.upload(file.path);
        newBlog.thumbnail = { url, public_id }
    }


    await newBlog.save();
    if (featured) {
        await addToFeaturdPost(newBlog._id);
    }
    res.json({
        post: {
            id: newBlog._id,
            title,
            meta,
            slug,
            thumbnail: newBlog.thumbnail?.url,
            author: newBlog.author,
        }
    });
};

exports.deletePost = async (req, res) => {
    const { postId } = req.params;
    if (!isValidObjectId(postId)) {
        return res.status(401).json({
            error: 'Invalid request'
        });
    }
    const post = await Post.findById(postId);
    if (!post) {
        return res.status(404).json({
            error: "Post not found"
        });
    }
    const public_id = post.thumbnail?.public_id;
    if (public_id) {
        const { result, error } = await cloudinary.uploader.destroy(public_id);
        if (result !== 'ok') {
            return res.status(404).json({
                error: "Could not remove thumbnail"
            });
        }
    }
    await Post.findByIdAndDelete(postId);
    await removeFromFeaturePost(postId);
    res.json({
        message: "Post removed successfully"
    });


};

exports.updatePost = async (req, res) => {
    const { title, content, meta, slug, tags, author, featured } = req.body;
    const { file } = req;
    const { postId } = req.params;
    if (!isValidObjectId(postId)) {
        return res.status(401).json({
            error: 'Invalid request'
        });
    }
    const post = await Post.findById(postId);
    if (!post) {
        return res.status(404).json({
            error: "Post not found"
        });
    }

    const public_id = post.thumbnail?.public_id;
    if (public_id && file) {
        const { result } = await cloudinary.uploader.destroy(public_id);
        if (result !== 'ok') {
            return res.status(404).json({
                error: "Could not remove thumbnail"
            });
        }
    }

    if (file) {
        const { secure_url: url, public_id } = await cloudinary.uploader.upload(file.path);
        post.thumbnail = { url, public_id }
    }
    post.title = title;
    post.content = content;
    post.meta = meta;
    post.slug = slug;
    post.tags = tags;
    post.author = author;

    if (featured) {
        await addToFeaturdPost(post._id);
    } else {
        await removeFromFeaturePost(post._id);
    }
    await post.save();
    res.json({
        post: {
            id: post._id,
            title,
            meta,
            content,
            featured,
            slug,
            tags,
            thumbnail: post.thumbnail?.url,
            author,
        }
    });
}


exports.getSinglePost = async (req, res) => {
    const { postId } = req.params;
    if (!isValidObjectId(postId)) {
        return res.status(401).json({
            error: 'Invalid request'
        });
    }
    const post = await Post.findById(postId);
    if (!post) {
        return res.status(404).json({
            error: "Post not found"
        });
    }

    const featured = await isFeaturedPost(post._id);

    const { title, content, meta, slug, tags, author, createdAt } = post;

    res.json({
        post: {
            id: post._id,
            title,
            content,
            meta,
            slug,
            tags,
            featured,
            thumbnail: post.thumbnail?.url,
            author,
            createdAt
        }
    });


}

exports.getPostBySlug = async (req, res) => {
    const { slug } = req.params;
    if (!slug) {
        return res.status(401).json({
            error: 'Invalid request'
        });
    }
    const post = await Post.findOne({ slug });
    if (!post) {
        return res.status(404).json({
            error: "Post not found"
        });
    }

    const featured = await isFeaturedPost(post._id);

    const { title, content, meta, tags, author, createdAt } = post;

    res.json({
        post: {
            id: post._id,
            title,
            content,
            meta,
            slug,
            tags,
            featured,
            thumbnail: post.thumbnail?.url,
            author,
            createdAt
        }
    });


}

exports.getFeaturedPost = async (req, res) => {
    const featuredPosts = await FeaturedPost.find({})
        .sort({ createdAt: -1 })
        .limit(Featured_post_counter)
        .populate("post");
    res.json({
        posts: featuredPosts.map(({ post }) => ({
            id: post._id,
            title: post.title,
            meta: post.meta,
            slug: post.slug,
            thumbnail: post.thumbnail?.url,
            author: post.author,
        }))
    });

}

exports.getPosts = async (req, res) => {
    const { pageNo = 0, limit = 10 } = req.query;

    const posts = await Post.find({})
        .sort({ createdAt: -1 })
        .skip(parseInt(pageNo) * parseInt(limit))
        .limit(parseInt(limit));

    res.json({
        posts: posts.map((post) => ({
            id: post._id,
            title: post.title,
            meta: post.meta,
            slug: post.slug,
            thumbnail: post.thumbnail?.url,
            author: post.author,
        }))
    });

}


exports.searchPost = async (req, res) => {
    const { title } = req.query;
    if (!title.trim()) {
        return res.status(401).json({
            error: "Search field is empty"
        });
    }

    const posts = await Post.find({
        title: {
            $regex: title,
            $options: "i"
        }
    }).sort({ createdAt: -1 });

    res.json({
        posts: posts.map((post) => ({
            id: post._id,
            title: post.title,
            meta: post.meta,
            slug: post.slug,
            thumbnail: post.thumbnail?.url,
            author: post.author,
        }))
    });



}

exports.relatedPosts = async (req, res) => {
    const { slug } = req.params;
    if (!slug) {
        return res.status(401).json({
            error: 'Invalid request'
        });
    }
    const post = await Post.findOne({ slug });
    if (!post) {
        return res.status(404).json({
            error: "Post not found"
        });
    }
    const relatedPosts = await Post.find({
        tags: {
            $in: [...post.tags]
        },
        _id: {
            $ne: post._id
        },
    })
    .sort({ createdAt: -1 }).limit(5);

    res.json({
        posts: relatedPosts.map((post) => ({
            id: post._id,
            title: post.title,
            meta: post.meta,
            slug: post.slug,
            thumbnail: post.thumbnail?.url,
            author: post.author,
        }))
    });

}

exports.uploadImage = async (req, res) => {
    const {file} = req;

    if(!file){
        return res.status(401).json({
            error: "Immage file is missing"
        });
    }

    if (file) {
        const { secure_url: url } = await cloudinary.uploader.upload(file.path);
        res.status(201).json({
            image: url
        })
    }

}






const addToFeaturdPost = async (postId) => {
    const isAlreadyExits = await FeaturedPost.findOne({ post: postId });

    if (isAlreadyExits) {
        return;
    }


    const featuredPost = new FeaturedPost({ post: postId });
    await featuredPost.save();
    const featuredPosts = await FeaturedPost.find({}).sort({ createdAt: -1 });
    featuredPosts.forEach(async (post, index) => {
        if (index >= Featured_post_counter) {
            await FeaturedPost.findByIdAndDelete(post._id);
        }
    })

}

const removeFromFeaturePost = async (postId) => {
    await FeaturedPost.findOneAndDelete({
        post: postId
    })
}

const isFeaturedPost = async (postId) => {
    const post = await FeaturedPost.findOne({
        post: postId
    });
    return post ? true : false;
}

