import { Action, timelineEvent } from "../classes.mts";

const action = new Action(
  "Canada as the 51\'st state",
  'On Dec 10, 2024 then President Elect, Donald John Trump called Justin Trudeau, the Prime Minister of Canada, "Governor of the Great State of canada"',
  [
    "Shabad, Rebecca. “Trump Mocks Prime Minister Justin Trudeau as the ‘Governor’ of the ‘Great State of Canada.’” NBC News, 10 Dec. 2024, www.nbcnews.com/politics/donald-trump/trump-mocks-prime-minister-justin-trudeau-governor-great-state-canada-rcna183570. Accessed 26 Mar. 2025.",
  ],
  [
    new timelineEvent(
      'In an interview with Fox News\' Bret Baier ahead of the Super Bowl, President of the United States, Donald J. Trump stated he was serious about wanting Canada to become the 51st state. He confirmed that his annexation comments were "a real thing"',
      new Date(2025, 1, 10),
      "Weissert, Will. “Trump’s Remarks on Canada Becoming the 51st State Raise a Lot of Questions.” AP News, 13 Feb. 2025, apnews.com/article/how-canada-could-become-us-state-42360e10ded96c0046fd11eaaf55ab88?. Accessed 26 Mar. 2025.",
    ),
    new timelineEvent(
      "In a bizarre press conference with Secretary of Defense, Pete Hegseth, President of the United States, Donald J. Trump suggested Canada could become the 51st state",
      new Date(2025, 2, 6),
      "Matina Stevis-Gridneff. “How Trump’s ‘51st State’ Canada Talk Came to Be Seen as Deadly Serious.” The New York Times, 7 Mar. 2025, www.nytimes.com/2025/03/07/world/canada/trump-trudeau-canada-51st-state.html.",
    ),
  ],
  0.7,
  new Date(2024, 12, 18),
  "This is not evil as much as bizarre and inflammatory, it is losing us allies and money but compared to say the J6 pardons or Kash Patel this is just stupid and binal.",
);
export default action;
