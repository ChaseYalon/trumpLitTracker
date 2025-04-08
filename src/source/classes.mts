export class timelineEvent {
  summary: string;
  date: Date;
  source: string;
  constructor(summary: string, date: Date, source: string) {
    this.summary = summary;
    this.date = date;
    this.source = source;
  }
}

let count: number = 0;

export class Action {
  name: string;
  id: number;
  summary: string;
  sources: string[];
  timeline: timelineEvent[];
  evilness: number;
  start: Date;
  opinion: string;
  constructor(
    name: string,
    summary: string,
    sources: string[],
    timeline: timelineEvent[],
    evilness: number,
    start: Date,
    opinion: string,
  ) {
    count++;
    this.name = name;
    this.id = count;
    this.summary = summary;
    this.sources = sources;
    this.timeline = timeline;
    this.evilness = evilness;
    this.start = start;
    this.opinion = opinion;
  }
}
