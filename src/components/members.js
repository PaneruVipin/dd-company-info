import MemberCard from "./cards/memberCard";

const Members = ({ data }) => {
  const sortedDataByRow = data.reduce((accumulator, member) => {
    const { row } = member;
    if (!accumulator[row]) {
      accumulator[row] = [];
    }
    accumulator[row].push(member);
    accumulator[row].sort((a, b) => b.popularity - a.popularity);
    return accumulator;
  }, {});
  return (
    <>
      {Object.keys(sortedDataByRow).map((key) => (
        <div
          key={key}
          className="flex gap-y-6 md:gap-y-12 gap-x-6 flex-wrap justify-evenly"
        >
          {sortedDataByRow[key].map(
            ({ id, name, title, description, image, socialLinks }) => (
              <MemberCard
                key={id}
                name={name}
                title={title}
                description={description}
                image={image}
                linkedin={socialLinks?.linkedin}
                facebook={socialLinks?.facebook}
                twitter={socialLinks?.twitter}
                instagram={socialLinks?.instagram}
              />
            )
          )}
        </div>
      ))}
    </>
  );
};
export default Members;
