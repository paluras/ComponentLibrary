import "./Testimonial.style.css";
import TestimonialImg from "./TestimonialImg";
import TestimonialNoImg from "./TestimonialNoImg";

import TestimonialText from "./TestimonialText";


interface TestimonialType  {
    img:string
    children: React.ReactNode
    name: string
    job: string
    logo:string
}

const Testimonial = ({ img, children , name , job , logo } : TestimonialType) => {
  return (
    <>
      {img ? (
        <TestimonialImg img={img} name={name} job={job} >
          <TestimonialText theStyle={""}>{children}</TestimonialText>
   
        </TestimonialImg>
      ) : (
        <TestimonialNoImg  name={name} job={job} logo={logo}>
          {" "}
          <TestimonialText theStyle={"white"}>{children}</TestimonialText>
        </TestimonialNoImg>
      )}
    </>
  );
};

export default Testimonial;
