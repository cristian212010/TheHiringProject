import Card from './components/cards/card.components'
import productData from './data/productData.js'

function App() {
    console.log(productData);
    return (
        <section class='containerCards'>
            {productData.map((e, index) => (
                <Card key={index} data={e} />
            ))}
        </section>
    );
}

export default App;