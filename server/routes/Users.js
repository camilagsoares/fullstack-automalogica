const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')

router.post(("/"), async (req,res) => {
    const {username, password} = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        })
        res.json("Sucesso!!")
    })
});

router.post('/login', async (req,res) => {
    const { username, password } = req.body

    const user = await Users.findOne({ where: {username: username }})

    if (!user) res.json({error: "Usuário não existe"})

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({error: "O nome de usuário e a senha não combinam"})
        res.json("Você conseguiu logar")
    })
})

module.exports = router