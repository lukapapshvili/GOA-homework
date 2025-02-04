// დავალება: სპორტსმენის კონსტრუქტორი
// შექმენით კონსტრუქტორი, რომელიც აღწერს სპორტსმენის შემდეგ თვისებებს:

// სახელი (name)
// ასაკი (age)
// სპორტის სახეობა (sport)
// დღიური ვარჯიშის ხანგრძლივობა საათებში (trainingHours)
// და შექმენით მეთოდი, რომელიც ამოწმებს, რამდენ საათს უნდა ვარჯიშობდეს სპორტსმენი კვირაში, თუ უნდა გაიზარდოს მისი შედეგები 20%-ით.

function Athlete(name, age, sport, trainingHours) {
    this.name = name;
    this.age = age;
    this.sport = sport;
    this.trainingHours = trainingHours;
}

Athlete.prototype.weeklyTrainingHours = function() {
    return this.trainingHours * 7;
};

Athlete.prototype.increasedTrainingHours = function() {
    return this.weeklyTrainingHours() * 1.2;
};