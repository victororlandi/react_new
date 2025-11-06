import { getImageUrl } from "./Utils";

function Avatar({ /*props*/ person, size /*= 100*/ }){
    //let person = props.person;
    //let size = props.size;
    //const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    //const description = 'Gregorio Y. Zara';
    return(
        <>
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
            {/*<img
                className="avatar"
                src="htpps://i.imgur.com/1bX5QH6.jpg"
                alt="Lin Lanying"
                width={100}
                height={100}
            />
            <img
                className="Avatar"
                src={avatar}
                alt={description}
            />*/}
        </>
    );
}

export default function Profile(){
    return (
        <>
            {/*<Avatar 
                person={{ 
                    name: 'Katsuko Saruhashi', 
                    imageId: 'YfeOqp200'
                }}
            />*/}
            <Avatar
                size={80}
                person={{ 
                    name: 'Aklilu Lemma', 
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{ 
                    name: 'Lin Lanying', 
                    imageId: 'OKS67lh'
                }}
            />
        </>

    );
}