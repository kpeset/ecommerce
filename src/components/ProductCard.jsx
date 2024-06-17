/* eslint-disable react/prop-types */
export default function ProductCard({ product, tools }) {
  const addArticle = () => {
    tools.setBasket((prevBasket) => [...prevBasket, product]);
  };

  return (
    <article>
      <div className="left_side">
        <img src={product.picture} alt={`Image d'une ${product.model}`} />
        <div className="description">
          <h2>{product.model}</h2>
          <p>{product.description}</p>
          <button onClick={product.available === true ? addArticle : null}>
            Ajouter l&apos;article
          </button>

          {product.available === true ? (
            <h4 className="available">Disponible</h4>
          ) : (
            <h4 className="not_available">Non disponible</h4>
          )}
        </div>
      </div>
      <div className="price">
        <h3>{product.price} €</h3>
      </div>
    </article>
  );
}
