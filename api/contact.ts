import { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

interface RequestBody {
    name: string
    email: string
    message: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

async function handler(req: VercelRequest, res: VercelResponse): Promise<VercelResponse> {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        })
    }

    const { name, email, message } = (req.body || {}) as RequestBody

    if (!name || !email || !message) {
        return res.status(400).json({
            error: 'Missing required fields'
        })
    }

    try {
        const { error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.EMAIL_ADDRESS,
            subject: `New message from ${name}`,
            text: `From: ${name} (${email})\n\n${message}`,
            replyTo: email
        })

        if (error) throw new Error(error.message)

        return res.status(200).json({
            success: true
        })
    } catch (err) {
        console.error(err)

        return res.status(500).json({
            error: 'Failed to send email'
        })
    }
}

export default handler