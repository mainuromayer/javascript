function animalCount(miles) {
  const animalDensityFirst10Miles = 10;
  const animalDensitySecond10Miles = 50;
  const animalDensityRestMiles = 100;
  if (miles <= 10) {
    const count = miles * animalDensityFirst10Miles; // প্রথম ১০ মাইলের  ভিতরে
    return count;
  }
  else if(miles <= 20){
    const firstDenseAnimals = 10 * animalDensityFirst10Miles; // count // miles * animalDensity  First10Miles  // প্রথম ২০ মাইলের ভিতরে

    const restMiles = miles - 10; // প্রথম ১০ মাইলের থেকে বেশী গুলোর হিসাব শুধু্।
    const secondDenseAnimals = restMiles * animalDensitySecond10Miles; // প্রথম ১০ মাইলের থেকে বেশী যেগুলো আছে সেগুলোর সাথে [animalDensitySecond10Miles = 50] টার গুন।
    const totalAnimals = firstDenseAnimals + secondDenseAnimals;
    return totalAnimals;
  }
  else{
    const firstDenseAnimals = 10 * animalDensityFirst10Miles; // প্রথম ১০ মাইলের থেকে বেশী গুলোর হিসাব শুধু্।
    
    const secondDenseAnimals = 10 * animalDensitySecond10Miles; // প্রথম ২০ মাইলের থেকে বেশী গুলোর হিসাব শুধু্।
    const restMiles = miles - 20;

    const restDenseAnimals = restMiles * animalDensityRestMiles;
    const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
    return totalAnimals;
  }
}

const animals = animalCount(35);
console.log(animals);