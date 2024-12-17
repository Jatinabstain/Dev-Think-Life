import Image from "next/image";
import Form from "next/form";
import Header from "./common/header";
import bannerImg from '../../public/assets/banner-img.png'
import umbrella from "../../public/assets/umbrella.svg";
import umbrellaDown from "../../public/assets/umbrella-down.svg";
import doller from "../../public/assets/doller.svg";
import history from "../../public/assets/history.svg";
import coverage from "../../public/assets/coverage.svg";
import screen from "../../public/assets/screen.svg";
import Footer from "./common/footer";
import Link from "next/link";
import AboutUs from "./common/components/pageSections/aboutUs";
import Reviews from "./common/components/pageSections/reviews";
import Faq from "./common/components/pageSections/faq";
import ArticlesHome from "./common/components/pageSections/articlesHome";
import { bigCardItem } from '@/types/bigCardItem';
import BigCard from './common/components/bigCard/bigCard';
import short from '../../public/assets/short.svg'
import life from '../../public/assets/life.svg'

const bigCards: bigCardItem[] = [
    { icon: short, name: 'Short-Term Disability Insurance', content: 'Unexpected illness or injury can disrupt your life and income. Our Short-Term Disability Insurance offers financial support by replacing a portion of your income during recovery. Benefit from fast approval, customizable coverage options, and peace of mind knowing that your essential expenses are covered while you focus on getting better.', href: 'shortTermDisabilityInsurance' },
    { icon: life, name: 'Term Life Insurance', content: "Our Term Life Insurance provides affordable coverage for a specified period, ensuring your family’s financial security in the event of your passing. Choose a term length that fits your needs, with guaranteed level premiums and substantial death benefits. Plan for the future and safeguard your loved ones' financial stability today.", href: 'termLifeInsurance' },
]


export default function Home() {
  return (
    <>
      <Header />
      {/* Top banner start */}
      <section className="banner_section">
        <div className="mx-auto max-w-7xl px-8">
          <div className="lg:flex flex-row items-center">
            <div className="basis-1/2">
              <div className="banner_content">
                <h1><span>Think Life,</span> <br /> Think Insurance</h1>
                <p className="mb-4">Tailored insurance policies with proper coverages and low rates. You can quote and buy your policy instantly online.</p>
                <Link href="#" className="border border_primary text-white bg_primary py-4 px-5 rounded font-medium block w-fit bg_primary">Get Started</Link>
              </div>
            </div>
            <div className="basis-1/1">
              <div className="banner_img">
                <Image
                  src={bannerImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top banner end */}

      {/* Search form start*/}
      <section className="search_form_bg">
        <div className="mx-auto max-w-7xl px-8">
          <Form action=''>
            <div className="flex lg:flex-row flex-col gap-y-5 gap-x-[38px]">
              <div className="form-group lg:w-max w-full">
                <label htmlFor="fName" className="form-label">First Name</label>
                <input type="text" id="fName" className="form-control lg:w-max w-full" placeholder="First Name" />
              </div>
              <div className="form-group lg:w-max w-full">
                <label htmlFor="lName" className="form-label">Last Name</label>
                <input type="text" id="lName" className="form-control lg:w-max w-full" placeholder="Last Name" />
              </div>
              <div className="form-group lg:w-max w-full">
                <label htmlFor="lName" className="form-label">Email</label>
                <input type="text" id="lName" className="form-control lg:w-max w-full" placeholder="Email" />
              </div>
              <div className="form-group w-full">
                <label htmlFor="insuranceType" className="form-label">Insurance Type</label>
                <select id="insuranceType" className="form-control form-select min-w-40 w-full">
                  <option value="1">value</option>
                </select>
              </div>
              <Link href="#" className="btn_outline_big">Countinue</Link>
            </div>
          </Form>
        </div>
      </section>
      {/* Search form end*/}

      {/* How it works start */}
      <section className="page_section pt-[100px] pb-[128px]">
        <div className="mx-auto max-w-7xl px-8">
          <div className="heading mb-8">
            <h3>How It Works</h3>
            <p>Getting life insurance with our company is easy. Heret&apos;s how it works:</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-y-0 gap-y-4 gap-x-[38px] mb-8">
            <div className="bg_violet py-[26px] px-[42.5px] rounded-xl how_work_card">
              <div className="card_icon bg_primary300 w-[59px] h-[59px] rounded flex items-center justify-center mb-9 mx-auto">
                <p className="text_primary text-[50px] font-bold">1</p>
              </div>
              <div className="content">
                <h3 className="font-black text-2xl text-center mb-[19px]">Apply</h3>
                <p className="text-center">Choose your coverage and apply. Fill out the application with more detailed information about yourself, your health, and your lifestyle.</p>
              </div>
            </div>
            <div className="bg_violet py-[26px] px-[42.5px] rounded-xl how_work_card">
              <div className="card_icon bg_primary300 w-[59px] h-[59px] rounded flex items-center justify-center mb-9 mx-auto">
                <p className="text_primary text-[50px] font-bold">2</p>
              </div>
              <div className="content">
                <h3 className="font-black text-2xl text-center mb-[19px]">Get a Quote</h3>
                <p className="text-center">Provide some basic information to get an estimated premium amount and coverage options.</p>
              </div>
            </div>
            <div className="bg_violet py-[26px] px-[42.5px] rounded-xl how_work_card">
              <div className="card_icon bg_primary300 w-[59px] h-[59px] rounded flex items-center justify-center mb-9 mx-auto">
                <p className="text_primary text-[50px] font-bold">3</p>
              </div>
              <div className="content">
                <h3 className="font-black text-2xl text-center mb-[19px]">Get Covered</h3>
                <p className="text-center">Receive confirmation and a policy document after we process your application and payment.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <Link href="#" className="border border_primary_light text_primary py-2.5 px-4 rounded font-medium">Learn More</Link>
            <Link href="#" className="border border_primary text-white bg_primary py-2.5 px-4 rounded font-medium">Get Started</Link>
          </div>
        </div>
      </section>
      {/* How it works end */}

      {/* What We Offer Start */}
      <section className="page_section pb-[128px]">
        <div className="mx-auto max-w-7xl px-8">
          <div className="heading mb-8">
            <h3>What We Offer</h3>
            <p className="lg:w-2/4 mx-auto">Life insurance is a must if your loved ones are financially dependent on you. It shields your beneficiaries from unforeseen circumstances and supports them through a painful time of loss.</p>
          </div>
          <BigCard bigCard={bigCards} />
        </div>
      </section>
      {/* What We Offer End */}

      {/* Benefits Start */}
      <section className="page_section pb-[128px]">
        <div className="mx-auto max-w-7xl px-8">
          <div className="heading mb-8">
            <h3>Benefits</h3>
            <p className="lg:w-2/4 mx-auto ">We know that buying insurance can be confusing, especially when you have to deal with a lot of jargon and legalese. Wet&apos;ve made it our mission to make the process as easy and straightforward as possible.</p>
            <br />
            <p className="lg:w-2/4 mx-auto">With us, you get:</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 gap-x-[38px] mb-8 items-center">
            <div className="w-1/2">
              <Image
                src={umbrella}
                alt="benefits"
                className="mx-auto min-h-[286px] object-contain"
              />
            </div>
            <div className="bg_violet pt-[20px] px-6 pb-5 rounded-xl lg:w-1/5 lg:min-h-[322px]">
              <div className="icon">
                <Image
                  src={doller}
                  alt="prices"
                  width={37}
                  height={37}
                  className="object-contain mx-auto mb-[26.96px]"
                />
              </div>
              <h3 className="text-[#000000DE] font-bold text-xl text-center mb-8">Competitive Prices</h3>
              <p className="font-normal text-[#00000099] text-base text-center">We provide competitive rates on all our products with no hidden fees or surprises along the way—you&apos;ll always know exactly what you&apos;re paying for!</p>
            </div>
            <div className="bg_violet pt-[20px] px-6 pb-5 rounded-xl lg:w-1/5 lg:min-h-[322px]">
              <div className="icon">
                <Image
                  src={history}
                  alt="24/7 Support"
                  width={37}
                  height={37}
                  className="object-contain mx-auto mb-[26.96px]"
                />
              </div>
              <h3 className="text-[#000000DE] font-bold text-xl text-center mb-8">24/7 Support</h3>
              <p className="font-normal text-[#00000099] text-base text-center">Our team is available 24/7 via phone or email if you ever need help navigating the process or filing claims during an emergency.</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 gap-x-[38px] mb-8 items-center">
            <div className="bg_violet pt-[20px] px-6 pb-5 rounded-xl lg:w-1/5 lg:min-h-[322px]">
              <div className="icon">
                <Image
                  src={coverage}
                  alt="Variety of Coverage Options"
                  width={37}
                  height={37}
                  className="object-contain mx-auto mb-[26.96px]"
                />
              </div>
              <h3 className="text-[#000000DE] font-bold text-xl text-center mb-8">Variety of Coverage Options</h3>
              <p className="font-normal text-[#00000099] text-base text-center">We offer a wide range of options for your life insurance needs, so no matter what situation you&apos;re facing, we&apos;ll be there for you.</p>
            </div>
            <div className="bg_violet pt-[20px] px-6 pb-5 rounded-xl lg:w-1/5 lg:min-h-[322px]">
              <div className="icon">
                <Image
                  src={screen}
                  alt="Online Application"
                  width={37}
                  height={37}
                  className="object-contain mx-auto mb-[26.96px]"
                />
              </div>
              <h3 className="text-[#000000DE] font-bold text-xl text-center mb-8">Online Application</h3>
              <p className="font-normal text-[#00000099] text-base text-center"> We offer a fast and easy online application process so you can apply for insurance in just a few minutes! You can get free quotes from our website with just a few clicks!</p>
            </div>
            <div className="w-1/2"> 
              <Image
                src={umbrellaDown}
                alt="benefits"
                className="mx-auto min-h-[286px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Benefits End */}

      {/* About Us Start */}
        <AboutUs />
      {/* About Us End */}
      
      {/* Reviews Start */}
        <Reviews />
      {/* Reviews End */}
      
      {/* Faq Start */}
        <Faq />
      {/* Faq End */}
      
      {/* Articles Start */}
        <ArticlesHome />
      {/* Articles End */}

      <Footer />
    </>

  );
}
