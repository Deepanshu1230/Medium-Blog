import shinchan from "../images/crayon_shin_chan_dance_20250712_014142_0_v2.gif";

export const NewLoader = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <img
        src={shinchan}
        alt="Loading..."
        className="w-32 h-32"
      />
      <div className="font-bold text-3xl">Loading..</div>
    </div>
  );
};

