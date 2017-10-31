const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');
const juice = require('juice');
const keys = require('../config/keys');

const transport = nodemailer.createTransport({
	host: keys.mailHost,
	port: keys.mailPort,
	auth: {
		user: keys.mailUser,
		pass: keys.mailPass,
	}
});

const generateHTML = (filename, options = {}) => {
	// options is used as the local object. So is given to the pug template
	const pugged = pug.renderFile(`${__dirname}/${filename}.pug`, options)
	const inlined = juice(pugged);
	return inlined;
}

exports.send = async (options) => {

	const html = generateHTML(options.filename, options);
	const text = htmlToText.fromString(html);

	const mailOptions = {
		from: '140 Canvas <team@140canvas.com>', // sender address
		to: options.emailTo, // list of receivers
		subject: 'Order Confirmed', // Subject line
		html, // html body
		text, // plain text body
	};
	const sendMail = promisify(transport.sendMail, transport);
	return sendMail(mailOptions);
}