import Header from './Header.js'
import Card from './Card.js'
import LocationCard from './LocationCard.js'

import firstSection from '../images/first-section.png'
import poshBuilding from '../images/posh-building.png'

import { basicFeatures, premiumAmenities, dreamHomeItems, locationList } from './Variables.js'

import phone from '../images/phone.svg';

export default function Homepage() {
	return(
		<div className="max-w-[1300px] mx-auto sm:px-[50px] px-[20px] font-['Lexend_Deca']">
			<Header />
			<div className="sm:mt-[150px] mt-[50px] sm:flex justify-between items-center sm:gap-[50px]">
				<div className="text-[#37405E] min-[1200px]:max-w-[600px]">
					<div className="text-[40px] sm:text-[54px] leading-[60px]">
						<span>Welcome to Fair Field </span>
						<br className="max-sm:hidden" />
						<span>– Anicham & Magilam</span>
					</div>
					<div className="text-[#D3AC4A] text-[24px] my-[30px]">
						Premium Gated Community in Coimbatore
					</div>
					<div className="text-[20px] font-light">
						Experience the perfect blend of elegance, security, and future-ready living at Fair Field – Anicham & Magilam. Strategically located in Ramanathapuram, Coimbatore, our premium gated community offers world-class amenities, sustainable infrastructure, and unparalleled investment opportunities.
					</div>
					<div className="w-fit mt-[30px] bg-[#37405E] py-[10px] px-[20px] rounded-[5px] cursor-pointer">
						<span className="text-[#ffffff] tracking-tight">
							Book Your Visit Today
						</span>
					</div>
				</div>
				<div>
					<img src={firstSection} className="max-[1200px]:hidden rounded-[20px] border-solid border-[2px] border-[#37405E]" />
				</div>
			</div>
			<div className="mt-[100px] text-[#37405E] text-center">
				<div className="sm:text-[40px] text-[30px]">Why Choose Fair Field?</div>
				<div className="text-[20px] font-light my-[50px] max-w-[920px] mx-auto">
					Situated in a well-connected neighborhood, offering easy access to business districts, educational institutions, and healthcare facilities.
				</div>
				<div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[50px]">
					{basicFeatures.map((basicFeautre, index) => (
						<Card cardData={basicFeautre} />
					))}
				</div>
				<div className="w-fit mt-[30px] bg-[#37405E] mt-[50px] py-[10px] px-[20px] rounded-[5px] cursor-pointer mx-auto">
					<span className="text-[#ffffff] tracking-tight">
						Join an Elite Community – Reserve Your Spot Today!
					</span>
				</div>
			</div>
			<div className="mt-[100px] text-[#37405E] text-center">
				<div className="sm:text-[40px] text-[30px]">Our Premium Amenities</div>
				<div className="mt-[50px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[50px]">
					{premiumAmenities.map((premiumAmenity, index) => (
						<Card cardData={premiumAmenity} />
					))}
				</div>
			</div>
			<div className="mt-[100px] text-[#37405E] text-center">
				<div className="sm:text-[40px] text-[30px]">Location & Accessibility</div>
				<div className="mt-[50px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
					{locationList.map((locationItem, index) => (
						<div className={`${locationItem.customStyle}`}>
							<LocationCard locationData={locationItem} />
						</div>
					))}
				</div>
			</div>
			<div className="mt-[100px]">
				<div className="flex gap-[50px] items-center justify-between">
					<div className="min-[1200px]:max-w-[620px]">
						<div className="sm:text-[40px] text-[30px] text-[#37405E]">Book Your Exclusive Site Visit</div>
						<div className="text-[#7B7B7B] leading-[30px] mt-[10px]">
							<span>Discover your future home today! We invite you to explore Fair Field</span>
							<br />
							<span>– Anicham & Magilam and witness luxury living firsthand.</span>
						</div>
						<div className="mt-[50px]">
							<div className="text-[20px] text-[#37405E]">What You Get?</div>
							<div className="flex flex-col gap-[10px] mt-[10px] text-[#7B7B7B] ml-[20px]">
								<div className="flex">
									<div> ✔ </div>
									<div className="ml-[10px]">
										Guided Tour – Walkthrough of our world-class gated community. Get a detailed look at the community layout, plot options, and exclusive features.
									</div>
								</div>
								<div className="flex">
									<div> ✔ </div>
									<div className="ml-[10px]">
										Personal Consultation – Speak with our real estate experts who will assist you in selecting the perfect home or plot based on your preferences. Clarify all queries related to pricing, financing, and legal aspects.
									</div>
								</div>
								<div className="flex">
									<div> ✔ </div>
									<div className="ml-[10px]">
										Exclusive Site-Visit Offers – Enjoy special discounts and deals available only for site visit attendees. Make the most of your visit by securing the best price on your dream home.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<img src={poshBuilding} className="rounded-[20px] max-[1200px]:hidden border-solid border-[2px] border-[#37405E]" />
					</div>
				</div>
			</div>
			<div className="mt-[100px]">
				<div className="sm:text-[40px] text-[30px] text-center text-[#37405E]">
					Own Your Dream Home – Act Fast!
				</div>
				<div className="text-[#7b7b7b] mt-[30px] flex flex-col gap-[20px]">
					{dreamHomeItems.map((dreamHomeItem, index) => (
						<div className="flex sm:items-center items-start gap-[20px] ">
							<img className="w-[40px]" src={dreamHomeItem.url} />
							<div>{dreamHomeItem.description}</div>
						</div>
					))}
				</div>
			</div>
			<div className="my-[100px]">
				<div className="sm:text-[40px] text-[30px] text-center text-[#37405E]">
					Fair Field – Where Luxury Meets Smart Investment!
				</div>
				<div className="bg-[#37405E] h-fit flex items-center py-[10px] px-[20px] rounded-[5px] cursor-pointer sm:text-[18px] font-medium w-fit mx-auto mt-[20px]">
					<img src={phone} />
					<span className="text-[#ffffff] ml-[10px]">
						+91 79 00 88 22 88
					</span>
				</div>
			</div>
		</div>
	)
}