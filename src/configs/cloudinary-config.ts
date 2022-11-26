import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "du0djn7jo",
  api_key: "584923551342849",
  api_secret: "dSZpcpfDCYoscGqaX489w-MXcf4",
  secure: true,
});
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
//   secure: true,
// });

console.log("process.env.CLOUDINARY_API_KEY", process.env.CLOUDINARY_API_KEY);

export default cloudinary;
