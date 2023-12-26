import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export {
    App
}