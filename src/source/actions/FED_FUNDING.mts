import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Blanket freeze of all federal expenditure",
  "On January 27, 2025 the Office Of Management and Budget issues an order pausing all federal grants, this money had already been appropriated by congress and the executive branch had not reviewed any, they just shut it all down",
  [
    "Raymond, Nate. \“Trump Blocked from Imposing Sweeping Federal Funding Freeze.\” Reuters, 25 Feb. 2025, www.reuters.com/world/us/trump-blocked-imposing-sweeping-federal-funding-freeze-2025-02-25/. Accessed 24 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "Office of Management and Budget (OMG) freezes all grants",
      new Date(2025, 0, 17),
      '"A Second Federal Judge Has Ruled to Block the Trump Administration"s Spending Freeze.” NPR, 6 Mar. 2025, www.npr.org/2025/03/06/nx-s1-5312069/trump-federal-funding-freeze-court-order. Accessed 24 Mar. 2025.',
    ),
    new timelineEvent(
      "A federal judge grated a preliminary injunction against Donald J. Trump, President of the United States, at the request of two dozen Democratic State Attorneys General.",
      new Date(2025, 0, 29),
      "\"Trump Says Funding Freeze Was to \'Quickly Look at the Scams, Dishonesty, Waste and Abuse.’” AP News, 29 Jan. 2025, apnews.com/video/trumps-budget-office-rescinds-an-order-freezing-spending-on-federal-grants-after-less-than-two-days-68a1307860fa4e7887a2efc571917917. Accessed 24 Mar. 2025.",
    ),
    new timelineEvent(
      "OMB rescinds the Memo, releasing the grants",
      new Date(2025, 0, 29),
      "Casey, Michael. “Second Federal Judge Extends Block Preventing the Trump Administration from Freezing Funding.” AP News, 6 Mar. 2025, apnews.com/article/federal-grants-loans-spending-freeze-trump-administration-6620ef49a21f88f83f8f998805b92677. Accessed 24 Mar. 2025.",
    ),
  ],
  0.85,
  new Date(2025, 0, 27),
  'According to Article I of the constitution, "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defense and general Welfare of the United States;". The president does not have the power to unilaterally revoke money authorized by congress, this was a power grab but thankfully the courts blocked it and Trump backed down.',
);
export default action;
