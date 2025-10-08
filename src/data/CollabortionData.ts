import { Helper } from "@/Helper/CollobrationHelper";

export const Collabortion = {
  title: "Our Partners",
  subTitle: "Collaborating with industry leaders.",
  collabortions: [
    {
      id: 1,
      leftSection: {
        icon: Helper.SnehShilpLogo,
        describations: [
          "SnehShilp Foundation is the culmination of the years of hard work of Shilp. Shilp has been turning people’s dreams into reality since 2004 by keeping their needs in focus and building around them. We wish to take a leap now and give back to the society by doing what it takes to make a significant difference in people’s lives. SnehShilp Foundation has been established with the sole purpose of empowering, strengthening and enabling people to live a life they truly deserve.",
          "We sincerely believe that helping others is not a matter of time, it is about feelings followed by dedication. It isn’t about doing great things; it is all about doing small things with great love. There is a lot of power in giving. Lending a hand to someone not only helps the one in need but greatly satisfies the thirst of the giver, the thirst of happiness and self-fulfillment."
        ],
        btn:{
            text: "Know More About SnehShilp",
            link:"/"
        }
      },
      rightSection:{
        imageBanner:Helper.SnehShilpImage
      }
    },
    {
      id: 2,
      leftSection: {
        icon: Helper.GujaratUniversityLogo,
        describations: [
            "Gujarat Technological University is a premier academic and research institution which has driven new ways of thinking since its 2007 founding, established by the Government of Gujarat vide Gujarat Act No. 20 of 2007. Today, GTU is an intellectual destination that draws inspired scholars to its campus, keeping GTU at the nexus of ideas that challenge and change the world.",
            "GTU is a State University with 486 affiliated colleges in its fold operating across the state of Gujarat through its SIX zones at Ahmedabad, Gandhinagar, Vallabh Vidyanagar, Rajkot,Surat and Bhuj . The University caters to the fields of Engineering, Architecture, Management, Pharmacy and Computer Science. The University has about 2,25,000 students enrolled in a large number of Diploma, Under Graduate, Post Graduate programs along with the robust Doctoral program.",
            "Our education empowers individuals to challenge conventional thinking in pursuit of original ideas. With a commitment to free and open inquiry, our scholars work transform the way we understand the world, advancing – and creating – fields of study."
        ],
        btn:{
            text: "Know More About GTU",
            link:"/"
        }
      },
      rightSection:{
        imageBanner:Helper.GujaratUniversityImage
      }
    },
    {
      id: 3,
      leftSection: {
        icon: Helper.ScienceLogo,
        describations: [
          "Welcome to SOW Bio, a leading company specializing in nutrition research, contract research, novel ingredient and process creation, and manufacturing. We are headquartered in Hyderabad, with our state-of-the-art research and development center situated in Chandigarh. With over 25 years of cumulative experience in research and development, we offer a comprehensive solution that encompasses both creation and manufacturing, delivering benchmark nutrition products to meet your unique needs.",
          "Since our establishment in 2020, SOW Bio has assembled a dynamic team of professionals, including product development scientists, nutritionists, QA, QC, and RA executives, scale-up experts, and a technical team capable of managing full-scale production at world-class WHO-GMP facilities. Our expertise is backed by extensive knowledge and experience in the field, enabling us to support you at every stage of your product’s journey."
        ],
        btn:{
            text: "Know More About Science on wheels",
            link:"/"
        }
      },
      rightSection:{
        imageBanner:Helper.ScienceImage
      }
    },
  ],
};
