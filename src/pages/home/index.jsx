import MainLayout from "../../components/layouts/Main";
import { Hero, CardsLayout, Sprite } from "../../components/Components";

const index = () => {
  return (
    <MainLayout>
      <Hero
        heading="Sticky Notes 4 U"
        description="Sticky notes are the most important part of our life. We need to have a track of our daily routine and subroutines. This website is actually a web application where you can save your notes to the cloud and retrieve them from any device which can run a browser."
        btnText="Read more About Us"
        btnLink="/about"
        img="https://bityl.co/Bn3D"
      />
      <CardsLayout>
        {[...Array(9)].map((item, index) => {
          return (
            <Sprite
              heading="Card Heading"
              description="This happens to be a very very looooong description for the following card. Please focus on the description as it is very very long."
              img="https://bityl.co/Bo2D"
            />
          );
        })}
      </CardsLayout>
    </MainLayout>
  );
};
export default index;
