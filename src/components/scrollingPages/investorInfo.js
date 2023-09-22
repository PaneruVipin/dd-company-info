import Members from "../members";

const InvestorInfo = () => {
  const investors = [
    {
      id: 1,
      name: "James-Joseph De Costa",
      row: 1,
      popularity: 1,
      socialLinks: {
        linkedin: "htpps://google.com",
        facebook: "htpps://google.com",
        instagram: "htpps://google.com",
        twitter: "htpps://google.com",
      },
      image:
        "https://images.squarespace-cdn.com/content/v1/54c6eb0ce4b0f6cdd67c1196/1500758346726-PRZMI7L74RDNAGGPVRRK/Headshot_47.jpg",
    },
    {
      id: 2,
      name: "Ava",
      row: 2,
      popularity: 2,

      socialLinks: {
        linkedin: "htpps://google.com",
        facebook: "htpps://google.com",
        instagram: "htpps://google.com",
        twitter: "htpps://google.com",
      },
      image:
        "https://thumbs.dreamstime.com/b/african-american-female-model-winter-hat-scarf-one-studio-head-shots-clothes-89597891.jpg",
    },
    {
      id: 3,
      name: "Mila",
      row: 3,
      popularity: 1,

      socialLinks: {
        linkedin: "htpps://google.com",
        facebook: "htpps://google.com",
        instagram: "htpps://google.com",
        twitter: "htpps://google.com",
      },
      image:
        "https://i.pinimg.com/236x/cc/4a/6c/cc4a6c12fedb412d6e1f52ff691e6600--pageant-headshots-model-headshots.jpg",
    },
    {
      id: 4,
      row: 2,
      popularity: 4,
      name: "Sophia",

      socialLinks: {
        linkedin: "htpps://google.com",
        facebook: "htpps://google.com",
        instagram: "htpps://google.com",
        twitter: "htpps://google.com",
      },
      image:
        "https://images.squarespace-cdn.com/content/v1/54c6eb0ce4b0f6cdd67c1196/1642223720668-I2XL35T6SMPTDZPOTRFJ/DCP_0085.jpg",
    },
    {
      id: 5,
      name: "Amelia",
      row: 2,
      popularity: 3,

      socialLinks: {
        linkedin: "htpps://google.com",
        facebook: "htpps://google.com",
        instagram: "htpps://google.com",
        twitter: "htpps://google.com",
      },
      image:
        "https://images.squarespace-cdn.com/content/v1/54c6eb0ce4b0f6cdd67c1196/1500758346726-PRZMI7L74RDNAGGPVRRK/Headshot_47.jpg",
    },
    {
      id: 6,
      name: "Eleanor",
      row: 2,
      popularity: 1,

      socialLinks: {
        linkedin: "htpps://google.com",
        facebook: "htpps://google.com",
        instagram: "htpps://google.com",
        twitter: "htpps://google.com",
      },
      image:
        "https://images.squarespace-cdn.com/content/v1/513aacf4e4b0abff73b93917/1476901462774-16NOFQRO62SZB63ZCM8A/morgan-hs-001.jpg",
    },
    {
      id: 7,
      name: "Emily",
      row: 1,
      popularity: 2,
      socialLinks: {
        linkedin: "htpps://google.com",
        facebook: "htpps://google.com",
        instagram: "htpps://google.com",
        twitter: "htpps://google.com",
      },
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg",
    },
  ];
  return (
    <div className="text-center space-y-10">
      <h1 className="font-bold font-family-1 text-[50px] text-black">Our Investors</h1>
      <div className="space-y-6 md:space-y-12">
        <Members data={investors} />
      </div>
    </div>
  );
};
export default InvestorInfo;
