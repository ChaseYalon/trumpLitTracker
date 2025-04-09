import { time } from "console";
import { Action, timelineEvent } from "../classes.mts"
const action = new Action(
    "Firing Hapmpton Dellinger",
    "Until Feb 7, 2025 Hampton Dellinger served as head of the Office of Special Council. This is tottaly disconected from the Justice Department office of the same name that prosecuted Then Former President Trump. Dellingers job was to protect wistleblowers from rettalation and to ensure transparency in the civil service. His performace reviews underscore that he did a great job filing many cases against both the Biden and Trump administrations. Tresruay Secratary Scott Benesent on orders from President Trump fired Dellinger without providing the statutoraly mandated deadline or providing congress the stuattoraly mandated reason.",
    [
        "“Former Government Watchdog on His Decision to End Legal Fight Challenging His Firing.” NPR, 7 Mar. 2025, www.npr.org/2025/03/07/nx-s1-5320251/hampton-dellinger-former-federal-watchdog-drops-lawsuit. Accessed 9 Apr. 2025."
    ],
    [
        new timelineEvent(
            "Hampton Dellinger appointed to serve as head of the Office of Special Council for a term ending March 2029",
            new Date(
                2024,
                1,
                27
            ),
            "\"Hampton Dellinger Sworn in as Special Counsel of OSC.\" Osc.gov, 2025, osc.gov/News/Pages/Press%20Release%20Template1.aspx. Accessed 9 Apr. 2025."
        ),
        new timelineEvent(
            "Hampton Dellinger dissmised by the Trump administration",
            new Date(
                2025,
                1,
                7
            ),
            "to, Contributors. “American Lawyer.” Wikipedia.org, Wikimedia Foundation, Inc., 13 Mar. 2007, en.wikipedia.org/wiki/Hampton_Dellinger#:~:text=Initially%20dismissed%20on%20February%207,judge%20preventing%20his%20immediate%20dismissal. Accessed 9 Apr. 2025."
        ),
        new timelineEvent(
            "Dellinger sues to get his job back. He alleges his firing was illegal. A district court aggred and temporarily blocked the firing.",
            new Date(
                2025,
                1,
                12
            ),
            "“Search - Supreme Court of the United States.” Supremecourt.gov, 2025, www.supremecourt.gov/search.aspx?filename=/docket/docketfiles/html/public/24a790.html. Accessed 9 Apr. 2025."
        ),
        new timelineEvent(
            "An appeals court unanimously reverses the lower court decison and Dellinger drops his lawsuit, acknowledging that he cannot win before the Suppreme Court.",
            new Date(
                2025,
                2,
                6
            ),
            "Gerstein, Josh. “Federal Workforce Watchdog Who Was Fired by Trump Drops Legal Fight to Get His Job Back.” POLITICO, Politico, 6 Mar. 2025, www.politico.com/news/2025/03/06/federal-workforce-watchdog-who-was-fired-by-trump-drops-legal-fight-to-get-his-job-back-00215891. Accessed 9 Apr. 2025"
        )
    ],
    0.8,
    new Date(
        2025,
        1,
        7
    ),
    "The Office of Special Council (OSC) is a little known but important office that protects wistleblowers and unearthes corruption. Only the corrupt file the anti corruption watchdogs and htis is further evidece that the Trump admistration is enormously corrupt and is trying to hide it."
)
export default action;