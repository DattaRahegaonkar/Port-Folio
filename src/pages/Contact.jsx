import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const inputClass = "w-full border border-gray-600 rounded-2xl py-3 px-5 outline-none bg-gray-800 text-gray-300 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_p2psave", "template_bqmtwxo", form.current, "B412RMHh6K69crF5M")
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message. Try again.")
      );
  };

  return (
    <main className="min-h-screen py-16 px-4 md:px-10 lg:px-20 bg-gray-900 text-white">
      <section id="contact" className="max-w-4xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold gradient-text inline-block">Contact Me</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "70px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 mx-auto mt-3 rounded-full"
            style={{ background: "linear-gradient(135deg, #6c63ff, #3b82f6)" }}
          />
          <p className="mt-4 text-sm text-gray-400">Have a project or opportunity? I'd love to hear from you.</p>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 border border-gray-700 bg-gray-800/50 backdrop-blur-sm space-y-5"
        >
          <div className="flex flex-wrap gap-4">
            <motion.input whileFocus={{ scale: 1.01 }} type="text"  name="name"    placeholder="Your Name *"  required className={`flex-1 min-w-[220px] ${inputClass}`} />
            <motion.input whileFocus={{ scale: 1.01 }} type="email" name="email"   placeholder="Your Email *" required className={`flex-1 min-w-[220px] ${inputClass}`} />
          </div>
          <motion.input   whileFocus={{ scale: 1.01 }} type="text"  name="subject" placeholder="Subject"               className={inputClass} />
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="message"
            placeholder="Your Message *"
            rows={6}
            required
            className={`${inputClass} resize-none`}
          />
          <div className="text-center pt-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(108,99,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="text-white rounded-full px-12 py-3 font-semibold transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #6c63ff, #3b82f6)" }}
            >
              <i className="fa fa-paper-plane mr-2" />Send Message
            </motion.button>
          </div>
        </motion.form>

      </section>
    </main>
  );
}
