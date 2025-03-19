import { tCase, Event } from "./main.mts";

const caseData = [
	new tCase(
		"J.G.G. v. Trump",
		"James Emanuel Boasberg",
		"President Trump issued a presidential proclamation purporting to invoke the Alien Enemies Act to allow for summary removal of alleged members of the Venezuelan Tren de Aragua (TdA) gang. Plaintiffs filed a class action lawsuit arguing the 1798 statute does not apply to these circumstances, and the judge provisionally agreed issuing a temporary block to any removals until further hearings.",
		"Barack Obama",
		true,
		17,
		[
			new Event(
				"The government submitted a notice of appeal to the D.C. Circuit.",
				new Date(2025, 2, 15)
			)
		],
		0.7,
		new Date(2025, 2, 14)
	),
    new tCase(
        "New Hampshire Indonesian Community Support v. Donald J. Trump ",
        "Joseph N. Laplante",
        "Trump’s executive order seeks to revoke birthright citizenship for the children of undocumented immigrants on the basis that people in the United States illegally are not “subject to the jurisdiction thereof.” The ACLU sued the Trump administration on behalf of individuals in New Hampshire who would have their childrens’ citizenship revoked. The ACLU argues that the plain text of the 14th Amendment, as confirmed in U.S. v. Wong Kim Ark (1898), explicitly grants birthright citizenship for all people born in the United States.",
        "George W Bush",
        false,
        18,
        [
            new Event (
                "Judge Joseph N. Laplante issued a preliminary injunction.",
                new Date(
                    2025,
                    1,
                    20
                )
            )
        ],
        0.99,
        new Date(
            2025,
            0,
            20
        )

    ),new tCase(
        "O. Doe; Brazilian Worker Center, Inc; La Colaborativa v. Donald J. Trump et al ",
        "Leo Theodore Sorokin",
        " Trump’s executive order seeks to revoke birthright citizenship for the children of undocumented immigrants on the basis that people in the United States illegally are not “subject to the jurisdiction thereof.” A group of pregnant women whose children would not receive citizenship sued; the plaintiff identified as “O. Doe” lives in Massachusetts and has temporary protected status in the United States. The suit argues that the plain text of the 14th Amendment, as confirmed in U.S. v. Wong Kim Ark (1898), explicitly grants birthright citizenship for all people born in the United States.",
        "Barrak Obama",
        true,
        11,
        [
            new Event (
                "Judge Leo T. Sorokin issued an opinion granting a preliminary injunction enjoining the government from implementing and enforcing Executive Order No. 14,160, “Protecting the Meaning and Value of American Citizenship,” against plaintiff O. Doe, or any member of La Colaborativa or Brazilian Worker Center.",
                new Date(
                    2025,
                    1,
                    13
                )
            ),
            new Event (
                "Defendants submitted a notice of appeal to the First Circuit.",
                new Date (
                    2025,
                    1,
                    19
                )
            )
        ],
        0.99,
        new Date(
            2025,
            0,
            20
            //Wow thats quick, same day as the innaguration
        )
    ),
	new tCase(
		"State of New Jersey et al v. Donald J. Trump et al",
		"Leo Theodore Sorokin",
		"A broad coalition of states sued President Donald Trump alleging his Executive Order (EO) revoking birthright citizenship for children of undocumented immigrants and others is unconstitutional. A federal court temporarily blocked the EO while the lawsuit is pending on the basis that it likely violates the Fourteenth Amendment; and the Fourth Circuit denied the defendants motion for a stay.",
		"Barrak Obama",
		true,
		11,
		[
			new Event(
				"Leo T. Sorokin issued an opinion granting a preliminary injunction enjoining the government from implementing and enforcing Executive Order No. 14,160, Protecting the Meaning and Value of American Citizenship.",
				new Date(
					2025,
					1,
					13
				)
			),
			new Event (
				"the Defendants submitted a notice of appeal to the First Circuit, and a motion to stay the district court order on appeal.",
				new Date (
					2025,
					1,
					13
				)
			),
			new Event (
				"Judge Sorokin denied defendants motion to stay the preliminary injunction pending resolution of their appeal.",
				new Date (
					2025,
					1,
					26
				)
			),
			new Event (
				"the First Circuit denied the governments motion for a stay.",
				new Date (
					2025,
					2,
					11
				)
			),
			new Event (
				"the Defendants appealed to the U.S. Supreme Court for a partial stay of the district courts injunction.",
				new Date (
					2025,
					2,
					13
				)
			)
		],
		0.99,
		new Date (
			2025,
			0,
			21
		)

	),
	new tCase(
		"Casa v. Donald Trump",
		"Deborah L. Boardman",
		" CASA and Asylum Seeker Advocacy Project (two immigrant rights organizations) and a group of noncitizen pregnant women whose unborn children stand to have their citizenship revoked under President Donald Trumps Executive Order (EO) ending birthright citizenship sued Trump alleging the EO is unconstitutional. A federal court temporarily blocked the EO while the lawsuit is pending on the basis that it likely violates the Fourteenth Amendment.",
		"Joe Biden",
		true,
		4,
		[
			new Event (
				"Judge Deborah Boardman issued an opinion granting the plaintiffs motion for a preliminary nationwide injunction blocking implementation of the birthright citizenship Executive Order.",
				new Date (
					2025,
					1,
					5
				)
			),
			new Event (
				"the Defendants submitted a notice of appeal to the Fourth Circuit.",
				new Date (
					2025,
					1,
					13
				)
			),
			new Event (
				"the Fourth Circuit denied Defendants request for a partial stay of the district courts injunction.",
				new Date (
					2025,
					1,
					28
				)
			),
			new Event (
				"the Defendants appealed to the U.S. Supreme Court for a partial stay of the district courts injunction.",
				new Date (
					2025,
					2,
					13
				)
			)
		],
		0.99,
		new Date(
			2025,
			0,
			21
		)
	),new tCase(
        "Franco Aleman et al. v. Trump et al.",
        "John C. Coughenour",
        "Plaintiffs are non-citizen pregnant women whose due dates are after the implementation date of the Executive Order eliminating birthright citizenship. Plaintiffs bring this suit as a class action on behalf of all others similarly situated. They allege that the EO is a violation of the Fourteenth Amendment and seek an injunction to enjoin Defendants from enforcing the EO.",
        "Ronald Regan",
        false,
        44,
        [
            new Event(
                "State of Washington et al v. Donald J. Trump (complaint) was consolidated with this case.",
                new Date(
                    2025,
                    0,
                    27
                )
            )
        ],
        0.99,
        new Date(
            2025,
            0,
            24
        )
    ),
    new tCase(
        "County of Santa Clara v. Trump, et al",
        "Eumi K. Lee",
        " Trump’s executive order seeks to revoke birthright citizenship for the children of undocumented immigrants and for the children of parents on lawful temporary visas on the basis that they are not “subject to the jurisdiction” of the United States. The County of Santa Clara sued to protect residents who would lose their citizenship or whose U.S.-born children will not receive citizenship and to prevent administrative burdens and loss of tax revenues associated with that prospective loss of citizenship. Santa Clara argues that the order violates the plain text of the Fourteenth Amendment, statutes (8 U.S.C. § 1401 et seq.), and the Administrative Procedure Act, 5 U.S.C. § 706(2), and seeks declaratory and injunctive relief.",
        "Joe Biden",
        true,
        1,
        [
            new Event (
                " Santa Clara County filed a motion for a preliminary injunction to prohibit Defendants from implementing or enforcing the birthright citizenship EO on the basis that the EO violates the Citizenship Clause of the Fourteenth Ammdment, the constitutional Separation of Powers, and the Immigration and Nationality Act.",
                new Date(
                    2025,
                    1,
                    5
                )
            ),
            new Event (
                "Defendants filed an opposition to Santa Clara County’s motion for a preliminary injunction on the basis that Santa Clara County does not reach threshold grounds and is unlikely to succeed on the merits, and injunctive relief is not in the public interest.",
                new Date(
                    2025,
                    1,
                    14
                )
            ),
            new Event (
                "Santa Clara County filed a reply in support of its motion for a preliminary injunction.",
                new Date(
                    2025,
                    1,
                    19
                )
            ),
            new Event(
                "Judge Eumi Lee ruled that both parties file Orders to Show Cause to explain why this case should not be stayed pending the Ninth Circuit’s decision in Washington v. Trump. The hearing on the motion for preliminary injunction was also vacated and both parties filed OSCs on Feb. 28.",
                new Date(
                    2025,
                    1,
                    21
                )
            )
        ],
        0.85,
        new Date(
            2025,
            1,
            30
        )
    ),
	new tCase (
		"State of Washington et al v. Donald J. Trump et al",
		"John C. Coughenour",
		"The states of Washington, Arizona, Illinois and Oregon sued to block President Donald Trump's Executive Order (“EO”) revoking birthright citizenship for children of undocumented immigrants and those with temporary visas, alleging that the EO is unconstitutional. A federal court temporarily blocked the EO while the lawsuit is pending on the basis that it likely violates the Fourteenth Amendment. Trump has appealed the court’s decision. The Fourth Circuit denied the appeal, and the government then appealed to the Supreme Court.",
		"Ronald Regan",
		false,
		44,
		[
			new Event(
				"Franco Aleman v. Trump (complaint) was consolidated with this case.",
				new Date (
					2025,
					0,
					27
				)
			),
			new Event (
				"Judge Coughenour issued an opinion granting the plaintiffs’ motion for a preliminary injunction enjoining implementation of the Executive Order.",
				new Date(
					2025,
					1,
					6
				)
			),
			new Event(
				" defendants appealed to the Ninth Circuit Court (case no. 25-807).",
				new Date(
					2025,
					1,
					6
				)
			),
			new Event (
				"defendants made an emergency motion to stay the district court’s injunction.",
				new Date(
					2025,
					1,
					12
				)
			),
			new Event (
				"the Ninth Circuit issued an order denying the government’s emergency motion to stay the district court’s injunction and leaving the existing briefing schedule unchanged.",
				new Date(
					2025,
					19,
					26
				)
			),
			new Event (
				"the Defendants appealed to the U.S. Supreme Court for a partial stay of the district court’s injunction.",
				new Date (
					2025,
					3,
					13
				)
			)
		],
		0.99,
		new Date (
			2025,
			0,
			21
		)
	),
    new tCase (
        "OCA Asian Pacific American Advocates v. Marco Rubio et al",
        "Timothy James Kelly",
        "Trump’s executive order seeks to revoke birthright citizenship for the children of undocumented immigrants and for the children of parents on lawful temporary visas on the basis that they are not “subject to the jurisdiction” of the United States. OCA sued Marco Rubio and the heads of other departments and agencies on behalf of at least two pregnant women expected to give birth to children denied citizenship by the order. Both women reside in the United States on lawful, temporary, nonimmigrant visas. OCA argues that the order violates the plain text of the Fourteenth Amendment, statutes (8 U.S.C. § 1401 et seq.), and the Administrative Procedure Act, 5 U.S.C. § 706(2). The suit identifies an injured “subclass” of “Targeted Children” denied the privileges and public benefits afforded to U.S. citizens, seeking declaratory and injunctive relief.",
        "Donald Trump",
        false,
        8,
        [

        ],
        0.99,
        new Date(
            2025,
            0,
            30
        )
    ),
    new tCase(
        "Le v Trump",
        "Maame Ewusi-Mensah Frimpong",
        " A birthright citizenship case under seal. On Jan. 24, 2025, Judge Maame Ewusi-Mensah Frimpong, upon joint agreement by the parties, held briefing in abeyance pending the TRO and preliminary injunction litigation in Washington v. Trump.",
        "Joe Biden",
        true,
        4,
        [

        ],
        0.7,
        new Date(
            2025,
            0,
            20
        )
    ),
	new tCase(
		"Refugee and Immigrant Center for Education and Legal Services v. Noem",
		"Randolph Daniel Moss",
		"Three nonprofit organizations challenged a proclamation by President Donald Trump that disallows immigrants from remaining in the U.S. while pursuing asylum claims. The lawsuit argues that the proclamation violates multiple laws and Constitutional provisions. After the Trump administration agreed not to use the proclamation to deport individual asylum-seekers during the litigation, a federal judge denied the emergency motion to pause the implementation of the proclamation.",
		"Barrak Obama",
		true,
		11,
		[],
		//I just made up that 0.3 number, fix later
		0.3,
		new Date(
			2025,
			1,
			3
		)
	),
	new tCase(
		"**DISMISSED TRUMP WIN** Perez Parra v. Castro **DISMISSED TRUMP WIN**",
		"Kevin R. Sweazea",
		"Three Venezuelan men sued the U.S. government to temporarily block their transfer to Guantanamo Bay on the basis that they were already in proceedings contesting their detention. A federal judge granted the temporary restraining order. Subsequently, the three men were deported to Venezuela and the case was dismissed.",
		"Donald Trump",
		false,
		6,
		[
			new Event(
				"Judge Gonzales issued a 1-page Memorandum Opinion and Order noting that the Defendants had filed a Notice that all three petitioners were removed to Venezuela on Feb. 10; and vacated the upcoming status conference.",
				new Date(
					2025,
					1,
					13
				)
			),
			new Event (
				" the docket reflected a Notice of voluntary dismissal of the case by the three petitioners",
				new Date(
					2025,
					1,
					13
				)
			)
		],
		0,
		new Date(
			2025,
			1,
			9
		)

	)
];

export default caseData;