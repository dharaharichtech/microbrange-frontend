import { Helper } from "@/Helper/ContactHelper";

export const ContactUsData = {
  BannerSection: {
    banner: Helper.Banner,
    mobileBanner: Helper.MobileBanner,
    title: "Our Initiatives",
    subTitle: "Your Next Chapter Starts Here",
    button: {
      icon: Helper.BtnSvg,
      text: "Explore Now",
    },
  },

  letusKnown: {
    title: "Contact Us",
    subtitle: "Let Us know how we can help",
    sections: [
      {
        title: "Customer support",
        description:
          "We're here to help with any questions or concerns. Whether you need assistance with our products, services, or general inquiries, our dedicated team is ready to support you. Reach out to us, and we'll respond promptly to ensure your satisfaction.",
        icon: Helper.Support,
        highlight: null,
        bg: "bg-[#E7F2FF]",
      },
      {
        title: "Visit Us",
        description: "Visit our office Head Quarter.",
        linkText: "View on Google Map",
        link: "https://www.google.com/maps",
        icon: Helper.Location,
        bg: "bg-[#EFF2F5]",
      },
      {
        title: "Call Us",
        description: "Call us on this numbers",
        phone: "+91 9909915575",
        icon: Helper.Contact,
        bg: "bg-[#FFEEED]",
      },
      {
        title: "Email Us",
        description: "Email Your Query on this mail id",
        emails: ["microbrange@gmail.com", "rutikparmar1163@gmail.com"],
        icon: Helper.Email,
        bg: "bg-[#F1F7E8]",
      },
    ],
  },

  getStart: {
    title: "Get Started",
    subTitle: "Get in touch with us. We're here to assist you.",
    socialMediaIcons: [
      {
        id: 1,
        icon: Helper.facebook,
        link: "",
      },
      {
        id: 2,
        icon: Helper.instagram,
        link: "",
      },
      {
        id: 3,
        icon: Helper.linkedin,
        link: "",
      },
      {
        id: 4,
        icon: Helper.twitter,
        link: "",
      },
    ],
    form: {
      fields: [
        {
          label: "Name",
          name: "name",
          type: "text",
          placeholder: "Enter your name",
          required: true,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          placeholder: "Enter your email",
          required: true,
        },
        {
          label: "Phone Number",
          name: "phone",
          type: "tel",
          placeholder: "Enter your phone number",
          required: true,
        },
        {
          label: "Message",
          name: "message",
          type: "textarea",
          placeholder: "Write your message here",
          required: true,
        },
      ],
      button: {
        text: "Leave the Message",
        type: "submit",
      },
    },
  },
};
