let cachedSelectedPattern = {};

const CreationalPatterns = ({
  category,
  selectedPatternId,
  getCategoryPattern,
}) => {
  if (cachedSelectedPattern.id !== selectedPatternId) {
    cachedSelectedPattern = getCategoryPattern(category.id, selectedPatternId);
  }

  return (
    <div>
      <strong>{cachedSelectedPattern.title} pattern description</strong>
      <i className="m-2">&ndash;</i>
      {cachedSelectedPattern.description}
    </div>
  );
};

export default CreationalPatterns;
