import Image from "next/image";
import book from './../public/icons/book.svg'
import music from './../public/icons/music.svg'

function ActivityItem({ data, id }) {
    const icons = [book, music]
    const names = ['book', 'music']
    return ( <div>
        <Image src={icons[id]} height={40} width={40} alt={"other image"}/> 
        <p><strong>{data.verb}</strong> <a href={data.link}>{data.subject}</a></p>
        <div dangerouslySetInnerHTML={data.html}/>
    </div> );
}

export default ActivityItem;