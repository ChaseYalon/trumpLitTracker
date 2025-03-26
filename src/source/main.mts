import { date } from "astro:schema";

let actions: Action[] = [];
let count = 0;

export class timelineEvent {
  summary: string;
  date: Date;
  source: string;
  constructor(summary: string, date: Date, source: string) {
    this.summary = summary;
    this.date = date;
    this.source = source;
  }
}

class Action {
  name: string;
  id: number;
  summary: string;
  sources: string[];
  timeline: timelineEvent[];
  evilness: number;
  start: Date;
  opinion: string;
  constructor(
    name: string,
    summary: string,
    sources: string[],
    timeline: timelineEvent[],
    evilness: number,
    start: Date,
    opinion: string,
  ) {
    count++;
    this.name = name;
    this.id = count;
    this.summary = summary;
    this.sources = sources;
    this.timeline = timeline;
    this.evilness = evilness;
    this.start = start;
    this.opinion = opinion;
  }
}

actions = [
  new Action(
    "Dismantling of United States Agency for International Development",
    "On January 20 2025, Donald J. Trump, President of the United States, signed Executive Order 14169 (1) which among other things paused all foreign aid for 90 days. Shortly thereafter, the same Donald J. Trump, President of the United States appointed Marco Rubio, Secretary of State acting administrator of USAID (2) and began dismantling it.",
    [
      "1: to, Contributors. “2025 United States Policy on Foreign Aid.” Wikipedia.org, Wikimedia Foundation, Inc., 30 Jan. 2025, en.wikipedia.org/wiki/Executive_Order_14169#:~:text=Executive%20Order%2014169%2C%20titled%20%22Reevaluating,order%20to%20conduct%20a%20review. Accessed 22 Mar. 2025.",
      "2 : “Secretary Marco Rubio Appointed as Acting Administrator for the United States Agency for International Development (USAID) - United States Department of State.” United States Department of State, 4 Feb. 2025, www.state.gov/secretary-marco-rubio-appointed-as-acting-administrator-for-the-united-states-agency-for-international-development-usaid/. Accessed 22 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Donald J. Trump, President of the United States, signs executive order suspending foreign aid",
        new Date(2025, 0, 20),
        "CITATION NEEDED, I GOT THIS FROM WIKIPEDIA",
      ),
      new timelineEvent(
        "Officials from DOGE search USAID HQ",
        new Date(2025, 1, 1),
        "Whitehurst, Lindsay, and Michael Kunzelman. “Judge Rules DOGE\'s USAID Dismantling Likely Violates the Constitution.” AP News, 18 Mar. 2025, apnews.com/article/usaid-federal-judge-trump-administration-bdc919a5d98eda5ab72a32fdfe2f147d. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        'Elon Musk says "Trump" "Agrees" to dismantle usaid',
        new Date(2025, 1, 3),
        "Knickmeyer, Ellen, et al. “USAID Notice Instructs Staffers to Stay out of Its Headquarters.” AP News, 3 Feb. 2025, apnews.com/article/trump-musk-usaid-c0c7799be0b2fa7cad4c806565985fe2. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "9700 of USAID's 10000 employees are placed on administrative leave.",
        new Date(2025, 1, 6),
        "“The Hill.” The Hill, 7 Feb. 2025, thehill.com/video/wdvm-usaid-worker-layoffs/10435899/. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "The administration of Donald J. Trump, President of the United States, terminated USAID's lease on its HQ, causing the agencies eviction",
        new Date(2025, 1, 10),
        'Kinnard, Meg, and Joshua Goodman. "Trump and Musk Demand Termination of Federal Office Leases through General Services Administration." AP News, 4 Feb. 2025, apnews.com/article/trump-musk-gsa-terminate-office-leases-f8faac5e2038722f705587c8dd21ab26. Accessed 22 Mar. 2025.',
      ),
      new timelineEvent(
        "Donald J. Trump, President of the United States, fires USAID inspector general Paul Martin (In violation of federal law)",
        new Date(2025, 1, 11),
        'Navarro, Aaron. "Trump Fires USAID Inspector General Who Released Report on Impact of Agency Cuts." Cbsnews.com, CBS News, 12 Feb. 2025, www.cbsnews.com/news/trump-fires-usaid-inspector-general/. Accessed 22 Mar. 2025.',
      ),
      new timelineEvent(
        "Secretary of State Marco Rubio announce 83% of programs are cut and the other 17% are moving to the state department",
        new Date(2025, 2, 10),
        "Gedeon, Joseph. “Rubio Says 83% of USAid Programs Terminated after Six-Week Purge.” The Guardian, The Guardian, 10 Mar. 2025, www.theguardian.com/us-news/2025/mar/10/marco-rubio-usaid-funding?. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "A federal judge ruled that the dismantling of USAID by DOGE likely violated the Constitution, issuing an indefinite injunction to halt further actions against the agency.",
        new Date(2025, 2, 18),
        "Whitehurst, Lindsay, and Michael Kunzelman. “Judge Rules DOGE\'s USAID Dismantling Likely Violates the Constitution.” AP News, 18 Mar. 2025, apnews.com/article/usaid-federal-judge-trump-administration-bdc919a5d98eda5ab72a32fdfe2f147d. Accessed 22 Mar. 2025.",
      ),
    ],
    0.8,
    new Date(2025, 0, 20),
    "United States Agency for International Development or USAID is a  critical agency if the U.S. government that distributes foreign aid.Its annual budget of $60 billion. Some say it is wasteful but it does important things like subsidizing public schools in Pakistan (find a good source) that keeps kids from going to Islamic Maras's or subsidizing grain in Columbia to prevent coke production",
  ),
  new Action(
    "January Sixth Pardons",
    "On January 20th 2025 President of the United States Donald John Trump using the authority vested in him by Article II of the constitution, issued 1600 sweeping pardons for defendants charged and convicted for roles in the January 6 capital attack.(1)",
    [
      '1: Richer, Alanna Durkin, and Michael Kunzelman. "Trump Issues Sweeping Pardon of Supporters Charged in the Jan. 6, 2021, Capitol Attack." AP News, 21 Jan. 2025, apnews.com/article/capitol-jan-6-pardons-trump-justice-department-8ce8b2a8f8cb602d5eaf85ac7b969606. Accessed 22 Mar. 2025.',
    ],
    [
      new timelineEvent(
        "Following the pardons, federal judges began releasing the defendants",
        new Date(2025, 0, 21),
        "Lynch, Sarah N. “The Most High-Profile Jan 6 Defendants to Receive Clemency from Trump.” Reuters, 21 Jan. 2025, www.reuters.com/world/us/most-high-profile-jan-6-defendants-receive-clemency-trump-2025-01-21/. Accessed 22 Mar. 2025.",
      ),
    ],
    0.99,
    new Date(2025, 0, 20),
    "On January 6, 2021 then President Donald John Trump organized a mob of supporters to overthrow the government. It was awful. He failed because he is stupid and incompetent but still. Then on his first day back in office he pardoned them All. I have no words, this is not Democracy and we all need to remember this is not normal and we need to fight it.",
  ),
  new Action(
    "Firing of DOJ prosecutors",
    "On January 27 2025, President of the United States Donald John Trump instructed the Department of Justice to fire all prosecutors who worked with Special Counsel Jack Smith(1)",
    [
      '1: Lynch, Sarah N, and Andrew Goudsward. "Trump Administration Fires Team of Lawyers Who Prosecuted Him, Official Says." Reuters, 27 Jan. 2025, www.reuters.com/legal/trump-appointed-prosecutor-opens-internal-review-justice-depts-jan-6-cases-wsj-2025-01-27/?. Accessed 22 Mar. 2025.',
    ],
    [
      new timelineEvent(
        "Acting US Attorney General fires all prosecutors appointed by then President Biden",
        new Date(2025, 0, 27),
        'Lowell, Hugo. "Trump Orders Justice Department to Fire All US Attorneys Appointed by Biden." The Guardian, The Guardian, 19 Feb. 2025, www.theguardian.com/us-news/2025/feb/19/trump-justice-department-biden-attorneys?. Accessed 22 Mar. 2025.',
      ),
    ],
    0.8,
    new Date(2025, 0, 27),
    "For 200 years, the Department of Justice has been independent. It has been the job to prosecute criminals independently. Donald J. Trump, President of the United States, upended that by firing all of Biden's prosecutors and forever politicizing the Department of justice.",
  ),
  new Action(
    "Firing Independent Inspectors General",
    "On January 24, 2025 President of the United States, Donald John Trump fired 17 independent inspectors general, who's job it is to find and report waste and abuse in the government, the are independent and nonpartisan.(1)",
    [
      'Miller, Zeke, et al. "Trump Fires More than a Dozen Independent Inspectors General." AP News, 25 Jan. 2025, apnews.com/article/trump-inspectors-general-fired-congress-unlawful-4e8bc57e132c3f9a7f1c2a3754359993. Accessed 22 Mar. 2025.',
    ],
    [
      new timelineEvent(
        "Senate Democrats raise strong objections and demand, and are refused information",
        new Date(2025, 0, 25),
        'Miller, Zeke, et al. "Trump Fires More than a Dozen Independent Inspectors General." AP News, 25 Jan. 2025, apnews.com/article/trump-inspectors-general-fired-congress-unlawful-4e8bc57e132c3f9a7f1c2a3754359993?. Accessed 22 Mar. 2025.',
      ),
      new timelineEvent(
        "Legal experts begin commenting that this is wildly illegal and violates the 2022 Inspector General Act",
        new Date(2025, 0, 28),
        "McGreal, Chris. “Trump Condemned over “Blatantly Illegal” Firings of Watchdog Chiefs.” The Guardian, The Guardian, 28 Jan. 2025, www.theguardian.com/us-news/2025/jan/28/trump-watchdog-firings-inspectors-general. Accessed 22 Mar. 2025.",
      ),
    ],
    0.85,
    new Date(2025, 0, 24),
    "We have laws in this country. Or we did, there is a law saying the President cannot fire the inspectors general (yes that is the plural). He did anyway, the court case is still pending",
  ),
  new Action(
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
  ),
  new Action(
    "Pete Hegseth, as Secretary of Defense",
    "On November 12 2024, Then President Elect Donald John Trump nominated a fox news host, Pete Hegseth to Secretary of Defense Hegseth has a history of womanizing and drinking as evidenced by an FBI report. He has never head command roles in the military.",
    [
      "Baldor, Lolita, and Tara Copp. \“Trump Picks Fox Host Pete Hegseth for Defense Secretary and Stuns Pentagon.\” AP News, 13 Nov. 2024, apnews.com/article/trump-hegseth-defense-secretary-pentagon-2d8030921ecef933778cf92afd40ec72. Accessed 23 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Senate Armed Services committee holds an explosive conformation hearing, focusing on Hegseth's history of Abuse and Alcohol",
        new Date(2025, 0, 14),
        "“To Conduct a Confirmation Hearing on the Expected Nomination of Mr. Peter B. Hegseth to Be Secretary of Defense | United States Senate Committee on Armed Services.” Senate.gov, U.S. Senate Committee on Armed Services, 14 Jan. 2025, www.armed-services.senate.gov/hearings/to-conduct-a-confirmation-hearing-on-the-expected-nomination-of-mr-peter-b-hegseth-to-be-secretary-of-defense?. Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "The Senate Armed Services committee votes 14-13 along party lines to advance his nomination",
        new Date(2025, 0, 20),
        "“Confirmation Process for Pete Hegseth for Secretary of Defense.” Ballotpedia, 2021, ballotpedia.org/Confirmation_process_for_Pete_Hegseth_for_secretary_of_defense?. Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "The Senate invoked cloture on Hegseth's nomination with a 51-49 vote, limiting further debate.",
        new Date(2025, 0, 23),
        "“PN11-7 - Nomination of Peter Hegseth for Department of Defense, 119th Congress (2025-2026).” Congress.gov, 2025, www.congress.gov/nomination/119th-congress/11/7 Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "The Senate confirmed Hegseth as Secretary of Defense in a 51-50 vote, with Vice President J.D. Vance casting the tie-breaking vote. ",
        new Date(202, 0, 24),
        "“PN11-7 - Nomination of Peter Hegseth for Department of Defense, 119th Congress (2025-2026).” Congress.gov, 2025, www.congress.gov/nomination/119th-congress/11/7? Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "Hegseth was officially sworn in as the 29th Secretary of Defense",
        new Date(2025, 0, 25),
        "“HON Pete Hegseth.” U.S. Department of Defense, 2025, www.defense.gov/About/Biographies/Biography/Article/4040890/hon-pete-hegseth/. Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "Pete Hegseth announced plans to terminate approximately 5,400 probationary employees within the Department of Defense, initiating a hiring freeze and planning a 5% to 8% reduction in the civilian workforce of about 760,000 personnel.",
        new Date(2025, 1, 20),
        "to, Contributors. “Mass Government Layoffs in 2025.” Wikipedia.org, Wikimedia Foundation, Inc., 16 Feb. 2025, en.wikipedia.org/wiki/2025_United_States_federal_mass_layoffs?. Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "Ordered the removal of web pages related to diversity, equity, and inclusion (DEI) from military websites, including profiles of Native American code talkers and other minority service members. ​",
        new Date(2025, 2, 18),
        "Aratani, Lauren, and Coral Murphy Marcos. “Articles about Native American Code Talkers Removed from Military Websites.” The Guardian, The Guardian, 18 Mar. 2025, www.theguardian.com/us-news/2025/mar/18/native-american-code-talkers-dei-military?. Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "Criticized a federal judge's decision to block the administration's ban on transgender individuals serving in the military, suggesting the judge had overstepped her authority.",
        new Date(2025, 2, 22),
        "Stewart, Phil. “Trump\'s Pentagon Chief Slams Judge for Halting Transgender Ban.” Reuters, 22 Mar. 2025, www.reuters.com/world/us/trumps-pentagon-chief-slams-judge-halting-transgender-ban-2025-03-22/?. Accessed 23 Mar. 2025.",
      ),
    ],
    0.93,
    new Date(2024, 10, 12),
    "HE IS A FOX NEWS HOST!!! NOT A GENERAL, NOT EVEN A HIGH LEVEL SOLDIER. He has a history of alcohol and well woman abuse and could probably not get hired at a summer camp. Now he is the second highest ranking person in the military. ",
  ),
  new Action(
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
  ),
  new Action(
    "Kash Patel as FBI director",
    "Kash Patel, a former defense department lawyer to be Director of the Federal Bureau of Investigation",
    [
      "Tucker, Eric. \“Trump Loyalist Kash Patel Is Narrowly Confirmed as FBI Director by the Senate.\” AP News, 20 Feb. 2025, apnews.com/article/trump-patel-fbi-justice-department-518329110ea230e2989095bfcbe34c59. Accessed 23 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Senate confirms Patel (51-49) in a deeply divisive vote",
        new Date(2025, 1, 20),
        "Durkee, Alison. “Senate Confirms Kash Patel with 2 Republicans Opposing—What to Know about Trump\'s New FBI Director.” Forbes, 20 Feb. 2025, www.forbes.com/sites/alisondurkee/2025/02/20/senate-confirms-kash-patel-with-2-republicans-opposing-what-to-know-about-trumps-new-fbi-director/ Accessed 23 Mar. 2025.",
      ),
    ],
    0.92,
    new Date(2024, 10, 30),
    "The FBI is a deeply powerful agency and is supposed to be bipartisan. Kash Patel is a partisan hack who will prosecute Trumps political enemies. ", //Make this better, it sucks
  ),
  new Action(
    "Tulsi Gabbard as Director of National Integence",
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
  ),
  new Action(
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
  ),
  new Action(
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
  ),
  new Action(
    "Federal Buyouts",
    "On January 28,2025 President of the United States, Donald J. Trump ordered the Office of Personel Managment (OPM) to send an email to all federal employes. It offered them a \"deffered resignation\" where they would stop working now but collct sallary for 6 months.",
    [
      "“Axios.” Axios, 2025, www.axios.com/newsletters/axios-dc-b75139b0-dd84-11ef-b405-e5f757f54ccd?. Accessed 26 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "January 28, 2025: OPM sends \"Fork in the Road\" email at the request of the U.S. DOGE service",
        new Date(
          2025,
          0,
          28
        ),
        "\"A Federal Worker Tried to Take Trump\'s \'Fork\' Resignation Offer. Here\'s What Happened.\" NPR, 14 Feb. 2025, www.npr.org/2025/02/14/nx-s1-5296910/trump-federal-workers-fork-resign-buyout?. Accessed 26 Mar. 2025"
      ),
      new timelineEvent(
        "A federal judge delays the resignation date sevral weeks",
        new Date(
          2025,
          1,
          6
        ),
        "“Trump\'s \'Fork in the Road\' Resignation Offer for Federal Workers Is in Judge\'s Hands.” NPR, 10 Feb. 2025, www.npr.org/2025/02/10/nx-s1-5292042/federal-employees-trump-fork-resignation-buyout-court. Accessed 26 Mar. 2025."
      ),
      new timelineEvent(
        "A judge lets the program conclude, 75,000 workers take the offer",
        new Date(
          2025,
          1,
          10
        ),
        "Jazeera, Al. “A Timeline of the Trump Administration’s Coronavirus Actions.” Al Jazeera, 23 Apr. 2020, www.aljazeera.com/news/2020/4/23/a-timeline-of-the-trump-administrations-coronavirus-actions?. Accessed 26 Mar. 2025."
      )
    ],
    0.6,
    new Date(
      2025,
      0,
      28
    ),
    "There is nothing wrong with this on the surface, the problem is the process, if you want to downsize there is a legal process and this is not that and second, the admistration is sure to replace them with hardcore loyalists to swing the civil service to the rigth."
  ),
  new Action(
    "Canada as the 51\'st state",
    "On Dec 10, 2024 then President Elect, Donald John Trump called Justin Tredau, the Prime Minister of Canada, \"Governor of the Great State of canada\"",
    [
      "Shabad, Rebecca. “Trump Mocks Prime Minister Justin Trudeau as the ‘Governor’ of the ‘Great State of Canada.’” NBC News, 10 Dec. 2024, www.nbcnews.com/politics/donald-trump/trump-mocks-prime-minister-justin-trudeau-governor-great-state-canada-rcna183570. Accessed 26 Mar. 2025."
    ],
    [
      new timelineEvent(
        "In an interview with Fox News' Bret Baier ahead of the Super Bowl, President of the United States, Donald J. Trump stated he was serious about wanting Canada to become the 51st state. He confirmed that his annexation comments were \"a real thing\"",
        new Date(
          2025,
          1,
          10
        ),
        "Weissert, Will. “Trump’s Remarks on Canada Becoming the 51st State Raise a Lot of Questions.” AP News, 13 Feb. 2025, apnews.com/article/how-canada-could-become-us-state-42360e10ded96c0046fd11eaaf55ab88?utm_source=chatgpt.com. Accessed 26 Mar. 2025."
      ),
      new timelineEvent(
        "In a bizzare press confrense with Secratry of Deffense, Pete Hegeth, President of the United States, Donald J. Trump sugested Canada could become the 51st state",
        new Date(
          2025,
          2,
          6
        ),
        "Matina Stevis-Gridneff. “How Trump’s ‘51st State’ Canada Talk Came to Be Seen as Deadly Serious.” The New York Times, 7 Mar. 2025, www.nytimes.com/2025/03/07/world/canada/trump-trudeau-canada-51st-state.html."
      )
    ],
    0.7,
    new Date(
      2024,
      12,
      18
    ),
    "This is not evil as much as bizzare and inflmataory, it is losing us allies and money but compared to say the J6 pardons or Kash Patel this is just stupid and binalle."
  )
];

export default actions;
