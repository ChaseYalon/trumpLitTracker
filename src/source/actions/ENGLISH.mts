import { Action, timelineEvent } from "../classes.mts"
const action = new Action(
    "English as the National Language",
    "On March 1, 2025, President of the United States, Donald J. Trump issued an executive order making English the National Language. This did not immedatly require all agenices stop offering any services in any other language but it does lurch in that direction, upending centuries of polyglotic policy and tradition",
    [
        "“Designating English as the Official Language of the United States.” The White House, 2 Mar. 2025, www.whitehouse.gov/presidential-actions/2025/03/designating-english-as-the-official-language-of-the-united-states/. Accessed 9 Apr. 2025."
    ],
    [
        new timelineEvent(
            "Trump signs the EO, making English the national language",
            new Date(
                2025,
                2,
                1
            ),
            "“Designating English as the Official Language of the United States.” The White House, 2 Mar. 2025, www.whitehouse.gov/presidential-actions/2025/03/designating-english-as-the-official-language-of-the-united-states/. Accessed 9 Apr. 2025."
        )
    ],
    0.74,
    new Date(
        2025,
        2,
        1
    ),
    "English as the national language is an idea almost as stupid as it is biggoted. Aside from its ugly ugly past and the lunacy of sugesting laws are needed to protect the language of Shaksphere, it is just plain stupid because biliguality is good according to multiple studdies."
)
export default action;