import robotImg from "../assets/hero/robot.jpg";

// How to do it :
// create div 1 => gradient
// create div 2 => blur
// create div3 => blurred also
//create a div with an absolute position and put it at the top of the divs

export default function RobotHeroHolder() {
  return (
    <div
      id="image-holder"
      className="relative h-[32rem] w-full mx-auto rounded-3xl"
    >
      <div className="bg-gradient-to-tr from-yellow-200 to-pink-600 h-[32rem] w-full rounded-3xl">
        <div className="h-10 backdrop-blur-xl bg-primary-content/80 rounded-t-3xl mx-1 translate-y-1"></div>
        <div className="h-[29rem] backdrop-blur-xl bg-primary-content/50 mx-24 rounded-b-3xl"></div>

        <div className="h-[27rem] backdrop-blur-3xl bg-primary-content/80  mx-10 translate-y-[-29rem] rounded-b-3xl"></div>
      </div>
      <div
        className="absolute top-10 left-1 right-1 h-[25rem] bg-cover bg-no-repeat bg-top rounded-b-3xl"
        style={{ backgroundImage: `url(${robotImg})` }}
      ></div>
      {/* <div className="absolute top-0 "></div> */}
    </div>
  );
}
