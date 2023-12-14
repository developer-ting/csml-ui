// goKarting page images import
import essentialComponents from "../public/img/product/go-karting/essential-components.jpg";
import userFriendly from "../public/img/product/go-karting/user-friendly.jpg";

//intercard iedge page images import
import iwallet from "../public/img/product/intercard/iedge/iwallet.jpg";
import iservice from "../public/img/product/intercard/iedge/iservice.jpg";
import inventory from "../public/img/product/intercard/iedge/inventory.jpg";

//careeer page Yellow Card images import
import success_img from "../public/img/career/success_img.jpg";
import imfactful_img from "../public/img/career/imfactful_img.jpg";
import growth from "../public/img/career/growth.jpg";

// goKarting page data
const data = [
	{
		image: essentialComponents,
		title: "Essential Components",
		desc:
			"Timing hardware includes transponders, safety lights and loops, seamlessly integrating with lap timing systems for precise individual and group performance evaluations.",
	},
	{
		image: userFriendly,
		title: "User-Friendly",
		desc:
			"Facilitates convenient printing of lap timing and scoring data, ensuring accuracy and efficiency in recording and analyzing race performance.",
	},
];

//intercard iedge page data 
const iedgeData = [
	{
		image: iwallet,
		title: "iWallet App",
		desc:
			"Discover a new level of convenience with our iWallet App. Guests can effortlessly conduct transactions using Apple Pay and Google Pay, turning their smartphones into virtual wallets. Dive into the endless possibilities by downloading our iWallet Brochure.",
	},
	{
		image: iservice,
		title: "iService App",
		desc:
			"Simplify game management with our iService App, whether you operate one location or multiple. This app enables remote handling of maintenance tasks, from taking a game out of service to tracking repair information. All updates are automatically synchronized on the server and in the cloud, ensuring seamless operations.",
	},
	{
		image: inventory,
		title: "Inventory App",
		desc:
			"Seize control of your redemption inventory with our Inventory App. Compatible with Android and iOS devices, this app empowers your staff to effortlessly manage inventory. Streamline inventory management by scanning UPC codes on merchandise, reducing labor costs, and eliminating errors.",
	}
];

//careeer page Yellow Card Data
const careeerYellowCardData = [
	{
		image: success_img,
		title: "Innovative Environment" ,
		desc:
			"CSML is a playground for creativity. We encourage out-of-the-box thinking and provide a platform for your ideas to come to life.",
	},
	{
		image: imfactful_img,
		title: "Impactful Work",
		desc:
			"CSML is a playground for creativity. We encourage out-of-the-box thinking and provide a platform for your ideas to come to life.",
	},
	{
		image: growth,
		title: "Continuous Growth",
		desc:
			"CSML is a playground for creativity. We encourage out-of-the-box thinking and provide a platform for your ideas to come to life.",
	},
];

export default data;
export { iedgeData, careeerYellowCardData };
