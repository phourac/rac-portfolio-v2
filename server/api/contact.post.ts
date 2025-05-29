// server/api/contact.post.ts
export default defineEventHandler(async (event) => {
  try {
    // Read the request body
    const body = await readBody(event)

    // Validate required fields
    const { name, email, message, phone } = body

    if (!name || !email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Name and email are required'
      })
    }

    // Format the message for Telegram
    const messageText = `
📝 New Form Submission:
👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message || 'No message provided'}
📞 Phone: ${phone || 'Not provided'}
    `.trim()

    // Get environment variables (you should move these to .env)
    const BOT_TOKEN =
      process.env.TELEGRAM_BOT_TOKEN ||
      '7795994378:AAFWvl-zqVRmxZgoXyczlcTNRW1TrHdbRYs'
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '670761636'

    // Send to Telegram
    const telegramResponse = await $fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          chat_id: CHAT_ID,
          text: messageText,
          parse_mode: 'HTML'
        }
      }
    )

    // Return success response
    return {
      success: true,
      message: 'Message sent successfully',
      data: telegramResponse
    }
  } catch (error) {
    console.error('API Error:', error)

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send message'
    })
  }
})
