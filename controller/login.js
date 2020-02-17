const express = require('express');
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';

const login = (req, res) => {
    const { email, password } = req.body;

    console.log(`email: ${email},password: ${password}`);

    req.app.get('db').profile.findOne({ email, password }).then(profile => {

        if (!profile) return res.status(404).send('Not Found Buddy');
        // you could construct a JWT or a session here instead of
        // returning the user object
        // Issue token
        const payload = { profile_id: profile.user_id };
        const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
        });
        res.send(token);
    });
};

const checkToken = (req, res) => {
    res.sendStatus(200);
};

module.exports = {
    login,
    checkToken
};