import Image from "next/image";
import nameLogo from "@/public/assets/nameLogo/nameLogo.svg";
import coryRightIcon from "@/public/assets/icons/copyright.svg";

function Contact() {
  return (
    <>
      <section className="  mt-24 pt-10 md:pt-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col  justify-center  items-center  text-center ">
              <p className="workTogether  inline-block font-medium py-4 text-2xl lg:text-4xl ">
                Let's work together.
              </p>
              <a
                href="mailto:abderaoufa88@gmail.com@example.com"
                className="social inTouch hover:text-[#d3d3d3]  text-[#6E6E6E] cursor-pointer font-medium pb-4 text-2xl lg:text-4xl   "
              >
                Get in touch.
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="flex footer  my-8 mx-5 md:mx-11 justify-between items-center mt-64">
        <div className="brand flex items-center font-medium text-black text-sm">
          <Image
            className="cursor-pointer flex justify-center items-center   w-10"
            src={nameLogo}
            alt=""
          />
          <Image src={coryRightIcon} className="w-3 ml-3  mr-2" alt="" />
          <p className=" text-md">Khamoum Abderraouf 2025</p>
        </div>

        <div className="socials flex justify-center items-center font-medium text-black text-sm ">
          <a
            href=" https://www.linkedin.com/in/abderaouf-khamoum-657527260/"
            className=" social px-3"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abderaoufa88@gmail.com@example.com"
            className="social"
          >
            Mail
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
