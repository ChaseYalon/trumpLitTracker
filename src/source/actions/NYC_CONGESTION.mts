import { Action, timelineEvent } from "../classes.mts";
const action = new Action(
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
);
export default action;
