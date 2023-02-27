// Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.

function Antras () {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
   
    const arr = dogs.sort((a, b) => b.length - a.length)


    // const List = dogs.map((item) => <p className="circle" >{item}</p>)



    return (
        <>
        <i className="dog">{arr + ''}</i>
        </>

        )
}

export default Antras;