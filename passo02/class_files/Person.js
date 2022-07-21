class Person{
    constructor(name, city, school){
        this.name = name;
        this.city = city;
        this.school = school
    };

    getGender(){
        return this.gender;
    };
    setGender(gender){
        this.gender = gender;
    };
    getDOB(){
        return this.dob;
    };
    setDOB(dob){
        this.dob = dob;
    };

    calculateAge(){
        return new Date().getFullYear() - this.getDOB();
    };

    bio(){
        throw new Error('Abstract Method');
    };
};

module.exports = {Person:Person};