import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p2psave", // replace with your actual service ID
        "template_bqmtwxo", // replace with your actual template ID
        form.current,
        "B412RMHh6K69crF5M" // replace with your actual public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <main className="min-h-screen bg-[#F2F2FC] text-[#302e4d] py-10 px-4 md:px-10 lg:px-20">
      <section id="contact" className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-between text-center gap-y-12 mb-16">
          <div className="w-full sm:w-1/3 px-4">
            <div className="text-4xl mb-3">
              <i className="fa fa-map-marker" />
            </div>
            <h4 className="text-lg font-bold mb-1">Address</h4>
            <p className="text-[#504e70]">Pune, Maharashtra</p>
          </div>
          <div className="w-full sm:w-1/3 px-4">
            <div className="text-4xl mb-3">
              <i className="fa fa-phone" />
            </div>
            <h4 className="text-lg font-bold mb-1">Call Us On</h4>
            <p className="text-[#504e70]">+99 **********</p>
          </div>
          <div className="w-full sm:w-1/3 px-4">
            <div className="text-4xl mb-3">
              <i className="fa fa-envelope" />
            </div>
            <h4 className="text-lg font-bold mb-1">Email</h4>
            <p className="text-[#504e70]">dattarahegaonkar09@email.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 max-w-4xl mx-auto px-4"
        >
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className="flex-1 min-w-[250px] border border-[#d4d4e3] rounded-full py-3 px-6 text-[#504e70] outline-none focus:shadow-lg bg-white w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="flex-1 min-w-[250px] border border-[#d4d4e3] rounded-full py-3 px-6 text-[#504e70] outline-none focus:shadow-lg bg-white w-full"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            className="w-full border border-[#d4d4e3] rounded-full py-3 px-6 text-[#504e70] outline-none focus:shadow-lg bg-white"
          />
          <textarea
            name="message"
            placeholder="Your Message*"
            rows={6}
            required
            className="w-full border border-[#d4d4e3] rounded-3xl py-3 px-6 text-[#504e70] outline-none focus:shadow-lg resize-none bg-white"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#302e4d] text-white rounded-full px-10 py-3 font-semibold hover:shadow-md transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
