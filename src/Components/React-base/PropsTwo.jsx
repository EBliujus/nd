/* Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage. */


function propsTwo ({random1, random2}) {
    
    return (
        <>
            <h1>Miskas - {random1}</h1>

            <h2>Giria - {random2}</h2>
        </>
    )
}

export default propsTwo;