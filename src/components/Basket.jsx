/* eslint-disable react/prop-types */
export default function Basket({ basket }) {
  console.log("DEPUIS MON COMPOSANT BASKET", basket);
  return (
    <>
      <h1>Panier - composant basket</h1>
      <ul>
        {basket.map((article) => (
          <li key={article.id}>
            {article.model} - {article.price}€
          </li>
        ))}
      </ul>
      <h2>
        Total : {basket.reduce((sum, product) => sum + product.price, 0)}€
      </h2>
    </>
  );
}
