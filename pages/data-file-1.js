import React from "react";
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

//icashier page images import
import icashier_station from "../public/img/product/intercard/icashier/icashier_station.jpg";
import icashier_mobile from "../public/img/product/intercard/icashier/icashier_mobile.jpg";
import iredemption from "../public/img/product/intercard/icashier/iredemption.jpg";
import online_waiver from "../public/img/product/intercard/icashier/online_waiver.jpg";

//Ecommerce page E-Commerce Technology section yellow card images import
import remote_accessibility from "../public/img/product/intercard/ecommerce/remote_accessibility.jpg";
import customized_brand from "../public/img/product/intercard/ecommerce/customized_brand.jpg";
import staff_free from "../public/img/product/intercard/ecommerce/staff_free.jpg";
import maximize_float from "../public/img/product/intercard/ecommerce/maximize_float.jpg";

//Ecommerce page how it works section images import
import register from "../public/img/product/intercard/ecommerce/register.svg";
import shop from "../public/img/product/intercard/ecommerce/shop.svg";
import discounts from "../public/img/product/intercard/ecommerce/discounts.svg";
import check_out_pay from "../public/img/product/intercard/ecommerce/check_out_pay.svg";
import redeem_play from "../public/img/product/intercard/ecommerce/redeem_play.svg";

//Ecommerce page Bonus feature section images import
import bonus_feature from "../public/img/product/intercard/ecommerce/bonus_feature.jpg";

//Shindigger page Plan smarter section images import
import revolutionize from "../public/img/product/intercard/shindigger/revolutionize.jpg";
import unveil from "../public/img/product/intercard/shindigger/unveil.jpg";

//Shindigger page Craft Your Shindig in 5 Simple Steps section images import
import choose_a_location from "../public/img/product/intercard/shindigger/choose_a_location.svg";
import choose_a_day from "../public/img/product/intercard/shindigger/choose_a_day.svg";
import guest_count from "../public/img/product/intercard/shindigger/guest_count.svg";
import pick_party from "../public/img/product/intercard/shindigger/pick_party.svg";
import select_a_time from "../public/img/product/intercard/shindigger/select_a_time.svg";

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
	},
];

//careeer page Yellow Card Data
const careeerYellowCardData = [
	{
		image: success_img,
		title: "Innovative Environment",
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

//icashier page Data
const icashierData = [
	{
		image: icashier_station,
		title: "iCashier Station",
		desc:
			"Streamline operations effortlessly with our comprehensive system. From managing quick-service food to overseeing customer engagement, we register vital details like name, address, email, and birth date, accompanied by personalized customer photos. Our system efficiently handles game maintenance, producing out-of-service reports, consolidating redemption points, and implementing a preventative maintenance program with a service log. The added touch of customizable graphics ensures a unique and engaging experience tailored to your specific needs.",
	},
	{
		image: icashier_mobile,
		title: "iCashier Mobile",
		desc:
			"The service effortlessly extends its capabilities throughout the facility, allowing users to check balances, register customers, and execute redemption services. With features like selling and recharging cards, utilizing a credit card reader, bar code scanner, and webcam, it delivers a comprehensive solution for various transaction requirements.",
	},
	{
		image: iredemption,
		title: "iRedemption",
		desc:
			"Experience the efficiency of real-time inventory management with our digital packing list, ensuring accuracy and instant updates. Simplify transactions, eliminate paper tickets, and streamline B-to-B replenishment. Receive timely notifications for merchandise reorders, and effortlessly match redemption transactions to sales in the same period. Track redemption history by location for comprehensive insights into your inventory dynamics.",
	},
	{
		image: online_waiver,
		title: "Online Waiver",
		desc:
			"Optimize your guest experience with our Online Waiver. Guests can conveniently sign releases from any device before arriving, reducing queues at your center. Stored securely in the cloud, operators can access waivers remotely and set retention periods. This efficient, user-friendly tool enhances operational ease, saving time and money while providing quick access to signed documents within seconds.",
	},
];

//ecommerce page Yellow Card section Data
const ecommerceYellowCardData = [
	{
		image: remote_accessibility,
		title: "Remote Accessibility",
		desc:
			"Empower your customers to effortlessly buy game cards, packages, or gift cards using their mobile devices, whether they're on the go or enjoying the comfort of their homes.",
	},
	{
		image: customized_brand,
		title: "Customized Brand Integration",
		desc:
			"Empower your customers to effortlessly buy game cards, packages, or gift cards using their mobile devices, whether they're on the go or enjoying the comfort of their homes.",
	},
	{
		image: staff_free,
		title: "Staff-Free Purchases",
		desc:
			"Empower your customers to effortlessly buy game cards, packages, or gift cards using their mobile devices, whether they're on the go or enjoying the comfort of their homes.",
	},
	{
		image: maximize_float,
		title: "Maximize 'Float'",
		desc:
			"Empower your customers to effortlessly buy game cards, packages, or gift cards using their mobile devices, whether they're on the go or enjoying the comfort of their homes.",
	},
	{
		image: maximize_float,
		title: "Revenue Growth",
		desc:
			"Empower your customers to effortlessly buy game cards, packages, or gift cards using their mobile devices, whether they're on the go or enjoying the comfort of their homes.",
	},
	{
		image: maximize_float,
		title: "Capture Customer Data",
		desc:
			"Empower your customers to effortlessly buy game cards, packages, or gift cards using their mobile devices, whether they're on the go or enjoying the comfort of their homes.",
	},
];

//ecommerce page How It Works section Data
const ecommerceHowItWorksData = [
	{
		image: register,
		title: "Register",
		desc: "Guests can quickly register or shop as a guest on your site.",
	},
	{
		image: shop,
		title: "Shop",
		desc:
			"Customers make their selections for game cards, packages, or other items.",
	},
	{
		image: discounts,
		title: "Discounts",
		desc: "Apply any current discount options, promos, or specials.",
	},
	{
		image: check_out_pay,
		title: "Check Out & Pay",
		desc: "Guests can then print the QR code or save it on their phone.",
	},
	{
		image: redeem_play,
		title: "Redeem & Play",
		desc:
			"QR codes are scanned and redeemed at the center, where guest’s get their play card",
	},
];

//ecommerce page Bonus feature section Data
const ecommerceBonusFeatureData = [
	{
		image: bonus_feature,
		title: "Bonus Feature: Recharge On the Go",
		desc:
			"Receive low play card balance alerts on your phone, allowing guests to recharge straight from their device for uninterrupted play. Embrace the future of gaming convenience with Intercard E-Commerce.",
	},
];

// Shindigger page plan smarter data
const shindiggerPlanSmarter = [
	{
		image: revolutionize,
		title: "Revolutionize Your Celebrations with Shindigger",
		desc:
			"Shindigger goes beyond being a mere reservation system; it's your ultimate celebration facilitator. Whether it's a birthday bash, corporate event, or any gathering, Shindigger simplifies the entire process, allowing you to focus on enjoying the festivities.",
	},
	{
		image: unveil,
		title: "Unveil the Shindigger™ Experience",
		desc:
			"Delve into the boundless possibilities offered by Shindigger. Download our comprehensive brochure to explore how this user-friendly platform, crafted by industry experts at Intercard, can elevate and transform your party planning experience.",
	},
];
// //Shindigger page Craft Your Shindig in 5 Simple Steps section  data
const shindiggerCraftSteps = [
	{
		image: choose_a_location,
		title: "Choose A Location",
		desc: "Select from a variety of vibrant venues that match your party style.",
	},
	{
		image: choose_a_day,
		title: "Choose A Day",
		desc:
			"Set the perfect date for your shindig, ensuring everyone can partake in the celebration.",
	},
	{
		image: guest_count,
		title: "Guest Count",
		desc: "Tailor your party experience by specifying the number of attendees.",
	},
	{
		image: pick_party,
		title: "Pick A Party Package",
		desc:
			"Customize your celebration with a range of party packages designed for every occasion.",
	},
	{
		image: select_a_time,
		title: "Select A Time",
		desc: "Choose the party hour that suits you and your guests.",
	},
];

export default data;
export {
	iedgeData,
	careeerYellowCardData,
	icashierData,
	ecommerceYellowCardData,
	ecommerceHowItWorksData,
	ecommerceBonusFeatureData,
	shindiggerPlanSmarter,
	shindiggerCraftSteps,
};
