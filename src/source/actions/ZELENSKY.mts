import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
  "Volodymyr Zelenskyy",
  "Volodymyr Trump and Zelenskyy have had a ... rocky relationship. In his first term a call with Zelenskyy was the crux of his first impeachment and in is second term his most notable foreign policy achievement was bullying Zelenskyy and chasing him out of Washington.",
  [
    "The. “Full Document: Trump\'s Call with the Ukrainian President.” Nytimes.com, The New York Times, 25 Sept. 2019, www.nytimes.com/interactive/2019/09/25/us/politics/trump-ukraine-transcript.html. Accessed 6 Apr. 2025.",
  ],
  [
    new timelineEvent(
      "President of the United States, Donald J. Trump, called newly elected President of Ukraine, Volodymyr Zelenskyy. He then indicated that US aid for Ukraine was contingent on Zelenskyy, providing dirt on one of Trumps political opponents, Then Former Vice President, Joe Biden",
      new Date(2019, 6, 25),
      "The. “Full Document: Trump’s Call with the Ukrainian President.” Nytimes.com, The New York Times, 25 Sept. 2019, www.nytimes.com/interactive/2019/09/25/us/politics/trump-ukraine-transcript.html. Accessed 6 Apr. 2025.",
    ),
    //missing serval events
    new timelineEvent(
      "Volodymyr Zelenskyy, president of Ukraine was coming to the United States to sign some mineral deal, Presidents, Trump and Zelenskyy and Vice President Vance, held some press conference in the oval office, the sort that should have been forgotten by history, instead Vance ended up screaming at Zelenskyy and Zelenskyy refusing to back down. Either way, that did not end well for anyone involved and Trump froze all aid and intelligence with Ukraine.",
      new Date(2025, 1, 28),
      '"2025 Trump–Zelenskyy Oval Office Meeting - Wikipedia." Wikipedia.org, 2025, en.wikipedia.org/wiki/2025_Trump%E2%80%93Zelenskyy_Oval_Office_meeting#:~:text=On%20February%2028%2C%202025%2C%20Donald,White%20House%20in%20Washington%2C%20D.C.. Accessed 7 Apr. 2025.',
    ),
    new timelineEvent(
      "President of the United States, Donald J. Trump orders CIA Director, John Radcliffe and Secretary of Defense Pete Hegseth to stop all aid and inelegance sharing to Ukraine. This crippled Ukraine's ability to defend itself and resulted in hundreds of civilian deaths because the Ukraine's where not able to take down enemy missiles.",
      new Date(2025, 2, 3),
      "Liptak, Kevin, et al. “Trump Pauses Military Aid to Ukraine after Oval Office Argument with Zelenskyy, White House Official Says.” CNN, 4 Mar. 2025, www.cnn.com/2025/03/03/politics/trump-administration-ukraine-aid/index.html. Accessed 7 Apr. 2025.",
    ),
    new timelineEvent(
      "After hundreds of unnecessary civilian deaths and major battlefield setbacks Trump agreed to resume aid having accomplished nothing except killing innocents",
      new Date(2025, 2, 11),
      "LEE, MATTHEW. “Trump Administration to Resume Military Aid to Ukraine and Intelligence Sharing.” TIME, Time, 11 Mar. 2025, time.com/7266942/trump-administration-resume-military-aid-ukraine/. Accessed 7 Apr. 2025.",
    ),
  ],
  0.7,
  new Date(2019, 6, 25),
  "We stand up to the weak, give voice to the voiceless and freedom to the oppressed. That is our national ethos and has been for 250 years. It is disgraceful that the President would abandon a loyal ally in their time of need and for political reasons, it is disgraceful.",
);
export default action;
