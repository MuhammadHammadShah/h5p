// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload H5P File (optional - agar upload bhi karwana ho)
app.post("/upload-h5p", async (req, res) => {
  try {
    // Assume you are sending file as base64 or local file path
    const filePath = req.body.filePath; // for simplicity

    const uploadResponse = await cloudinary.uploader.upload(filePath, {
      resource_type: "raw",
      folder: "h5p_files",
    });

    res.json({
      message: "H5P file uploaded successfully!",
      public_id: uploadResponse.public_id,
      url: uploadResponse.secure_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload Failed" });
  }
});

// Fetch H5P File URL
app.get("/get-h5p/:publicId", async (req, res) => {
  const { publicId } = req.params;
  try {
    const url = cloudinary.url(publicId, {
      resource_type: "raw",
      secure: true,
    });

    res.json({ url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching H5P file" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
