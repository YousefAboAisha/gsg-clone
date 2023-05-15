import VideoHero from "../../../Containers/Home/video";

const LandingCard = () => {
  return (
    <div className="relative felx flex-col items-center justify-center gap-4 p-4 bg-white rounded-2xl shadow-3xl shadow-black border">
      <VideoHero />

      <p className="mt-4">
        Our community of mentors, investors, and employer partners spans the
        globe. Watch this short video to learn more about how your skills can
        make a life changing impact.
      </p>
    </div>
  );
};

export default LandingCard;
