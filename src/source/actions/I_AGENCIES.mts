import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Taking control of independent agencies",
  'President Trump signed the executive order "Ensuring Accountability for All Agencies," extending presidential supervision over independent regulatory agencies. This order mandated that these agencies submit draft regulations for White House review, consult with the White House on priorities and strategic plans, and adhere to performance standards set by the Office of Management and Budget (OMB).',
  [
    "“Fact Sheet: President Donald J. Trump Reins in Independent Agencies to Restore a Government That Answers to the American People.” The White House, 18 Feb. 2025, www.whitehouse.gov/fact-sheets/2025/02/fact-sheet-president-donald-j-trump-reins-in-independent-agencies-to-restore-a-government-that-answers-to-the-american-people/. Accessed 28 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "An unapproved email was sent to federal employees, demanding they list their weekly achievements. This action created confusion and tension among civil servants and Trump's cabinet members.",
      new Date(2025, 1, 22),
      "Alper, Alexandra, and Nandita Bose. “Exclusive: White House Installs Trump Loyalists at Federal HR Agency after ‘Five Things’ Email.” Reuters, 27 Mar. 2025, www.reuters.com/world/us/white-house-installs-trump-loyalists-federal-hr-agency-after-five-things-email-2025-03-27/. Accessed 28 Mar. 2025.",
    ),
    new timelineEvent(
      "President Trump announced his intention to nominate Susan Monarez as the permanent director of the Centers for Disease Control and Prevention (CDC), an agency traditionally expected to operate with a degree of independence.",
      new Date(2025, 2, 23),
      "Mason, Jeff, and Michael Erman. “Trump Picks Acting CDC Director Susan Monarez to Lead Agency.” Reuters, 24 Mar. 2025, www.reuters.com/business/healthcare-pharmaceuticals/trump-nominate-susan-monarez-lead-cdc-cbs-news-reports-2025-03-24/. Accessed 28 Mar. 2025.",
    ),
    new timelineEvent(
      "President Trump signed an executive order limiting federal workers' rights to unionize and ending collective bargaining, a move criticized by the American Federation of Government Employees.",
      new Date(2025, 2, 28),
      "Campbell, Lucy, et al. “Donald Trump Moves to End Union Rights for Many Government Agency Employees – US Politics Live.” The Guardian, The Guardian, 28 Mar. 2025, www.theguardian.com/us-news/live/2025/mar/28/donald-trump-white-house-washington-latest-live-us-politics-news. Accessed 28 Mar. 2025.",
    ),
  ],
  0.8,
  new Date(2025, 1, 18),
  "Our government is (supposed) to be a meritocracy. Independent experts lead independent agencies, so they can make politically unpopular decisions. Ignoring the fact that this is a power grab, it will make agencies function worse and be more partisan.",
);
export default action;
