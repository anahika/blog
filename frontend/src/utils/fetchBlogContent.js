export const fetchBlogContents = async (blogs) => {
  const fetchPromises = blogs.map(async (post) => {
    const response = await fetch(post.blogText);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const text = await response.text();
    return { id: post.id, text }; // Return the post id with the fetched text
  });

  try {
    const contents = await Promise.all(fetchPromises);
    return contents.reduce((acc, curr) => {
      acc[curr.id] = curr.text;
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching blog contents:", error);
    return {};
  }
};
