import { Action, timelineEvent } from "../classes.mts";

const action = new Action(
    "Strategic crypto reserve",
    "On March 6, 2025, President of the United States, Donald J. Trump signed an Executive Order, establishing a \"National Bitcoin Reserve\". Furthermore he also appointed a \"Crytocurrency Tzar\", and while the ...job of that position is unclear he apointed one none the less",
    [
        "Liang, Annabelle. “Bitcoin Reserve: Why Has Trump Set up a US Crypto Stockpile?” Bbc.com, BBC News, 7 Mar. 2025, www.bbc.com/news/articles/cqx0g1py5v0o. Accessed 10 Apr. 2025."
    ],
    [
        new timelineEvent(
            "President of the United States, Donald J. Trump hosts a \"Crypto Summit\" at the White House with crytop enthusiasts.",
            new Date(
                2025,
                2,
                7
            ),
            "Bose, Nandita, et al. \"Crypto Leaders Meet at Trump\'s Summit with Strategic Reserve in Focus.\" Reuters, 7 Mar. 2025, www.reuters.com/technology/crypto-leaders-meet-trumps-summit-strategic-reserve-focus-2025-03-07/. Accessed 10 Apr. 2025."
        )
    ],
    0.5,
    new Date(
        2025,
        2,
        7
    ),
    "This is not as much evil as stupid. Crypto is a terrible store of long term value (not like oil, gold or dollars). Instead what we should do is focus our efforts on is reducing costs for average Americans. Not pooring taxpayer dollars into a space full of conartists and scammers."
);

export default action;
