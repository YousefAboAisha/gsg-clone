import Heading from "../../Components/UI/Typography/Heading";
import img from "../../media/vertical.jpeg";

const Programs = () => {
  return (
    <div className="container">
      <Heading title={""} highLightText="Our Programs" />

      <div className="section grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 w-full">
          <Heading title="For Founders" additionalStyles="!text-3xl" />
          <p>
            Our incubation and acceleration programs help build successful
            startups and entrepreneurs that create sustainable value for
            customers and the community.
          </p>

          <p className="mt-4">
            The flagship GeeXelerator program is for budding entrepreneurs who
            are passionate about a viable concept and ready to quickly get their
            prototypes off the ground, gain traction and begin pitching for seed
            investment.
          </p>

          <div className="group flex items-center w-fit gap-4 mt-6 cursor-pointer">
            <span className="h-[2px] w-10 bg-primary group-hover:w-0 duration-500"></span>
            <Heading
              title="Read More"
              additionalStyles="!text-xl !text-primary group-hover:translate-x-2 duration-700"
            />
          </div>
        </div>

        <img src={img} alt="Service" className="w-full h-[80%] rounded-lg" />
      </div>
    </div>
  );
};

export default Programs;
