const sgMail = require('@sendgrid/mail')

module.exports = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, messageType, message } = req.body

  const msg = {
    to: 'dev.hashcodes@gmail.com',
    from: email,
    subject: 'New message from ' + name,
    text: `You have received a new message form Portfolio. 

Here are the details:

Name: ${name}
Email: ${email}
Message Type: ${messageType}
Message:
${message}`
  }

  try {
    await sgMail.send(msg)
    res.json({ success: true })
  } catch (error) {
    console.error(error)
    res.json({ success: false, error: 'Failed to send email' })
  }
}
