import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Firing of C.Q. Brown",
  "On Feb 21, President of the United States Donald J. Trump, and Secretary of Defense Pete Hegseth fired Chairmen of the Joint Chiefs of Staff, C.Q. Brown",
  [
    "Copp, Tara, and Lolita Baldor. “Trump Fires Joint Chiefs of Staff Chair CQ Brown.” AP News, 22 Feb. 2025, apnews.com/article/trump-brown-joint-chiefs-of-staff-firing-fa428cc1508a583b3bf5e7a5a58f6acf?. Accessed 27 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "Alongside Gen. Brown, other senior military officials, including Chief of Naval Operations Adm. Lisa Franchetti and Vice Chief of Staff of the Air Force Gen. Jim Slife, were also dismissed",
      new Date(2025, 1, 9),
      "Youssef, Nancy A. “Trump Fires Top Pentagon Officers in Sweeping Overhaul.” WSJ, The Wall Street Journal, 22 Feb. 2025, www.wsj.com/politics/national-security/trump-fires-the-chairman-of-the-joint-chiefs-fd4a4d07?. Accessed 27 Mar. 2025.",
    ),
    new timelineEvent(
      'In the same announcement, President Trump nominated retired Air Force Lt. Gen. Dan "Razin" Caine to replace Gen. Brown as the Chairman of the Joint Chiefs of Staff. ',
      new Date(2025, 1, 9),
      "News, PBS. “Trump Fires Gen. CQ Brown as Chairman of the Joint Chiefs of Staff.” PBS News, 21 Feb. 2025, www.pbs.org/newshour/politics/trump-fires-gen-cq-brown-as-chairman-of-the-joint-chiefs-of-staff?. Accessed 27 Mar. 2025.",
    ),
  ],
  0.7,
  new Date(2025, 1, 9),
  "While Trump does have an undisputed right to chose is own advisors, it is worrying because the Pentagon is a politically independent meritocracy and if things start going wrong and the Pentagon plays a role in domestic politics, it is worrying that a Trump loyalist is running it.",
);
export default action;
