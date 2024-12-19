"use client"
import Image from 'next/image';
// import circle from "../../../../../public/assets/circle.svg";
import stars from "../../../../../public/assets/stars.svg";
import u1 from "../../../../../public/assets/users/u1.png";
import u2 from "../../../../../public/assets/users/u2.png";
import u3 from "../../../../../public/assets/users/u3.png";
import u4 from "../../../../../public/assets/users/u4.png";
import u5 from "../../../../../public/assets/users/u5.png";
import u6 from "../../../../../public/assets/users/u6.png";
import useMasonry  from "../../../hooks/useMasonry"

const reviewContent = [
    { userImg: u1, name: 'John Bullock', content: 'I looked at different companies but found the insurance I wanted and could afford at Think Life. They made me feel like I was in good hands.', rating: stars },
    { userImg: u2, name: 'Kathryn Murphy', content: 'I am very pleased with the entire process of purchasing insurance from Think Life.', rating: stars },
    { userImg: u3, name: 'Cody Fisher', content: 'I have purchased Critical Illness Insurance through Think Life and feel very satisfied with what I’ve got. Great company to work with!', rating: stars },
    { userImg: u4, name: 'Eleanor Pena', content: 'Always on top of their services! I couldn’t be happier with my insurance coverage. Very pleasant people and good customer service.', rating: stars },
    { userImg: u5, name: 'Aaron Mckinney', content: 'The best insurance company! They have low prices, and their customer service is fast and friendly. They helped me find the right plan for my needs.', rating: stars },
    { userImg: u6, name: 'Luisa Evans', content: 'Always had excellent service, from the initial calls for advice through to any claims if applicable. I have never had one issue with them!', rating: stars }
]
export default function Reviews() {
    const masonryContainer = useMasonry();

    return (
        <section className="page_section pb-[128px]">
            <div className="mx-auto max-w-7xl px-8">
                <div className="heading mb-8">
                    <h3>What People Say About Us</h3>
                </div>
                {/* <div className="flex md:flex-row flex-col lg:gap-y-0 gap-y-4 gap-x-[38px]"> */}
                {/* <div ref={masonryContainer} className="grid lg:grid-cols-4 items-start md:grid-cols-2 lg:gap-y-[38px] gap-y-4 gap-x-[38px] justify-center items-center"> */}
                <div ref={masonryContainer} className="grid items-start gap-4 lg:grid-cols-4 md:grid-cols-3 md:gap-6">
                    {reviewContent.map((item) => (
                        <div key={item.name} className="review_card">
                            <div className="flex gap-5">
                                <Image src={item.userImg} alt='user image' className='review_uesr' />
                                <div className="review_head">
                                    <h3>{item.name}</h3>
                                    <Image src={item.rating} alt='rating' className='rating' />
                                </div>
                            </div>
                            <div className="review_content mt-5">
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}