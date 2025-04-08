import { Action, timelineEvent } from "../classes.mts";

const action = new Action(
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
);

export default action;
