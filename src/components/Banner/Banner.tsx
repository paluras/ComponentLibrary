
import "./Banner.style.css";

interface BannerType {
  
  status: string;
  children : React.ReactNode;


}

const Banner = ({children , status }: BannerType) => {
  return (
    <>
      <div className={`banner-container ${status}`}>
        <div className="left-icon">
          <img src={`./${status}.svg`} alt="" />
        </div>
        <div className="right-text">{children}</div>
      </div>
    </>
  );
};

export default Banner;
