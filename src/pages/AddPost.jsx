import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <>
      <div className="py-8 bg-cream ">
        <div className="flex justify-center">
          <h3 className="text-2xl font-bold  bg-coffee text-cream border border-coffee rounded-full p-4">
            Add New Post
          </h3>
        </div>
        <Container>
          <PostForm />
        </Container>
      </div>
    </>
  );
}

export default AddPost;
