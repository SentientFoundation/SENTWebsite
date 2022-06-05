import React from "react";

import DiscordIcon from "../../images/discord.inline.svg";
import GithubIcon from "../../images/github.inline.svg";
import MediumIcon from "../../images/medium.inline.svg";
import RedditIcon from "../../images/reddit.inline.svg";
import TwitterIcon from "../../images/twitter.inline.svg";

const SocialLinks = () => {
  return (
    <ul className="social-list">
      <li className="social-item">
        <a
          href="https://twitter.com/ErgoDex"
          target="_blank"
          className="social-link social-square"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://t.me/ergodex"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.69753 19.8127L28.9069 9.03556C31.494 7.91294 40.268 4.32055 40.268 4.32055C40.268 4.32055 44.3175 2.74888 43.98 6.56579C43.8675 8.13746 42.9676 13.6383 42.0678 19.5882L39.2556 37.2133C39.2556 37.2133 39.0306 39.7954 37.1184 40.2444C35.2061 40.6935 32.0565 38.6728 31.494 38.2237C31.0441 37.8869 23.0576 32.8351 20.1329 30.3654C19.3455 29.6918 18.4456 28.3446 20.2454 26.773C24.2949 23.0683 29.1318 18.4656 32.0565 15.5468C33.4063 14.1996 34.7561 11.0563 29.1318 14.8732L13.2712 25.5381C13.2712 25.5381 11.4715 26.6607 8.09688 25.6503C4.72228 24.64 0.78526 23.2928 0.78526 23.2928C0.78526 23.2928 -1.91441 21.6089 2.69753 19.8127V19.8127Z"
              fill="#FFF"
            />
          </svg>
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://t.me/ergodex_community"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.69753 19.8127L28.9069 9.03556C31.494 7.91294 40.268 4.32055 40.268 4.32055C40.268 4.32055 44.3175 2.74888 43.98 6.56579C43.8675 8.13746 42.9676 13.6383 42.0678 19.5882L39.2556 37.2133C39.2556 37.2133 39.0306 39.7954 37.1184 40.2444C35.2061 40.6935 32.0565 38.6728 31.494 38.2237C31.0441 37.8869 23.0576 32.8351 20.1329 30.3654C19.3455 29.6918 18.4456 28.3446 20.2454 26.773C24.2949 23.0683 29.1318 18.4656 32.0565 15.5468C33.4063 14.1996 34.7561 11.0563 29.1318 14.8732L13.2712 25.5381C13.2712 25.5381 11.4715 26.6607 8.09688 25.6503C4.72228 24.64 0.78526 23.2928 0.78526 23.2928C0.78526 23.2928 -1.91441 21.6089 2.69753 19.8127V19.8127Z"
              fill="#FFF"
            />
          </svg>
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://discord.gg/6MFFG4Fn4Y"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <DiscordIcon />
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://www.reddit.com/r/ergodex/"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <RedditIcon />
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://github.com/ergolabs"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </li>
      <li className="social-item">
        <a
          href="https://ergodex.medium.com/"
          target="_blank"
          className="social-link"
          rel="noreferrer"
        >
          <MediumIcon />
        </a>
      </li>
    </ul>
  );
};

export { SocialLinks };