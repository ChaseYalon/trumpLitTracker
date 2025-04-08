import { Action, timelineEvent } from "../classes.mts";

const action = new Action(
  "Federal Buyouts",
  'On January 28,2025 President of the United States, Donald J. Trump ordered the Office of Personnel Management (OPM) to send an email to all federal employees. It offered them a "deferred resignation" where they would stop working now but collect salary for 6 months.',
  [
    "“Axios.” Axios, 2025, www.axios.com/newsletters/axios-dc-b75139b0-dd84-11ef-b405-e5f757f54ccd?. Accessed 26 Mar. 2025.",
  ],
  [
    new timelineEvent(
      'January 28, 2025: OPM sends "Fork in the Road" email at the request of the U.S. DOGE service',
      new Date(2025, 0, 28),
      "\"A Federal Worker Tried to Take Trump\'s \'Fork\' Resignation Offer. Here\'s What Happened.\" NPR, 14 Feb. 2025, www.npr.org/2025/02/14/nx-s1-5296910/trump-federal-workers-fork-resign-buyout?. Accessed 26 Mar. 2025",
    ),
    new timelineEvent(
      "A federal judge delays the resignation date several weeks",
      new Date(2025, 1, 6),
      "“Trump\'s \'Fork in the Road\' Resignation Offer for Federal Workers Is in Judge\'s Hands.” NPR, 10 Feb. 2025, www.npr.org/2025/02/10/nx-s1-5292042/federal-employees-trump-fork-resignation-buyout-court. Accessed 26 Mar. 2025.",
    ),
    new timelineEvent(
      "A judge lets the program conclude, 75,000 workers take the offer",
      new Date(2025, 1, 10),
      "Jazeera, Al. “A Timeline of the Trump Administration’s Coronavirus Actions.” Al Jazeera, 23 Apr. 2020, www.aljazeera.com/news/2020/4/23/a-timeline-of-the-trump-administrations-coronavirus-actions?. Accessed 26 Mar. 2025.",
    ),
  ],
  0.6,
  new Date(2025, 0, 28),
  "There is nothing wrong with this on the surface, the problem is the process, if you want to downsize there is a legal process and this is not that and second, the administration is sure to replace them with hardcore loyalists to swing the civil service to the right.",
);
export default action;
