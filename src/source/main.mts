let actions: Action[] = [];
let count = 0;
class timelineEvent {
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
  constructor(
    name: string,
    summary: string,
    sources: string[],
    timeline: timelineEvent[],
    evilness: number,
    start: Date,
  ) {
    count++;
    this.name = name;
    this.id = count;
    this.summary = summary;
    this.sources = sources;
    this.timeline = timeline;
    this.evilness = evilness;
    this.start = start;
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
  ),
  new Action (
    "Appointing Pete Hegesth, to secrary of Deffense",
    "On Noveber 12 2024, Then President Elect Donald John Trump nomiated a fox news host, Pete Hegest to Secratry of deffense",
    [
      "Baldor, Lolita, and Tara Copp. “Trump Picks Fox Host Pete Hegseth for Defense Secretary and Stuns Pentagon.” AP News, 13 Nov. 2024, apnews.com/article/trump-hegseth-defense-secretary-pentagon-2d8030921ecef933778cf92afd40ec72. Accessed 23 Mar. 2025."
    ],
    [
      new timelineEvent(
        "Senate Armed Services comittie holds an explosive confomation hearing, focusing on Hegesth's history of Abuse and Alchol",
        new Date(
          2025,
          0,
          14
        ),
        "“To Conduct a Confirmation Hearing on the Expected Nomination of Mr. Peter B. Hegseth to Be Secretary of Defense | United States Senate Committee on Armed Services.” Senate.gov, U.S. Senate Committee on Armed Services, 14 Jan. 2025, www.armed-services.senate.gov/hearings/to-conduct-a-confirmation-hearing-on-the-expected-nomination-of-mr-peter-b-hegseth-to-be-secretary-of-defense?utm_source=chatgpt.com. Accessed 23 Mar. 2025."
      ),
      new timelineEvent(
        "The Senate Armed Services comitte votes 14-13 along party lines to advance his nomination",
        new Date(
          2025,
          0,
          20
        ),
        "“Confirmation Process for Pete Hegseth for Secretary of Defense.” Ballotpedia, 2021, ballotpedia.org/Confirmation_process_for_Pete_Hegseth_for_secretary_of_defense?utm_source=chatgpt.com. Accessed 23 Mar. 2025."
      ),
      new timelineEvent(
        "The Senate invoked cloture on Hegseth's nomination with a 51-49 vote, limiting further debate.",
        new Date(
          2025,
          0,
          23
        ),
        "“PN11-7 - Nomination of Peter Hegseth for Department of Defense, 119th Congress (2025-2026).” Congress.gov, 2025, www.congress.gov/nomination/119th-congress/11/7 Accessed 23 Mar. 2025."
      ),
      new timelineEvent(
        "The Senate confirmed Hegseth as Secretary of Defense in a 51-50 vote, with Vice President J.D. Vance casting the tie-breaking vote. ",
        new Date(
          202,
          0,
          24
        ),
          "“PN11-7 - Nomination of Peter Hegseth for Department of Defense, 119th Congress (2025-2026).” Congress.gov, 2025, www.congress.gov/nomination/119th-congress/11/7? Accessed 23 Mar. 2025."
      ),
      new timelineEvent(
        "Hegseth was officially sworn in as the 29th Secretary of Defense",
        new Date(
          2025,
          0,
          25
        ),
        "“HON Pete Hegseth.” U.S. Department of Defense, 2025, www.defense.gov/About/Biographies/Biography/Article/4040890/hon-pete-hegseth/. Accessed 23 Mar. 2025."
      ),
      new timelineEvent(
        "Pete Hegesth announced plans to terminate approximately 5,400 probationary employees within the Department of Defense, initiating a hiring freeze and planning a 5% to 8% reduction in the civilian workforce of about 760,000 personnel.",
        new Date(
          2025,
          1,
          20
        ),
        "to, Contributors. “Mass Government Layoffs in 2025.” Wikipedia.org, Wikimedia Foundation, Inc., 16 Feb. 2025, en.wikipedia.org/wiki/2025_United_States_federal_mass_layoffs?utm_source=chatgpt.com. Accessed 23 Mar. 2025."
      ),
      new timelineEvent(
        "Ordered the removal of web pages related to diversity, equity, and inclusion (DEI) from military websites, including profiles of Native American code talkers and other minority service members. ​",
        new Date(
          2025,
          2,
          18
        ),
        "Aratani, Lauren, and Coral Murphy Marcos. “Articles about Native American Code Talkers Removed from Military Websites.” The Guardian, The Guardian, 18 Mar. 2025, www.theguardian.com/us-news/2025/mar/18/native-american-code-talkers-dei-military?utm_source=chatgpt.com. Accessed 23 Mar. 2025."
      ),
      new timelineEvent(
        "Criticized a federal judge's decision to block the administration's ban on transgender individuals serving in the military, suggesting the judge had overstepped her authority.",
        new Date(
          2025,
          2,
          22
        ),
        "Stewart, Phil. “Trump\'s Pentagon Chief Slams Judge for Halting Transgender Ban.” Reuters, 22 Mar. 2025, www.reuters.com/world/us/trumps-pentagon-chief-slams-judge-halting-transgender-ban-2025-03-22/?utm_source=chatgpt.com. Accessed 23 Mar. 2025."
      )
    ],
    0.93,
    new Date(
      2024,
      10,
      12
    )
  )
];

export default actions;
