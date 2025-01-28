import "../styles/Homepage.css";
import img1 from "../images/happypeople.jpg";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4">
        <div className="container flex justify-center border-4 items-center flex-col md:flex-row p-16">
          <div className="leftside">
            <div className="left-txt max-w-[600px] text-2xl sm:text-4xl flex flex-col justify-center items-center mt-14">
              <h1 className="header-txt">Lets carry your shopping</h1>
              <p2 className="para2">
                We have been in existence for many years and we are greatly
                interested in making shopping easier for you
              </p2>
            </div>
          </div>
          <div className="rightside">
            <img
              className="w-full max-w-md sm:h-auto object-cover " // Adjusted max-width and height
              src={img1}
              alt="happyperson"
              loading="lazy"
              srcSet={`${img1} 400w, ${img1} 800w, ${img1} 1200w`} // Corrected srcSet syntax
              sizes="(max-width: 400px) 100vw, (max-width: 800px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
