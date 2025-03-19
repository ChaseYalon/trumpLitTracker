Astro trup lit tracker

tCase format

    name : the legal name of the case : string

    judge : the judge currently presiding over the case, not the appelate judge, the district judge : string

    appointee : name of the president who appointed the judge : string

    yearsOnBench : how many years since the judge has taken the judical oath : number

    events : list of events in the case : Event[] (look at event documentation)

    likelihoodOfSuccess : BETWEEN 0 AND 1, just my estimate maybe get a laywers oppinion later : number

    dateFiled : the date the case was filed in court : Date

    party : policical party of the APPOINTEE, true for democrat false for republican. : boolean

    summary : please no more then 3 sentences : strinng

Event format
    text : description of the event, 1-2 sentences : string.

    date : date of the event : Date.

Note about Date type, look it up on MDN but new Date (2025,0,22 ) is Jan 22 2025, the months is the second item and it starts at 0

Author(s) : Chase Yalon, Leo Gorel, Jacob Taylor

** released under MIT liscene **