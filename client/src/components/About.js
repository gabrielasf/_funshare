import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar togcolor navbar-expand-lg text-right">
            <a className="navbar-brand text-right font-weight-bold">
              funshare®
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  className="togcolor nav-item btn active text-right font-weight-light"
                  to="/"
                >
                  Log In
                </Link>
                <Link
                  className="togcolor nav-item btn active text-right font-weight-light"
                  to="/register"
                >
                  Register
                </Link>
                <Link
                  className="togcolor nav-item btn active text-right font-weight-light"
                  to="/myaccount"
                >
                  My Account
                </Link>
                <Link
                  className="togcolor nav-item btn active text-right font-weight-light"
                  to="allusers"
                >
                  Players
                </Link>
                <Link
                  className="togcolor nav-item btn active text-right font-weight-light"
                  to="/event"
                >
                  Events
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-8 text-white py-4 text-center mx-auto">
              <h1
                className="display-4 font-weight-bold diftitle"
                contentEditable
                role="textbox"
                aria-multiline="true"
              >
                We're funshare®
              </h1>
              <p className="lead mb-0">
                Virtually connecting people to play in the Real World.
              </p>
            </div>
          </div>

          <div className="p-5 bg-white rounded shadow mb-5">
            <ul
              id="myTab"
              role="tablist"
              className="nav nav-tabs nav-pills flex-column flex-sm-row text-center bg-light border-0 rounded-nav"
            >
              <li className="nav-item flex-sm-fill">
                <a
                  id="about-tab"
                  data-toggle="tab"
                  href="#xaboutus"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  className="nav-link border-0 text-uppercase font-weight-bold active"
                >
                  About us
                </a>
              </li>

              <li className="nav-item flex-sm-fill">
                <a
                  id="profile-tab"
                  data-toggle="tab"
                  href="#categories"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  className="nav-link border-0 text-uppercase font-weight-bold"
                >
                  Games Categories
                </a>
              </li>

              <li className="nav-item flex-sm-fill">
                <a
                  id="contact-tab"
                  data-toggle="tab"
                  href="#rules"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  className="nav-link border-0 text-uppercase font-weight-bold"
                >
                  Community Rules
                </a>
              </li>

              <li className="nav-item flex-sm-fill">
                <a
                  id="realcontact-tab"
                  data-toggle="tab"
                  href="#realcontact"
                  role="tab"
                  aria-controls="realcontact"
                  aria-selected="false"
                  className="nav-link border-0 text-uppercase font-weight-bold"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            <div id="myTabContent" className="tab-content">
              <div
                id="xaboutus"
                role="tabpanel"
                aria-labelledby="home-tab"
                className="tab-pane fade px-4 py-5 show active"
              >
                <h3>funshare® oversharing:</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="text-muted mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <div
                id="realcontact"
                role="tabpanel"
                aria-labelledby="contact-tab"
                className="tab-pane fade px-4 py-5"
              >
                <h3>We're listening.</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <form>
                  <div className="form-group row">
                    <label
                      htmlFor="inputEmail3"
                      className="col-sm-2 col-form-label"
                    >
                      Name
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        placeholder="My name is..."
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="inputPassword3"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="inputPassword3"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="inputPassword3"
                      className="col-sm-2 col-form-label"
                    >
                      Please share your thoughts!
                    </label>
                    <div className="col-sm-10">
                      <textarea
                        type="text"
                        className="form-control"
                        id="inputPassword3"
                        placeholder="You have our attention"
                      ></textarea>
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-sm-10">
                      <button type="submit" class="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div
                id="categories"
                role="tabpanel"
                aria-labelledby="profile-tab"
                className="tab-pane fade px-4 py-5"
              >
                <h3>Our categories explained.</h3>
                <hr />
                <p className="text-muted">
                  <strong>Roll and Move Games:</strong> Roll and Move Games
                  involve rolling dice (or spinning a wheel or drawing cards) to
                  determine the number of spaces you may move in a primarily
                  linear direction. Players may be racing from a start point to
                  a finish line or moving to control resources. Either way, what
                  you roll plays a large role in whether you win or lose.
                </p>
                <p className="text-muted mb-0">
                  Think the majority of the "Classic" Board Games: Monopoly,
                  Clue, Sorry!, Candyland, The Game of Life (shudder). This type
                  of game has fallen out of favor in a major way in recent
                  years, in large part due to luck playing a much larger role
                  than strategy. Though there are still some excellent recent
                  examples of this category, such as Camel Up or The Magic
                  Labyrinth, think of this one as the silent film of the Board
                  Gaming world: it may be fun to revisit from time to time, but
                  times have changed and overall quality has simply improved.
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Roll and Move Games:</strong>
                  Monopoly, The Game of Life, Clue, Candyland, Sorry!, Camel Up,
                  The Magic Labyrinth, Xia: Legends of a Drift System,
                  Zombies!!!, Talisman.
                </p>
                <hr />

                <p className="text-muted">
                  <strong>Worker Placement Games:</strong> Think of this one as
                  a slower and more strategic game of musical chairs. There are
                  only so many spaces out there, and you need to get to yours
                  before someone else does. Except you're not the one jumping
                  into the chair, you're sending a dedicated worker, toiling
                  away to help you accomplish your objectives, and instead of a
                  chair, it's usually a territory on a board.
                </p>
                <p className="text-muted mb-0">
                  In Agricola, for example, players take turns placing their
                  family members on action spaces in an attempt to grow more
                  food, raise more animals and generally acquire more resources
                  than their competitors. Getting to the prime real estate
                  results in choking your competition off, leading to some
                  strategic blocking. It's a result of this strategic blocking
                  that Worker Placement Games can get quite competitive and
                  heated.
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Worker Placement Games:</strong>
                  Agricola, Keydom, Stone Age, Lords of Waterdeep, Caverna: The
                  Cave Farmers, Mint Works, Le Harve, Cytosis, Raiders of the
                  North Sea, Viticulture, Charterstone.
                </p>
                <hr />

                <p className="text-muted">
                  <strong>Cooperative Games:</strong> In stark contrast to the
                  cutthroat dynamics of Worker Placement Games, Cooperative
                  Board Games are all about teamwork. Everyone works together as
                  a team and either wins or loses; it's that simple. This is the
                  game category for the enthusiastic optimists of the group and
                  highly social players. There can be some lively debates on
                  what course of action to take, so influence and persuasion
                  play a definite role.
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Cooperative Board Games :</strong>
                  Pandemic, Forbidden Island, Forbidden Desert, Lord of the
                  Rings, Arkham Horror, Mole Rats in Space, Mysterium, Spirit
                  Island.
                </p>
                <hr />

                <p className="text-muted">
                  <strong>Deck-Building Games:</strong> Invented and popularized
                  by Dominion and it's endless stream of expansions, Deck
                  Building Games have players start with a set number of cards
                  (or resources) that grow, change and upgrade through the
                  course of the game.
                </p>
                <p className="text-muted mb-0">
                  Buried within these decks is usually a reusable currency that
                  can be used to purchase additional, more powerful cards.
                  Players focus on building and optimizing their deck to gain
                  maximum value and utility out of each hand. This process is
                  known as Engine Building.
                </p>
                <p className="text-muted mb-0">
                  Games typically move briskly and have a pleasant sense of
                  acceleration and achievement as play progresses and the real
                  fun comes from figuring out how different cards interact with
                  one another to come up with a winning, finely tuned strategy.
                </p>
                <p className="text-muted mb-0">
                  (Note - This is technically a subset of engine building games,
                  but we're using the better known term Deck Building to
                  encompass the entire category.)
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Deck-Building Games:</strong>
                  Dominion, Roll for the Galaxy, Clank!, Legendary: A Marvel
                  Deck Building Game, Mage Knight, Concordia, Star Realms, Above
                  and Below.
                </p>
                <hr />

                <p className="text-muted">
                  <strong>Area Control Games:</strong>{" "}
                  <i>This land is yours, and no one else can have it.</i> The
                  most-well known example is probably Risk, but there have been
                  countless refinements in the decades since. Twilight Struggle,
                  for example, throws out the World War combat dynamics of Risk
                  in favor of Cold War-era influence peddling and political
                  intrigue with no outright conflict (unless of course, the
                  nukes come out and then everybody loses). Carcassone forgoes
                  any sort of overt conflict whatsoever in favor of leisurely
                  control of a quaint medieval countryside.
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Area Control Board Games:</strong>
                  Risk, Star Wars: Rebellion, Twilight Struggle, Blood Rage,
                  Scythe, El Grande, Eclipse, War of The Ring, Carcassone, Smash
                  Up.
                </p>
                <hr />

                <p className="text-muted">
                  <strong>Secret Identity Games:</strong> You trust your
                  friends, right? Well two of them are working together, lying
                  to your face in attempt to crush you right now. Deception is
                  the name of the game in Secret Identity Games.
                </p>
                <p className="text-muted">
                  {" "}
                  Perhaps more so than any other game genre, Secret Identity
                  Games have been aided by technology. What used to cause either
                  excessive memorization of rules and scripts or sacrificing a
                  potential player to the role of narrator can now by solved
                  with a simple app. Skynet may still be coming someday, but at
                  least we can have technologically supplemented fun with these
                  games until then!
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Secret Identity Games:</strong>
                  Secret Hitler, Mafia, One Night Ultimate Werewolf, The
                  Chameleon, Code Names, Battlestar Galactica, Two Rooms and a
                  Boom, The Resistance, Spyfall, Deception: Murder in Hong Kong,
                  The Thing: Infection at Outpost 31, Donner Dinner Party.
                </p>
                <hr />

                <p className="text-muted">
                  <strong>Legacy Games:</strong> Rip up those cards. Write on
                  the board. Open a secret envelope. Things change in Legacy
                  Games. Permanently. The most exciting and controversial new
                  game genre in memory, Legacy Games have only been around for a
                  few years, but they have dramatically altered the
                  possibilities available in a board games.
                </p>
                <p className="text-muted">
                  {" "}
                  Long-term story lines become possible, characters live and die
                  and actions have serious consequences. There are emotions
                  accessed through this form of storytelling that simply can't
                  be with any of the other tabletop genres in this article.
                  You'll play these games over and over again with the same
                  people, but the experience will be brand-new each time.
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Legacy Board Games:</strong>
                  Risk Legacy, Pandemic Legacy Seasons One and Two, Seafall,
                  Gloomhaven, Charterstone, Ultimate Werewolf Legacy, Android:
                  Netrunner, First Martians: Adventures on the Red Planet,
                  Quickfight: A Legacy Game.
                </p>
                <hr />

                <p className="text-muted">
                  <strong>Party Games:</strong> Perhaps the most important
                  elements of a party game are simplicity and accessibility. It
                  has to be fun, easy to understand and humorous. And your drunk
                  friends need to understand it with minimal explanation and
                  lots of distractions.
                </p>
                <p className="text-muted">
                  Though some may criticize their simplicity, Party Games serve
                  several important functions. First, as gateway games, they
                  draw many new players deeper into the world of the hobby we
                  love. Second, they make great appetizers ahead of a more
                  serious experience. Finally, they're fun! So lighten up.
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Party Games:</strong>
                  Apples to Apples, Cards Against Humanity, Trivial Pursuit,
                  Scattegories, The Chameleon, Joking Hazard, Secret Hitler,
                  Coup, Telestrations, Code Names, Mysterium, Dixit.
                </p>
                <hr />

                <p className="text-muted">
                  <strong>Puzzle Games:</strong> Who needs a story? Puzzle games
                  are about numbers, pattern recognition, combinations and
                  arranging things. And they're awesome. While most games have
                  some sort of puzzle mechanic buried under the surface of
                  story, theme and other mechanics, puzzle games are like the
                  nudists of the board game world. They don't need any fancy
                  dressing up, they're ready and confident to strut their stuff
                  in in the buff.
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Puzzle Games:</strong>
                  Sagrada, Qwixx, Labyrinth, Patchwork, Azul, Potion Explosion,
                  Q-Bitz, Santorini, Torres.
                </p>
                <hr />

                <p className="text-muted">
                  <strong>Combat Games:</strong> Though some may be tempted to
                  lump these into other categories like Simulation, Strategy or
                  Action, we think it's best to keep things simple. Combat Games
                  pit you against another player or group of players. You
                  attempt to defeat one another. Usually with weapons.
                </p>
                <p className="text-muted">
                  Players typically have some form or health or quantity of
                  troops that are directly under assault by other players. You
                  run out, you die. Often combined with Area Control and various
                  other game mechanics, Combat Games represent competitive
                  hostility distilled into its purest form.
                </p>
                <p className="text-muted">
                  Without a doubt, there's huge overlap here with Area Control
                  Games. After much debate and deliberation, we made the call
                  that they are not dependent upon one another and are two very
                  distinct categories, one based mainly on inflicting harm, the
                  other competing for what piece of land your meeples get to
                  inhabit. The problem is that those meeples keep warring with
                  each other, so the lines get blurry.
                </p>
                <br />
                <p className="text-muted mb-0 font-italic">
                  <strong>Notable Combat Board Games:</strong>
                  Risk, Diplomacy, King of Tokyo, Chess, War of the Ring,
                  Checkers, Stratego, Paths of Glory, Star Wars: Rebellion,
                  Coup, Twilight Struggle.
                </p>
                <hr />
                <p className="small">
                  <i>
                    Credit:{" "}
                    <a href="https://nonstoptabletop.com/blog/2017/7/30/the-10-types-of-board-games-everyone-should-know-about">
                      article
                    </a>{" "}
                    by Happy Strategerist
                  </i>
                </p>
              </div>

              <div
                id="rules"
                role="tabpanel"
                aria-labelledby="contact-tab"
                className="tab-pane fade px-4 py-5"
              >
                <h3>Play by the rules.</h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <ol className="text-muted">
                  <li className="text-muted">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </strong>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </li>
                  <li className="text-muted">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </strong>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </li>
                  <li className="text-muted">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </strong>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </li>
                  <li className="text-muted">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </strong>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </li>
                  <li className="text-muted">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </strong>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </li>
                  <li className="text-muted">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </strong>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </li>
                </ol>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(About);
