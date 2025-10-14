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
        console.log('Environment variables:', {
            EMAIL_USER: process.env.EMAIL_USER,
            EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not set'
        });

        // For now, let's just simulate email sending without actually sending
        // This will help us test if the form submission works
        console.log('Form data received:', { name, email, phone, agree });

        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Return success without actually sending email for now
        res.status(200).json({
            message: 'Form submitted successfully! (Email sending temporarily disabled for testing)',
            data: { name, email, phone, submittedAt: new Date().toISOString() }
        });

        // Comment out the actual email sending for now
        /*
        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER || 'your-email@gmail.com',
            pass: process.env.EMAIL_PASS || 'your-app-password'
          }
        });
    
        // Email content
        const mailOptions = {
          from: process.env.EMAIL_USER || 'your-email@gmail.com',
          to: 'alla.s.bobrova@gmail.com',
          subject: 'New Contact Form Submission - Soul Decore',
          html: `...email template...`,
          text: `...text template...`
        };
    
        // Send email
        await transporter.sendMail(mailOptions);
        */

    } catch (error) {
        console.error('Error processing form:', error);
        res.status(500).json({
            message: 'Failed to process form submission',
            error: error.message
        });
    }
}
