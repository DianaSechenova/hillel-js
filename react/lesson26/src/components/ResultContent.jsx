import devil from "../assets/devil.png";
import emoji from "../assets/emoji.png";
import happiness from "../assets/happiness.png";
import happySun from "../assets/happy-sun.png";
import smile from "../assets/smile.png";
import PropTypes from 'prop-types';


function ResultContent(props) {
    const { clickCounts } = props;
    const maxCount = Math.max(...Object.values(clickCounts));
    const maxEmoji = Object.keys(clickCounts).find(key => clickCounts[key] === maxCount);
    const images = {
      devil,
      emoji,
      happiness,
      happySun,
      smile
    };
    
    return (
      <div className='mt-4'>
      <p>Переможець:</p>
      {maxCount > 0 ? (
        <div>
          <img className="icon" src={images[maxEmoji]} alt={maxEmoji} />
          <p>Кiлькiсть голосiв: {maxCount}</p>
        </div>
      ) : (
        <p>Немає голосiв</p>
      )}
    </div>
    );
}

ResultContent.propTypes = {
  clickCounts: PropTypes.object.isRequired
};

export default ResultContent;
