import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [emojiData, setEmojiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEmojis() {
      setLoading(true);

      try {
        const res = await axios.get(
          "https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28"
        );

        setEmojiData(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);

        setError(true);
        setLoading(false);
      }
    }

    fetchEmojis();
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Ooopppss...</p>}
      {emojiData.length > 0 && <p>Emojis Data Sukses!</p>}
    </div>
  );
}

export default App;
