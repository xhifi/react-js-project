import MainLayout from "../../components/layouts/Main";
import { Hero } from "../../components/Components";

const index = () => {
  return (
    <MainLayout>
      <Hero heading="Read Our Blog" description="We post routine updates on our application as well as our thoughts on ReactJs and all the relevant libraries." />
    </MainLayout>
  );
};
export default index;
