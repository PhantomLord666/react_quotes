import { useState } from "react";
import "./App.css";
import axios from "axios";
import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";

function App() {
  const [quote, setQuote] = useState([]);
  const [color, setColor] = useState("");

  const config = {
    headers: {
      "X-Api-Key": "tu api_key",
    },
  };
  const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";

  var valor = 0;

  const handleSearchSubmit = () => {
    axios
      .get(url, config)
      .then(
        (res) => (
          console.log(res.data[0].quote),
          setQuote(res.data[0]),
          /*valor = Math.floor(Math.random() * 10)*/
          setColor(Math.random().toString(16).substr(-6))
        )
      )
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ height: "100vh", width: "100vw", backgroundColor: "#" + color }}
      className={`wrapper${valor}`}
    >
      <div className="quote-box">
        <div style={{ color: "#" + color }} className="quote-text">
          <i class="fa fa-quote-left">
            <FaQuoteLeft />{" "}
          </i>
          <span id="text">{quote.quote}</span>
        </div>
        <div style={{ color: "#" + color }} className="quote-author">
          - <span id="author">{quote.author}</span>
        </div>
        <div id="buttons-group">
          <div className="icons-social">
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote.quote}"  ${quote.author}`}
              style={{ backgroundColor: "#" + color }}
              className="button-twitter"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
            >
              <i class="fa fa-twitter">
                <FaTwitter />
              </i>
            </a>
            <a
              style={{ backgroundColor: "#" + color }}
              className="button-tumbrl"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
            >
              <i class="fa fa-tumblr">
                <FaTumblr />
              </i>
            </a>
          </div>
          <button
            style={{ backgroundColor: "#" + color }}
            className="button-quote"
            type="button"
            onClick={handleSearchSubmit}
          >
            New Quote
          </button>
        </div>
      </div>
      <div className="footer">
        by <a href="https://github.com/PhantomLord666">manuel batres</a>
      </div>
    </div>
  );
}

export default App;
