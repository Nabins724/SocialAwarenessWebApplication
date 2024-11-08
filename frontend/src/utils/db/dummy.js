import grad from '../../assets/displayPhoto/grad.png';
import girl from '../../assets/displayPhoto/girl.png';
import female from '../../assets/displayPhoto/female.png';
import male from '../../assets/displayPhoto/male.png';
import hoodie from '../../assets/displayPhoto/hoodieGirl.jpg';
import reg from '../../assets/displayPhoto/reg.jpg';
import emmaimg from '../../assets/displayPhoto/emma.png';
import oliviaimg from '../../assets/displayPhoto/olivia.png';


import postPic from '../../assets/postPhoto/campaign.png';
import postPic1 from '../../assets/postPhoto/campaign1.png';
import postPic2 from '../../assets/postPhoto/campaign3.png';


export const POSTS = [
	{
		_id: "1",
		text: "Social media useful resource or a threat? -Ref: https://ia.acs.org.au/",
		img: postPic,
		user: {
			username: "emilyjones",
			profileImg: girl,
			fullName: "Emily Jones",
		},
		comments: [
			{
				_id: "1",
				text: "Nice Tutorial",
				user: {
					username: "janedoe",
					profileImg: girl,
					fullName: "Jane Jones",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},


	{
		_id: "2",
		text: "Should teens have a say in social media ban? -Ref: https://ia.acs.org.au/",
		user: {
			username: "emilyjones",
			profileImg: girl,
			fullName: "Emily Jones",
		},
		comments: [
			{
				_id: "1",
				text: "Probably",
				user: {
					username: "@emmasmith",
					profileImg: emmaimg,
					fullName: "Emma Smith",
				},
			},
		],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
	},


	{
		_id: "3",
		text: "Top 3 personal concerns for females in Australia. -Ref: https://www.missionaustralia.com.au/",
		img: postPic1,
		user: {
			username: "emilyjones",
			profileImg: girl,
			fullName: "Emily Jones",
		},
		comments: [],
		likes: ["6658s891", "6658s892", "6658s893", "6658s894", "6658s895", "6658s896"],
	},


	{
		_id: "4",
		text: "Top 3 most important issues in Australia today. -Ref: https://www.missionaustralia.com.au/ ",
		img: postPic2,
		user: {
			username: "emilyjones",
			profileImg: girl,
			fullName: "Emily Jones",
		},
		comments: [
			{
				_id: "1",
				text: "Mental health a top one for me.",
				user: {
					username: "olivia_m",
					profileImg: oliviaimg,
					fullName: "Olivia Martinez",
				},
			},
		],
	},
];

export const USERS_FOR_LEFT_PANEL = [
	{
		_id: "1",
		fullName: "Emma Smith",
		username: "emma@smith",
		profileImg: female,
	},
	{
		_id: "2",
		fullName: "Michael Brown",
		username: "michael_b",
		profileImg: male,
	},
	{
		_id: "3",
		fullName: "Laura Wilson",
		username: "laura_w",
		profileImg: hoodie,
	},
	{
		_id: "4",
		fullName: "Sarah Kim",
		username: "sarah_k",
		profileImg: reg,
	},
	{
		_id: "5",
		fullName: "David Lee",
		username: "david_lee",
		profileImg: grad,
	},
];