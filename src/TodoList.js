const today = new Date();

function formatDate(date){
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList(){
    const name = 'Hedy Lamarr'
    return(
        <div style={person.theme}>
            <h1>To Do List for {formatDate(today)}</h1>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y.Zara"
            />
            <ul style={{
                backgroundColor: 'black',
                color: 'pink'
            }}>
                <li>Improve the videophone</li>
                <li>Prepare Aeronautics lectures</li>
                <li>Work on the alcohol-fuelled</li>
            </ul>
        </div>
    );
}