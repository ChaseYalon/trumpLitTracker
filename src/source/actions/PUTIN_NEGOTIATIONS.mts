import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Negotiating with Putin without Ukraine",
  "​Since November 5, 2024, President of the United States Donald John Trump and his administration officials have engaged in several negotiations  with Russian President Vladimir Putin and Russian officials Ukraine was present at none. ​",
  [
    "Walsh, Nick Paton. “Putin Just Called Trump\'s Bluff on Ukraine, with the Russian Art of the\'No\' Deal.” CNN, 18 Mar. 2025, www.cnn.com/2025/03/18/europe/analysis-putin-trump-phone-call-ukraine-intl-latam/index.html. Accessed 27 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "Trump has a 90 minute official call with Putin. Putin wins diplomatic and energy concessions",
      new Date(2025, 1, 12),
      "to, Contributors. “12 February 2025 Phone Conversation.” Wikipedia.org, Wikimedia Foundation, Inc., 14 Feb. 2025, en.wikipedia.org/wiki/February_2025_Putin%E2%80%93Trump_call?. Accessed 27 Mar. 2025.",
    ),
    new timelineEvent(
      "Secretary of State Marco Rubio and serval other officials meet with Russian counterparts in Riyadh. Ukraine was not there and Russia wins diplomatic concessions",
      new Date(2025, 1, 18),
      "Reuters. “Who Are the Russian Officials Meeting with US Team in Saudi Arabia?” Reuters, 18 Feb. 2025, www.reuters.com/world/europe/putin-sends-top-foreign-policy-team-talks-with-us-2025-02-18/?. Accessed 27 Mar. 2025.",
    ),
    new timelineEvent(
      "Steve Witkoff (A high level advisor) meets Putin in Moscow",
      new Date(2025, 2, 12),
      "Edwards, Christian. “Trump’s Foreign Envoy Touts Kremlin Talking Points, in Interview That Will Alarm Europe.” CNN, 22 Mar. 2025, www.cnn.com/2025/03/22/europe/witkoff-carlson-trump-russia-ukraine-talks-intl/index.html?. Accessed 27 Mar. 2025.",
    ),
  ],
  0.8,
  new Date(2016, 10, 5),
  "It is critical that a fair settlement be reached in Ukraine. This cannot be done by appeasing authoritarians. Trump is bending the knee to Putin for no apparent reason",
);
export default action;
