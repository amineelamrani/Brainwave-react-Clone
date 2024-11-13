import check from "../assets/check-02.svg";
import gridBg from "../assets/grid.png";
import loading from "../assets/loading-01.svg";
import MultiColorCover from "./MultiColorCover";

export default function MilestoneElement({
  wrapIt = false,
  highlighted = false,
  image,
  title,
  text,
}) {
  const progress = wrapIt ? "IN PROGRESS" : "DONE";
  return (
    <div
      className={` sm:px-2 py-1 w-full md:w-1/2 ${
        wrapIt && "md:translate-y-24"
      }`}
    >
      {highlighted && (
        <MultiColorCover>
          <div className="rounded-3xl p-10 flex flex-col relative bg-gradient-to-t from-black/50 to-black/0">
            <div className="flex justify-between">
              <p className="uppercase">[ may 2023 ]</p>
              <div className="flex bg-white px-3 py-1 rounded-lg text-black gap-2">
                <img src={check} alt="" />
                <p>{progress}</p>
              </div>
            </div>
            <img src={image} alt="" className="w-full py-8" />
            <div>
              <h1 className="text-3xl text-white pb-5">{title}</h1>
              <p>{text}</p>
            </div>
            <img
              src={gridBg}
              alt=""
              className="absolute left-0 right-0 top-5 "
            />
          </div>
        </MultiColorCover>
      )}
      {!highlighted && (
        <div className="rounded-3xl border-[1px] border-gray-500/50 p-10 flex flex-col relative bg-gradient-to-t from-black/50 to-black/0">
          <div className="flex justify-between">
            <p className="uppercase">[ may 2023 ]</p>
            <div className="flex bg-white px-3 py-1 rounded-lg text-black gap-2">
              <img src={check} alt="" className={`${wrapIt ? "hidden" : ""}`} />
              <img
                src={loading}
                alt=""
                className={`${wrapIt ? "" : "hidden"}`}
              />
              <p>{progress}</p>
            </div>
          </div>
          <img src={image} alt="" className="w-full py-8" />
          <div>
            <h1 className="text-3xl text-white pb-5">{title}</h1>
            <p>{text}</p>
          </div>
          <img src={gridBg} alt="" className="absolute left-0 right-0 top-5 " />
        </div>
      )}
    </div>
  );
}
