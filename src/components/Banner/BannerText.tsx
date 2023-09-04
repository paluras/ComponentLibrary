const BannerText = ({ children } : {children : React.ReactElement; } ) => {
  return (
    <>
      {" "}
      <div className="text-description">{children} </div>
    </>
  );
};

export default BannerText;
