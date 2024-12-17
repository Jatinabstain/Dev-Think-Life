import ArticleCard from '../articles/articleCard';
import { ArticleItem } from "@/types/articleCardTypes";
import articleImg from '../../../../../public/assets/card-1.jpg';
import Link from 'next/link';


const articles: ArticleItem[] = [
    { id: '1', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read",  href: "", image: articleImg },
    { id: '2', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read",  href: "", image: articleImg },
    { id: '3', title: "Nike Sneakers", date: "4 Feb 2024", content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.  Amet minim mollit non deserunt", time: "5 Minute Read",  href: "", image: articleImg }
]

export default function ArticlesHome() {
    return (
        <section className="page_section pb-[128px]">
            <div className="mx-auto max-w-7xl px-8">
                <div className="heading mb-8">
                    <h3>Our Recent Articles</h3>
                </div>
                <ArticleCard articles={articles} />

                <Link href="#" className="block w-fit mx-auto border mt-8 border_primary_light text_primary py-2.5 px-4 rounded font-medium">Learn More</Link>
            </div>
        </section>
    );
}