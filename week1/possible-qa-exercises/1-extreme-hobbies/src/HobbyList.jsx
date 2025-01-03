
import Hobby from "./Hobby";

const HobbyList = () => {
const hobbies = ["Reading", "Gardening", "Cooking", "Gaming"];

    return (
        <div>
        <h2>My Hobbies</h2>
        <ul>
            {hobbies.map((hobby, index) => (
            <Hobby key={index} hobby={hobby} />
            ))}
        </ul>
        </div>
    );
};

export default HobbyList;
