const {verify} = require('jsonwebtoken')

const validateToken = (req,res,net) => {
    const accessToken = req.header("accessToken")

    if (!accessToken) return res.json({error: "Usuário não está logado"})

    try {
        const validToken = verify(accessToken, "segredoimportante")

    if(validToken) {
        return next()
    }

    } catch (err) {
        return res.json({error: err})
    }
}

module.exports = {validateToken}