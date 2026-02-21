import myImg from "../assets/Image.png";
export default function Home() {
  return (
    <div className="w-full bg-Img bg-MinWarmWhite min-h-screen overflow-hidden">
      <div className="items-start  lg:w-full p-5 pt-6 flex bg-[linear-gradient(155deg,#1e1e1e,#FBF5E6)] lg:items-center justify-center gap-3.5 h-dvh relative ">
        <div className="w-8/3 h-full ">
          <img
            src={myImg}
            className=" trans lg:h-full w-full object-contain rounded-full  bg-[linear-gradient(155deg,#555555,#FBF5E6,#555555)] "
            alt=""
          />
        </div>
        <div className="   w-8/4 h-full flex flex-col flexcol gap-5 items-start justify-center">
          <h1 className="text-5xl leading-16 font-bold mb-4 text-MinBorder">
            Hi <br /> I’m <span className="text-MinGreen"> Abd Elrhman</span>{" "}
            Mouhamed
          </h1>
          <p className="text-xl text-MinTextSecondary tracking-wide font-Sn font-bold">
            <span className=" text-MinGreenDark font-extrabold tracking-tight">
              {" "}
              Front-End Developer{" "}
            </span>{" "}
            building professional websites with modern interfaces, fast
            performance, and smooth user experience.
          </p>{" "}
          <div className="">
            <button className=" ">View My Work</button>
            <button className=" ">Contact Me</button>
          </div>{" "}
        </div>{" "}
        <div className="h-full w-1/2 absolute top-0 right-0  flex flex-col items-center justify-center  md:hidden ">
          <h1 className="text-3xl leading-10 font-bold mb-4 text-MinTextSecondary ">
            Hi <br /> I’m <span className="text-MinGreen"> Abd Elrhman</span>{" "}
            Mouhamed
          </h1>
          <p className="text-xl text-MinTextSecondary tracking-wide font-Sn font-bold">
            <span className=" text-MinGreenDark font-extrabold tracking-tight">
              {" "}
              Front-End Developer{" "}
            </span>{" "}
            building professional websites with modern interfaces, fast
            performance, and smooth user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
