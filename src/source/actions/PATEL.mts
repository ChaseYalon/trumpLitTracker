import { Action, timelineEvent } from "../classes.mts";

const action = new Action(
  "Kash Patel as FBI director",
  "Kash Patel, a former defense department lawyer to be Director of the Federal Bureau of Investigation",
  [
    "Tucker, Eric. \“Trump Loyalist Kash Patel Is Narrowly Confirmed as FBI Director by the Senate.\” AP News, 20 Feb. 2025, apnews.com/article/trump-patel-fbi-justice-department-518329110ea230e2989095bfcbe34c59. Accessed 23 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "Senate confirms Patel (51-49) in a deeply divisive vote",
      new Date(2025, 1, 20),
      "Durkee, Alison. “Senate Confirms Kash Patel with 2 Republicans Opposing—What to Know about Trump\'s New FBI Director.” Forbes, 20 Feb. 2025, www.forbes.com/sites/alisondurkee/2025/02/20/senate-confirms-kash-patel-with-2-republicans-opposing-what-to-know-about-trumps-new-fbi-director/ Accessed 23 Mar. 2025.",
    ),
  ],
  0.92,
  new Date(2024, 10, 30),
  "The FBI is a deeply powerful agency and is supposed to be bipartisan. Kash Patel is a partisan hack who will prosecute Trumps political enemies. ", //Make this better, it sucks
);
export default action;
