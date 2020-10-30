import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler( async (req, res, next) => {
    let token

    if ( req.headers.authorization && req.headers.authorization.startsWith('Bearer') ) {
        try {
            token = req.headers.authorization.split(' ')[1] // which will be the token

            const decoded = jwt.verify(token, 'secretkey')

            // since we used userId to generate the token, decoding it will give back the userID
            // add this user to the user property of request
            req.user = await User.findById(decoded.userId)

            next()
        }

        catch (error) {
            res.status(401)
            throw new Error("Error - Not authorized, Token Failed")
        }

    }   


    if (!token) {
        res.status(401)
        throw new Error("Not authorized")
    }
   

} )

export default protect