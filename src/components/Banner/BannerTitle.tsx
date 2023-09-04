const BannerTitle = ({ children } : {children : React.ReactElement; }) => {
  return (
    <>
      <div className="text-bold">{children}</div>
    </>
  );
};

export default BannerTitle;
