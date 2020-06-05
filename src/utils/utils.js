export default class utils {
   // Stand in line
   static standInLine(arr, num1) {
      var line = [1, 2, 3, 4, 5, 6]; //people in line
      arr.push(num1); //user inputs an array and adds to the end of the line
      var upNext = line.shift(); //removes the first value of the var line array
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return upNext;
   }

   // Shopping List
   static shoppingList(input1, num1) {
      var myList = [];
      myList.push(input1, num1);
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return myList;
   }

   // Manipulate Arrays With unshift()/ unshift() adds values to the beginning of the array
   static arrayWithUnshift(input1) {
      var array100 = ["apple", "orange", "pear"];
      array100.unshift(input1);
      // Return: a single JavaScript value
      return array100;
   }

   // Manipulate Arrays With shift()/ shift() removes the first value of an array
   static arrayWithShift() {
      var array1 = ["apple", "orange", "pear"];
      var firstGone = array1.shift();
      // Return: a single JavaScript value
      return firstGone;
   }

   // Manipulate Arrays With pop()/ pop() removes the last value of the array
   static arrayWithPop() {
      var array1 = ["apple", "orange", "pear"];
      var lastGone = array1.pop();
      // Return: a single JavaScript value
      return lastGone;
   }

   // Manipulate Arrays With push()/ push() adds a value to the end of the array
   static arrayWithPush(input1) {
      var array1 = ["apple"];
      array1.push(input1);
      // parameter 1: any JavaScript value
      // Return: a single JavaScript value
      return array1;
   }

   // Use Bracket Notation to Find the Nth-to-Last Character in a String
   static secondToLastCharacter(input1) {
      var almostLast = input1[input1.length - 2];
      // parameter 1: any JavaScript value
      // Return: a single JavaScript value
      return almostLast;
   }

   //  Use Bracket Notation to Find the last Character in a String
   static lastCharacter(input1) {
      var thereYouAre = input1[input1.length - 1];
      // parameter 1: any JavaScript value
      // Return: a single JavaScript value
      return thereYouAre;
   }

   //  Use Bracket Notation to Find the Nth Character in a String
   static nthCharacter(input1) {
      var nextCharacter = input1[1];
      // parameter 1: any JavaScript value
      // Return: a single JavaScript value
      return nextCharacter;
   }

   //  Use Bracket Notation to Find the First Character in a String
   static firstCharacter(input1) {
      var foundIt = input1[0];
      // parameter 1: any JavaScript value
      // Return: a single JavaScript value
      return foundIt;
   }

   //  function to find the length of a string
   static stringLength(input1) {
      var length = input1.length;
      // parameter 1: any JavaScript value
      // Return: a single JavaScript value
      return length;
   }

   // Concatenating strings w/variables function
   static concatenatingStringVariables(input1, input2) {
      var firstLine = input1 + " ";
      var secondLine = input2;
      var bothLines = firstLine + secondLine;
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return bothLines;
   }

   // Concatenating strings w/plus equals operator function
   static concatenatingStrings(input1, input2) {
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return (input1 += input2);
   }

   // Concatenating strings w/plus operator function
   static concatenating(input1, input2) {
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return input1 + " " + input2;
   }

   // divide decimal function
   static divideDecimal(input1, input2) {
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return input1 / input2;
   }

   // multiply two decimals function
   static decimal(input1, input2) {
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return input1 * input2;
   }
   // Decrement function
   static decrement(input1) {
      // parameter 1: any JavaScript value
      // Return: a single JavaScript value
      return --input1;
   }

   // Increment function
   static increment(input1) {
      // parameter 1: any JavaScript value
      // Return: a single JavaScript value
      return ++input1;
   }

   // divide function
   static divide(input1, input2) {
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return input1 / input2;
   }

   // multiply function
   static multiply(input1, input2) {
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return input1 * input2;
   }

   // subtract function
   static subtract(input1, input2) {
      // parameter 1: any JavaScript value
      // parameter 2: any JavaScript value
      // Return: a single JavaScript value
      return input1 - input2;
   }
   // add function
   static add(input1, input2) {
      // A1: any JavaScript value
      // A2: any JavaScript value
      // R: a single JavaScript value
      return input1 + input2;
   } //  check what type of element was inputed
   static checkType(elem) {
      var type = typeof elem;
      return type;
   }

   //check for the presence of an element using indexOf()

   static checkForElement(elem) {
      // function is taking two parameters one array and one el
      let hideAndSeek = ["edward", "sarah", "bhavin", "danny", "joe"];

      if (hideAndSeek.indexOf(elem) !== -1) {
         return true;
      } else {
         return false;
      }
   }

   // add items using splice()
   static addItemSplice(minIndex, maxIndex, addThis) {
      var mindBlownAdd = ["some", "of", "these", "are", "confusing"];

      // can take up to three parameters which are integers
      // first one sets index to start removal
      // second one determines how many values to delete
      //    third parameter adds values
      //    var startingPoint = minIndex;
      //    var howMany = maxIndex;
      mindBlownAdd.splice(minIndex, maxIndex, addThis);
      // returns new array with removed values and new value added
      return mindBlownAdd;
   }

   // remove items using splice
   static removeItemSplice(minIndex, maxIndex) {
      var mindBlown = ["some", "of", "these", "are", "confusing"];

      // can take up to three parameters
      // first one sets index to start removal
      // second one determines how many values to delete
      //    var startingPoint = minIndex;
      //    var howMany = maxIndex;
      var takeAway = mindBlown.splice(minIndex, maxIndex);
      return takeAway;
   }

   // Generate Random Whole Numbers within a Range
   static randomRange(myMin, myMax) {
      //Math.floor gets the whole number
      //Math.random is multiplied by the result of the two parameters and 1 is added
      // we add myMin parameter to the rouned number

      return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
   }

   //profile Lookup Function
   // giving some objects with data to use for the looping of contacts

   static profileLookup(name, prop) {
      var contacts = [
         {
            firstName: "Edward",
            lastName: "plasencio",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
         },
         {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
         },
      ];
      //i have to loop throught the contact list and increment by 1
      // for loop set the position, if its less then the contact list it increments by 1
      for (var i = 0; i < contacts.length; i++) {
         //checking to see if the contact matches the name
         // use dot notation to allocate th efirstname prop and check against the name input
         if (contacts[i].firstName === name) {
            //   checkng to see if the contact has that property
            if (contacts[i].hasOwnProperty(prop)) {
               //returns contact with prop
               return contacts[i][prop];
            } else {
               //if not found displays this message
               return "No such property";
            }
         }
      }
      return "No such contact";
   }

   // Card Counting function
   // var count = 0; //variable to save the count

   static cc(card) {
      var count = 0;
      // function cc(card) {
      //    if (card >= 2 <= 6) {
      //       //should I use an and operator &&
      //       return count++ + " Bet"; //add the count plus one
      //    } else if (card == 7 <= 9) {
      //       //and operator?
      //       return (count = count + " Bet"); // count stays
      //    } else if ((card === 10, "J", "Q", "K", "A")) {
      //       //strict operator?
      //       return count-- + " Bet"; //decremetning the count
      //    }
      // }
      var msg = "";

      switch (card) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;

         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;
         default:
            return;
      }

      if (count === 5) {
         msg = "5 Bet";
      } else if (count === 0) {
         msg = "0 Hold";
      } else if (count === -5) {
         msg = "-5 Hold";
      } else if (count === -1) {
         msg = "-1 Hold";
      } else if (count === 1) {
         msg = "1 Bet";
      }

      return msg;
   }
   // Your functions go here!
   //Use the some Method to Check that Any Elements in an Array Meet a Criteria
   static useSomeMethod(arr) {
      var newArr = arr.some(function (value) {
         return value > -1;
      });
      return newArr;
   }

   // Use the every Method to Check that Every Element in an Array Meets a Criteria
   static useEveryMethod(arr) {
      var newArr = arr.every(function (value) {
         return value > -1;
      });
      return newArr;
   }

   //Apply Functional Programming to Convert Strings to URL Slugs
   static urlSlug(title) {
      return (
         title
            // split string into an array
            .split(/\W/)
            // filter through array remove differnet characters
            .filter((arr) => {
               return arr !== "";
            })
            // join all the words together with a dash
            .join("-")
            // make suer they are all lowercase letters
            .toLowerCase()
      );
   }
   //Combine an Array into a String Using the join Method
   static mendArr(str) {
      return str.split(/\W/).join(" ");
   }
   //Split a String into an Array Using the split Method

   static splitStr(str) {
      var newStr = str.split(/\W/);
      return newStr;
   }

   static sorted(arr) {
      var newArr = arr.sort(function (a, b) {
         return a - b;
      });
      return newArr;
   }

   // Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
   static squareList = (arr) => {
      const positiveIntegers = arr.filter((num) => {
         return num >= 0 && Number.isInteger(num);
      });
      const squaredIntegers = positiveIntegers.map((num) => {
         return num ** 2;
      });
      return squaredIntegers;
   };

   // Use the reduce Method to Analyze Data

   static reduceMethod(objlist, name) {
      var objlist = [
         {
            Title: "Inception",
            Year: "2010",
            Rated: "PG-13",
            Released: "16 Jul 2010",
            Runtime: "148 min",
            Genre: "Action, Adventure, Crime",
            Director: "Christopher Nolan",
         },
         {
            Title: "Interstellar",
            Year: "2014",
            Rated: "PG-13",
            Released: "07 Nov 2014",
            Runtime: "169 min",
            Genre: "Adventure, Drama, Sci-Fi",
            Director: "Christopher Nolan",
         },
         {
            Title: "The Dark Knight",
            Year: "2008",
            Rated: "PG-13",
            Released: "18 Jul 2008",
            Runtime: "152 min",
            Genre: "Action, Adventure, Crime",
            Director: "Christopher Nolan",
            Writer:
               "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
         },
         {
            Title: "Batman Begins",
            Year: "2005",
            Rated: "PG-13",
            Released: "15 Jun 2005",
            Runtime: "140 min",
            Genre: "Action, Adventure",
            Director: "Christopher Nolan",
            Writer:
               "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
         },
         {
            Title: "Avatar",
            Year: "2009",
            Rated: "PG-13",
            Released: "18 Dec 2009",
            Runtime: "162 min",
            Genre: "Action, Adventure, Fantasy",
            Director: "James Cameron",
            Writer: "James Cameron",
         },
      ];
      var averageRating =
         objlist
            // i have to filter through the watch list ot get the films by director
            .filter((film) => film.Director === name)
            // i have to map through the ratings and convert the strings into numbers
            .map((film) => Number(film.imdbRating))
            //i have to use reduce to add the ratings
            .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
         //then i have to divide them by how many films he had
         objlist.filter((film) => film.Director === name).length;

      return averageRating;
   }

   // Add Elements to the End of an Array Using concat Instead of push
   static concatInsteadOfPush = function (orignal, addOn) {
      return orignal.concat(addOn);
   };
   //Combine Two Arrays Using the concat Method
   static mend = function (arr1, arr2) {
      return arr1.concat(arr2);
   };

   //Remove Elements from an Array Using slice Instead of splice
   static removeWithSliceMethod = function (ind1, ind2) {
      var arrr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
      var arrr2 = arrr.slice(ind1, ind2);
      console.log(arrr2);
   };

   // Return Part of an Array Using the slice Method

   static sliceMethod = function (index1, index2) {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      return arr.slice(index1, index2);
   };
   //Chunky Monkey
   static chunkArrayInGroups(arr, size) {
      var newArr = [];
      while (arr.length > 0) {
         newArr.push(arr.splice(0, size));
      }

      return newArr;
   }

   //Mutations

   static mutation(arr) {
      var firstStr = arr[0].toLowerCase();
      var secondStr = arr[1].toLowerCase();

      for (var i = 0; i < secondStr.length; i++) {
         if (firstStr.indexOf(secondStr[i]) === -1) return false;
      }
      return true;
   }

   //Where do I Belong

   static getIndexToIns(arr, num) {
      // have to sort the arr with a function
      arr.sort(function (a, b) {
         return a - b;
      });
      for (var i = 0; i < arr.length; i++) {
         if (num <= arr[i]) {
            return i;
         }
      }
      //if the num is higher then the array then it needs to go to the end of it

      return arr.length;
   }

   //Where do I Belong

   //falsy bouncer
   static bouncer(arr) {
      return arr.filter(function (item) {
         return item;
      });
   }

   // Slice and Splic

   static frankenSplice(arr1, arr2, n) {
      // make a copy of the second array
      var newArr = arr2.slice();
      //   splice it and add the first array with the spread operater
      newArr.splice(n, 0, ...arr1);
      return newArr;
   }

   //Title Case a Sentence
   static titleCase(str) {
      var titled = str
         .toLowerCase()
         .split(" ")
         .map(function (elem) {
            return elem[0].toUpperCase() + elem.slice(1);
         });

      return titled.join(" ");
   }

   //boo who
   static booWho(bool) {
      if (bool === true) {
         return true;
      } else if (bool === false) {
         return true;
      } else {
         return false;
      }
   }

   //finders keepers
   static findElement(arr, func) {
      let num = arr.filter(func);
      if (num.length > 1) {
         return num[0];
      }
      return undefined;
   }

   // Truncate a String
   static truncateString(str, num) {
      if (str.length > num) {
         return str.slice(0, num) + "...";
      } else {
         return str;
      }
   }
   // Repeat a String Repeat a String

   static repeatStringNumTimes(str, num) {
      var numTimes = "";
      // if its not a positive number return an empty string
      if (num < 0) return "";
      //    loop as many time as user inputs in parameter
      for (var i = 0; i < num; i++) {
         numTimes += str;
      }
      return numTimes;
   }

   //Confirm the Ending

   static confirmEnding(str, target) {
      //use negative target to start from the end then compare to target parameter
      if (str.substr(-target.length) === target) {
         return true;
      }
      return false;
   }

   //Return Largest Numbers in Arrays

   static largestOfFour(arr) {
      // need to set a varible to hold the largest numbers
      var results = [];
      //run a for loop through the main array(outter array)
      for (var ma = 0; ma < arr.length; ma++) {
         //var to hold the largest number & initialise it with the first number.
         // This must be outside an inner loop so it won’t be reassigned until we find a larger number.
         var largestNumber = arr[ma][0];
         //   run a second for loop to go through the arrays inside the main array
         for (var na = 1; na < arr[ma].length; na++) {
            //if condtition to check against the largest number
            //  you can work through multidimensional arrays by arr[1st array][2nd array]
            if (arr[ma][na] > largestNumber) {
               //if it is replace the current
               largestNumber = arr[ma][na];
            }
         }
         //save the largest number in the corresponding position inside of the results array.
         results[ma] = largestNumber;
      }

      return results;
   }

   //Find the Longest Word in a String
   static findLongestWordLength(str) {
      // first I have to turn the string into an array because strings are immutable
      var eachWord = str.split(" ");
      //I have to set a variable to get save the longest word
      var largestWord = 0;
      //run a for loop through the string of words incrementing by one
      for (var i = 0; i < eachWord.length; i++) {
         // run an if statement to check if the length of the current word is bigger then the current one
         if (eachWord[i].length > largestWord) {
            //   if it is load it into the varible to return the number
            largestWord = eachWord[i].length;
         }
      }

      return largestWord;
   }
   //Factorialize a Number
   static factorialize(num) {
      // you have to initalize that 1 and 0 return 1
      for (var value = 1; num > 0; num--) {
         value *= num;
      }
      return value;
   }

   // Reverse a String. In order to reverse a string you have to turn it into am array first

   static reverseString(str) {
      //   spitting the string turns it to an array then reverses it and joins it
      return str.split("").reverse().join("");
   }

   // Convert Celsius to Fahrenheit

   static convertToF(celsius) {
      // The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
      let fahrenheit = (celsius * 9) / 5 + 32;

      return fahrenheit;
   }
   // Remove Whitespace from Start and End
   static removeWhiteSpace(str) {
      let regex = /^\s+|\s+$/g;
      return str.replace(regex, "");
   }

   // Use Capture Groups to Search and Replace
   static captureGroups(str) {
      let Regex = /(\w+)\s(\w+)\s(\w+)/i;
      let moveStr = "$3 $2 $1";
      return str.replace(Regex, moveStr);
   }

   // Check For Mixed Grouping of Characters
   static mixGroups(str) {
      let regex = /(Eleanor|Franklin).*Roosevelt/;
      return regex.test(str);
   }

   // Positive and Negative Lookahead
   static Lookahead(str) {
      // ^ carat applies to the beginning
      // \D matches any character thats not a digit
      //first look ahead is checking to see if its at least 5 charaters long \w equals any number or letter Aa-Zz
      // second look ahead uses * to match between 0- unlimited times
      //  \d matches a digit and specifies how many times
      let regex = /^\D(?=\w{5})(?=\w*\d{2})/;
      return regex.test(str);
   }

   // Match Non-Whitespace Characters
   // This pattern will not match whitespace, carriage return, tab, form feed, and new line characters
   static matchNonSpace(str) {
      let nonWhiteSpaceRegex = /\S/gi;
      return str.match(nonWhiteSpaceRegex).length;
   }

   // Match All Non-Numbers
   static matchNonNums(str) {
      let nonNumRegex = /\D/gi;
      return str.match(nonNumRegex);
   }

   // Match All Numbers
   static matchNums(nums) {
      let numRegex = /\d/gi;
      return nums.match(numRegex);
   }

   // Match Everything But Letters and Numbers
   static noLettersOrNums(str) {
      let noLetterRegex = /\W/gi;
      return str.match(noLetterRegex);
   }

   // Match All Letters and Numbers
   static matchEverything(str) {
      let matchRegex = /\w/gi;
      return str.match(matchRegex).length;
   }

   // Match Beginning String Patterns
   static matchTheEnd(str) {
      let endRegex = /edward$/i;
      return str.match(endRegex);
   }

   // Match Beginning String Patterns
   static matchTheFront(str) {
      let regex = /^edward/;
      return str.match(regex);
   }
   // Find One or More Criminals in a Hunt
   static findCriminals(crime) {
      let crimeRegex = /C+/gi;
      return crime.match(crimeRegex);
   }

   //Match Characters that Occur One or More Times
   static multipleMatches(str) {
      let matchRegex = /s+/gi;
      return str.match(matchRegex);
   }

   //Match Single Characters Not Specified
   static notSpecified(str) {
      let charRegex = /[^aeiou]/gi;
      return str.match(charRegex);
   }

   //Match Single Character with Multiple Possibilities
   static multiPoss(str) {
      let charRegex = /[aeiou]/gi;
      return str.match(charRegex);
   }

   // Match literal Strings
   static matchStrings(str, value) {
      // let testStr = str;
      let regex = new RegExp(value);
      return regex.test(str);
   }
}
