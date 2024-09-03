"use client";
import { Container, NewLetter, Section } from "@/components";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const emailRegex = /^[A-Za-z0-9. _%+-]+@[A-Za-z0-9. -]\. [A-Z]{2,4}$/i;

const validateEmail = (email: string) => {
  return emailRegex.test(email);
};

const ContactPage = () => {
  const serviceID = "service_9jjuu2n";
  const templateID = "template_zrlzxr4";
  const userID = "jgD1dSgL1VKS1UTD5";

  const form = useRef<HTMLFormElement | null>(null);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [msg, setMsg] = useState<string>("");

  const [loader, setLoader] = useState<boolean>(false);

  const clearInput = () => {
    setEmail("");
    setMsg("");
    setName("");
  };

  const handleClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      setLoader(true);
      try {
        await emailjs.sendForm(serviceID, templateID, form.current, userID);
        setLoader(false);
        alert("Message sent successfully!");
        clearInput();
      } catch (error) {
        console.error("Error sending message:", error);
        setLoader(false);
        alert("Failed to send message.");
      }
    } else {
      alert("Field is empty OR wrong email!!");
    }
  };

  return (
    <Section className="bg-white">
      <Container className="my-[40px] ">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <form className="space-y-4" onSubmit={handleClick} ref={form}>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-full border p-4 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-full border p-4 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="h-32 w-full resize-none rounded-2xl border p-4 focus:outline-none"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />

            <button
              className={`w-full rounded-full ${loader ? "bg-primary-200" : "bg-primary-300"} px-6 py-4 duration-300 hover:bg-primary-400`}
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="flex max-h-[355px] items-center justify-center">
            <img
              src="/images/stock1.jpg"
              alt="Placeholder"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gray-200 p-8 text-center">
            <p className="text-lg font-bold">+91 7676568586</p>
            <p>Our Mobile Number</p>
          </div>
          <div className="rounded-xl bg-gray-200 p-8 text-center">
            <p className="text-lg font-bold">mail@influenca.id</p>
            <p>Our Email Address</p>
          </div>
          <div className="rounded-xl bg-gray-200 p-8 text-center">
            <p className="text-lg font-bold">Katraj, Pune</p>
            <p>Our Address</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1578687371684!2d73.85342321489238!3d18.457349287435785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaba4328b1fd%3A0x8d9c7c9d2f9c53a9!2sKatraj%2C%20Pune%2C%20Maharashtra%20411046!5e0!3m2!1sen!2sin!4v1693657306737!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
        <div className="-mb-32 mt-8">
          <NewLetter />
        </div>
      </Container>
    </Section>
  );
};

export default ContactPage;
