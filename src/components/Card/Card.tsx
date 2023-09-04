import "./Card.style.css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="card-container">{children}</div>
    </>
  );
};

export default Card;
