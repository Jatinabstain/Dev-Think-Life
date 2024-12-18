import Image from 'next/image'
import Header from '../common/header';
import Footer from '../common/footer';
import errorImg from '../../../public/assets/404.svg';
import Link from 'next/link';

export default function error() {
    return (
        <>
            <Header />
            <div className="mx-auto max-w-7xl px-8">
                <div className="min-h-screen bubble_bg flex flex-wrap flex-col justify-center">
                    <div className="comming_soon">
                        <Image src={errorImg} alt='coming soon' className='mx-auto mb-[72px]' />
                        <div className="error_content">
                            <h3 className='mb-6'>ERROR <span className='text_primary'>404</span></h3>
                            <p className='mb-0'>Sorry, the page you are searching <br />for cannot be found</p>
                            <Link href="/" className='mt-6 border border_primary text-white bg_primary py-2.5 px-4 rounded font-medium btn_shadow mx-auto block w-fit'>Go Back</Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}