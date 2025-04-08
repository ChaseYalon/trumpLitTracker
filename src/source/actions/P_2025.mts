import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Implementing Project 2025",
  "​In January 2025, following his inauguration for a second term, President Donald Trump initiated the implementation of Project 2025, a comprehensive plan developed by conservative groups to restructure the federal government. A central figure in this initiative is Russell Vought, appointed as the Director of the Office of Management and Budget (OMB). Vought, a key architect of Project 2025, has been instrumental in driving efforts to downsize federal agencies and consolidate executive power.",
  [
    "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "Redirecting federal aid under FEMA to the states",
      new Date(2025, 0, 20),
      "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
    ),
    new timelineEvent(
      "Ending diversity, equity and inclusion practice",
      new Date(2025, 0, 20),
      "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
    ),
    new timelineEvent(
      "Targeting PBS and National Public Radio",
      new Date(2025, 2, 28),
      "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
    ),
    new timelineEvent(
      "Freezing federal assistance and DOGE",
      new Date(2025, 0, 20),
      "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
    ),
    //There are many more examples but I am to lazy to add them, go to this URL to add more https://www.cbsnews.com/news/trump-project-2025-playbook/
  ],
  0.7,
  new Date(2025, 0, 20),
  "Project 2025 is a problem. Many of its proposal are just evil and Trump repeatedly denied any connection. That was a lie", // I am embarrassed to have written this.
);
export default action;
