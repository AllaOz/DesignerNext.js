import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, agree } = req.body;

    // Validate required fields
    if (!name || !email || !agree) {
        return res.status(400).json({
            message: 'Name, email, and privacy policy agreement are required'
        });
    }

    try {
        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'bureausoulconcept@gmail.com',
            subject: `New Contact Form Submission - Bureau Soul Concept`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #6A8A95; border-bottom: 2px solid #6A8A95; padding-bottom: 10px;">New Contact Form Submission</h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                        <p>Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })}</p>
                        <p>Privacy Policy: Agreed ✓</p>
                    </div>
                </div>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })}
Privacy Policy: Agreed
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        
        res.status(200).json({
            message: 'Form submitted successfully!',
            data: { name, email, phone, submittedAt: new Date().toISOString() }
        });

    } catch (error) {
        console.error('Error processing form:', error);
        res.status(500).json({
            message: 'Failed to process form submission',
            error: error.message
        });
    }
}
