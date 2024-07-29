// pages/api/send-email.js

import nodemailer from 'nodemailer';

// Helper function to fetch file from Strapi
async function fetchFileFromStrapi(fileId) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/upload/files/${fileId}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        },
    });
    console.log(`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/upload/files/${fileId}`);

    if (!res.ok) console.log('Failed to fetch file from Strapi');
    return res.json();
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { formData,fileId } = req.body;
        const file = await fetchFileFromStrapi(fileId);
        console.log(file)

        const transporter = nodemailer.createTransport({
            service: 'metaagrow', // or your email service provider
            host: 'mail.metaagrow.com',
            port: 465, // or 465 for SSL
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'hr@csmlindia.com',
            subject: `Job Application - ${formData.data.attributes.Name} - ${formData.data.attributes.Position}`,
            html: `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .header {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .footer {
            padding: 10px;
            text-align: center;
            font-size: 12px;
            color: #777;
        }
        .section {
            margin-bottom: 20px;
        }
        .section h2 {
            font-size: 18px;
            margin-bottom: 10px;
        }
        .section p {
            margin: 0;
            padding: 0;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Job Application</h1>
        </div>
        <div class="content">
            <p>Dear HR Team,</p>
            <p>Please find below the details of a new job application submitted via the company website.</p>

            <div class="section">
                <h2>Candidate Information:</h2>
                <p><strong>Name:</strong> ${formData.data.attributes.Name}</p>
                <p><strong>Email:</strong> ${formData.data.attributes.Email}</p>
                <p><strong>Phone Number:</strong> ${formData.data.attributes.PhoneNumber}</p>
                <p><strong>Position Applied For:</strong> ${formData.data.attributes.Position}</p>
            </div>

            <p>Thank you for your attention.</p>
            <p>Best regards,</p>
            <p>CSML GROUP</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 CSML GROUP. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
            `,
            attachments: [
                {
                    filename: file.name,
                    path: `${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${file.url}`,
                    contentType: file.mime,
                },
            ],
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: formData });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
