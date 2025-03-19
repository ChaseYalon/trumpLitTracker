export class Event {
    text: string;
    date: Date;

    constructor(text: string, date: Date) {
        this.text = text;
        this.date = date;
    }
}

export class tCase {
    name: string;
    judge: string;
    appointee: string;
    yearsOnBench: number;
    events: Event[];
    likelihoodOfSuccess: number;
    dateFiled: Date;
    party: boolean; // true if Democrat
    summary: string;

    constructor(
        name: string,
        judge: string,
        summary: string,
        appointee: string,
        party: boolean,
        yearsOnBench: number,
        events: Event[],
        likelihoodOfSuccess: number,
        dateFiled: Date
    ) {
        this.name = name;
        this.judge = judge;
        this.summary = summary;
        this.appointee = appointee;
        this.party = party;
        this.yearsOnBench = yearsOnBench;
        this.events = events;
        this.likelihoodOfSuccess = likelihoodOfSuccess;
        this.dateFiled = dateFiled;
    }
}
