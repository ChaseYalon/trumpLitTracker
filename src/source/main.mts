import { string } from "astro:schema";

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
  oppinion : string;
  constructor(
    name: string,
    summary: string,
    sources: string[],
    timeline: timelineEvent[],
    evilness: number,
    start: Date,
    oppinion : string
  ) {
    count++;
    this.name = name;
    this.id = count;
    this.summary = summary;
    this.sources = sources;
    this.timeline = timeline;
    this.evilness = evilness;
    this.start = start;
    this.oppinion = oppinion;
  }
}

actions = [
  new Action(
    "Dismantiling of United States Agency for International Development",
    "On January 20 2025, Donald John Trump, Presdient of the United States, signed Executive Order 14169 (1) which among other things paused all foreign aid for 90 days. Shortly thereafter, the same Donald John Trump, President of the United States appointed Marco Rubio, Secratary of State acting adminstartor of USAID (2) and began dismantling it.",
    [
      "1: to, Contributors. “2025 United States Policy on Foreign Aid.” Wikipedia.org, Wikimedia Foundation, Inc., 30 Jan. 2025, en.wikipedia.org/wiki/Executive_Order_14169#:~:text=Executive%20Order%2014169%2C%20titled%20%22Reevaluating,order%20to%20conduct%20a%20review. Accessed 22 Mar. 2025.",
      "2 : “Secretary Marco Rubio Appointed as Acting Administrator for the United States Agency for International Development (USAID) - United States Department of State.” United States Department of State, 4 Feb. 2025, www.state.gov/secretary-marco-rubio-appointed-as-acting-administrator-for-the-united-states-agency-for-international-development-usaid/. Accessed 22 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Trump signs executive order suspending foreign aid",
        new Date(2025, 0, 20),
        "CITATION NEEDED, I GOT THIS FROM WIKIPDEIA",
      ),
      new timelineEvent(
        "Officals from DOGE search USAID HQ",
        new Date(2025, 1, 1),
        "Whitehurst, Lindsay, and Michael Kunzelman. “Judge Rules DOGE\'s USAID Dismantling Likely Violates the Constitution.” AP News, 18 Mar. 2025, apnews.com/article/usaid-federal-judge-trump-administration-bdc919a5d98eda5ab72a32fdfe2f147d. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        'Elon Musk says trump "Agress" to dismantle usaid',
        new Date(2025, 1, 3),
        "Knickmeyer, Ellen, et al. “USAID Notice Instructs Staffers to Stay out of Its Headquarters.” AP News, 3 Feb. 2025, apnews.com/article/trump-musk-usaid-c0c7799be0b2fa7cad4c806565985fe2. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "9700 of USAID's 10000 employes are placed on adminstrative leave.",
        new Date(2025, 1, 6),
        "“The Hill.” The Hill, 7 Feb. 2025, thehill.com/video/wdvm-usaid-worker-layoffs/10435899/. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "The Trump adminstration terminted USAID's lease on its HQ, causing the agenice eviction",
        new Date(2025, 1, 10),
        "Kinnard, Meg, and Joshua Goodman. “Trump and Musk Demand Termination of Federal Office Leases through General Services Administration.” AP News, 4 Feb. 2025, apnews.com/article/trump-musk-gsa-terminate-office-leases-f8faac5e2038722f705587c8dd21ab26. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "Trump fires USAID inspector general Paul Martin (In violation of federal law)",
        new Date(2025, 1, 11),
        "Navarro, Aaron. “Trump Fires USAID Inspector General Who Released Report on Impact of Agency Cuts.” Cbsnews.com, CBS News, 12 Feb. 2025, www.cbsnews.com/news/trump-fires-usaid-inspector-general/. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "Secrtary of State Marco Rubio announce 83% of programs are cut and the other 17% are moving to the state department",
        new Date(2025, 2, 10),
        "Gedeon, Joseph. “Rubio Says 83% of USAid Programs Terminated after Six-Week Purge.” The Guardian, The Guardian, 10 Mar. 2025, www.theguardian.com/us-news/2025/mar/10/marco-rubio-usaid-funding?utm_source=chatgpt.com. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "A federal judge ruled that the dismantling of USAID by DOGE likely violated the Constitution, issuing an indefinite injunction to halt further actions against the agency.",
        new Date(2025, 2, 18),
        "Whitehurst, Lindsay, and Michael Kunzelman. “Judge Rules DOGE\'s USAID Dismantling Likely Violates the Constitution.” AP News, 18 Mar. 2025, apnews.com/article/usaid-federal-judge-trump-administration-bdc919a5d98eda5ab72a32fdfe2f147d. Accessed 22 Mar. 2025.",
      ),
    ],
    0.8,
    new Date(2025, 0, 20),
    "United States Agency for Internatonal Development or USAID is a crical agency if the U.S. government that distibutes foregin aid.Its annual budget of $60 billion. Some say it is wastefull but it does important things like subsidizing public schools in Pakistan (find a good source) that keeps kids from going to Islamic Maras's or subsidizing grain in Columbia to prevent Cocke production"
  ),
  new Action(
    "January Sixth Pardons",
    "On January 20th 2025 President of the United States Donald John Trump using the authority vested in him by Article II of the consitution, issued 1600 sweeping pardons for defendants charged and convicted for roles in the January 6 captial attack.(1)",
    [
      "1: Richer, Alanna Durkin, and Michael Kunzelman. “Trump Issues Sweeping Pardon of Supporters Charged in the Jan. 6, 2021, Capitol Attack.” AP News, 21 Jan. 2025, apnews.com/article/capitol-jan-6-pardons-trump-justice-department-8ce8b2a8f8cb602d5eaf85ac7b969606. Accessed 22 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Follwoing the pardons, federal judges began releasing the defendants",
        new Date(2025, 0, 21),
        "Lynch, Sarah N. “The Most High-Profile Jan 6 Defendants to Receive Clemency from Trump.” Reuters, 21 Jan. 2025, www.reuters.com/world/us/most-high-profile-jan-6-defendants-receive-clemency-trump-2025-01-21/. Accessed 22 Mar. 2025.",
      ),
    ],
    0.99,
    new Date(2025, 0, 20),
    "On January 6, 2021 then president Trump orginized a mob of supporters to overthrow the goverment. It was awfull. He failed because he is stupid and incometent but still. Then on his first day back in office he pardoned them All. I have no words, this is not Democracy and we all need to remember this is not normal and we need to fight it."
  ),
  new Action(
    "Firing of DOJ prosecutors",
    "On January 27 2025, President of the United States Donald John Trump instructed the Department of Justice to fire all prosecutors who worked with Special Cousel Jack Smith(1)",
    [
      "1: Lynch, Sarah N, and Andrew Goudsward. “Trump Administration Fires Team of Lawyers Who Prosecuted Him, Official Says.” Reuters, 27 Jan. 2025, www.reuters.com/legal/trump-appointed-prosecutor-opens-internal-review-justice-depts-jan-6-cases-wsj-2025-01-27/?utm_source=chatgpt.com. Accessed 22 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Acting US Attorney General fires all prosecutors appointed by then President Biden",
        new Date(2025, 0, 27),
        "Lowell, Hugo. “Trump Orders Justice Department to Fire All US Attorneys Appointed by Biden.” The Guardian, The Guardian, 19 Feb. 2025, www.theguardian.com/us-news/2025/feb/19/trump-justice-department-biden-attorneys?utm_source=chatgpt.com. Accessed 22 Mar. 2025.",
      ),
    ],
    0.8,
    new Date(2025, 0, 27),
    "For 200 years, the Department of Justice has been independent. It has been the job to prosecute criminals independently. Trump upended that by firing all of Biden's prosecutros and forever politizing the Department of justice."
  ),
  new Action(
    "Firing Independent Inspectors General",
    "On January 24, 2025 President of the United States, Donald John Trump fired 17 independent inspectors general, whos job it is to find and report waste and abuse in the government, the are independent and nopartisan.(1)",
    [
      "Miller, Zeke, et al. “Trump Fires More than a Dozen Independent Inspectors General.” AP News, 25 Jan. 2025, apnews.com/article/trump-inspectors-general-fired-congress-unlawful-4e8bc57e132c3f9a7f1c2a3754359993. Accessed 22 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Senate Democrats raise strong objections and demand, and are refused information",
        new Date(2025, 0, 25),
        "Miller, Zeke, et al. “Trump Fires More than a Dozen Independent Inspectors General.” AP News, 25 Jan. 2025, apnews.com/article/trump-inspectors-general-fired-congress-unlawful-4e8bc57e132c3f9a7f1c2a3754359993?utm_source=chatgpt.com. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "Legal experts begin commenting that this is wildly illegal and violates the 2022 Inspector General Act",
        new Date(2025, 0, 28),
        "McGreal, Chris. “Trump Condemned over “Blatantly Illegal” Firings of Watchdog Chiefs.” The Guardian, The Guardian, 28 Jan. 2025, www.theguardian.com/us-news/2025/jan/28/trump-watchdog-firings-inspectors-general. Accessed 22 Mar. 2025.",
      ),
    ],
    0.85,
    new Date(2025, 0, 24),
    "We have laws in this country. Or we did, there is a law saying the Presidet cannot fire the inspecotrs general (yes that is the plural). He did anyway, the court case is still pending"
  ),
  new Action(
    "Revoking Secret Service Details of Policial Enemies",
    "President of the United States, Donald John Trump revokes Secret service details of political enemies, dispite many of them facing credible threats of assination from the Islamic Republic of Iran",
    [
      "Basu, Zachary. “Trump\'s Overflowing Grudge List.” Axios, 21 Mar. 2025, www.axios.com/2025/03/21/trump-retaliation-revenge-biden-security-clearance. Accessed 22 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Trump revoked Secret Service Protection from John Bolton, his former National Security Adivsor who faced assination threats from Iran",
        new Date(2025, 0, 22),
        "Lee, Matthew, and Aamer Madhani. “Trump Revokes Protections for Former Secretary of State Pompeo and Top Aide.” AP News, 23 Jan. 2025, apnews.com/article/trump-pompeo-hook-iran-security-protections-987ca371756f48028ebd34ca7111f1c5. Accessed 22 Mar. 2025.",
      ),

      new timelineEvent(
        "Trump revoked Secret Service Proection from from Mike Pompeo, his former Secratry Of State who had assination threats from Iran.",
        new Date(2025, 0, 23),
        "Lee, Matthew, and Aamer Madhani. “Trump Revokes Protections for Former Secretary of State Pompeo and Top Aide.” AP News, 23 Jan. 2025, apnews.com/article/trump-pompeo-hook-iran-security-protections-987ca371756f48028ebd34ca7111f1c5. Accessed 22 Mar. 2025.",
      ),
      new timelineEvent(
        "Trump Revoked Secret rvice protection of Brian Hook, a former top aide who faces assinatio ntherats from Iran",
        new Date(2025, 0, 23),
        "Lee, Matthew, and Aamer Madhani. “Trump Revokes Protections for Former Secretary of State Pompeo and Top Aide.” AP News, 23 Jan. 2025, apnews.com/article/trump-pompeo-hook-iran-security-protections-987ca371756f48028ebd34ca7111f1c5. Accessed 22 Mar. 2025",
      ),
    ],
    0.6, //Those guys are all prety evil, but this is still bad
    new Date(2025, 0, 22),
    "These men, they where evil yes but they did things for the American goverment agaisnt a foreign goverment and faced ligitmite assination therats. Trump could well be signing their death warrants"
  ),
  new Action(
    "Appointing Pete Hegesth, to secrary of Deffense",
    "On Noveber 12 2024, Then President Elect Donald John Trump nomiated a fox news host, Pete Hegest to Secratry of deffense Hegesth has a history of womanizing and drinking as evindnced by an FBI report. He has never heald command roles in the millitary.",
    [
      "Baldor, Lolita, and Tara Copp. “Trump Picks Fox Host Pete Hegseth for Defense Secretary and Stuns Pentagon.” AP News, 13 Nov. 2024, apnews.com/article/trump-hegseth-defense-secretary-pentagon-2d8030921ecef933778cf92afd40ec72. Accessed 23 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Senate Armed Services comittie holds an explosive confomation hearing, focusing on Hegesth's history of Abuse and Alchol",
        new Date(2025, 0, 14),
        "“To Conduct a Confirmation Hearing on the Expected Nomination of Mr. Peter B. Hegseth to Be Secretary of Defense | United States Senate Committee on Armed Services.” Senate.gov, U.S. Senate Committee on Armed Services, 14 Jan. 2025, www.armed-services.senate.gov/hearings/to-conduct-a-confirmation-hearing-on-the-expected-nomination-of-mr-peter-b-hegseth-to-be-secretary-of-defense?utm_source=chatgpt.com. Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "The Senate Armed Services comitte votes 14-13 along party lines to advance his nomination",
        new Date(2025, 0, 20),
        "“Confirmation Process for Pete Hegseth for Secretary of Defense.” Ballotpedia, 2021, ballotpedia.org/Confirmation_process_for_Pete_Hegseth_for_secretary_of_defense?utm_source=chatgpt.com. Accessed 23 Mar. 2025.",
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
        "Pete Hegesth announced plans to terminate approximately 5,400 probationary employees within the Department of Defense, initiating a hiring freeze and planning a 5% to 8% reduction in the civilian workforce of about 760,000 personnel.",
        new Date(2025, 1, 20),
        "to, Contributors. “Mass Government Layoffs in 2025.” Wikipedia.org, Wikimedia Foundation, Inc., 16 Feb. 2025, en.wikipedia.org/wiki/2025_United_States_federal_mass_layoffs?utm_source=chatgpt.com. Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "Ordered the removal of web pages related to diversity, equity, and inclusion (DEI) from military websites, including profiles of Native American code talkers and other minority service members. ​",
        new Date(2025, 2, 18),
        "Aratani, Lauren, and Coral Murphy Marcos. “Articles about Native American Code Talkers Removed from Military Websites.” The Guardian, The Guardian, 18 Mar. 2025, www.theguardian.com/us-news/2025/mar/18/native-american-code-talkers-dei-military?utm_source=chatgpt.com. Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "Criticized a federal judge's decision to block the administration's ban on transgender individuals serving in the military, suggesting the judge had overstepped her authority.",
        new Date(2025, 2, 22),
        "Stewart, Phil. “Trump\'s Pentagon Chief Slams Judge for Halting Transgender Ban.” Reuters, 22 Mar. 2025, www.reuters.com/world/us/trumps-pentagon-chief-slams-judge-halting-transgender-ban-2025-03-22/?utm_source=chatgpt.com. Accessed 23 Mar. 2025.",
      ),
    ],
    0.93,
    new Date(2024, 10, 12),
    "HE IS A FOX NEWS HOST!!! NOT A GENERAL, NOT EVEN A HIGH LEVEL SOLDIER. He has a history of alochol and well woman abuse and could probobly not get hired at a summer camp. Now he is the second highest ranking person in the military. "
  ),
  new Action(
    "Nominating Pam Bondi for Attonrney Genral",
    "On November 13 2024, then President Ellect Donald Trump nomiated then represenitive Matt Gaetz for Attonrey General, a damming ethics report showing he had sex with minors taked his nommination. He then Nominated Pamela Bondi.",
    [
      "Pereira, Ivan. “Matt Gaetz AG Nomination: Timeline.” ABC News, 22 Nov. 2024, abcnews.go.com/Politics/matt-gaetz-ag-nomination-timeline/story?id=116102495. Accessed 23 Mar. 2025."
    ],
    [
      new timelineEvent(
        'Trump Nominates Matt Gatez',
        new Date(
          2024,
          20,
          14
        ),
        "Pereira, Ivan. “Matt Gaetz AG Nomination: Timeline.” ABC News, 22 Nov. 2024, abcnews.go.com/Politics/matt-gaetz-ag-nomination-timeline/story?id=116102495. Accessed 23 Mar. 2025."
      ),
      new timelineEvent(
        "The House Ethics Comitte (Who had been investigatig Gaetz) showed that Gaetz paid more than $10,000 to two women who were later witnesses in sexual misconduct probes conducted by both the House and the Justice Department, according to documents",
        new Date(
          2024,
          10,
          19
        ),
        "Pereira, Ivan. “Matt Gaetz AG Nomination: Timeline.” ABC News, 22 Nov. 2024, abcnews.go.com/Politics/matt-gaetz-ag-nomination-timeline/story?id=116102495. Accessed 23 Mar. 2025."

      ),
      new timelineEvent(
        "Gaetz announces on X that he is withdrawing his name from the nomination process. This was likley after cosultation with then President Elect Trump.",
        new Date(
          2025,
          10,
          11
        ),
        "Pereira, Ivan. “Matt Gaetz AG Nomination: Timeline.” ABC News, 22 Nov. 2024, abcnews.go.com/Politics/matt-gaetz-ag-nomination-timeline/story?id=116102495. Accessed 23 Mar. 2025."
      ),
      new timelineEvent(
        "Just after Representive Gaetz's withdrawl, President Trump Nominated Flordia Attorne General, Pamela Bondi",
        new Date(
          2025,
          10,
          11
        ),
        "Confirmation Process for Pam Bondi for U.S. Attorney General.” Ballotpedia, 2021, ballotpedia.org/Confirmation_process_for_Pam_Bondi_for_U.S._attorney_general. Accessed 23 Mar. 2025.",
      ),
      new timelineEvent(
        "The Senate Judiciary Committee held confirmation hearings for Bondi",
        new Date(
          2025,
          0,
          15
        ),
        "Confirmation Process for Pam Bondi for U.S. Attorney General.” Ballotpedia, 2021, ballotpedia.org/Confirmation_process_for_Pam_Bondi_for_U.S._attorney_general. Accessed 23 Mar. 2025."
      ),
      new timelineEvent (       
       "The Senate voted 54-46 to confirm Bondi as attorney general.",
        new Date(
          2025,
          1,
          4
        ),
        "Confirmation Process for Pam Bondi for U.S. Attorney General.” Ballotpedia, 2021, ballotpedia.org/Confirmation_process_for_Pam_Bondi_for_U.S._attorney_general. Accessed 23 Mar. 2025."
      )      
    ],
    0.8,
    new Date(
      2024,
      10,
      11
    ),
    "Wow the benchmark is low. Compared to Gaetz she is reasonable but she is a 2020 election denier who has called for trump to prosecute his enemies. That will surely happen. How far our justice system has fallen since the days of Marshall and Black (I know they where supreme court judges not AG'S)"
  ),
  new Action(
    "Nominating Kash Patel for FBI director",
    "Kash Patel, a former defense department lawyer to be Director of the Federal Buearu of Intelligence",
    [
      "Tucker, Eric. “Trump Loyalist Kash Patel Is Narrowly Confirmed as FBI Director by the Senate.” AP News, 20 Feb. 2025, apnews.com/article/trump-patel-fbi-justice-department-518329110ea230e2989095bfcbe34c59. Accessed 23 Mar. 2025."
    ],
    [
      new timelineEvent(
        "Senate confirms Patel (51-49) in a deeply divisive vote",
        new Date(
          2025,
          1,
          20
        ),
        "Durkee, Alison. “Senate Confirms Kash Patel with 2 Republicans Opposing—What to Know about Trump\'s New FBI Director.” Forbes, 20 Feb. 2025, www.forbes.com/sites/alisondurkee/2025/02/20/senate-confirms-kash-patel-with-2-republicans-opposing-what-to-know-about-trumps-new-fbi-director/?utm_source=chatgpt.com. Accessed 23 Mar. 2025."
      )
    ],
    0.92,
    new Date(
      2024,
      10,
      30
    ),
    "The FBI is a deeply powerfull agency and is supposed to be bipartisan. Kash Patel is a partisan hack who will prosecute Trumps political enimies. " //Make this better, it sucks
  ),
  new Action(
    "Tusi Gabbard as DNI",
    "Donald Trump nominated Tulsi Gabbard, a former democrat and Hawaii Congressmen to be Director of National Intelegence, a powerfull position that oversseas the FBI, CIA, NSA and many other agencies, one of the most powerfull positions in the government",
    [
      "“Statement by President-Elect Donald J. Trump Announcing the Nomination of Tulsi Gabbard as Director of National Intelligence (DNI) | the American Presidency Project.” Ucsb.edu, 2025, www.presidency.ucsb.edu/documents/statement-president-elect-donald-j-trump-announcing-the-nomination-tulsi-gabbard-director. Accessed 24 Mar. 2025."
    ],
    [
      new timelineEvent(
        "Gabbard faced criticism for an unannounced trip to Syria, during which she met with President Bashar al-Assad. She defended the meeting as a fact-finding mission but was criticized for engaging with a leader accused of war crimes.",
        new Date(
          2017,
          1,
          25
        ),
        "Manchester, Julia. “Gabbard Says She Met with Assad on Syria Trip.” CNN, 25 Jan. 2017, www.cnn.com/2017/01/25/politics/tulsi-gabbard-lead-syria/index.html. Accessed 24 Mar. 2025."
      ),
      new timelineEvent(
        "On November 13, 2024, President Trump announced Gabbard as his nominee for DNI. This nomination raised concerns within the intelligence community due to her lack of traditional intelligence experience and past controversial statements perceived as aligning with Russian narratives",
        new Date(
          2024,
          10,
          13
        ),
        "Bennett, Brian. ““We Are Reeling”: Trump\'s Pick of Tulsi Gabbard Alarms Intelligence Community.” TIME, Time, 15 Nov. 2024, time.com/7176696/gabbard-russia-connection-trump-intelligence/?utm_source=chatgpt.com. Accessed 24 Mar. 2025."
      ),
      new timelineEvent(
        "Gabbard was confirmed as Dirrector of National Intelegence by a Senate vote of 52-48.",
        new Date(
          2025,
          1,
          12
        ),
        "\"Tulsi Gabbard.\" Ballotpedia, 2016, ballotpedia.org/Tulsi_Gabbard?utm_source=chatgpt.com. Accessed 24 Mar. 2025."
      )
    ],
    0.75,
    new Date(
      2024,
      10,
      13
    ),
    "Gabbard, while not as blatantly evil as say Patel, though just as dangerous and unqualified, has a nasty tendecy towards authrotriasim. Particlualry her closeness with Russian \"President\" Vladamier Putin. The DNI is an immensly powerfull role and she could be reasonably construed as a Russin puppet. She has said numerous unerasonable Pro Russia things and there is little doubt she will do whatver either of our three Presidetns, Trump, Musk, or Putin tell her."
    
  )
];

export default actions;
