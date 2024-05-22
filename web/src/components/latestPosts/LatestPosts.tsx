import { Post } from "../../models/post";
import { Button } from "../commons/button";
import { OutlinedContent } from "../outlinedContainer/OutlinedContainer";
import style from './LatestPosts.module.scss';

export function LatestPosts() {
    const posts: Post[] = [
        {date: new Date(), description: "Uma postagem interessante"},
        {date: new Date(), description: "Uma postagem super interessante"},
        {date: new Date(), description: "Uma postagem interessante"},
        {date: new Date(), description: "Uma postagem super interessante"},
        {date: new Date(), description: "Uma postagem super interessante"},
    ] 


    return (
        <OutlinedContent className={style.content}>
            <h1 className="lato-extra-bold font-size-lg line-height-default">Últimas postagens</h1>
            <ul className={style.list}>
                {posts.map((post, index) => (
                    <li key={index}>
                        {post.date.toLocaleDateString()} - {post.description}
                    </li>
                ))}
            </ul>

            <Button>Ver todas as Postagens</Button>
        </OutlinedContent>
    );
}