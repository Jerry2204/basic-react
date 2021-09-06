import React from "react";

export default function profile({ name, kelas }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{kelas}</p>
    </div>
  );
}
