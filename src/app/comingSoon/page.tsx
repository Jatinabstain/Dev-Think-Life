import Image from 'next/image'
import Header from '../common/header';
import Footer from '../common/footer';
import ComingSoon from '../../../public/assets/coming-soon.svg';
import FacebookDark from '../../../public/assets/facebook-dark.svg';
import InstagramDark from '../../../public/assets/instagram-dark.svg';
import Link from 'next/link';

export default function comingSoon() {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-7xl px-8">
                <div className="min-h-screen bubble_bg flex flex-wrap flex-col justify-center">
                    <div className="comming_soon">
                        <Image src={ComingSoon} alt='coming soon' className='mx-auto mb-7' />
                        <p>We are going to launch our website very soon. <br />Stay Tuned!</p>

                        <div className="launch">
                            <h3 className='mb-4'>Get notified when we launch</h3>
                            <div className="flex gap-4 justify-center items-center">
                                <input type="text" className='form-input max-w-[308px] w-full' placeholder='Enter your email address' />
                                <Link href="" className='border border_primary text-white bg_primary py-2.5 px-4 rounded font-medium btn_shadow'>Notify Me</Link>
                            </div>
                        </div>

                        <div className="socail mt-9">
                            <div className="flex justify-center items-center gap-4">
                                <Link href="#" className=''>
                                    <Image src={FacebookDark} alt='facebook' />
                                </Link>
                                <Link href="#" className=''>
                                    <Image src={InstagramDark} alt='instagram' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}