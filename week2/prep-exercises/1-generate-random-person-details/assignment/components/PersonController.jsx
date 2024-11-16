import { useState, useEffect } from 'react';
import Person from '../components/Person';

const PersonController = () => {
    const [person, setPerson] = useState(null)
    
    const getPerson = async () => {
        try {
            const response = await fetch('https://www.randomuser.me/api?results=1');
            const data = await response.json();

            const formattedPerson = {
                first_name : data.results[0].name.first,
                last_name : data.results[0].name.last,
                email : data.results[0].email,
            };
            setPerson(formattedPerson); // since we only request 1 result, we take the first item
        } catch (error) {
            console.error("Error fetching person:", error);
        }
    };


useEffect(() => {
    getPerson();
}, []); // empty array means this effect will only run once

return <Person person={person} />
}

export default PersonController;

