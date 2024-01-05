import { EmailTemplate } from "@/components/EmailTemplate.jsx";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
	try {
		const { Name, Email, CompanyName, PhoneNumber, Inquiry, Comments } =
			JSON.parse(req.body);
		// const name = "developer name";
		// const email = "developer email";

		const data = await resend.emails.send({
			from: "Ting Base Template <onboarding@resend.dev>",
			to: "developer@ting.in",
			subject: "New submission to your contact form!",
			// html: "<h1>hello</h1>",
			react: EmailTemplate({
				Name,
				Email,
				CompanyName,
				PhoneNumber,
				Inquiry,
				Comments,
			}),
		});

		res.status(200).json(data);
	} catch (error) {
		res.status(400).json(error);
	}
};
