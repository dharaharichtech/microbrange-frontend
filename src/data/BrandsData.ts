import { Helper } from "@/Helper/BrandsHelper";

export const BrandsData = {
  brands: [
    {
      id: 1,
      leftSection: {
        titleIconSvq: Helper.EverVitalLogo,
        describation: [
          "The logo 'EVER VITAL' with its tagline 'YOUR EVERYDAY VITALS' perfectly encapsulates the brand's purpose. The word 'EVER' suggests a continuous and enduring presence, while 'VITAL' emphasizes the importance of the products in sustaining healthy life and well-being. The tagline 'YOUR EVERYDAY VITALS' further reinforces the idea that these products are essential for daily health and nutrition. The colorful circles in the logo add a touch of vibrancy and represent the diverse range of nutrients offered by the brand. Overall, the logo and tagline effectively convey the brand's commitment to providing essential, everyday health solutions."
        ],
        icons: [
          {
            id: 1,
            icon: Helper.SugerFree,
            alt: "Sugar Free Supplement",
          },
          {
            id: 2,
            icon: Helper.NonGmo,
            alt: "Non-GMO Certified",
          },
          {
            id: 3,
            icon: Helper.Veg,
            alt: "100% Vegetarian Product",
          },
          {
            id: 4,
            icon: Helper.LavTested,
            alt: "Lab Tested for Quality",
          },
          {
            id: 5,
            icon: Helper.ChemicalFree,
            alt: "Chemical-Free Formula",
          },
          {
            id: 6,
            icon: Helper.DairyFree,
            alt: "Dairy-Free Certified",
          },
          {
            id: 7,
            icon: Helper.SafeForAll,
            alt: "Safe for All Ages",
          },
          {
            id: 8,
            icon: Helper.GluteFree,
            alt: "Gluten-Free Product",
          },
        ],
        btnRedirect: "/",
      },
      rightSection: {
        image: Helper.EverVitalBanner,
        alt: "Ever Vital - Everyday Nutrition Banner",
      },
    },
    {
      id: 2,
      leftSection: {
        titleIconSvq: Helper.OriumLogo, 
        describation: [
          "The name 'Orium' is inspired by the essence of light and environment—symbolizing a space where light, life, and sustainability coexist in harmony. It embodies vision to developing technologies that reflect the purity of nature and the intelligence of biotechnology. Orium stands for creating environments that not only support life but also elevate the quality of it—naturally and sustainably. Under the Orium – Live Pure brand, we design and develop sustainable biotech instruments and tools that are both innovative and eco-conscious."
        ],
        icons: [
          {
            id: 1,
            icon: Helper.AlgeaPowered,
            alt: "Algae Powered Technology",
          },
          {
            id: 2,
            icon: Helper.EnergyEfficient,
            alt: "Energy Efficient Instrument",
          },
          {
            id: 3,
            icon: Helper.Hydro,
            alt: "Hydro-Based Technology",
          },
          {
            id: 4,
            icon: Helper.EcoFriendly,
            alt: "Eco-Friendly Product",
          },
        ],
        btnRedirect: "/",
      },
      rightSection: {
        image: Helper.OriumBanner,
        alt: "Orium - Sustainable Biotech Instruments Banner",
      },
    },
  ],
};
