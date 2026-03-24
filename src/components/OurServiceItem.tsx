interface OurServiceItemProps {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

export const OurServiceItem = ({ title, description, imageUrl, alt }: OurServiceItemProps) => {
  return (
    <article className="card card-compact bg-base-100 shadow-md">
      <figure>
        <img
          src={imageUrl}
          alt={alt}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://via.placeholder.com/1200x800?text=${encodeURIComponent(title)}`;
          }}
        />
      </figure>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
};
