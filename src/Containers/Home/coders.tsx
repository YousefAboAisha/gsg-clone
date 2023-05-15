import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../../Components/UI/Inputs/Button";
import Heading from "../../Components/UI/Typography/Heading";
import img from "../../media/vertical.jpeg";

const Coders = () => {
  return (
    <div className="container">
      <div className="section grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 w-full">
          <Heading title="For Coders" additionalStyles="!text-3xl" />
          <p>
            The Code Academy provides intensive tech-education training,
            professional skills and job-readiness support for those looking to
            become professional coders and developers.
          </p>

          <p className="mt-4">
            Open to any one who shows the commitment, motivation and potential
            to become a full-stack developer, irrespective of past experience
            and background.
          </p>

          <div className="group flex items-center w-fit gap-4 mt-6 cursor-pointer">
            <Button
              title="Coding career"
              icon={<AiOutlineArrowRight size={25} />}
            />
            <Button
              title="Coding Course"
              icon={<AiOutlineArrowRight size={25} />}
            />
          </div>
        </div>

        <img src={img} alt="Service" className="w-full h-[80%] rounded-lg" />
      </div>
    </div>
  );
};

export default Coders;
