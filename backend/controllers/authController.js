import User from "../models/user.js";
import { hashPassword,comparePassword } from "../helpers/auth.js";

export const test = (req, res) => {
  res.json("test is working");
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    // Check if name is entered
    if (!name) {
      return res.json({ error: "Name is required" });
    }
    //check if password is code
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and shold be at least 6 characters long",
      });
    }

    //check if email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email already exists" });
    }


    const hashedPassword = await hashPassword(password);
    //create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json({ user });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Internal server error" });

  }
};
