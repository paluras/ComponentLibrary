

interface TestimonialType  {
 
  children: React.ReactNode
  name: string
  job: string
  logo: string
}

const TestimonialNoImg = ({children , name, job, logo} : TestimonialType) =>{
    return (
         <>
          <div className="testimonial-container-NOIMG">
          <div className="logo">
            <img  width="180"
              height="32" src={logo} alt="" />
            
          </div>
          {children}
          <div className="container-person">
            <div className="no-name">{name}</div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M11 0H14L9 20H6L11 0Z" fill="#2E59F3" />
            </svg>

            <div className="no-job">{job}</div>
          </div>

          <img className="texture" src="texture.svg" alt="" />
        </div>
         </>
    )
}

export default TestimonialNoImg