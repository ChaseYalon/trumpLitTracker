import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Pam Bondi as Attorney General",
  "On November 13 2024, then President Elect Donald Trump nominated then representative Matt Gaetz for Attorney General, a damming ethics report showing he had sex with minors tanked his nomination. He then Nominated Pamela Bondi.",
  [
    "Pereira, Ivan. “Matt Gaetz AG Nomination: Timeline.” ABC News, 22 Nov. 2024, abcnews.go.com/Politics/matt-gaetz-ag-nomination-timeline/story?id=116102495. Accessed 23 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "Donald John Trump, President Elect of the United States, Nominates Matt Gaetz",
      new Date(2024, 20, 14),
      "Pereira, Ivan. “Matt Gaetz AG Nomination: Timeline.” ABC News, 22 Nov. 2024, abcnews.go.com/Politics/matt-gaetz-ag-nomination-timeline/story?id=116102495. Accessed 23 Mar. 2025.",
    ),
    new timelineEvent(
      "The House Ethics Committee (Who had been investigating Gaetz) showed that Gaetz paid more than $10,000 to two women who were later witnesses in sexual misconduct probes conducted by both the House and the Justice Department, according to documents",
      new Date(2024, 10, 19),
      "Pereira, Ivan. “Matt Gaetz AG Nomination: Timeline.” ABC News, 22 Nov. 2024, abcnews.go.com/Politics/matt-gaetz-ag-nomination-timeline/story?id=116102495. Accessed 23 Mar. 2025.",
    ),
    new timelineEvent(
      "Gaetz announces on X that he is withdrawing his name from the nomination process. This was likely after consultation with then President Elect Trump.",
      new Date(2025, 10, 11),
      "Pereira, Ivan. “Matt Gaetz AG Nomination: Timeline.” ABC News, 22 Nov. 2024, abcnews.go.com/Politics/matt-gaetz-ag-nomination-timeline/story?id=116102495. Accessed 23 Mar. 2025.",
    ),
    new timelineEvent(
      "Just after Representative Gaetz's withdrawal, Donald J. Trump, President of the United States, Nominated Florida Attorney General, Pamela Bondi",
      new Date(2025, 10, 11),
      "Confirmation Process for Pam Bondi for U.S. Attorney General.” Ballotpedia, 2021, ballotpedia.org/Confirmation_process_for_Pam_Bondi_for_U.S._attorney_general. Accessed 23 Mar. 2025.",
    ),
    new timelineEvent(
      "The Senate Judiciary Committee held confirmation hearings for Bondi",
      new Date(2025, 0, 15),
      "Confirmation Process for Pam Bondi for U.S. Attorney General.” Ballotpedia, 2021, ballotpedia.org/Confirmation_process_for_Pam_Bondi_for_U.S._attorney_general. Accessed 23 Mar. 2025.",
    ),
    new timelineEvent(
      "The Senate voted 54-46 to confirm Bondi as attorney general.",
      new Date(2025, 1, 4),
      "Confirmation Process for Pam Bondi for U.S. Attorney General.” Ballotpedia, 2021, ballotpedia.org/Confirmation_process_for_Pam_Bondi_for_U.S._attorney_general. Accessed 23 Mar. 2025.",
    ),
  ],
  0.8,
  new Date(2024, 10, 11),
  "Wow the benchmark is low. Compared to Gaetz she is reasonable but she is a 2020 election denier who has called for trump to prosecute his enemies. That will surely happen. How far our justice system has fallen since the days of Marshall and Black (I know they where supreme court judges not AG'S)",
);

export default action;
