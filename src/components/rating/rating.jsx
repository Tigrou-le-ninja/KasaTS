const Rating = () => {
  return (
    <div className="rating">
      <h1>Rating Page</h1>
    </div>
  );
};

export default Rating;

{
  [...Array(5)].map((_, i) => (
    <p key={i}>
      {/* Ici on compare le score et i et on affiche les étoiles en fonction
          {i < rating ? "★" : "☆"} => Dans l'idée l'étoile remplie / vide est à aller chercher sur Figma */}
    </p>
  ));
}
