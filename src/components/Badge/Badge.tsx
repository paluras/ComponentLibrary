import "./Badge.style.css";

interface BadgeType {
  color: string;
  shape: string;
  children: React.ReactNode;
}

const Badge = ({ color, shape = "", children }: BadgeType) => {
  return (
    <>
      <div className={`badge-container ${shape} ${color}`}>
        <div className="badge-text">{children}</div>
      </div>
    </>
  );
};

export default Badge;
