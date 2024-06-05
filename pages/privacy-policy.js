// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Loader from "@/components/Loader";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Privacy-Policy.module.scss";

//	IMAGES	//

/** Contact Page */
export default function PrivacyPolicy() {

	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.PrivacyPolicy}`}>
				
				<section className={`${styles.privacy_policy_section} dot_animation_box ptb_80`}>
					<div className="container">
            <h1 className="heading_text_55 color_white text_center pb_40 toTop" data-scroll>
              Privacy Policy 
						</h1>
						<div className={`${styles.privacy_policy_content}`}>
							<p className="paraTxt color_white pb_20 toTop" data-scroll>This Privacy Policy describes how your personal information is collected, used, and shared when you visit <a className="color_white" href="https://csmlindia.com">https://csmlindia.com.</a></p>

							<p className="paraTxt color_white pb_20 toTop" data-scroll>Welcome to <a className="color_white" href="https://csmlindia.com">https://csmlindia.com</a> ("Service" or "Site” or “Website”), which is owned and operated by Complete Sports and Management India Pvt Ltd., a company incorporated under the provisions of the Companies Act, 1956, and having its its Corporate office at Chintamani Plaza, 423, B Wing, Andheri - Kurla Rd, Chakala, Andheri East, Mumbai, Maharashtra 400099 India. (Hereinafter referred to as "CSML", "we", or "us"). We can be contacted at <a href="mailto:sales@csmlindia.com">sales@csmlindia.com</a></p>

							<p className="paraTxt color_white pb_20 toTop" data-scroll>This Privacy Policy (the “Policy”) describes the policy regarding information that we gather from visitors, users, and others who access or use the Website (“Users,” “you,” accordingly “your” shall be interpreted as referring to the User), how we use and disclose such information, and the steps we take to protect such information. By browsing the Website, you consent to the privacy practices described in this Policy.</p>

							<p className="paraTxt color_white pb_20 toTop" data-scroll>This Policy is incorporated into and is subject to the CSML Terms of Use. When you share information with us, we can make the Services even better to help you connect with people or to make sharing with others quicker and easier. As you use our Services, we want you to be clear about how we’re using information and the ways in which you can protect your privacy. </p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>Purpose of this Policy</h3>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>The purpose of this Policy is to inform you of the means by which we collect and process your personal data, with the strictest respect for your rights.</p>
              <p className="paraTxt color_white pb_10 toTop" data-scroll>Our Privacy Policy explains:</p>
              <p className="paraTxt color_white pb_10 toTop" data-scroll>A.	Information we Collect</p>
              <p className="paraTxt color_white pb_10 toTop" data-scroll>B.	How we use your information.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>C.	How we protect your information</p>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>We’ve tried to keep it as simple as possible, but if you’re not familiar with terms like cookies, IP addresses and browsers, then first read about these key terms. Your privacy matters to us; whether you are new to CSML or a long-time customer, please do take the time to get to know our practices and if you have any questions, contact us.</p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>A. Information we Collect</h3>
              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>1. Personal Information</h3>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>While using the Services, we will ask you to provide us with certain personally identifiable information that can be used to contact or identify you (“Personal Information”). The term "personal data" designates all data that allows an individual to be identified directly or indirectly, which corresponds in particular to your surname, first / given names, postal and e-mail addresses, telephone, mobile or any other contact numbers, country, time zone, the name of your company, your job title and areas of expertise, data from recordings of calls with our teams (for example: the content, dates and time of the calls), as well as any other information you provide to us about yourself. </p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>You may provide us with Personal Information when you register for an account, use the Services, contact customer support, sign up for marketing material, or otherwise communicate with us. Please note that if you choose not to share certain Personal Information with us, or refuse certain permissions, we might not be able to provide you certain parts of the Services.</p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>2. Usage Information</h3>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>We collect information about how you interact with the Services, such as address of a referring website, activity on our website, access dates and times and other system activity. We may collect certain information by automated means using technologies such as cookies, web beacons or pixels. In many cases the information we collect using cookies and other tools is only used in a non-identifiable manner without reference to Personal Information. For example, we may use information we collect to better understand website traffic patterns and to optimize your experience. We track users’ use of the Services, but we do not track users across third party websites. We do not process or respond to web browsers’ “do not track” signals or other similar transmissions that indicate a request to disable online tracking of users who visit or use the Services. yourself. </p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>3. Log Information</h3>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>When you use our Services or view content provided by us, we may automatically collect and store certain information in server logs. This may include:</p>
              <ul className="toTop" data-scroll>
                <li>Details of how you used our Service, such as your search queries;</li>
                <li>Telephony log information like your phone number, time and date of calls, duration of calls, SMS routing information and types of calls;</li>
                <li>Device event information such as crashes, system activity, the date and time of your request and referral URL;</li>
                <li>Cookies that may uniquely identify your browser or your account.</li>
              </ul>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>4.	Local Storage </h3>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>We may collect and store information (including personal information) locally on your device using mechanisms such as browser web storage application data caches.</p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>5.	Third-Party Cookies </h3>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>When you use and visit the Services, we may also use third-party services, such as Google Analytics and Facebook, which use cookies to collect information about you for analytics or advertising purposes. Third parties may also use cookies, web beacons, or other devices to collect information when you use the Services. CSML does not control any cookies or other data collection tools that may be placed on the Services by a third party, and this Policy does not cover the use of such cookies and/or other data collection tools by any third party. We encourage you to read the privacy policies of such third parties to find out more about the information that may be collected by them and the choices you have regarding the collection, use, and sharing of such information. You may be able to “opt out” of the collection and use of information through cookies or other tracking technology by actively managing the settings on your browser or mobile device. We do not honor “Do Not Track” signals from your browser.</p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>B.	How We Use Your Information</h3>
              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>1.	Provide, Maintain, and Improve the Services</h3>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>We may use your information to:</p>
              <ul className="toTop" data-scroll>
                <li>Communicate with you if you contact us directly or sign up for marketing material;</li>
                <li>Perform our obligations under the contract we have entered into with you;</li>
                <li>Provide customer service;</li>
                <li>Send you confirmations, updates, security alerts, and support and administrative messages;</li>
                <li>Detect and prevent fraud;</li>
                <li>Operate, protect, and optimize the Services and your experience, such as by performing analytics and conducting research;</li>
                <li>Troubleshoot and protect against errors;</li>
                <li>Personalize and improve the Services, including to recognize and contact you across multiple devices</li>
                <li>Advertise and market our Services, including delivering interest-based ads, cross-device linking, and analyzing the performance of such activities;</li>
                <li>Develop new features;</li>
                <li>To analyze information in order to offer aggregated anonymised data products to third parties;</li>
                <li>To facilitate the sharing of aggregated and anonymised information with third parties. An example of anonymised information would be the number of times a template is used or location data, which may be used by those third parties to inform judgments about the organization using the software, but not about any individuals whose data is processed using the software;</li>
                <li>To enforce the Privacy Policy and our Terms of Use of our Services and Website;</li>
                <li>To monitor and analyze trends, usage, and activities in connection with our Services and for marketing or advertising purposes or to offer you tailored content;</li>
                <li>From cookies and other technologies, to improve your user experience and the overall quality of our Services;</li>
                <li>To manage your access to and use of the Services available on the Website.</li>
                <li>To carry out customer management operations like follow-ups with customers, etc.;</li>
                <li>To compile a list of registered members, users, customers and prospective customers;</li>
                <li>To issue newsletters, invitations and promotional advertisements. Should you not wish to receive these, we offer you the option to refuse them at the moment your data is being collected;</li>
                <li>To compile commercial and web traffic statistics for our services;</li>
                <li>To manage reviews on products, services or content;</li>
                <li>To record your calls with our teams for the purposes of training and improving our Services;</li>
                <li>To adhere to our legal and regulatory obligations; </li>
                <li>To manage your complaints/grievances through our third-party ticketing software to ensure faster resolution time.</li>
              </ul>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>We shall inform you, when requesting your personal data, if certain information must be provided or if it is optional. Please note that if you choose not to share certain Personal Information with us, or refuse certain contact permissions, we might not be able to provide certain parts of the Services.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>We also inform you that we are likely to collect your data indirectly and thus enabling you to use our Services, or from other users of our services.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>In this respect, you are hereby informed that we may reuse your personal data that is stored in the address book of another user of our services who has expressly authorized us to access their contacts to put you in contact with each other.</p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>2.	Sharing Your Information</h3>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>Our company's staff, monitoring or control services (auditors in particular), contractors and their employees (hosting service provider, newsletter publishing tool, telephone call monitoring, recording service provider etc.) will have access to your personal data for performance of their duties.</p>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>For the purposes of the overall quality of our services, we will also provide your personal data to our contractors who may use this data for the same purposes and under the same conditions as those referred to in this Policy. We shall be responsible for such use and processing of your personal data by our contractors. </p>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>However, you shall remain solely responsible for the sharing, processing and use of your personal data by third party applications or vendors, including those to whose website/ application you are redirected from our website, who are unconnected with us and with whom, you share your personal data on your own volition. </p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>Government agencies or representatives of the law, ministerial officers or organizations responsible for the collection of debts may also be recipients of your personal data, for the sole purposes of meeting our legal obligations.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>We may transfer your information to service providers, advisers, potential transaction partners or other third parties within the scope of any review, negotiation or completion of a business acquisition should our company be sold to or merge with another company, or should we sell, liquidate or transfer all or part of our assets.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>If you use the Services, you are authorizing us to share information:</p>

              <ul className="toTop" data-scroll>
                <li>Which you direct us to disclose to others;</li>
                <li>With our third-party business partners, vendors, and consultants who perform services on our behalf or who help us provide the Services, such as accounting, managerial, technical, marketing, or analytic services;</li>
                <li>If required to do so by law or in the good-faith belief that such action is necessary to comply with local, state, central, or international laws, or to respond to a court order, judicial or other governmental subpoena or warrant, or in the event of bankruptcy proceedings;</li>
                <li>If we believe in good faith that doing so is reasonably necessary or appropriate to protect the rights, property, or safety of Website, our users, our employees, copyright owners, third parties, or the public, including without limitation to protect the Website or our users from fraudulent, abusive, inappropriate, or unlawful use of the Services;</li>
                <li>To enforce or apply this Policy, our Terms of Use, or our other policies or agreements;</li>
                <li>In connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition, or in any other situation where information may be disclosed or transferred as one of the business assets of CSML.</li>
              </ul>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>Nothing herein restricts the sharing of aggregated or anonymized information, which may be shared with third parties without your consent. This Policy in no way restricts or limits our collection and use of aggregate or de-identified information.</p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>3.	Links to Third-Party Sites and Services </h3>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>The Services may contain links to other websites. We are not responsible for the practices employed by websites or services linked to or from neither the Services, nor the information or content provided to or contained therein. Please remember that when you use a link to go from the Services to another website, this Policy does not apply to those third-party websites or services. Your browsing and interaction on any third-party website or service, including those that have a link on the Services, are subject to that third party’s own rules and policies. Please read those rules and policies before proceeding.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>Your personal data will not be assigned to, rented to or exchanged with any third party, with the exception of our business partners to enhance the experience of the services offered to you by CSML.</p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>C.	How We Protect Your Information</h3>

              <p className="paraTxt color_white pb_20 toTop" data-scroll>We take measures designed to protect Personal Information in an effort to prevent loss, misuse, unauthorized access, disclosure, alteration, and destruction. We will only keep your Personal Information for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. We may also retain and use your Personal Information for as long as necessary to resolve disputes and/or enforce our rights. Where we rely on your consent to process your Personal Information, you have the right to decline consent and/or if provided, to withdraw consent at any time. This will not affect the lawfulness of processing prior to the withdrawal of your consent. Additionally, in some circumstances you can ask us to delete your Personal Information.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>We limit access to Personal Information to our employees, agents, contractors, and other third parties who have a business need to know. They will only process Personal Information on our instructions and they are subject to a duty of confidentiality. We have implemented procedures to handle any suspected Personal Information breach and will notify you and any applicable regulator of a breach as legally required.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>Please be aware, however, that despite our efforts, no security measures are perfect or impenetrable and no method of data transmission can be guaranteed against any interception or other type of misuse. To protect the confidentiality of information maintained in your account, you must keep your password confidential and not disclose it to any other person. You are responsible for all uses of the Services by any person using your password. </p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>Please advise us immediately by contacting us as set forth in the “Contact” section below if you believe your password has been misused or if you suspect a security breach.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>4.	The legal grounds for our processing your Personal Information for the purposes in this Policy are as follows:</p>

              <ul className="toTop" data-scroll>
                <li>It is necessary for our contractual relationship</li>
                <li>The processing is necessary for us to comply with our legal or regulatory obligations</li>
                <li>The processing is in our legitimate interest as a provider of the Services (for example, to protect the security and integrity of our systems and to provide you with customer service and the core functionality of the Services)</li>
              </ul>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>You provided your consent by agreeing to this Policy, which you may withdraw at any time by emailing us at the email address below.</p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>5. Data of minors </h3>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>We do not knowingly collect, retain or process personal information from children under the age of 18, and no part of our service is intended for children. If you learn that a child has provided us with personal information in violation of this privacy policy, you can notify us at <a href="mailto:sales@csmlindia.com">sales@csmlindia.com</a></p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>6.	Amendments </h3>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>We reserve the right to amend this privacy policy at any moment, at our sole discretion, either in its entirety or in part. Such amendments shall come into effect once the new Policy is published.</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>Your use of the Website following the entry into effect of these amendments shall constitute acknowledgment and acceptance of the new Policy. Failing that, and if you are not in agreement with the new Policy, you should refrain from accessing CSML.</p>

              <h3 className="text_35 color_white pt_20 pb_20 toTop" data-scroll>7.	Point of contact for personal data </h3>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>If you have any questions regarding our data processing activities, or if you wish to exercise any of your rights, you can contact us at the following points of contact:</p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>Email Address:<a href="mailto:sales@csmlindia.com">sales@csmlindia.com</a></p>
              <p className="paraTxt color_white pb_20 toTop" data-scroll>Number: <a href="tel:+91 (22) 49739659">+91 (22) 49739659 </a> <a href="tel:+91 (22) 28302166">+91 (22) 28302166</a></p>

						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
