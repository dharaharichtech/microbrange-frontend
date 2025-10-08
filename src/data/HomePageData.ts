import { Helper } from "@/Helper/HomePageHelper";

export const HomePageData = {
  BannerSection: {
    Banner: Helper.Banner,
    MobileBanner: Helper.MobileBanner,
    alt: "Microbrange Pvt. Ltd. – Research-Driven Biotech Innovations in Global Nutrition and Health",
    brangeDetails: [
      {
        id: 1,
        title: "Who We Are?",
        description:
          "Microb Range Pvt. Ltd. is a research-driven biotechnology company committed to advancing global health through cutting-edge innovations in nutrition...",
        link: "/",
      },
      {
        id: 2,
        title: "What we do?",
        description:
          "Our work is deeply collaborative, blending R&D with user-centric design to deliver products that are impactful, sustainable, and scalable...",
        link: "/",
      },
      {
        id: 3,
        title: "Our Vision",
        description:
          "At Microb Range Pvt. Ltd., we envision a healthier world powered by science-driven, sustainable, and affordable...",
        link: "/",
      },
    ],
  },
  LevelUpSection: {
    title: "Level Up Your Life",
    subTitle: "At MicrobRange We Prioritize",
    cards: [
      {
        id: 1,
        image: Helper.Sustainability,
        alt: "Microbrange – Commitment to Sustainability in Biotechnology",
        title: "Sustainability",
        link: "",
      },
      {
        id: 2,
        image: Helper.Affordability,
        alt: "Microbrange – Affordable Biotech Solutions for Global Health",
        title: "Affordability",
        link: "",
      },
      {
        id: 3,
        image: Helper.Accessibility,
        alt: "Microbrange – Making Nutrition and Healthcare Accessible to All",
        title: "Accessibility",
        link: "",
      },
    ],
    buttonDescibation: "To built excellence in every product.",
  },
  biotechSection: {
    leftSection: {
      circleSvg: Helper.circleSvg,
      leafSvg: Helper.leafSvg,
      image: Helper.LeftImage,
      alt: "Microbrange – Advanced Biotech Solutions in Nutrition and Environmental Health",
    },
    rightSection: {
      title: "We provide a",
      subTitle: "Best in Biotech Innovation",
      describation:
        "At Microb Range Pvt. Ltd., we specialize in developing high-quality, research-driven biotech products that deliver real-world impact. Our offerings span two key verticals: advanced nutrition and affordable biotech instrumentation—crafted to serve both individuals and institutions across health, research, and environmental sectors.",
      points: {
        title: "Each of our products is built on three core principles:",
        bulletList: [
          "Scientific Integrity – Rooted in validated research and tested in certified labs.",
          "Sustainable Design – Eco-conscious from formulation to packaging.",
          "User-Centered Innovation – Easy to use, effective, and built for broad accessibility.",
        ],
        describation:
          "Whether it’s our algae-powered air purification systems (Orium Series), organic-certified nutrient supplements (Ever Vital), or compact biotech devices for lab research, every product is developed with precision and purpose. We partner with WHO-GMP certified and US FDA-compliant facilities to maintain world-class manufacturing standards.",
      },
      btn: "Explore More",
    },
  },
  getToSection: {
    title: "Get to",
    subTitle: "Know us better",
    describation: [
      "At Microb Range Pvt. Ltd., we are a purpose-driven biotechnology company focused on making health, sustainability, and innovation accessible to all. Founded by young scientists and entrepreneurs, we blend research, real-world challenges, and creativity to develop impactful products in nutrition and biotech instrumentation. Our team works at the intersection of science and sustainability to build solutions that address malnutrition, air pollution, and limited access to affordable lab tools.",
      "With every innovation, we strive to empower individuals, support scientific communities, and create a healthier, more equitable world.",
    ],
  },
  journySection: {
    firstPart: {
      content: {
        title: "What defines us ",
        descibation:
          "We are defined by our commitment to meaningful innovation. Every product we create is guided by evidence, developed with empathy, and built for real impact. What sets us apart is our belief in:",
        bulletPoint: {
          bullets: [
            "Sustainability – From eco-friendly materials to responsible design.",
            "Affordability – Science should not be a luxury.",
            "Accessibility – Health and research tools must reach everyone.",
            "Integrity – Our work is driven by data, transparency, and care.",
          ],
          describation:
            "These values aren’t just principles—they’re part of our everyday actions.",
        },
      },
      cards: [
        {
          id: 1,
          image: Helper.Journey,
          alt: "Microbrange – Milestones in Our Biotechnology Journey",
          title: "Our Journey",
        },
        {
          id: 2,
          image: Helper.Team,
          alt: "Microbrange – Our Expert and Passionate Biotech Team",
          title: "Our Team",
        },
      ],
    },
    secondPart: {
      cards: [
        {
          id: 1,
          image: Helper.Partner,
          alt: "Microbrange – Strategic Partnerships Driving Biotech Innovation",
          title: "Partnering for Change",
        },
        {
          id: 2,
          image: Helper.Vision,
          alt: "Microbrange – Visionary Goals for a Healthier, Sustainable Future",
          title: "Vision for the Future",
        },
      ],
      content: {
        title: "What inspire us",
        descibation:
          "We are inspired by real problems faced by real people. From nutrient deficiencies in underserved communities to the lack of accessible tools in small research labs, our mission is to close these gaps through science and collaboration.We draw inspiration from:",
        bulletPoint: {
          bullets: [
            "The resilience of communities fighting health disparities",
            "Students and researchers pushing the boundaries of discovery",
            "The potential of nature—especially microorganisms—to offer sustainable solutions",
          ],
          describation: "",
        },
      },
    },
  },
  blogSection: {
    title: "News & Blogs",
    subTitle: "Our Latest Insights",
    blogs: [
      {
        id: 1,
        image: Helper.blog1,
        alt: "Microbrange Blog – The Science Behind Ever Vital’s Daily Nutrition Sachets",
        title:
          "Why Daily Nutrition Matters: The Science Behind Ever Vital's Sachets",
        date: "October 21, 2024",
      },
      {
        id: 2,
        image: Helper.blog2,
        alt: "Microbrange Blog – Collagen and Spirulina Benefits for Health and Well-Being",
        title:
          "Collagen and Spirulina: Superfoods for Overall Health and Well-Being of the Human Body",
        date: "October 21, 2024",
      },
      {
        id: 3,
        image: Helper.blog3,
        alt: "Microbrange Blog – Importance of Vitamin B12 and D2 for a Balanced Diet",
        title: "Vitamin B12 and D2: Are You Getting Enough?",
        date: "October 21, 2024",
      },
      {
        id: 4,
        image: Helper.blog1,
        alt: "Microbrange Blog – The Science Behind Ever Vital’s Daily Nutrition Sachets",
        title:
          "Why Daily Nutrition Matters: The Science Behind Ever Vital's Sachets",
        date: "October 21, 2024",
      },
    ],
  },
};
