import PropTypes from 'prop-types';
const Person = ({ person }) => {
    
    return (
        <div>
            {person && ( // && syntax means if person is null, nothing will be rendered
                <ul>
                    <li>First Name: {person.first_name}</li>
                    <li>Last Name: {person.last_name}</li>
                    <li>Email: {person.email}</li>
                </ul>
            )}
        </div>
    );
}

Person.propTypes = {
    person: PropTypes.shape({
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })
}

export default Person;