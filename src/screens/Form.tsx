import React from "react";
import { useForm } from "react-hook-form";

interface Resource {
  id: string;
  name: string;
  description: string;
  type: "video" | "article";
  resourceUrl: string;
  thumbnail: string;
}

const postData = async (url: string, data: any) => {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  console.log(data);
  return await response;
};

export const Form = () => {
  const { register, handleSubmit, errors } = useForm<Resource>();

  const onSubmit = (data: Resource) => {
      postData("http://localhost:5000/resources/", data)
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <input
          name="id"
          placeholder="id"
          defaultValue=""
          ref={register({ required: true })}
        />
        {errors.id && <span>This field is required</span>}
        <input
          name="name"
          placeholder="name"
          ref={register({ required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <input
          name="description"
          placeholder="description"
          ref={register({ required: true })}
        />
        {errors.description && <span>This field is required</span>}
        <input
          name="type"
          placeholder="type"
          ref={register({ required: true })}
        />
        {errors.type && (
          <span>This field is required, either Video or Article</span>
        )}
        <input
          name="resourceUrl"
          placeholder="resourceUrl"
          ref={register({ required: true })}
        />
        {errors.resourceUrl && <span>This field is required</span>}
        <input
          name="thumbnail"
          placeholder="thumbnail"
          ref={register({ required: true })}
        />
        {errors.thumbnail && <span>This field is required</span>}
        <input type="submit" />
      </ul>
    </form>
  );
};
