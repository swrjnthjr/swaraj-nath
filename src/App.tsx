import {
  AchievementsAndEducation,
  CareerTimeline,
  FeaturedProjects,
  Footer,
  Header,
  Hero,
  TechnicalSkills,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProjects />
      <TechnicalSkills />
      <CareerTimeline />
      <AchievementsAndEducation />
      <Footer />
    </>
  );
};

export default App;
