import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Removing birthright citizenship",
  'Donald J. Trump, President of the United States, has repeatedly target "Birthright Citizenship", or the concept that anybody regardless of your parents immigration status who is born on American Soil is an American Citizen. Trump disagrees and says children of illegal immigrants are not citizens.',
  [
    "Beshay. \“Trump\'s Executive Order on Birthright Citizenship Draws More Disapproval than Approval.\” Pew Research Center, 21 Feb. 2025, www.pewresearch.org/short-reads/2025/02/21/trumps-executive-order-on-birthright-citizenship-draws-more-disapproval-than-approval/. Accessed 25 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "Donald J. Trump, President of the United States, issues an Executive Order saying children of illegal immigrants are not citizens.",
      new Date(2025, 0, 20),
      "“Protecting the Meaning and Value of American Citizenship.” The White House, 21 Jan. 2025, www.whitehouse.gov/presidential-actions/2025/01/protecting-the-meaning-and-value-of-american-citizenship/?. Accessed 25 Mar. 2025.",
    ),
    new timelineEvent(
      "Several states, led by Washington sue to block the order",
      new Date(2025, 0, 21),
      "Yang, Maya. “Trump Asks Supreme Court to Allow Order against Birthright Citizenship.” The Guardian, The Guardian, 13 Mar. 2025, www.theguardian.com/us-news/2025/mar/13/birthright-citizenship-supreme-court-trump?. Accessed 25 Mar. 2025.",
    ),
    new timelineEvent(
      'Judge blocks the order, calling it "Blatantly unconstitutional"',
      new Date(2025, 0, 23),
      "to, Contributors. “Executive Order Signed by U.S. President Donald Trump.” Wikipedia.org, Wikimedia Foundation, Inc., 20 Jan. 2025, en.wikipedia.org/wiki/Executive_Order_14160?. Accessed 25 Mar. 2025.",
    ),
    new timelineEvent(
      "A second judge, in maryland blocks the order nationwide",
      new Date(2025, 1, 6),
      "to, Contributors. “Executive Order Signed by U.S. President Donald Trump.” Wikipedia.org, Wikimedia Foundation, Inc., 20 Jan. 2025, en.wikipedia.org/wiki/Executive_Order_14160?. Accessed 25 Mar. 2025.",
    ),
    new timelineEvent(
      " A federal court in New Hampshire blocked the executive order, marking the third judicial injunction against it. ",
      new Date(2025, 1, 10),
      "\“Federal Court Blocks Trump Birthright Citizenship Executive Order  | American Civil Liberties Union.\” American Civil Liberties Union, 10 Feb. 2025, www.aclu.org/press-releases/federal-court-blocks-trump-birthright-citizenship-executive-order?. Accessed 25 Mar. 2025.",
    ),
    new timelineEvent(
      "A fourth judge blocks the order in Massachusets",
      new Date(2025, 1, 13),
      "to, Contributors. \“Executive Order Signed by U.S. President Donald Trump.\” Wikipedia.org, Wikimedia Foundation, Inc., 20 Jan. 2025, en.wikipedia.org/wiki/Executive_Order_14160?. Accessed 25 Mar. 2025.",
    ),
    new timelineEvent(
      "The Donald J. Trump, President of the United States, administration filed emergency applications with the Supreme Court, seeking to narrow the scope of the lower court injunctions and allow some restrictions on birthright citizenship to take effect.",
      new Date(2025, 2, 13),
      "Sullivan, Tim. \“Birthright Citizenship Explained as Trump Administration Pushes to Restrict It.\” AP News, 13 Mar. 2025, apnews.com/article/trump-administration-birthright-citizenship-059a5d7a564ee025d5b4b6e4492c6e66?. Accessed 25 Mar. 2025.",
    ),
  ],
  0.98,
  new Date(2025, 0, 20),
  "Birthright citizenship is a fundamental American value, that originated after the horrors of the civil war and slavery. It means that if you make it, if you are born here, (may I add, not a crime), then you can stay. That is how we ensure government cannot play around with citizenship",
);
export default action;
