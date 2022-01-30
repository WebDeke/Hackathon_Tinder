//this is a tester line -- the actual contestantArray will be created at the start and expanded as we add more items
var array = [["Looking for Team", false, false, true, 5.5, "Discord", 3, "CSE", 0, 10, "Light", "Volkov", 361],["Team Found", true, false, false, -11, "FB", 0, "Chem", -1, 0, "Antonio", "Salazar", 277],["Looking for Team", true, false, false, -6.5, "FB", 0, "Math", 1, 0, "Mindy", "Hallam", 169]]; //every competitor's info --assume it exists
//here I added three already-existing contestants
//you is another tester line that would have been filled in with the guy's input -- this represents the data for the guy seeking a match
//0string-1bool-2bool-3bool-4double-5string-6int-7string-8int-9int-10string-11string-12int
const you = ["Looking for Team", true, true, false, 5.5, "Discord", 2, "Math", 1, 0, "Sara", "Marcos", 105];
//2D array because each contestant is in itself an array of information
const affinityArray = []; //how close each person is
for (var i = 0; i < array.length; i++) {
  affinityArray[i] = 0;
}
for (var i = 0; i < array.length; i++) {
    // status is array[x][0] where x represents the contestant whose info is already in the array
  if (array[i][0] == "Looking for Team") {
    affinityArray[i]+=3000; //if person needs another team
  }
  // C++ is array[x][1] 
  // Java is array[x][2] 
  // Python is array[x][3] 
  // we can add more for the sake of demo but they'd work the same
  if ((array[i][1] == you[1]) && you[1] == true) {//uses booleans, can be replicated for all yes/no skills
    affinityArray[i]+=5200; //if shared skill, should outweigh everything else combined
  } 
  if (array[i][2] == you[2] && you[2] == true) {//uses booleans, can be replicated for all yes/no skills
    affinityArray[i]+=5200; //if shared skill, should outweigh everything else combined
  } 
  if (array[i][3] == you[3] && you[3] == true) {//uses booleans, can be replicated for all yes/no skills
    affinityArray[i]+=5200; //if shared skill, should outweigh everything else combined
  } 
  //time is slot 4, will be adjusted if more skills found
  if (array[i][4] > 12) {
    array[i][4] -= 24;
  } //not technically necessary -- they should've been taken care of when added in, but I'll keep it for safety
  if (you[4] > 12) { //for those special time zones UTC+13 / UTC+14
    time -= 24;
  }
  var diff = array[i][4] - you[4]; //time difference
  if (diff < 0) {
    diff = -diff; //if negative if this contestant is in a later time zone
  }
  if (diff <= 6) { //added affinity ranges from 240 when same time zone to 180 when opposite, but plummets to 0 when 6 or 18 hours apart -- linear change
    var change = 40*(6-diff);
    affinityArray[i]+=change;
  }
  if (diff > 6 && diff <= 12) {
    var change = 30*(diff-6);
    affinityArray[i]+=change;
  }
  if (diff > 12 && diff <= 18) {
    var change = 30*(18-diff);
    affinityArray[i]+=change;
  }
  if (diff > 18) {
    var change = 30*(diff-18);
    affinityArray[i]+=change;
  }
  //accounts for time zones
  //primary contact is slot 5 in the array
  if (array[i][5] == you[5]) {
    affinityArray[i]+=32; //if same mode of communication, not much weight put on this
  }  
  //study level is 6 in the array
  if (array[i][6] == 3) {
    affinityArray[i]+=30*(3-you[6]); //grad skills, should be more emphasized if this contestant is at a lower level so they get support
  }
  if (array[i][6] == 2) {
    affinityArray[i]+=24*(3-you[6]); //college skills
  }
  if (array[i][6] == 1) {
    affinityArray[i]+=16*(3-you[6]); //HS skills
  }
  if (array[i][6] == you[6]) {
    affinityArray[i]+=27; //if same level of study
  }
  if ((array[i][6] - you[6] == 1)||(array[i][6] - you[6] == -1)) {
    affinityArray[i]+=17; //if similar level of study
  }
  if ((array[i][6] - you[6] == 2)||(array[i][6] - you[6] == -2)) {
    affinityArray[i]+=7; //if not completely different level of study
  }
  //this interprets a studyLevel of 0 as middle school, of 1 as high school, of 2 as college, and of 3 as grad
  //major is 7 in array
  if (array[i][7] == "CSE") {
    affinityArray[i]+=100; //comp sci major
    if (you[7] != "CSE") {
      affinityArray[i]+=110; //probably a good idea for a non-CS major to team up with a CS major
    }
  }
  if (array[i][7] == you[7]) {
    affinityArray[i]+=16; //same major, not sure this deserves much weight
  }
  //for gender assume -1 is male, 1 is female, and 0 is third gender
  //gender is slot 8 in array
  if (array[i][8] == 0) {
    affinityArray[i]+=31; //get more third-gender people into mixed-gender teams
  }
  if (array[i][8]- you[8]!=0) {
    affinityArray[i]+=41; //different-gender dynamic
  }
  //comfort on scale of 0 to 10
  //comfort is slot 9 (so last that matters, but slots 10 11 and 12 will be firstname, lastname, and phone number respectively)
  const comfortForOther = (array[i][9])*50; //to ensure teammates have comfort
  affinityArray[i]+=comfortForOther;
  const comfortForSelf = (10-you[9])*50; //to help the shy
  affinityArray[i]+=comfortForSelf;
} 
//affinities have been calculated
  //sorting algorithm
  //moves objects in BOTH arrays around in the same way i.e. 5 and 7 swap places in both so that affinityArray will be ordered greatest to least
  //yeah it's bubble sort but since I'm using one array to sort another array it's well...
  for (var ii = 0; ii < affinityArray.length; ii++) {
    for (var j = ii+1; j < affinityArray.length; j++) {
      if (affinityArray[j]>affinityArray[ii]) { //if the one coming after is bigger we need to switch
        const c = array[j];
        array[j] = array[ii];
        array[ii] = c;
        var k = affinityArray[j];
        affinityArray[j] = affinityArray[ii];
        affinityArray[ii] = k;
      }
    }
  }
  //testing output
  console.log(array[0][10]+" "); //Mindy
  console.log(array[1][11]+" "); //Salazar
  console.log(array[2][12]+" "); //361
  console.log(affinityArray[0]+" "); //8903
  console.log(affinityArray[1]+" "); //5793
  console.log(affinityArray[2]+" "); //4601
  //end tests
  //at this point it should display the list of matches
  //afterwards someone will need to type the following line of code:
  // array[affinityArray.length] = you;
