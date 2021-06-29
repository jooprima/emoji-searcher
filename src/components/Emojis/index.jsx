import PropTypes from "prop-types";

import EmojiBox from "../EmojiBox";

import styles from "./Emojis.module.css";

const Emojis = ({ emojisData }) => {
  return (
    <div className={styles.emojiGrid}>
      {emojisData.map((data, index) => (
        <EmojiBox key={index} title={data.title} symbol={data.symbol} />
      ))}
    </div>
  );
};

Emojis.propTypes = {
  emojiData: PropTypes.array,
};

export default Emojis;
