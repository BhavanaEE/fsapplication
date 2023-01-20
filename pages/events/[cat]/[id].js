import Image from 'next/image';

const EventPage = ({ data }) => {
    console.log(data);
    return (
    <div>
        <Image width={1000} height={300} alt={data.title} src={data.image} />
        <h1>{data.title}</h1>
        <p>{data.description}</p>
    </div>
        
    )
};

export default EventPage;

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json');
    const allPaths = allEvents.map(ev => {
        return {
            params: {
                cat: ev.city,
                id: ev.id,
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false,
    }
}


export async function getStaticProps(context) {
    console.log("context", context);
    const id = context?.params.id;
    const { allEvents } = await import('/data/data.json');
    console.log(allEvents);
    const data = allEvents.find(ev => ev.id === id);
    console.log("data = ", data);
    return {
        props: { data, pageName: id }
    };
}
