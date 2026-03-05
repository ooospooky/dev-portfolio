import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import emailjs from "emailjs-com";
import { Player } from "@lottiefiles/react-lottie-player";
import { Fade } from "react-awesome-reveal";
import emailSent from "../../images/animations/emailSent.json";
import { fadeupAnimation } from "../../Animations/Animation";

const EMAIL_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const EMAIL_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const EMAIL_USER_ID = process.env.REACT_APP_USER_ID;

interface EmailParams extends Record<string, unknown> {
  name: string;
  email: string;
  content: string;
}

const INITIAL_FORM_STATE: EmailParams = {
  name: "",
  email: "",
  content: "",
};

const sendEmail = async (formData: EmailParams): Promise<void> => {
  if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_USER_ID) {
    throw new Error("Email configuration is missing");
  }

  await emailjs.send(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    formData,
    EMAIL_USER_ID,
  );
};

export const Contact = () => {
  const [formData, setFormData] = useState<EmailParams>(INITIAL_FORM_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
      setIsSubmitted(true);
      setFormData(INITIAL_FORM_STATE);
    },
    onError: (error) => {
      // Handle error appropriately - could use a toast notification here
      console.error("Error sending email:", error);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (isSubmitted) {
    return (
      <section className="haveSubmit" id="contact">
        <h2 className="haveSubmit__h2">Thanks for reaching out!</h2>
        <p className="haveSubmit__p">Your form submission has been received.</p>
        <Player
          className="haveSubmit__emailAnimation"
          autoplay
          loop
          src={emailSent}
        />
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <h2 className="contact__h2">Contact</h2>
      <Fade triggerOnce={true} delay={100} keyframes={fadeupAnimation}>
        <p className="contact__p">
          I'm actively seeking new opportunities. However, even if you don't
          have a job offer for me, I would appreciate it if you could drop by
          just to say hi! Additionally, please don't hesitate to provide any
          feedback or recommendations you may have.
        </p>
      </Fade>
      <Fade triggerOnce={true} delay={300} keyframes={fadeupAnimation}>
        <form onSubmit={handleSubmit} className="contactForm">
          <input
            className="form-input input"
            type="text"
            name="name"
            required
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={mutation.isPending}
          />
          <input
            required
            type="email"
            name="email"
            className="input"
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
            disabled={mutation.isPending}
          />
          <textarea
            required
            name="content"
            rows={6}
            className="input"
            placeholder="Type some message"
            value={formData.content}
            onChange={handleInputChange}
            disabled={mutation.isPending}
          />
          <button
            className="cta-btn cta-btn--hero contactForm__btn"
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Sending..." : "Submit"}
          </button>
        </form>
      </Fade>
    </section>
  );
};
