import Image from "next/image";
import nameLogo from "@/public/assets/nameLogo/nameLogo.svg";
import coryRightIcon from "@/public/assets/icons/copyright.svg";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <section className="  mt-24 pt-10 md:pt-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col  justify-center  items-center  text-center ">
              <motion.p 
              
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
               className="workTogether  inline-block font-medium py-4 text-2xl lg:text-4xl ">
                Let's work together.
              </motion.p>
              <motion.a
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay:0.1 }}
              viewport={{ once: true }}
                href="mailto:abderaoufa88@gmail.com@example.com"
                className="social hover:text-[#8a8989]    text-black/90 cursor-pointer font-medium pb-4 text-2xl lg:text-4xl   "
              >
                Get in touch.
              </motion.a>
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
