interface TestimonialType {
  theStyle: string;
  children: React.ReactNode;
}

const TestimonialText = ({ children, theStyle }: TestimonialType) => {
  return (
    <>
      {" "}
      <div className={`text-big ${theStyle}`}>{children}</div>
    </>
  );
};

export default TestimonialText;
