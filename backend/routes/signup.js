// const express = require("express");
// const router = express.Router();

// const Signup = require("../models/signup");

// // Sign-up route
// router.post('/api/signup', async (req, res) => {
//     const { userId, password, studentId, name, surname } = req.body;
  
//     try {
//       // Create a new user
//       const newUser = new User({
//         userId,
//         password,
//         studentId,
//         name,
//         surname,
//       });
  
//       // Save the user to the database
//       await newUser.save();
  
//       res.status(200).json({ message: 'Sign-up successful' });
//     } catch (error) {
//       res.status(500).json({ error: 'Sign-up failed' });
//     }
//   });
  
  
//   router.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });


const express = require("express");
const router = express.Router();
const Signup = require("../models/signup");

// Sign-up route
router.post('/api/signup', async (req, res) => {
  const { userId, password, studentId, name, surname } = req.body;

  try {
    // Create a new signup
    const newSignup = new Signup({
      userId,
      password,
      studentId,
      name,
      surname,
    });

    // Save the signup to the database
    await newSignup.save();
    res.status(200).json({ message: 'Sign-up successful' });
  } catch (error) {
    console.error('Sign-up failed:', error);
    res.status(500).json({ error: 'Sign-up failed', message: error.message });
  }
});

module.exports = router;