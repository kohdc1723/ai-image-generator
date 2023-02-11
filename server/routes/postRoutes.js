import express from "express";
import Post from "../mongodb/models/post.js";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

const router = express.Router();

// get all posts
router.route("/").get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

// create a post
router.route("/").post(async (req, res) => {
    try {
        // get information from Create page
        const { name, prompt, photo } = req.body;
        // upload photo to cloudinary and return url
        const photoUrl = await cloudinary.uploader.upload(photo);
        // create new Post instance based on the photo url
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url
        });
        // send response to client with post information
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        // send response to client with error message
        res.status(500).json({ success: false, message: error });
    }
});

export default router;