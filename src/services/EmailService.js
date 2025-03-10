const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config()
var inlineBase64 = require('nodemailer-plugin-inline-base64');

const sendEmailCreateOrder = async (email, orderItems) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_ACCOUNT, // generated ethereal user
            pass: process.env.MAIL_PASSWORD, // generated ethereal password
        },
    });
    transporter.use('compile', inlineBase64({ cidPrefix: 'somePrefix_' }));

    let listItem = '';
    const attachImage = []
    orderItems.forEach((order) => {
        listItem +=
            `<div>
            +<b>${order.name}</b> với số lượng: <b>${order.amount}</b> và giá là: <b>${order.price} VND</b>
            
         </div>`

        attachImage.push({ path: order.image })
    })
    // console.log('totalprice', order)

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.MAIL_ACCOUNT, // sender address
        to: email, // list of receivers
        subject: "Hóa đơn từ shop Hoàng Minh mobile", // Subject line
        text: "Hello world?", // plain text body
        html: `
        <div><b>Bạn đã đặt hàng thành công tại shop Hoàng minh mobile</b></div> 
        <div>Bạn đã đặt (những) sản phẩm sau: </div>
        ${listItem}
         <div>Bên dưới là hình ảnh của sản phẩm</div>
        `,
        attachments: attachImage,
    });
}

module.exports = {
    sendEmailCreateOrder
}