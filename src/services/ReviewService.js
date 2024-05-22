const Review = require("../models/ReviewProduct");

const createReview = (newReview) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { name, email, comment } = newReview;
            const createdReview = await Review.create({
                name,
                email,
                comment,
                // product: product
            });
            if (createdReview) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdReview
                });
            } else {
                reject(new Error('Failed to create review'));
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createReview
};
