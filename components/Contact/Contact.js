import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion, scale } from "motion/react"
function Contact() {
  const [result, setResult] = useState("");
  const { resolvedTheme } = useTheme();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4928f807-6e23-4c93-8c40-e5f2161d8fc1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact" className={`w-full px-[12%] py-10
        scroll-mt-20 ${resolvedTheme === 'dark' ? 'dark:bg-none' : 'bg-[url("/footer-bg-color.png")]'} bg-no-repeat bg-center text-lg [font-family:'Ovo',serif] `}>
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo">Contact Me</motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >Get in touch

      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-15 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments, or feedback,
        Please use the form below
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            name="name"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400
                    rounded-md  ${resolvedTheme === 'dark' ? 'bg-[#2a004a]/30' : 'bg-white'}`}
            type="text" placeholder="Enter your name" required />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            name="email"
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400
                    rounded-md  ${resolvedTheme === 'dark' ? 'bg-[#2a004a]/30' : 'bg-white'}`}
            type="email" placeholder="Enter your email" required />

        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          name="message"
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md
                 ${resolvedTheme === 'dark' ? 'bg-[#2a004a]/30' : 'bg-white'} mb-6`}
          row="6"
          placeholder="Enter your message" required />

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2
                  text-white rounded-full mx-auto  duration-500 ${resolvedTheme === 'dark' ? 'bg-transparent border-[0.5px] hover:bg-[#2a004a]' : 'bg-black/80 hover:bg-black'}`}
          type="submit"
        >
          Submit
          <Image src={assets.right_arrow_white} alt='Icon' className='w-4' />
        </motion.button>
        <motion.p
        
        >{result}

        </motion.p>
      </motion.form>
    </motion.div>
  )
};

export default Contact;