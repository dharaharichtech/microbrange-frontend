import { Helper } from "@/Helper/InitiativesPageHelper";

export const InitiativesPageData = {
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
  Initiatives: [
    {
      id: 1,
      leftSection: {
        bg: "bg-white",
        iconLogo: Helper.EverVitalLogo,
        describation: [
          "At Ever Vital, we believe that access to essential nutrition is a fundamental right, not a privilege. As part of our mission to foster a healthier future, we have launched a dedicated initiative to combat malnutrition. This program focuses on providing free or highly affordable nutritional supplements to underserved communities, ensuring that everyone has the opportunity to lead a healthier life.  ",
          "Partnering with NGOs, community organizations, and healthcare providers, we work tirelessly to reach those most in need. By focusing on malnourished children, pregnant women, and other vulnerable groups, we hope to make a meaningful impact on their lives.  ",
          "This initiative reflects our core belief that wellness should be inclusive and accessible. Every sachet of Ever Vital represents our commitment to nourishing not just the body but also the hope for a brighter, healthier tomorrow. Together, we can create a world free from the burden of malnutrition.",
        ],
        btn: {
          text: "Know More About EverVital",
          link: "/",
        },
      },
        rightSection:{
        Image:Helper.EverVitalSideImage
      }
    },
    {
      id: 2,
      leftSection: {
        bg: "bg-[#EDFFF3]",
        iconLogo: Helper.AarambhLogo,
        describation: [
          "Shilp Aarambh initiative by Snehshilp Foundation is an important step towards creating a drug-free future for the youth. Drug addiction among young people is a significant societal problem, and it requires immediate attention. The foundation provides education, resources, and support to help young people overcome addiction and prevent it from happening in the first place.",
          "The initiative also focuses on creating awareness about the dangers of drug addiction and creating drug-free environments in schools and colleges. With the support of the foundation, young people can overcome addiction and lead healthy, productive lives. The foundation believes that drug addiction is a disease that requires professional help.",
        ],
        btn: {
          text: "Know More About SAGCR",
          link: "/",
        },
      },
      rightSection:{
        Image:Helper.AarambhSideImage
      }
    },
    {
      id: 3,
      leftSection: {
        bg: "bg-white",
        iconLogo: Helper.FestLogo,
        describation: [
        "At the Start-Up Fest Gujarat, you'll have the opportunity to engage with industry-leading experts, influential speakers, and fellow entrepreneurs who have thrived in the small business arena. Dive deep into invaluable knowledge through keynote presentations, interactive workshops, and panel discussions on a wide array of topics, including marketing strategies, finance and funding, digital transformation, customer experience, and more.",
        "Our exhibition hall will be a hub of innovation, showcasing products and services specifically designed to cater to the needs of small businesses. Connect with exhibitors and discover cutting-edge solutions that can streamline your operations, enhance productivity, and drive growth. Explore the latest technological advancements, software applications, marketing tools, and financial services that can revolutionize your business."  
        ],
        btn: {
          text: "Know More About SF",
          link: "/",
        },
      },
      rightSection:{
        Image:Helper.FestSideImage
      }
    },
    {
      id: 4,
      leftSection: {
        bg: "bg-[#EDFFF3]",
        iconLogo: Helper.HeritageLogo,
        describation: [
          "The Heritage Walk 2023 was our second major initiative in creating awareness about drug abuse and promoting cultural heritage. Held on World Heritage Day, the event aimed to instill pride in our rich cultural legacy and educate participants about its significance.",
          "Under the leadership of Prime Minister Shri Narendra Modi, the SnehShilp Foundation organised 1st edition of ‘Shilp Aarambh – GIFT City Run’ on 26 Feb 2023.",
          "Support from the Gujarat Police, Narcotics Control Bureau, and GIFT City was instrumental. Major (Retd.) D.P. Singh graced the event as the Brand Ambassador, and renowned companies sponsored and contributed to the cause."
        ],
        btn: {
          text: "Know More About Heritage walk",
          link: "/",
        },
      },
      rightSection:{
        Image:Helper.HeritageSideImage
      }
    },
  ],
};
