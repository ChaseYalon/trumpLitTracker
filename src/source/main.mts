import { Action, timelineEvent } from "./classes.mts";

let actions: Action[] = [];
interface eAction {
  action : Action
}
const modules : eAction[] = import.meta.glob('/src/source/actions/*.mts');
for (const path in modules) {
  const mod : eAction = await modules[path]();
  actions.push(mod.action);
}


actions = [
  
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
    'On January 28,2025 President of the United States, Donald J. Trump ordered the Office of Personnel Management (OPM) to send an email to all federal employees. It offered them a "deferred resignation" where they would stop working now but collect salary for 6 months.',
    [
      "“Axios.” Axios, 2025, www.axios.com/newsletters/axios-dc-b75139b0-dd84-11ef-b405-e5f757f54ccd?. Accessed 26 Mar. 2025.",
    ],
    [
      new timelineEvent(
        'January 28, 2025: OPM sends "Fork in the Road" email at the request of the U.S. DOGE service',
        new Date(2025, 0, 28),
        "\"A Federal Worker Tried to Take Trump\'s \'Fork\' Resignation Offer. Here\'s What Happened.\" NPR, 14 Feb. 2025, www.npr.org/2025/02/14/nx-s1-5296910/trump-federal-workers-fork-resign-buyout?. Accessed 26 Mar. 2025",
      ),
      new timelineEvent(
        "A federal judge delays the resignation date several weeks",
        new Date(2025, 1, 6),
        "“Trump\'s \'Fork in the Road\' Resignation Offer for Federal Workers Is in Judge\'s Hands.” NPR, 10 Feb. 2025, www.npr.org/2025/02/10/nx-s1-5292042/federal-employees-trump-fork-resignation-buyout-court. Accessed 26 Mar. 2025.",
      ),
      new timelineEvent(
        "A judge lets the program conclude, 75,000 workers take the offer",
        new Date(2025, 1, 10),
        "Jazeera, Al. “A Timeline of the Trump Administration’s Coronavirus Actions.” Al Jazeera, 23 Apr. 2020, www.aljazeera.com/news/2020/4/23/a-timeline-of-the-trump-administrations-coronavirus-actions?. Accessed 26 Mar. 2025.",
      ),
    ],
    0.6,
    new Date(2025, 0, 28),
    "There is nothing wrong with this on the surface, the problem is the process, if you want to downsize there is a legal process and this is not that and second, the administration is sure to replace them with hardcore loyalists to swing the civil service to the right.",
  ),
  new Action(
    "Canada as the 51\'st state",
    'On Dec 10, 2024 then President Elect, Donald John Trump called Justin Trudeau, the Prime Minister of Canada, "Governor of the Great State of canada"',
    [
      "Shabad, Rebecca. “Trump Mocks Prime Minister Justin Trudeau as the ‘Governor’ of the ‘Great State of Canada.’” NBC News, 10 Dec. 2024, www.nbcnews.com/politics/donald-trump/trump-mocks-prime-minister-justin-trudeau-governor-great-state-canada-rcna183570. Accessed 26 Mar. 2025.",
    ],
    [
      new timelineEvent(
        'In an interview with Fox News\' Bret Baier ahead of the Super Bowl, President of the United States, Donald J. Trump stated he was serious about wanting Canada to become the 51st state. He confirmed that his annexation comments were "a real thing"',
        new Date(2025, 1, 10),
        "Weissert, Will. “Trump’s Remarks on Canada Becoming the 51st State Raise a Lot of Questions.” AP News, 13 Feb. 2025, apnews.com/article/how-canada-could-become-us-state-42360e10ded96c0046fd11eaaf55ab88?. Accessed 26 Mar. 2025.",
      ),
      new timelineEvent(
        "In a bizarre press conference with Secretary of Defense, Pete Hegseth, President of the United States, Donald J. Trump suggested Canada could become the 51st state",
        new Date(2025, 2, 6),
        "Matina Stevis-Gridneff. “How Trump’s ‘51st State’ Canada Talk Came to Be Seen as Deadly Serious.” The New York Times, 7 Mar. 2025, www.nytimes.com/2025/03/07/world/canada/trump-trudeau-canada-51st-state.html.",
      ),
    ],
    0.7,
    new Date(2024, 12, 18),
    "This is not evil as much as bizarre and inflammatory, it is losing us allies and money but compared to say the J6 pardons or Kash Patel this is just stupid and binal.",
  ),
  new Action(
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
  ),
  new Action(
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
  ),
  new Action(
    "Negotiating with Putin without Ukraine",
    "​Since November 5, 2024, President of the United States Donald John Trump and his administration officials have engaged in several negotiations  with Russian President Vladimir Putin and Russian officials Ukraine was present at none. ​",
    [
      "Walsh, Nick Paton. “Putin Just Called Trump\'s Bluff on Ukraine, with the Russian Art of the\'No\' Deal.” CNN, 18 Mar. 2025, www.cnn.com/2025/03/18/europe/analysis-putin-trump-phone-call-ukraine-intl-latam/index.html. Accessed 27 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Trump has a 90 minute official call with Putin. Putin wins diplomatic and energy concessions",
        new Date(2025, 1, 12),
        "to, Contributors. “12 February 2025 Phone Conversation.” Wikipedia.org, Wikimedia Foundation, Inc., 14 Feb. 2025, en.wikipedia.org/wiki/February_2025_Putin%E2%80%93Trump_call?. Accessed 27 Mar. 2025.",
      ),
      new timelineEvent(
        "Secretary of State Marco Rubio and serval other officials meet with Russian counterparts in Riyadh. Ukraine was not there and Russia wins diplomatic concessions",
        new Date(2025, 1, 18),
        "Reuters. “Who Are the Russian Officials Meeting with US Team in Saudi Arabia?” Reuters, 18 Feb. 2025, www.reuters.com/world/europe/putin-sends-top-foreign-policy-team-talks-with-us-2025-02-18/?. Accessed 27 Mar. 2025.",
      ),
      new timelineEvent(
        "Steve Witkoff (A high level advisor) meets Putin in Moscow",
        new Date(2025, 2, 12),
        "Edwards, Christian. “Trump’s Foreign Envoy Touts Kremlin Talking Points, in Interview That Will Alarm Europe.” CNN, 22 Mar. 2025, www.cnn.com/2025/03/22/europe/witkoff-carlson-trump-russia-ukraine-talks-intl/index.html?. Accessed 27 Mar. 2025.",
      ),
    ],
    0.8,
    new Date(2016, 10, 5),
    "It is critical that a fair settlement be reached in Ukraine. This cannot be done by appeasing authoritarians. Trump is bending the knee to Putin for no apparent reason",
  ),
  new Action(
    "Takeover of the Kennedy Center",
    "​In early 2025, President of the United States Donald J. Trump initiated significant changes at the John F. Kennedy Center for the Performing Arts, leading to a notable shift in its leadership and operations. Below is a timeline of key events",
    [
      "to, Contributors. “Performing Arts Center in Washington, D.C., United States.” Wikipedia.org, Wikimedia Foundation, Inc., 27 Nov. 2003, en.wikipedia.org/wiki/John_F._Kennedy_Center_for_the_Performing_Arts?. Accessed 27 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "President Trump announced his intention to dismiss all members of the Kennedy Center's Board of Trustees and appoint new members, including himself. This move was unprecedented, as board members typically serve six-year terms. ",
        new Date(2025, 1, 7),
        "to, Contributors. “Performing Arts Center in Washington, D.C., United States.” Wikipedia.org, Wikimedia Foundation, Inc., 27 Nov. 2003, en.wikipedia.org/wiki/John_F._Kennedy_Center_for_the_Performing_Arts?. Accessed 27 Mar. 2025.",
      ),
      new timelineEvent(
        "Trump names longtime Ally Richard Grennel to be acting director",
        new Date(2025, 1, 10),
        "Higgins, Charlotte. “Trump\'s Weird Obsession with the Arts Is Part of the Authoritarian Playbook.” The Guardian, The Guardian, 20 Mar. 2025, www.theguardian.com/commentisfree/2025/mar/20/donald-trump-kennedy-center-takeover-arts?. Accessed 27 Mar. 2025.",
      ),
      new timelineEvent(
        "New board makes President of the United States, Donald J. Trump, Chairmen of the Board and fire the President of the Kennedy Center who has been in office since 2014",
        new Date(2025, 1, 12),
        "to, Contributors. “Performing Arts Center in Washington, D.C., United States.” Wikipedia.org, Wikimedia Foundation, Inc., 27 Nov. 2003, en.wikipedia.org/wiki/John_F._Kennedy_Center_for_the_Performing_Arts?. Accessed 27 Mar. 2025.",
      ),
      /*
          There is more here but I am not sure it is relevant, get another opinion.
      */
    ],
    0.8,
    new Date(2025, 1, 7),
    "This is not as bad as the J6 pardons but it shows how Trump is politicizing every layer of Government",
  ),
  new Action(
    "Ending NYC Congestion Pricing",
    "​In early 2025, President of the United States Donald Trump and Secretary of Transportation Sean Duffy took steps to end New York City's congestion pricing program, which had been implemented to reduce traffic and fund public transit improvements.",
    [
      "Hu, Winnie, and Stefanos Chen. “Trump Officials Ordered NYC Congestion Pricing to End by March 21. What Happens Now?” The New York Times, 20 Mar. 2025, www.nytimes.com/2025/03/20/nyregion/nyc-congestion-pricing-trump-mta-battle.html.",
    ],
    [
      new timelineEvent(
        "New York City initiated its congestion pricing program, imposing a $9 toll on most vehicles entering Manhattan south of 60th Street. The program aimed to alleviate traffic congestion and generate revenue for the city's transit system. ",
        new Date(2025, 0, 5),
        "Marcelo, Philip. “Trump Extends Deadline for New York to End Congestion Toll for Manhattan Drivers.” AP News, 20 Mar. 2025, apnews.com/article/nyc-congestion-pricing-toll-trump-hochul-826ddc20735c6115a2e5b634765ea4c0. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        'U.S. Transportation Secretary Sean Duffy rescinded federal approval for New York City\'s congestion pricing plan, calling it a "slap in the face to working class Americans and small business owners." The federal government ordered the Metropolitan Transportation Authority (MTA) to cease toll collection by March 21, 2025',
        new Date(2025, 1, 19),
        "“Congestion Pricing in New York City - Wikipedia.” Wikipedia.org, 2025, en.wikipedia.org/wiki/Congestion_pricing_in_New_York_City?. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        "The MTA filed a lawsuit challenging the federal government's authority to revoke approval of the congestion pricing program.",
        new Date(2025, 1, 20),
        "Marcelo, Philip. “Trump Extends Deadline for New York to End Congestion Toll for Manhattan Drivers.” AP News, 20 Mar. 2025, apnews.com/article/nyc-congestion-pricing-toll-trump-hochul-826ddc20735c6115a2e5b634765ea4c0. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        "The Trump administration extended the deadline for New York to end its congestion pricing program by 30 days, moving it to April 20, 2025. Transportation Secretary Duffy indicated that federal funding might be withheld if toll collection did not cease by the new date",
        new Date(2025, 2, 20),
        "Shepardson, David. “US Extends Deadline for New York to End Manhattan Congestion Program.” Reuters, 20 Mar. 2025, www.reuters.com/world/us/us-extends-deadline-new-york-end-manhattan-congestion-program-2025-03-20/?. Accessed 28 Mar. 2025.",
      ),
    ],
    0.6,
    new Date(2025, 0, 5),
    "This congestion pricing has many benefits, It will increase foot traffic for local business, it will raise money for cleaner forms of transport like the subway and will reduce overall emissions. This is just part of Trump administrations populist economic policy and it serves as a distraction for actual issues.",
  ),
  new Action(
    "Taking control of independent agencies",
    'President Trump signed the executive order "Ensuring Accountability for All Agencies," extending presidential supervision over independent regulatory agencies. This order mandated that these agencies submit draft regulations for White House review, consult with the White House on priorities and strategic plans, and adhere to performance standards set by the Office of Management and Budget (OMB).',
    [
      "“Fact Sheet: President Donald J. Trump Reins in Independent Agencies to Restore a Government That Answers to the American People.” The White House, 18 Feb. 2025, www.whitehouse.gov/fact-sheets/2025/02/fact-sheet-president-donald-j-trump-reins-in-independent-agencies-to-restore-a-government-that-answers-to-the-american-people/. Accessed 28 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "An unapproved email was sent to federal employees, demanding they list their weekly achievements. This action created confusion and tension among civil servants and Trump's cabinet members.",
        new Date(2025, 1, 22),
        "Alper, Alexandra, and Nandita Bose. “Exclusive: White House Installs Trump Loyalists at Federal HR Agency after ‘Five Things’ Email.” Reuters, 27 Mar. 2025, www.reuters.com/world/us/white-house-installs-trump-loyalists-federal-hr-agency-after-five-things-email-2025-03-27/. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        "President Trump announced his intention to nominate Susan Monarez as the permanent director of the Centers for Disease Control and Prevention (CDC), an agency traditionally expected to operate with a degree of independence.",
        new Date(2025, 2, 23),
        "Mason, Jeff, and Michael Erman. “Trump Picks Acting CDC Director Susan Monarez to Lead Agency.” Reuters, 24 Mar. 2025, www.reuters.com/business/healthcare-pharmaceuticals/trump-nominate-susan-monarez-lead-cdc-cbs-news-reports-2025-03-24/. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        "President Trump signed an executive order limiting federal workers' rights to unionize and ending collective bargaining, a move criticized by the American Federation of Government Employees.",
        new Date(2025, 2, 28),
        "Campbell, Lucy, et al. “Donald Trump Moves to End Union Rights for Many Government Agency Employees – US Politics Live.” The Guardian, The Guardian, 28 Mar. 2025, www.theguardian.com/us-news/live/2025/mar/28/donald-trump-white-house-washington-latest-live-us-politics-news. Accessed 28 Mar. 2025.",
      ),
    ],
    0.8,
    new Date(2025, 1, 18),
    "Our government is (supposed) to be a meritocracy. Independent experts lead independent agencies, so they can make politically unpopular decisions. Ignoring the fact that this is a power grab, it will make agencies function worse and be more partisan.",
  ),
  new Action(
    "Dan Borgiano for Deputy FBI Director",
    "​Dan Bongino, a former Secret Service agent and conservative media personality, has been appointed as the Deputy Director of the Federal Bureau of Investigation (FBI) under President Donald Trump. His career has been marked by various idiotic and dangerous theories and allegations.",
    [
      "Swenson, Ali. “Dan Bongino Made His Name in Podcasting, with Plenty to Say about the FBI.” AP News, 24 Feb. 2025, apnews.com/article/dan-bongino-podcasts-fbi-kash-patel-trump-6d47f60b59edb3dba45615104ed41a67. Accessed 28 Mar. 2025.",
    ],
    [
      new timelineEvent(
        '"My entire life right now is about owning the libs. That\'s it." He also labeled the investigation into potential Trump-Russia collusion as a "total scam" and promoted the Spygate conspiracy theory, alleging improper surveillance of Trump\'s 2016 campaign.',
        new Date(2018, 9, 5),
        "to, Contributors. “American Political Commentator.” Wikipedia.org, Wikimedia Foundation, Inc., 13 Sept. 2011, en.wikipedia.org/wiki/Dan_Bongino. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        'During congressional hearings on police brutality, Bongino argued against efforts to reduce police funding, labeling such initiatives an "abomination" that should be abandoned "before someone gets hurt."',
        new Date(
          2020,
          5,
          7 /*placeholder, could not find actual date, I know it is june 2020*/,
        ),
        "to, Contributors. “American Political Commentator.” Wikipedia.org, Wikimedia Foundation, Inc., 13 Sept. 2011, en.wikipedia.org/wiki/Dan_Bongino. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        "He supported false claims of election fraud, alleging that Democrats had rigged the election",
        new Date(2025, 10, 10),
        "to, Contributors. “American Political Commentator.” Wikipedia.org, Wikimedia Foundation, Inc., 13 Sept. 2011, en.wikipedia.org/wiki/Dan_Bongino. Accessed 28 Mar. 2025",
      ),
      new timelineEvent(
        " YouTube permanently banned Bongino for repeatedly violating its COVID-19 misinformation policy",
        new Date(2022, 0, 26),
        "Culliford, Elizabeth, and Paresh Dave. “YouTube Permanently Bans Fox News Host Dan Bongino.” Reuters, 26 Jan. 2022, www.reuters.com/business/media-telecom/youtube-permanently-bans-fox-news-host-dan-bongino-2022-01-26/. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        "Trump Nominates Dan Borgiano for dep FBI director",
        new Date(2025, 1, 26),
        "Drenon, Brandon. “Dan Bongino: Trump Names Podcaster as Deputy FBI Director.” Bbc.com, BBC News, 24 Feb. 2025, www.bbc.com/news/articles/cpwd2qrn1e2o. Accessed 28 Mar. 2025.",
      ),
    ],
    0.85,
    new Date(2018, 9, 5),
    "The deputy FBI director runs most of the day to day operations of the FBI. Kash Patel specifically promised senators the Deputy Director would be an active special agent, like it has been for 100 years. Instead we get Dan Borgiano a partisan hack who gives conservatism a bad name.",
  ),
  new Action(
    "Implementing Project 2025",
    "​In January 2025, following his inauguration for a second term, President Donald Trump initiated the implementation of Project 2025, a comprehensive plan developed by conservative groups to restructure the federal government. A central figure in this initiative is Russell Vought, appointed as the Director of the Office of Management and Budget (OMB). Vought, a key architect of Project 2025, has been instrumental in driving efforts to downsize federal agencies and consolidate executive power.",
    [
      "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
    ],
    [
      new timelineEvent(
        "Redirecting federal aid under FEMA to the states",
        new Date(2025, 0, 20),
        "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        "Ending diversity, equity and inclusion practice",
        new Date(2025, 0, 20),
        "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        "Targeting PBS and National Public Radio",
        new Date(2025, 2, 28),
        "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
      ),
      new timelineEvent(
        "Freezing federal assistance and DOGE",
        new Date(2025, 0, 20),
        "Quinn, Melissa. “Where Trump Policies and Project 2025 Proposals Match Up.” Cbsnews.com, CBS News, 3 Feb. 2025, www.cbsnews.com/news/trump-project-2025-playbook/. Accessed 28 Mar. 2025.",
      ),
      //There are many more examples but I am to lazy to add them, go to this URL to add more https://www.cbsnews.com/news/trump-project-2025-playbook/
    ],
    0.7,
    new Date(2025, 0, 20),
    "Project 2025 is a problem. Many of its proposal are just evil and Trump repeatedly denied any connection. That was a lie", // I am embarrassed to have written this.
  ),
  new Action(
    "The Department of Goverment Efficency (DOGE)",
    "The Department of Goverment Efficency or U.S. Doge Service is realy the U.S. Digital service and is in theory focused on streamling goverment beuracuracy. In reality it has become a black box for all of Trumps policy agenda",
    [
      "The. “How Elon Musk Built His DOGE Operation: Timeline and Key Takeaways.” The New York Times, 28 Feb. 2025, www.nytimes.com/2025/02/28/us/politics/musk-doge-timeline-takeaways.html.",
    ],
    [
      new timelineEvent(
        "Elon Musk indicated at a fundraiser dinner that he had an intrest in cutting goverment beuracracy.",
        new Date(2023, 9, 23),
        "The. “How Elon Musk Built His DOGE Operation: Timeline and Key Takeaways.” The New York Times, 28 Feb. 2025, www.nytimes.com/2025/02/28/us/politics/musk-doge-timeline-takeaways.html.",
      ),
      new timelineEvent(
        "Elon Musk endorses then Former President, Donald John Trump for President of the United States after he narrowly escaped assiantion in Buttler PA.",
        new Date(2024, 5, 14),
        "The. “How Elon Musk Built His DOGE Operation: Timeline and Key Takeaways.” The New York Times, 28 Feb. 2025, www.nytimes.com/2025/02/28/us/politics/musk-doge-timeline-takeaways.html.",
      ),
      new timelineEvent(
        'In a podcast interview, Elon Musk first mentioned "DOGE", named after a cryptocurrency / meme.',
        new Date(2024, 6, 2),
        "The. “How Elon Musk Built His DOGE Operation: Timeline and Key Takeaways.” The New York Times, 28 Feb. 2025, www.nytimes.com/2025/02/28/us/politics/musk-doge-timeline-takeaways.html.",
      ),
      new timelineEvent(
        "Donald Trump endorses the idea of some extra-goveremtnal pannel to promote efficency",
        new Date(2024, 9, 5),
        "The. “How Elon Musk Built His DOGE Operation: Timeline and Key Takeaways.” The New York Times, 28 Feb. 2025, www.nytimes.com/2025/02/28/us/politics/musk-doge-timeline-takeaways.html.",
      ),
      new timelineEvent(
        "After Election Day (Nov 5), President Elect Trump announces a DOGE commission to be co-led by Musk and Vivek Ramaswamy. You can see the rest of DOGE's actions across the website.",
        new Date(2024, 10, 12),
        "The. “How Elon Musk Built His DOGE Operation: Timeline and Key Takeaways.” The New York Times, 28 Feb. 2025, www.nytimes.com/2025/02/28/us/politics/musk-doge-timeline-takeaways.html.",
      ),
    ],
    0.7,
    new Date(2023, 9, 23),
    'There is nothing inheritnly wrong with cutting beuracracy or spending but as Senator John Curtis (R-Utah) said "Do it with a dose of compassion". DOGE is relentless and unaccountable, the work in the shadows destorying our carrear civil service and destorying nesscary goverment functions like ebola prevention or nulear power plant safety. Things we can all agree are nesscary.',
  ),
  new Action(
    "Vlodomyr Zelensky",
    "Presidents Trump and Zlensky have had a ... rocky relationship. In his first term a call with Zelensky was the crux of his first impeachment and in is second term his most notable foregin policy achivement was bullying Zelensky and chasing him out of Washington.",
    [
      "The. “Full Document: Trump’s Call with the Ukrainian President.” Nytimes.com, The New York Times, 25 Sept. 2019, www.nytimes.com/interactive/2019/09/25/us/politics/trump-ukraine-transcript.html. Accessed 6 Apr. 2025.",
    ],
    [
      new timelineEvent(
        "President of the United States, Donald J. Trump, called newly elected President of Ukraine, Vlodomyr Zelensky. He then indicated that US aid for Ukraine was contigent on Zelensky, providing dirt on one of Trumps political opponents, Then Former Vice President, Joe Biden",
        new Date(2019, 6, 25),
        "The. “Full Document: Trump’s Call with the Ukrainian President.” Nytimes.com, The New York Times, 25 Sept. 2019, www.nytimes.com/interactive/2019/09/25/us/politics/trump-ukraine-transcript.html. Accessed 6 Apr. 2025.",
      ),
      //missing sevral events
      new timelineEvent(
        "Vlodomyr Zelensky, president of Ukraine was coming to the United States to sign some mineral deal, Presidents, Trump and Zlensky and Vice Preident Vance, held some press confrence in the oval offfice, the sort that shold have been forgoten by hisotry, instead Vance ended up screaming at Zelensky and Zelensky refusing to back down. Either way, that did not end well for anyone involved and Trump frose all aid and itelegence with Ukraine.",
        new Date(
          2025,
          1,
          28
        ),
        "\"2025 Trump–Zelenskyy Oval Office Meeting - Wikipedia.\" Wikipedia.org, 2025, en.wikipedia.org/wiki/2025_Trump%E2%80%93Zelenskyy_Oval_Office_meeting#:~:text=On%20February%2028%2C%202025%2C%20Donald,White%20House%20in%20Washington%2C%20D.C.. Accessed 7 Apr. 2025."
      ),
      new timelineEvent(
        "Preident of the United States, Donald J. Trump orders CIA Director, John Radcliffe and Secratry of Deffense Pete Hegeth to stop all aid and intelegece sharing to Ukraine. This crippled Ukraines abilit to defend itself and resulted in hudreds of civilian deaths because the Ukraines where not able to take down enemey missles.",
        new Date(
          2025,
          2,
          3
        ),
        "Liptak, Kevin, et al. “Trump Pauses Military Aid to Ukraine after Oval Office Argument with Zelensky, White House Official Says.” CNN, 4 Mar. 2025, www.cnn.com/2025/03/03/politics/trump-administration-ukraine-aid/index.html. Accessed 7 Apr. 2025."
      ),
      new timelineEvent(
        "After hundreds of unnescary civlian deaths and major battlefeild setbacks Trump aggred to resume aid having accoplished nothing except killing innocents",
        new Date(
          2025,
          2,
          11
        ),
        "LEE, MATTHEW. “Trump Administration to Resume Military Aid to Ukraine and Intelligence Sharing.” TIME, Time, 11 Mar. 2025, time.com/7266942/trump-administration-resume-military-aid-ukraine/. Accessed 7 Apr. 2025."
      )
    ],
    0.7,
    new Date(2019, 6, 25),
    "We stand up to the weak, give voice to the voicelss and freedom to the oppressed. That is our national ethos and has been for 250 years. It is disgracefull that the Presient would abandon a loyal ally in their time of need and for policial reaons, it is disgrasefull.."

  ),
];

export default actions;
