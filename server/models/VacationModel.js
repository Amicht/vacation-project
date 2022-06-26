class VacationModel{
    id;
    destination;
    description;
    price;
    from_date;
    to_date;
    picture;
    constructor(vacation){
        this.id = vacation.id;
        this.destination = vacation.destination;
        this.description = vacation.description;
        this.price = vacation.price;
        this.from_date = vacation.from_date;
        this.to_date = vacation.to_date;
        this.picture = vacation.picture;
    }
}