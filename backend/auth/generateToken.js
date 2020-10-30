import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
    return jwt.sign( {userId}, 'secretkey', { expiresIn : '10d' })
} 

export default generateToken