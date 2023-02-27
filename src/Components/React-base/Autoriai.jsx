/* Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai. */


function Autoriai ({book1, book2, color}) {

    return (
        <>
        <h1 style={{
            color: color
        }} >
            M. Tvenas "{book1}"
        </h1>
        <h2 style={{
            color: color
        }}>
            Ž. Vernas "{book2}"
        </h2>
        </>

        )
}

export default Autoriai;
