/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  console.log(product.available);

  // si available est true alors notre mission est d'afficher "en stock", sinon
  // on affichera non disponible

  return (
    <article>
      <div className="left_side">
        <img src={product.picture} alt="" />
        <div className="description">
          <h2>{product.model}</h2>
          <p>{product.description}</p>
          <button>Consulter l&apos;article</button>

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
