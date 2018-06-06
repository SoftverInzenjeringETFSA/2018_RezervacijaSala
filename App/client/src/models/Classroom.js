export default class Classroom{
  constructor(classroom){
    this.id = classroom._id;
    this.name = classroom.name;
    this.type = classroom.type;
    this.number_of_seats = classroom.number_of_seats;
    this.equipment = classroom.equipment;
    this.number_of_keys = classroom.number_of_keys;
  }
  getName(){
    return this.name;
  }
  getId(){
    return this.id;
  }
  getType(){
    return (!!this.type)? this.type : "unspecified";
  }
  getNumberOfSeats(){
    return (!!this.number_of_seats)? this.number_of_seats : "unspecified";
  }
  getEquipment(){
    return (!!this.equipment)? this.equipment : "unspecified";
  }
  getNumberOfKeys(){
    return (!!this.number_of_keys)? this.number_of_keys : "unspecified";
  }
}
