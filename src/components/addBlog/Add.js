import React from "react";
import { useFormik } from "formik";

function Add(props) {
  const initialValues = {
    id: Number(new Date()),
    blogCategory: "",
    blogTitle: "",
    slug: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  };

  const onSubmit = (e, { resetForm }) => {
    props.startAddingBlog(e);
    resetForm({ e: "" });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex flex-column align-items-start bg-light mt-3 m-auto p-4"
        style={{ width: "70%" }}
      >
        <label className="label text-danger mb-2">Blog Category</label>
        <input
          type="text"
          name="blogCategory"
          id="blogCategory"
          placeholder="Fashion, Simple, Sports Update"
          className="form-control mb-3"
          onChange={formik.handleChange}
          value={formik.values.blogCategory}
          onBlur={formik.handleBlur}
        />
        <label className="label text-danger mb-2">Blog Title</label>
        <input
          type="text"
          name="blogTitle"
          id="blogTitle"
          className="form-control mb-3"
          onChange={formik.handleChange}
          value={formik.values.blogTitle}
          onBlur={formik.handleBlur}
        />
        <label className="label text-danger mb-2">Slug</label>
        <input
          type="array"
          name="slug"
          id="slug"
          placeholder="beautiful-blog"
          className="form-control mb-3"
          onChange={formik.handleChange}
          value={formik.values.slug}
          onBlur={formik.handleBlur}
        />

        <label className="label text-danger mb-2">Date</label>
        <input
          type="text"
          name="postedOn"
          id="postedOn"
          placeholder="September 09,2021"
          className="form-control mb-3"
          onChange={formik.handleChange}
          value={formik.values.postedOn}
          onBlur={formik.handleBlur}
        />
        <label className="label text-danger mb-2">Author</label>
        <input
          type="array"
          name="author"
          id="author"
          className="form-control mb-3"
          onChange={formik.handleChange}
          value={formik.values.author}
          onBlur={formik.handleBlur}
        />
        <label className="label text-danger mb-2">Blog Text</label>
        <input
          type="array"
          name="blogText"
          id="blogText"
          placeholder="Write your content here!"
          className="form-control mb-3"
          onChange={formik.handleChange}
          value={formik.values.blogText}
          onBlur={formik.handleBlur}
        />
        <label className="label text-danger mb-2">BlogImage Link</label>
        <input
          type="text"
          name="blogImage"
          id="blogImage"
          className="form-control mb-3"
          onChange={formik.handleChange}
          value={formik.values.blogImage}
          onBlur={formik.handleBlur}
        />

        <button type="Submit" className="btn btn-success align-self-center">
          Add
        </button>
      </form>
    </>
  );
}

export default Add;
