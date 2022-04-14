import MainLayout from "../../components/layouts/Main";
import { Hero } from "../../components/Components";
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
    </MainLayout>
  );
};
export default index;
