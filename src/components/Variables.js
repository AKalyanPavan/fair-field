import strategicLocation from '../images/base-features/strategic-location.svg'
import luxuryVilla from '../images/base-features/luxury-villa.svg'
import cctv from '../images/base-features/cctv.svg'
import smartInfrastructure from '../images/base-features/smart-infrastructure.svg'
import highProperty from '../images/base-features/high-property.svg'
import loan from '../images/base-features/loan.svg'

import garden from '../images/amenities/garden.svg'
import clubHouse from '../images/amenities/club-house.svg'
import sports from '../images/amenities/sports.svg'
import webcam from '../images/amenities/webcam.svg'
import roads from '../images/amenities/roads.svg'

import travel from '../images/locations/travel.svg'
import school from '../images/locations/school.svg'
import college from '../images/locations/college.svg'
import restaurant from '../images/locations/restaurant.svg'
import superMarket from '../images/locations/super-market.svg'
import hospital from '../images/locations/hospital.svg'
import bank from '../images/locations/bank.svg'

import discounts from '../images/dream-home/discounts.svg'
import priceRaise from '../images/dream-home/price-raise.svg'
import sold from '../images/dream-home/sold.svg'

export const basicFeatures = [
	{
		url: strategicLocation,
		title: 'Strategic Location',
		description: 'Situated in a well-connected neighborhood, offering easy access to business districts, educational institutions, and healthcare facilities. Live in a thriving area that combines convenience with future growth potential',
		customStyle: 'broder-solid border-[1px] border-[#BFBDBD]',
	},
	{
		url: luxuryVilla,
		title: 'Luxury Villas & Premium Plots',
		description: 'Choose from a range of customizable homes and plots designed to fit your lifestyle needs, starting from ₹18.5L. Build a home that reflects your personality and meets your every requirement.',
		customStyle: 'broder-solid border-[1px] border-[#BFBDBD]',
	},
	{
		url: cctv,
		title: '24/7 Gated Security & CCTV Surveillance',
		description: 'Experience complete peace of mind with round-the-clock security personnel and advanced monitoring systems. Your safety and privacy are our top priorities',
		customStyle: 'broder-solid border-[1px] border-[#BFBDBD]',
	},
	{
		url: smartInfrastructure,
		title: 'Eco-Friendly & Smart Infrastructure',
		description: 'Benefit from an environment-friendly community featuring solar lighting, rainwater harvesting, and extensive green spaces. Live sustainably while enjoying modern, energy-efficient amenities.',
		customStyle: 'broder-solid border-[1px] border-[#BFBDBD]',
	},
	{
		url: highProperty,
		title: 'High Property Appreciation',
		description: 'Situated in a well-connected neighborhood, offering easy access to business districts, educational institutions, and healthcare facilities. Live in a thriving area that combines convenience with future growth potential',
		customStyle: 'broder-solid border-[1px] border-[#BFBDBD]',
	},
	{
		url: loan,
		title: 'Flexible Payment Plans & Loan Assistance',
		description: 'Enjoy an effortless home-buying experience with multiple payment options and easy financing solutions. Our team will assist you in finding the best financial plan suited to your needs.',
		customStyle: 'broder-solid border-[1px] border-[#BFBDBD]',
	},
]

export const premiumAmenities = [
	{
		url: garden,
		title: 'Spacious Green Campus & Well made Tree Plantation',
		description: 'Stroll through beautifully designed green spaces, offering a tranquil escape from the hustle of city life. Relax in nature while enjoying the fresh air and scenic views.',
		customStyle: '',
	},
	{
		url: webcam,
		title: 'Advanced Security Features',
		description: 'Our gated community ensures complete safety with restricted access, CCTV surveillance, and trained security personnel. Your family’s  well-being is our highest priority.',
		customStyle: '',
	},
	{
		url: roads,
		title: 'Well-Planned Roads & Parking Spaces',
		description: 'Navigate easily with well-maintained internal roads and ample parking space. Designed for seamless movement, ensuring convenience for all residents and visitors.',
		customStyle: '',
	},
]

export const locationList = [
	{
		url: restaurant,
		title: 'Restaurants',
		items: [
			'Thinai Amuthu Millet Restaurant - 750 meters',
			'BBH (Bangalore Biriyani Hotel) Restaurant & Cafe - 4.2 Km',
			'Nanjai Virundhu Restaurant  - 5.1 Km',
			'Shree Anandas Restaurant - 4.7 Km',
			'Denmark Drive-in Restaurant - 6.7 Km',
		]
	},
	{
		url: college,
		title: 'Colleges',
		items: [
			'Nirmala Women\'s College - 3.8 Km',
			'PSGR Krishnammal Girls College - 7.5 Km',
			'PSG College of Technology - 6.7 Km',
			'PSG Arts & Science College (Sitra) - 9.9 Km',
			'Bishop Appasamy College - 5.3 Km',
			'Bishop Ambrose College - 4.5 Km',
			'Krishna College - 10 Km',
		]
	},
	{
		url: hospital,
		title: 'Hospitals Nearby',
		items: [
			'SLV Hospital - 900 Meter',
			'Sri Bala Medical Centre - 2.3 Km',
			'Gem Hospital - 2.2 Km',
			'GKNM Hospital - 5.4 Km',
			'PSG Hospital - 7 Km',
			'KG Hospital - 5. 6 Km',
			'Ortho One Hospital - 3.2 Km',
		]
	},
	{
		url: bank,
		title: 'Banks Nearby',
		items: [
			'Bank Of Baroda - 1.2 Km',
			'Indian Overseas Bank - 1.4 Km',
			'State Bank of India - 1.5 Km',
			'Axis Bank - 2.4 Km',
			'ICICI Bank - 2.6 Km',
			'HDFC Bank - 2.8 Km',
			'Canara Bank - 2.9 Km',
			'Indian Bank - 2.4 Km',
			'IDBI  - 2.3 Km',
			'Karur Vysya Bank - 2.5 Km',
			'Indusind Bank - 2.5 Km',
			'Andhra Bank - 3 Km',
		],
		customStyle: 'row-span-2',
	},
	{
		url: travel,
		title: 'Airport',
		items: [
			'Coimbatore International Airport - 11.3 Km',
			'Coimbatore Junction - 5.7 Km',
			'Podanur Junction - 3.5 Km',
		],
	},
	{
		url: school,
		title: 'Schools',
		items: [
			'Trinity Matriculation School - 2.8 Km',
			'Alvernia Matriculation School - 2.6 Km',
			'BVM School - 2 Km',
			'Vidhya Nikethan Public School - 4.3 Km',
		],
	},
	{
		url: superMarket,
		title: 'Grocery & Hypermarkets',
		items: [
			'Dennis Hyper Market - 3.3 Km',
			'Lulu Hyper Market - 5 Km',
			'Shri Kannan Departmental Store - 1.2 Km',
		],
	},

]

export const dreamHomeItems = [
	{
		url: sold,
		description: 'Over 33 plots already sold – Limited units available! Secure your dream home before it\'s too late.'
	},
	{
		url: priceRaise,
		description: 'Prices Set to Increase Soon – Real estate values are rising rapidly, making now the best time to invest. Don\'t miss out on this opportunity!'
	},
	{
		url: discounts,
		description: 'Festive Discounts & Special Offers Available! Make your purchase even more rewarding with exclusive seasonal benefits.'
	},
]