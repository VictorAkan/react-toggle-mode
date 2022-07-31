import moment from 'moment'

interface Art{
    title:string;
    snippet:string;
    date:any;
    length:number;
}

const Article = ({ title, snippet, date, length }:Art) => {
    return (
        <article className="post mt-10">
            <h2 className="capitalize text-red-400 text-4xl font-bold text-left">{title}</h2>
            <div className="post-info text-left">
                <span className="italic">{moment(date).format('dddd Do, YYYY')}</span>
                <span className="italic ml-4">{length} min read</span>
            </div>
            <p className="text-left">{snippet}</p>
        </article>
    )
}

export default Article