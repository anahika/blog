import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Add(props) {
  const navigate = useNavigate();
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
    navigate("/post");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      blogCategory: Yup.string().required("Required"),
      blogTitle: Yup.string().required("Required"),
      slug: Yup.string().required("Required"),
      postedOn: Yup.string().required("Required"),
      author: Yup.string().required("Required"),
      blogText: Yup.string().required("Required"),
      blogImage: Yup.string().required("Required"),
    }),
    onSubmit,
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="d-flex flex-column align-items-start bg-light mt-3 m-auto p-4"
        style={{ width: "70%" }}
      >
        <div className="alert alert-warning align-self-center" role="alert">
          All the fields are mandatory! 😇
        </div>
        <label className="label text-secondary mt-4 mb-1 fw-bold">
          Blog Category
        </label>
        <input
          type="text"
          name="blogCategory"
          id="blogCategory"
          placeholder="Fashion, Simple, Sports Update"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.blogCategory}
          onBlur={formik.handleBlur}
        />
        {formik.touched.blogCategory && formik.errors.blogCategory ? (
          <div className="text-danger"> {formik.errors.blogCategory}</div>
        ) : null}
        <label className="label text-secondary mt-4 mb-1 fw-bold">
          Blog Title
        </label>
        <input
          type="text"
          name="blogTitle"
          id="blogTitle"
          className="form-control "
          onChange={formik.handleChange}
          value={formik.values.blogTitle}
          onBlur={formik.handleBlur}
        />
        {formik.touched.blogTitle && formik.errors.blogTitle ? (
          <div className="text-danger"> {formik.errors.blogTitle}</div>
        ) : null}
        <label className="label text-secondary mt-4 mb-1 fw-bold">Slug</label>
        <input
          type="array"
          name="slug"
          id="slug"
          placeholder="beautiful-blog"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.slug}
          onBlur={formik.handleBlur}
        />
        {formik.touched.slug && formik.errors.slug ? (
          <div className="text-danger"> {formik.errors.slug}</div>
        ) : null}
        <label className="label text-secondary mt-4 mb-1 fw-bold">Date</label>
        <input
          type="text"
          name="postedOn"
          id="postedOn"
          placeholder="September 09,2021"
          className="form-control "
          onChange={formik.handleChange}
          value={formik.values.postedOn}
          onBlur={formik.handleBlur}
        />
        {formik.touched.postedOn && formik.errors.postedOn ? (
          <div className="text-danger"> {formik.errors.postedOn}</div>
        ) : null}
        <label className="label text-secondary mt-4 mb-1 fw-bold">Author</label>
        <input
          type="array"
          name="author"
          id="author"
          className="form-control "
          onChange={formik.handleChange}
          value={formik.values.author}
          onBlur={formik.handleBlur}
        />
        {formik.touched.author && formik.errors.author ? (
          <div className="text-danger"> {formik.errors.author}</div>
        ) : null}
        <label className="label text-secondary mt-4 mb-1 fw-bold">
          Blog Text
        </label>
        <input
          type="array"
          name="blogText"
          id="blogText"
          placeholder="Write your content here!"
          className="form-control "
          onChange={formik.handleChange}
          value={formik.values.blogText}
          onBlur={formik.handleBlur}
        />
        {formik.touched.blogText && formik.errors.blogText ? (
          <div className="text-danger"> {formik.errors.blogText}</div>
        ) : null}
        <label className="label text-secondary mt-4 mb-1 fw-bold">
          Blog Image Link
        </label>
        <input
          type="text"
          name="blogImage"
          id="blogImage"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.blogImage}
          onBlur={formik.handleBlur}
        />
        {formik.touched.blogImage && formik.errors.blogImage ? (
          <div className="text-danger"> {formik.errors.blogImage}</div>
        ) : null}
        <button
          type="Submit"
          className="btn btn-success align-self-center mt-4"
        >
          Add
        </button>
      </form>
    </>
  );
}

export default Add;
