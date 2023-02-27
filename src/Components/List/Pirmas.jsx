/* Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate. */

function Pirmas () {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
   
    const List = dogs.map((item) => <p className="square" >{item}</p>)



    return (
        <>
        <i className="dog" >{List}</i>
        </>

        )
}

export default Pirmas;

