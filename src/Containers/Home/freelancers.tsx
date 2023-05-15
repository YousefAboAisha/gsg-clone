import Heading from "../../Components/UI/Typography/Heading";
import img from "../../media/vertical.jpeg";

const Freelancers = () => {
  return (
    <div className="container">
      <div className="section grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={img} alt="Service" className="w-full h-[80%] rounded-lg" />
        <div className="flex flex-col gap-4 w-full">
          <Heading title="For Freelancers" additionalStyles="!text-3xl" />
          <p>
            The Skylancer Academy upskills talented individuals across a variety
            of fields to succeed in entering the digital workforce.
          </p>

          <p className="mt-4">
            The program will help build a solid foundation to start working as a
            freelancer immediately, teaching digital marketing fundamentals, how
            to navigate online market places as well as the professional skills
            that complement technical knowledge.
          </p>

          <div className="group flex w-fit items-center gap-4 mt-6 cursor-pointer">
            <span className="h-[2px] w-10 bg-primary group-hover:w-0 duration-500"></span>
            <Heading
              title="Read More"
              additionalStyles="!text-xl !text-primary group-hover:translate-x-2 duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancers;
