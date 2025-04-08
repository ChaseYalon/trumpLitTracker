import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Tulsi Gabbard as Director of National Intelligence ",
  "Donald J. Trump, President of the United States, nominated Tulsi Gabbard, a former democrat and Hawaii Congressmen to be Director of National Intelligence, a powerfull position that oversees the FBI, CIA, NSA and many other agencies, one of the most powerfull positions in the government",
  [
    "\“Statement by President-Elect Donald J. Trump Announcing the Nomination of Tulsi Gabbard as Director of National Intelligence (DNI) | the American Presidency Project.\” Ucsb.edu, 2025, www.presidency.ucsb.edu/documents/statement-president-elect-donald-j-trump-announcing-the-nomination-tulsi-gabbard-director. Accessed 24 Mar. 2025.",
  ],
  [
    new timelineEvent(
      "Gabbard faced criticism for an unannounced trip to Syria, during which she met with President Bashar al-Assad. She defended the meeting as a fact-finding mission but was criticized for engaging with a leader accused of war crimes.",
      new Date(2017, 1, 25),
      "Manchester, Julia. “Gabbard Says She Met with Assad on Syria Trip.” CNN, 25 Jan. 2017, www.cnn.com/2017/01/25/politics/tulsi-gabbard-lead-syria/index.html. Accessed 24 Mar. 2025.",
    ),
    new timelineEvent(
      "On November 13, 2024, Donald J. Trump, President of the United States, announced Gabbard as his nominee for DNI. This nomination raised concerns within the intelligence community due to her lack of traditional intelligence experience and past controversial statements perceived as aligning with Russian narratives",
      new Date(2024, 10, 13),
      'Bennett, Brian. ""We Are Reeling": Trump\'s Pick of Tulsi Gabbard Alarms Intelligence Community." TIME, Time, 15 Nov. 2024, time.com/7176696/gabbard-russia-connection-trump-intelligence/?. Accessed 24 Mar. 2025.',
    ),
    new timelineEvent(
      "Gabbard was confirmed as Director of National Intelligence by a Senate vote of 52-48.",
      new Date(2025, 1, 12),
      '"Tulsi Gabbard." Ballotpedia, 2016, ballotpedia.org/Tulsi_Gabbard?. Accessed 24 Mar. 2025.',
    ),
  ],
  0.75,
  new Date(2024, 10, 13),
  'Gabbard, while not as blatantly evil as say Patel, though just as dangerous and unqualified, has a nasty tendency towards authoritarianism. Particularly her closeness with Russian "President" Vladimir Putin. The DNI is an immensely powerfull role and she could be reasonably construed as a Russian puppet. She has said numerous unreasonable Pro Russia things and there is little doubt she will do whatever either of our three Presidents, Trump, Musk, or Putin tell her.',
);

export default action;
