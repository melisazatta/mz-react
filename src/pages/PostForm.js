import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [loading, setLoading] = useState(false)

  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("body", body);

    const res = await axios.post("http://localhost:3030/posts/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress(progressEvent) {
        const { loaded, total } = progressEvent;
        const percent = parseInt((loaded * 100) / total);
        setUploadPercentage(percent);
      },
    });
    console.log(res);
    // navigate('/')
  };

  return (
    <div className="my-5 col-md-4 offset-md-4">
        {loading && (
        <div className="progress rounded-0">
        <div
          className="progress-bar progress-bar-striped bg-secondary" role="progressbar" style={{width: `${uploadPercentage}%`}}
          ></div>
      </div>
      )}      

      <div className="card bg-dark text-light rounded-0 p-4">

        <div className="card-body">
          <h3>Upload an Image</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control bg-dark text-light my-3 rounded-0"
              placeholder="Write a title for your photo"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea rows={10}
              type="text"
              className="form-control bg-dark text-light my-3 rounded-0"
              placeholder="Write a description for your photo"
              onChange={(e) => setBody(e.target.value)}
            />
            <input
              type="file"
              className="form-control bg-dark text-light rounded-0"
              onChange={handleChange}
            />
            <div className="my-3">
              <button className="btn btn-secondary rounded-0 w-100">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
