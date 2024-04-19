import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src= './assets/pic 1.jpg'
              alt=""
            />
            <span className="postUsername">
             Camelia De Soyza
            </span>
            <span className="postDate">5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey it is my first post</span>
          <img className="postImg" src="assets/post 1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.jpg"  alt="" />
            <img className="likeIcon" src="assets/heart.jpg" alt="" />
            <img className="likeIcon" src="assets/haha.jpg"  alt="" />
            <img className="likeIcon" src="assets/angry.jpg" alt="" />
            <img className="likeIcon" src="assets/sad.jpg" alt="" />
            <span className="postLikeCounter">50 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">10 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}