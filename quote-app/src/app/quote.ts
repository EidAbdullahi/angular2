export class Quote {
     id:number;
     description:string;
     name:string;
     user:string;
     day:Date;
     upvote:number;
     downvote:number;
    constructor(id:number,description:string,name:string,user:string,day:Date){
    this.id = id;
    this.description = description;
    this.name = name;
    this.user = user;
    this.day = day;
    this.upvote=0;
    this.downvote=0;
}
}
