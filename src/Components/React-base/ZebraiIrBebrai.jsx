import  rand from '../../Functions/Rand';
/* Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai. */


function Gyvunai ({color}) {

    

    return (
        <h1 style={{
            color: rand(0, 2) ? 'blue' : 'red'
        }}
        >Zebrai ir Bebrai </h1>
    )
}
export default Gyvunai;