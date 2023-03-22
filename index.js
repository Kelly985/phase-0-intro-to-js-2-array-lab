// Write your solution here!

 const cats = ["Milo", "Otis", "Garfield"];


// adds a cat name at the end of the array
function destructivelyAppendCat(name) {
    cats.push(name);
    console.log(cats);
  }
  //destructivelyAppendCat('reed');


// adds a cat name at the beginning of the array
   
  function destructivelyPrependCat(name) {
   cats.unshift(name);
   console.log(cats);
  }
 //destructivelyPrependCat('dean);

// remove last member in the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
  }
  //destructivelyRemoveLastCat();


  //removes first member in the cats array
  function destructivelyRemoveFirstCat () {
    cats.shift();
    console.log(cats)
      }
      //destructivelyRemoveFirstCat();

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
     function appendCat(name) {
        const newCats0 = [...cats, name];
        return newCats0;
      }
      const newCats0 =appendCat('stud');
      console.log(newCats0);
      

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
      function prependCat(name) {
        const newCats1 = [name, ...cats];
        return newCats1;
      }
      const newCats1 = prependCat('trap');
      console.log(newCats1);


//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
      function removeLastCat() {
        const newCats2 = cats.slice(0, -1);
        return newCats2;
      }
      const newCats2 = removeLastCat();
      console.log(newCats2);

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
      function removeFirstCat() {
        const newCats3 = cats.slice(1);
        return newCats3;
      }
const newCats3 = removeFirstCat();
console.log(newCats3);