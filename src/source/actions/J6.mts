import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "January Sixth Pardons",
  "On January 20th 2025 President of the United States Donald John Trump using the authority vested in him by Article II of the constitution, issued 1600 sweeping pardons for defendants charged and convicted for roles in the January 6 capital attack.(1)",
  [
    '1: Richer, Alanna Durkin, and Michael Kunzelman. "Trump Issues Sweeping Pardon of Supporters Charged in the Jan. 6, 2021, Capitol Attack." AP News, 21 Jan. 2025, apnews.com/article/capitol-jan-6-pardons-trump-justice-department-8ce8b2a8f8cb602d5eaf85ac7b969606. Accessed 22 Mar. 2025.',
  ],
  [
    new timelineEvent(
      "Following the pardons, federal judges began releasing the defendants",
      new Date(2025, 0, 21),
      "Lynch, Sarah N. “The Most High-Profile Jan 6 Defendants to Receive Clemency from Trump.” Reuters, 21 Jan. 2025, www.reuters.com/world/us/most-high-profile-jan-6-defendants-receive-clemency-trump-2025-01-21/. Accessed 22 Mar. 2025.",
    ),
  ],
  0.99,
  new Date(2025, 0, 20),
  "On January 6, 2021 then President Donald John Trump organized a mob of supporters to overthrow the government. It was awful. He failed because he is stupid and incompetent but still. Then on his first day back in office he pardoned them All. I have no words, this is not Democracy and we all need to remember this is not normal and we need to fight it.",
);

export default action;
