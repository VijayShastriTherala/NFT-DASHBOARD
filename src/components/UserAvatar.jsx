import React from "react";
import { profileImg } from "../assets/images";

export default function UserAvatar({
  src = profileImg,
  size = "w-9 h-9",
  className = "",
}) {
  return (
    <img
      src={src}
      alt="User"
      className={`${size} rounded-full object-cover border border-white/10 ${className}`.trim()}
    />
  );
}