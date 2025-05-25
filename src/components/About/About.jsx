import "./About.css";

function About() {
  return (
    <article className="about">
      <h2 className="about__title">Rules</h2>
      <p className="about__paragraph">
        This game plays very similarly to the classic{" "}
        <a
          href="https://www.nytimes.com/games/wordle"
          target="_blank"
          rel="noopener noreferrer"
          className="about__link"
        >
          Wordle
        </a>
        . The goal is to guess the hidden word through trial and error.
      </p>

      <p className="about__paragraph">
        Here's how it works: After each guess, the letters will be color-coded
        to give you clues:
      </p>
      <ul className="about__list">
        <li>Green means the letter is correct and in the right position</li>
        <li>
          Yellow means the letter exists in the word but is in the wrong
          position
        </li>
        <li>Gray means the letter is not in the word at all</li>
      </ul>

      <p className="about__paragraph">Our version has some unique features:</p>
      <ul className="about__list">
        <li>Words can be different lengths (not just 5 letters)</li>
        <li>Your guesses don't have to be real words</li>
        <li>Words are selected from categories you've marked "Y"</li>
        <li>You can play multiple times (not just once per day)</li>
        <li>Compete for a spot on the leaderboards!</li>
      </ul>
      <p className="about__paragraph">Here's how scoring works:</p>
      <ul className="about__list">
        <li>When you get a word correct, your score will increase</li>
        <li>
          For every category selected "Y" when you get your new word, your
          potential points earned increases by 1
        </li>
        <li>
          Adding categories after selecting your word doesn't increase potential
          points
        </li>
        <li>
          When you don't guess the word in 6 tries, your score goes back to 0
        </li>
        <li>
          Clicking for a new word after using a guess will cause score to reset
          to 0
        </li>
      </ul>

      <p className="about__paragraph">
        Here's what words NFL, NBA, NHL, and MLB include:
      </p>
      <ul className="about__list">
        <li>
          Every Suberbowl MVP/ NBA or NHL finals MVP / World Series MVP's last
          name
        </li>
        <li>Every regular season MVP winner's last name</li>
        <li>Every team's location</li>
        <li>Every team's mascot</li>
      </ul>
      <p className="about__paragraph">
        Golf includes the last name of every master winner
      </p>

      <h3 className="about__subtitle">Unique Cases</h3>
      <p className="about__paragraph">
        Some Pokemon names have special characters or unique formatting that
        aren't used in the game. The game only accepts the 26 English letters as
        inputs, so all Pokemon names have been simplified. Here's how some
        special Pokemon names are handled:
      </p>
      <ul className="about__list">
        <li>Porygon-2 is "porygontwo"</li>
        <li>Mr. Mime is "mrmime"</li>
        <li>Nidoran♂ is "nidoranm"</li>
        <li>Nidoran♀ is "nidoranf"</li>
        <li>Farfetch'd is "farfetchd"</li>
        <li>Ho-oh is "hooh"</li>
      </ul>

      <p className="about__paragraph">
        Sports locations are dependent on how the team describes them. All team
        mascots are singular. (so "s" is not an ultra safe guess) Any multi-word
        location is one word. No numbers or special charaters, just letters.
      </p>
      <ul className="about__list">
        <li>
          NFL and NBA categories has "denver" as a correct word, NHL and MLB has
          "colorado"
        </li>
        <li>NFL has "newengland" NBA, MLB and NHL has "boston"</li>
        <li>NFL and MLB and has "sanfransisco", NBA has "goldenstate"</li>
        <li>Etc. for other location differences based on sport</li>
        <li>Rockies are "rockie"</li>
        <li>Orioles are "oriole"</li>
        <li>Bills are "bill"</li>
        <li>Etc. for all team mascots</li>
        <li>San Antonio is "sanantonio"</li>
        <li>49ers is "fortyniner"</li>
        <li>76ers is "seventysixer"</li>
      </ul>

      <h2 className="about__title">Inspiration</h2>
      <p className="about__paragraph">
        One night I was surfing youtube and saw a{" "}
        <a
          href="https://www.youtube.com/watch?v=5xf4_Kx7azg"
          target="_blank"
          rel="noopener noreferrer"
          className="about__link"
        >
          video
        </a>{" "}
        of a mock React interview where the challenge was to make a
        semi-functional wordle interface. I watched the video late at night and
        even though I knew they were attempting it in a way very differently
        than how I would, I still thought it would be a really fun challenge and
        wanted to see if I could do it myself. I slept on the idea and when I
        woke up I got to work. It was my first time creating something
        completely independently in React so it definitely took me longer than
        the guy in the video. From the start I knew I wanted mine to be able to
        work for any word length, not just 5 letters. It took me a few hours but
        when I was done I had an interface with all the same functionality as
        they got in the video, plus some. Once I finished I kept thinking of
        more functionalities I could add to show off all I had learned from
        TripleTen, and that's what brought us to where we are today.
      </p>
      <h2 className="about__title">Future Plans and Ideas</h2>
      <p className="about__paragraph">
        Now that I have implemented scores and leaderboards. I am thinking of
        what other improvements can be made. Functionality moving forward should
        stay pretty much the same. Possibly some beautifications additional
        themes for players to compete in.
      </p>
      <h2 className="about__title">Contact the Creator</h2>
      <p className="about__paragraph">Pax Huckstep</p>
      <p className="about__paragraph">paxhuckstep@gmail.com</p>
      <p className="about__paragraph">
        <a href="linkedin.com/in/paxhuckstep" className="about__link">
          linkedin.com/in/paxhuckstep
        </a>
      </p>
    </article>
  );
}

export default About;
