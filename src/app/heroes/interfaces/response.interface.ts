export interface Response {
    response:   string;
    resultsFor: string;
    results:    Result[];
    error:      string;
}

export interface Result {
    id:          string;
    name:        string;
    powerstats:  Powerstats;
    biography:   Biography;
    appearance:  Appearance;
    work:        Work;
    connections: Connections;
    image:       Image;
}

export interface Appearance {
    gender:    string;
    race:      string;
    height:    string[];
    weight:    string[];
    eye:  string;
    hair: string;

}

export interface Biography {
    fullName:        string;
    alterEgos:       string;
    aliases:         string[];
    placeOfBirth:    string;
    firstAppearance: string;
    publisher:       string;
    alignment:       string;
}

export interface Connections {
    groupAffiliation: string;
    relatives:        string;
}

export interface Image {
    url: string;
}

export interface Powerstats {
    intelligence: string;
    strength:     string;
    speed:        string;
    durability:   string;
    power:        string;
    combat:       string;
}

export interface Work {
    occupation: string;
    base:       string;
}
