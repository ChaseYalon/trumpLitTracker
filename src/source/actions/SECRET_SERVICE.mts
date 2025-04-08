import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Revoking Secret Service Details of Political Enemies",
  "President of the United States, Donald John Trump revokes Secret service details of political enemies, despite many of them facing credible threats of assassination from the Islamic Republic of Iran",
  [
    'Basu, Zachary. "Trump\'s Overflowing Grudge List." Axios, 21 Mar. 2025, www.axios.com/2025/03/21/trump-retaliation-revenge-biden-security-clearance. Accessed 22 Mar. 2025.',
  ],
  [
    new timelineEvent(
      "Donald J. Trump, President of the United States, revoked Secret Service Protection from John Bolton, his former National Security Advisor who faced assassination threats from Iran",
      new Date(2025, 0, 22),
      "Lee, Matthew, and Aamer Madhani. \“Trump Revokes Protections for Former Secretary of State Pompeo and Top Aide.\” AP News, 23 Jan. 2025, apnews.com/article/trump-pompeo-hook-iran-security-protections-987ca371756f48028ebd34ca7111f1c5. Accessed 22 Mar. 2025.",
    ),

    new timelineEvent(
      "Donald J. Trump, President of the United States, revoked Secret Service Protection from from Mike Pompeo, his former Secretary Of State who had assassination threats from Iran.",
      new Date(2025, 0, 23),
      "Lee, Matthew, and Aamer Madhani. \“Trump Revokes Protections for Former Secretary of State Pompeo and Top Aide.\” AP News, 23 Jan. 2025, apnews.com/article/trump-pompeo-hook-iran-security-protections-987ca371756f48028ebd34ca7111f1c5. Accessed 22 Mar. 2025.",
    ),
    new timelineEvent(
      "Donald J. Trump, President of the United States, Revoked Secret Service protection of Brian Hook, a former top aide who faces assassination threats from Iran",
      new Date(2025, 0, 23),
      "Lee, Matthew, and Aamer Madhani. \“Trump Revokes Protections for Former Secretary of State Pompeo and Top Aide.\” AP News, 23 Jan. 2025, apnews.com/article/trump-pompeo-hook-iran-security-protections-987ca371756f48028ebd34ca7111f1c5. Accessed 22 Mar. 2025",
    ),
  ],
  0.6, //Those guys are all pretty evil, but this is still bad
  new Date(2025, 0, 22),
  "These men, they where evil yes but they did things for the American government against a foreign government and faced legitimate assassination threats. Trump could well be signing their death warrants",
);
export default action;
