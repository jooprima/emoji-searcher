import PropTypes from "prop-types";

import styles from "./Emojis.module.css";

const Emojis = ({ emojisData }) => {
  return (
    <div className={styles.emojiGrid}>
      {emojisData.map((data, index) => (
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: `&#${data.symbol.codePointAt(0)}`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

Emojis.propTypes = {
  emojiData: PropTypes.array,
};

export default Emojis;
