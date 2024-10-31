import robotImg from "../assets/hero/robot.jpg";

export default function RobotHeroHolder() {
  return (
    <div
      id="image-holder"
      className="bg-gradient-to-tr from-yellow-500 to-pink-500 h-[30rem] overflow-hidden rounded-2xl"
    >
      <div className="my-1 mx-14 backdrop-blur-xl bg-blue-800 rounded-2xl">
        <div className="pb-5 px-10">
          <div>
            <img src={robotImg} alt="" className="overflow-clip w-full" />
            {/* <div>This div for that loading bar</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
