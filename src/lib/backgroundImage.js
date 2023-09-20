const BackgroundImageLoader = ({ possibleClasses }) => {
  return (
    <>
      {possibleClasses.map((c) => (
        <span key={c} className={c} />
      ))}
    </>
  );
};
export default BackgroundImageLoader;
