import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="p-5">
      <Navigation />
      <Hero heading="Shifa's Nexus" description="Veri kool" btnRef="/about" btnText="Lets Meet" img="https://bityl.co/BaU0" imgAlt="Some Image" />
      <CallToAction
        title="Lorem Ipsum"
        description="dolor sit amet aksjdbsadbaskdbsahjkdba shjkdsahjkdbasjhkdbasdhj kabsjkhdsadjkhsadjkhasdj khsajkhsadjasghkdvashjkdvsadvas hjgdvashgdsvahgjsavdghjs avdhjgsavdhjgsavdhjgasvdhgjasvdh gsavdsghajv"
        btnRef="/about"
        btnText="Read About Us"
      />
      <hr />
      <CallToAction title="Namrah's Dojo" description="Culinary Crunch and Tasty Shrooms" btnRef="/contact" btnText="Come Meet me at the Dojo" />
      <hr />
      <CallToAction title="Some Other title" description="A Very short descriiption" btnRef="/contact" btnText="Just Contact Please" />
    </div>
  );
}

export default App;
