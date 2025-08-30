import React from "react";
import Button from "./Button";
import Input from "./Input";
import { GoPaperAirplane } from "react-icons/go";
import { motion } from "framer-motion";

export default function EmailForm() {
  function sendToWhatsApp(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Format pesan WhatsApp
    const text = `Halo Fauzan, saya ingin menghubungi Anda untuk keperluan kerja/hire.\n\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`;
    const phone = "62895339454561";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    e.target.reset();
  }

  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <motion.form
        onSubmit={sendToWhatsApp}
        className="space-y-5 w-full"
        variants={formVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <Input id="name" label="Name" placeholder="Insert your name" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="Insert your email"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Input
            id="message"
            type="textarea"
            label="Message"
            placeholder="Please write your message here"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-start">
          <Button
            type="submit"
            label={
              <span className="flex items-center gap-3">
                Send <GoPaperAirplane />
              </span>
            }
            actions="button"
          />
        </motion.div>
      </motion.form>
    </>
  );
}