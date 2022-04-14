import MainLayout from "../../components/layouts/Main";
import { Hero } from "../../components/Components";

const AboutPage = () => {
  return (
    <MainLayout>
      <Hero
        heading="Learn more about us"
        description="We are a rag-tag team of 4 developers who have been working on this project day and night since past 10 days. We would like to understand all the underlying technologies associated with web development. Specifically ReactJs and SQL Databases."
        btnLink="/contact"
        btnText="Contact Us today"
      />
    </MainLayout>
  );
};

export default AboutPage;
