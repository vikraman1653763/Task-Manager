const express = require("express")
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require("../controllers/authController")
const { protect } = require("../middlewares/authMiddleware")

const router =express.Router()

router.post('/register', registerUser)
router.post("/login",loginUser)
router.get("/profile",protect,getUserProfile)
router.put("/profile",protect,updateUserProfile)

router.post("/upload-image", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl }); 
  } catch (err) {
    res.status(500).json({ message: "Image upload failed", error: err.message });
  }
});


module.exports = router;