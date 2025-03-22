class timelineEvent {
    summary : string;
    date : Date;
    source : string;
    constructor(summary:string, date:Date, source:string){
        this.summary=summary;
        this.date=date;
        this.source=source;
    }
}


class Action {
    name : string;
    id : number;
    summary : string;
    sources : string[];
    timeline : timelineEvent[]
    evilness : number;
    start : Date;
    constructor(name : string, summary : string, sources : string[],timeline : timelineEvent[], evilness : number, start :Date){
        this.name = name;
        this.id = actions.length;
        this.summary = summary;
        this.sources = sources;
        this.timeline = timeline;
        this.evilness = evilness;
        this.start = start;


    }
}

const actions = [
    new Action(
        "Dismantiling of United States Agency for International Development",
        "On January 20 2025, Donald John Trump, Presdient of the United States, signed Executive Order 14169 (1) which among other things paused all foreign aid for 90 days. Shortly thereafter, the same Donald John Trump, President of the United States appointed Marco Rubio, Secratary of State acting adminstartor of USAID (2) and began dismantling it.",
        [
            "1: to, Contributors. “2025 United States Policy on Foreign Aid.” Wikipedia.org, Wikimedia Foundation, Inc., 30 Jan. 2025, en.wikipedia.org/wiki/Executive_Order_14169#:~:text=Executive%20Order%2014169%2C%20titled%20%22Reevaluating,order%20to%20conduct%20a%20review. Accessed 22 Mar. 2025.",
            "2 : “Secretary Marco Rubio Appointed as Acting Administrator for the United States Agency for International Development (USAID) - United States Department of State.” United States Department of State, 4 Feb. 2025, www.state.gov/secretary-marco-rubio-appointed-as-acting-administrator-for-the-united-states-agency-for-international-development-usaid/. Accessed 22 Mar. 2025."
        ],
        [
            new timelineEvent
            (
                "Trump signs executive order suspending foreign aid",
                new Date (
                    2025,
                    0,
                    20
                ),
                "CITATION NEEDED, I GOT THIS FROM WIKIPDEIA"
            ),
            new timelineEvent(
                "Officals from DOGE search USAID HQ",
                new Date (
                    2025,
                    1,
                    1
                ),
                "Whitehurst, Lindsay, and Michael Kunzelman. “Judge Rules DOGE’s USAID Dismantling Likely Violates the Constitution.” AP News, 18 Mar. 2025, apnews.com/article/usaid-federal-judge-trump-administration-bdc919a5d98eda5ab72a32fdfe2f147d. Accessed 22 Mar. 2025."
            ),
            new timelineEvent(
                "Elon Musk says trump \"Agress\" to dismantle usaid",
                new Date(
                    2025,
                    1,
                    3
                ),
                "Knickmeyer, Ellen, et al. “USAID Notice Instructs Staffers to Stay out of Its Headquarters.” AP News, 3 Feb. 2025, apnews.com/article/trump-musk-usaid-c0c7799be0b2fa7cad4c806565985fe2. Accessed 22 Mar. 2025."
            ),
            new timelineEvent(
                "9700 of USAID's 10000 employes are placed on adminstrative leave.",
                new Date(
                    2025,
                    1,
                    6
                ),
                "“The Hill.” The Hill, 7 Feb. 2025, thehill.com/video/wdvm-usaid-worker-layoffs/10435899/. Accessed 22 Mar. 2025."
            ),
            new timelineEvent(
                "The Trump adminstration terminted USAID's lease on its HQ, causing the agenice eviction",
                new Date(
                    2025,
                    1,
                    10
                ),
                "Kinnard, Meg, and Joshua Goodman. “Trump and Musk Demand Termination of Federal Office Leases through General Services Administration.” AP News, 4 Feb. 2025, apnews.com/article/trump-musk-gsa-terminate-office-leases-f8faac5e2038722f705587c8dd21ab26. Accessed 22 Mar. 2025."
            ),
            new timelineEvent(
                "Trump fires USAID inspector general Paul Martin (In violation of federal law)",
                new Date(
                    2025,
                    1,
                    11
                ),
                "Navarro, Aaron. “Trump Fires USAID Inspector General Who Released Report on Impact of Agency Cuts.” Cbsnews.com, CBS News, 12 Feb. 2025, www.cbsnews.com/news/trump-fires-usaid-inspector-general/. Accessed 22 Mar. 2025."
            ),
            new timelineEvent(
                "Secrtary of State Marco Rubio announce 83% of programs are cut and the other 17% are moving to the state department",
                new Date(
                    2025,
                    2,
                    10
                ),
                "Gedeon, Joseph. “Rubio Says 83% of USAid Programs Terminated after Six-Week Purge.” The Guardian, The Guardian, 10 Mar. 2025, www.theguardian.com/us-news/2025/mar/10/marco-rubio-usaid-funding?utm_source=chatgpt.com. Accessed 22 Mar. 2025."
            ),
            new timelineEvent(
                "A federal judge ruled that the dismantling of USAID by DOGE likely violated the Constitution, issuing an indefinite injunction to halt further actions against the agency.",
                new Date(
                    2025,
                    2,
                    18
                ),
                "Whitehurst, Lindsay, and Michael Kunzelman. “Judge Rules DOGE’s USAID Dismantling Likely Violates the Constitution.” AP News, 18 Mar. 2025, apnews.com/article/usaid-federal-judge-trump-administration-bdc919a5d98eda5ab72a32fdfe2f147d. Accessed 22 Mar. 2025."
            )
        ],
        0.8,
        new Date(
            2025,
            0,
            20
        )
    ),
    new Action(
        "January Sixth Pardons",
        "On January 20th 2025 President of the United States Donald John Trump using the authority vested in him by Article II of the consitution, issued 1600 sweeping pardons for defendants charged and convicted for roles in the January 6 captial attack.(1)",
        [
            "1: Richer, Alanna Durkin, and Michael Kunzelman. “Trump Issues Sweeping Pardon of Supporters Charged in the Jan. 6, 2021, Capitol Attack.” AP News, 21 Jan. 2025, apnews.com/article/capitol-jan-6-pardons-trump-justice-department-8ce8b2a8f8cb602d5eaf85ac7b969606. Accessed 22 Mar. 2025."
        ],
        [
            new timelineEvent(
                "Follwoing the pardons, federal judges began releasing the defendants",
                new Date(
                    2025,
                    0,
                    21
                ),
                "Lynch, Sarah N. “The Most High-Profile Jan 6 Defendants to Receive Clemency from Trump.” Reuters, 21 Jan. 2025, www.reuters.com/world/us/most-high-profile-jan-6-defendants-receive-clemency-trump-2025-01-21/. Accessed 22 Mar. 2025."
            )
        ],
        0.99,
        new Date(
            2025,
            0,
            20
        )
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
                new Date(
                    2025,
                    0,
                    27
                ),
                "Lowell, Hugo. “Trump Orders Justice Department to Fire All US Attorneys Appointed by Biden.” The Guardian, The Guardian, 19 Feb. 2025, www.theguardian.com/us-news/2025/feb/19/trump-justice-department-biden-attorneys?utm_source=chatgpt.com. Accessed 22 Mar. 2025."
            )
        ],
        0.8,
        new Date(
            2025,
            0,
            27
        )
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
                new Date(
                    2025,
                    0,
                    25
                ),
                "Miller, Zeke, et al. “Trump Fires More than a Dozen Independent Inspectors General.” AP News, 25 Jan. 2025, apnews.com/article/trump-inspectors-general-fired-congress-unlawful-4e8bc57e132c3f9a7f1c2a3754359993?utm_source=chatgpt.com. Accessed 22 Mar. 2025.",
            ),
            new timelineEvent(
                "Legal experts begin commenting that this is wildly illegal and violates the 2022 Inspector General Act",
                new Date(
                    2025,
                    0,
                    28
                ),
                "McGreal, Chris. “Trump Condemned over “Blatantly Illegal” Firings of Watchdog Chiefs.” The Guardian, The Guardian, 28 Jan. 2025, www.theguardian.com/us-news/2025/jan/28/trump-watchdog-firings-inspectors-general. Accessed 22 Mar. 2025."

            ),
        ],
        0.85,
        new Date(
            2025,
            0,
            24
        )
    ),

];