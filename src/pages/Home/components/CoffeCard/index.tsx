interface CoffeCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  tags: string[];
}

export function CoffeCard({
  name,
  description,
  image,
  price,
  tags,
}: CoffeCardProps) {
  return (
    <li>
      <img src={image} alt={name} />
      {tags.map((tag) => (
        <span key={`${name}-${tag}`}>{tag}</span>
      ))}
      <strong>{name}</strong>
      <p>{description}</p>
      <span>R${price}</span>
      <button>-</button>
      <span>1</span>
      <button>+</button>
      <img src="" alt="carrinho" />
    </li>
  );
}
