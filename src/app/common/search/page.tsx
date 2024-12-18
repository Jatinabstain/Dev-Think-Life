import Link from 'next/link';
import Image from 'next/image';
import Search from '../../../../public/assets/search.svg'

export default function search() {
    return (
        <>
            <div className="mt-16 mb-8 flex gap-4 justify-center">
                <input type="text" className="form-input max-w-xl w-full" placeholder='Search' />
                <Link href="#" className='border border_primary text-white bg_primary py-2.5 px-4 rounded font-medium btn_shadow flex flex-col justify-center items-center'>
                    <Image src={Search} alt="search" className='input_icon' />
                </Link>
            </div>
        </>
    );
}