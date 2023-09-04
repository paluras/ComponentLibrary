import "./App.css";
import Badge from "./components/Badge/Badge";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Banner from "./components/Banner/index.js";
import CardDescription from "./components/Card/CardDescription.tsx";
import CardImage from "./components/Card/CardImage.tsx";
import CardTitle from "./components/Card/CardTitle.tsx";
import Card from "./components/Card/index.ts";
import Testimonial from "./components/Testimonial/Testimonial.tsx";

function App() {
  return (
    <>
      <Badge shape={"square"} color={"white"}>
        Hello
      </Badge>
      <br />
      <br />
      <Banner status={"neutral"}>
        <Banner.Title>Congrats!</Banner.Title>
        <Banner.Text>You Done It , Here is a candy for you !</Banner.Text>
      </Banner>

      <br />
      <br />

      <Card>
        <CardImage color="#eff6ff">
          <img src="./neutral.svg" alt="" />
        </CardImage>
        <div className="card-inside">
          <CardTitle>Check this Title</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cum
            quae earum provident{" "}
          </CardDescription>
        </div>
      </Card>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Testimonial
        img={"image.jfif"}
        name={"Caca Dandana"}
        job={"Coaechipier"}
        logo={""}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla
        vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing
        nunc urna, sit.
      </Testimonial>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Testimonial
        img={""}
        name={"Caca Danadana"}
        job={"Coaechipier"}
        logo={"./logo.svg"}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla
        vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing
        nunc urna, sit.
      </Testimonial>
    </>
  );
}

export default App;
