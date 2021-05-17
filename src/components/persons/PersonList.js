import Person from './Person';

const PersonList = (props) => {
  return (
    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-4">
      {props.persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          character={person.character}
          profile_path={person.profile_path}
        />
      ))}
    </div>
  );
};

export default PersonList;
