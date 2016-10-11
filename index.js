// code solution here
"use strict"

class President {
  constructor(name, party, years, state){
    this.name = name;
    this.politicalParty = party;
    this.yearsInOffice = years;
    this.homeState = state
  }

  veto(){
    return "NO!"
  }

  passBill(){
    return "You can do that!"
  }

  doCharity(){
    return "I like to help people."
  }

  conductPressInterview(){
    return "I am proud to be an American."
  }

  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
  }

}
