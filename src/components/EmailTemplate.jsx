// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //

// IMAGES //

// DATA //

/** EmailTemplate Component */
export const EmailTemplate = ({ Name, Email, CompanyName, PhoneNumber, Inquiry, Comments }) => {
	return (
		<div>
			<p>Name: {Name} </p>
			<p>Company Name: {CompanyName} </p>
			<p>Email: {Email} </p>
			<p>Phone Number: {PhoneNumber} </p>
			<p>Inquiry: {Inquiry} </p>
			<p>Comments: {Comments} </p>
		</div>
	);
};
