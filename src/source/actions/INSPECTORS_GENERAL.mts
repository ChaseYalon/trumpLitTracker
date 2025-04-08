import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Firing Independent Inspectors General",
  "On January 24, 2025 President of the United States, Donald John Trump fired 17 independent inspectors general, who's job it is to find and report waste and abuse in the government, the are independent and nonpartisan.(1)",
  [
    'Miller, Zeke, et al. "Trump Fires More than a Dozen Independent Inspectors General." AP News, 25 Jan. 2025, apnews.com/article/trump-inspectors-general-fired-congress-unlawful-4e8bc57e132c3f9a7f1c2a3754359993. Accessed 22 Mar. 2025.',
  ],
  [
    new timelineEvent(
      "Senate Democrats raise strong objections and demand, and are refused information",
      new Date(2025, 0, 25),
      'Miller, Zeke, et al. "Trump Fires More than a Dozen Independent Inspectors General." AP News, 25 Jan. 2025, apnews.com/article/trump-inspectors-general-fired-congress-unlawful-4e8bc57e132c3f9a7f1c2a3754359993?. Accessed 22 Mar. 2025.',
    ),
    new timelineEvent(
      "Legal experts begin commenting that this is wildly illegal and violates the 2022 Inspector General Act",
      new Date(2025, 0, 28),
      "McGreal, Chris. “Trump Condemned over “Blatantly Illegal” Firings of Watchdog Chiefs.” The Guardian, The Guardian, 28 Jan. 2025, www.theguardian.com/us-news/2025/jan/28/trump-watchdog-firings-inspectors-general. Accessed 22 Mar. 2025.",
    ),
  ],
  0.85,
  new Date(2025, 0, 24),
  "We have laws in this country. Or we did, there is a law saying the President cannot fire the inspectors general (yes that is the plural). He did anyway, the court case is still pending",
);
export default action;
