import LandingCard from "../../Components/UI/Cards/landingCard";
import Heading from "../../Components/UI/Typography/Heading";

const Landing = () => {
  return (
    <div className="relative rounded-br-[1000px] w-full min-h-[90vh] mt-[70px] flex justify-center items-center bg-landing-image bg-cover bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#0000009a] before:rounded-br-[1000px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:mt-0">
        <Heading
          title="Home of the Middle East's Top Tech Talent"
          details="Since 2011, we have been propelling Palestine’s digital economy and future technology leaders to transcend borders through cutting edge peer-led education and true grit."
          additionalStyles="!text-[#FFF]"
        />

        <LandingCard />
      </div>
    </div>
  );
};

export default Landing;
