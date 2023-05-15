import img2 from "../../../media/vertical.jpeg";

const ServiceCard = () => {
  return (
    <div className="relative flex flex-col gap-4 w-full">
      <div className="group relative w-full h-[400px] rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl shadow-black duration-[.7s] linear">
        <img
          src={img2}
          alt="faw"
          className="h-full w-full rounded-lg duration-300 group-hover:scale-125 group-hover:duration-[7s]"
        />
        <div className="absolute bottom-0 h-fit w-full left-[50%] translate-x-[-50%] z-10 p-4 text-center text-white rounded-b-lg overflow-hidden">
          <h2 className="text-3xl">Hire talent</h2>
          <p className="text-white z-20">Hire a developer</p>
        </div>
        <span className="group-hover:opacity-100 opacity-0 h-[45%] bg-gradient-to-t from-primary to-transparent absolute duration-[.7s] transition-opacity left-0 bottom-0 w-full rounded-b-lg"></span>
        <span className="absolute duration-700 bg-gradient-to-t from-[#000] to-transparent h-[60%] left-0 bottom-0 w-full rounded-b-lg"></span>
      </div>
      <div className=" text-text_light">
        We provide over 1,000 hours of intensive coding and professional skills
        training to create Palestine’s best junior developers. Our customer
        success team will assess your requirements and vet the best candidates
        for your needs.
      </div>
    </div>
  );
};

export default ServiceCard;
