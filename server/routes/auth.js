const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ 
                message: 'Please provide username, email and password' 
            });
        }

        // Check if user exists
        const existingUser = await User.findOne({
            $or: [
                { email: email.toLowerCase().trim() },
                { username: username.trim() }
            ]
        });

        if (existingUser) {
            return res.status(400).json({ 
                message: existingUser.email === email.toLowerCase().trim() 
                    ? 'Email already registered' 
                    : 'Username already taken'
            });
        }

        // Create new user (password will be hashed by the pre-save hook)
        const newUser = new User({
            username: username.trim(),
            email: email.toLowerCase().trim(),
            password: password // Will be hashed automatically
        });

        await newUser.save();
        console.log('User registered:', { email: newUser.email });

        res.status(201).json({ 
            message: 'Registration successful! Please login with your credentials.'
        });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ 
            message: 'An error occurred during registration'
        });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ 
                message: 'Please provide both email and password' 
            });
        }

        // Find user by email
        const user = await User.findOne({ 
            email: email.toLowerCase().trim() 
        });

        if (!user) {
            console.log('Login failed: User not found -', email);
            return res.status(401).json({ 
                message: 'Invalid email or password' 
            });
        }

        // Verify password using the schema method
        const isValidPassword = await user.verifyPassword(password);

        console.log('Login attempt:', { 
            email, 
            passwordValid: isValidPassword 
        });

        if (!isValidPassword) {
            return res.status(401).json({ 
                message: 'Invalid email or password' 
            });
        }

        // Create token
        const token = jwt.sign(
            { 
                id: user._id,
                email: user.email,
                username: user.username
            },
            'your_jwt_secret',
            { expiresIn: '24h' }
        );

        // Send success response
        res.status(200).json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ 
            message: 'An error occurred during login' 
        });
    }
});

module.exports = router;