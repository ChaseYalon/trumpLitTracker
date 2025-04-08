import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Gulf Of America",
  'On Jan 7, 2025 then President Elect of the United States, Donald John Trump said that Gulf Of Mexico, as it has been called for 300 years should be called the "Gulf of America"',
  [
    "to, Contributors. “Geographic Naming Dispute.” Wikipedia.org, Wikimedia Foundation, Inc., 12 Feb. 2025, en.wikipedia.org/wiki/Gulf_of_Mexico%E2%80%93America_naming_dispute?. Accessed 27 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "President of the United States, Donald J. Trump signs Executive Order 14172, which renames the Gulf of Mexico to the Gulf of America",
      new Date(2025, 0, 20),
      "“Executive Order 14172—Restoring Names That Honor American Greatness | the American Presidency Project.” Ucsb.edu, 2025, www.presidency.ucsb.edu/documents/executive-order-14172-restoring-names-that-honor-american-greatness. Accessed 27 Mar. 2025.",
    ),
    new timelineEvent(
      "Gulf Of America day proclaimed",
      new Date(2025, 1, 9),
      "“Gulf of America Day, 2025.” The White House, 9 Feb. 2025, www.whitehouse.gov/presidential-actions/2025/02/gulf-of-america-day-2025/?. Accessed 27 Mar. 2025.",
    ),
    new timelineEvent(
      "The AP has refused to acknowledge the change in their influential stylebook so the Trump Administration has revoked their access",
      new Date(2025, 1, 11),
      "“AP Statement on Oval Office Access | the Associated Press.” The Associated Press, 20 Feb. 2025, www.ap.org/the-definitive-source/announcements/ap-statement-on-oval-office-access/. Accessed 27 Mar. 2025.",
    ),
    new timelineEvent(
      "AP sues to get access back after serval letters to restore it are rejected",
      new Date(2025, 1, 21),
      "Bauder, David. “AP Sues 3 Trump Administration Officials, Citing Freedom of Speech.” AP News, 21 Feb. 2025, apnews.com/article/ap-lawsuit-trump-administration-officials-0352075501b779b8b187667f3427e0e8?. Accessed 27 Mar. 2025.",
    ),
    new timelineEvent(
      "Court declines to immediately restore access",
      new Date(2025, 1, 24),
      "Sedensky, Matt. “Judge Won’t Immediately Restore AP’s Access to White House.” AP News, 24 Feb. 2025, apnews.com/article/ap-lawsuit-trump-gulf-mexico-america-6b6fba488e7e420e5fcd28c44a755922?. Accessed 27 Mar. 2025.",
    ),
    new timelineEvent(
      "More hearings in federal court",
      new Date(2025, 2, 27),
      "Bauder, David. “The AP and the Trump Administration Are Due Back in Court in Their Fight over White House Access.” AP News, 26 Mar. 2025, apnews.com/article/ap-trump-administration-media-access-white-house-2e1220b8be122182ae7a2396989905be. Accessed 27 Mar. 2025",
    ),
  ],
  0.4,
  new Date(2025, 0, 9),
  "This by itself is binal but the refusal to allow the AP access (discussed later) is incredibly bad and undermines our democracy significantly.",
);
export default action;
