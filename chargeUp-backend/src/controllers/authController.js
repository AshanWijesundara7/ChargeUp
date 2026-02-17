// backend/src/routes/authRoutes.js
// backend/src/controllers/authController.js
const User = require("../models/User"); // Import the Blueprint we just made

// This function handles the "Sign Up" logic
exports.registerUser = async (req, res) => {
  try {
    // 1. The Frontend sends us Name, Email, and Password
    const { name, email, password } = req.body;

    // 2. Check if this user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3. Create a new user using our Blueprint
    user = new User({
      name,
      email,
      password,
    });

    // 4. Save it to the database!
    await user.save();

    // 5. Tell the frontend "Success!"
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
