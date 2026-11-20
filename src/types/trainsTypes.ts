export interface TrainClass {
    type: "3A" | "2A" | "1A";
    status: "available" | "waiting";
    availability: number;
    fareType: "Tatkal";
    price: number;
}

export interface Train {
    id: number;
    name: string;
    runsOn: string;
    departure: {
        date: string;
        time: string;
        station: string;
        code: string;
    };
    arrival: {
        date: string;
        time: string;
        station: string;
        code: string;
    };
    duration: string;
    classes: TrainClass[];
}