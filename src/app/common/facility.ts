
export class Facility {
    

    constructor(public id: bigint,
        public name: string,
        public description: string,
        public slotduration: number,
        public starttime: Date,
        public endtime: Date
    ){}
                    
}
