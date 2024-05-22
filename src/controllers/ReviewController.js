
const JwtService = require('../services/JwtService')
const ReviewService = require('../services/ReviewService')


const createReview = async (req, res) => {
    try {
        const { name, email, comment } = req.body
        // const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        // const isCheckEmail = reg.test(email)
        if (!email || !name || !comment) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        // } else if (!isCheckEmail) {
        //     return res.status(200).json({
        //         status: 'ERR',
        //         message: 'The input is email'
        //     })
        // }
        const response = await ReviewService.createReview(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createReview
} 