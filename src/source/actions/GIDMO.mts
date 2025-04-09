import { time } from "console";
import { Action, timelineEvent } from "../classes.mts";

const action = new Action(
    "Migrants in Guantanamo Bay",
    "On January 29, 2025, Donald J. Trump, President of the United states, while signing the Lakland Riley Act said \" We [The United States] worst criminal aliens [to Guantanamo Bay]\". Guantano bay is a United States naval base in Cuba used to house dangerous terrorists like Khalid Sheikh Mohammed, who planned 9/11.",
    [
        "Weissert, Will. “Trump to Send Criminal Immigrants in US Illegally to Guantanamo Bay.” AP News, 29 Jan. 2025, apnews.com/article/trump-signs-laken-riley-act-immigration-crackdown-30a34248fa984d8d46b809c3e6d8731a?utm_source=chatgpt.com. Accessed 8 Apr. 2025."
    ],[
        new timelineEvent(
            "First migrants arive at Guantano bay on military planes, handcuffed.",
            new Date(
                2025,
                1,
                5
            ),
            "Davies, Maia. “President Trump Sends First US Migrant Detainees to Guantanamo Bay.” Bbc.com, BBC News, 5 Feb. 2025, www.bbc.com/news/articles/cy0p1ykxyzjo. Accessed 8 Apr. 2025."
        ),
        new timelineEvent(
            "Migrat capacity at Guantanamo reaces 98 or 0.09% of the illegal imagrants in the U.S. They where staaying in camps orignaly built for Al-Quadea",
            new Date(
                2025,
                1,
                13
            ),
            "Alvarez, Priscilla, and Haley Britzky. “‘Nobody Really Knows What’s Going On’: US Officials Scramble to Expand Guantanamo Bay for Migrants.” CNN, 13 Feb. 2025, www.cnn.com/2025/02/13/politics/guantanamo-bay-migrants-tent-facilities/index.html. Accessed 8 Apr. 2025."
        ),
        new timelineEvent(
            "ACLU sues the adminstration over obvious and blatant civil rights violations at Guantanamo",
            new Date(
                2025,
                2,
                1
            ),
            "“ACLU and Other Advocates Sue to Block Migrants from Being Sent to Guantánamo Bay.” NPR, Mar. 2025, www.npr.org/2025/03/01/g-s1-51567/aclu-sue-trump-migrants-guantanamo. Accessed 8 Apr. 2025."
        ),
        new timelineEvent(
            "All migrants transfered out of Guantano.",
            new Date(
                2025,
                2,
                13
            ),
            "Jr, Bernd Debusmann. “Migrants Held at Guantanamo Transferred to US, Pentagon Confirms.” Bbc.com, BBC News, 13 Mar. 2025, www.bbc.com/news/articles/cjw21y5043yo. Accessed 8 Apr. 2025."
        )
    ],
    0.7,
    new Date(
        2025,
        0,
        29
    ),
    "There is just no reason for it. We have very little capacity on that base and this was just a publicicty stunt. Those migrants where held in awfull decripid conditions, the kind we use to hold high level terrorists when many of them (1/3 according to the state department) had no criminal record and where not members of a gang."
)

export default action;