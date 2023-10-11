var hobbies = [
    "painting",
    "drawing",
    "kayaking",
    "hiking",
    "swimming",
    "origami"
  ];
  console.log(hobbies.length);
  hobbies.push("juggling");
  console.log(hobbies[2]);
  hobbies.pop();
  console.log(hobbies.splice(2, 0, "reading", "singing"));
  hobbies.shift();
  hobbies.unshift("dancing");
  console.log(hobbies);
  
  var goals = [
    "drinking more water",
    "eating healthy",
    "dancing like there's no tomorrow"
  ];
  var allTheThings = [...hobbies, ...goals];
  console.log(allTheThings);
  console.log(allTheThings.indexOf("swimming"));
  allTheThings.splice(6, 1);
  console.log(allTheThings);
  
  var plans = allTheThings.map(function (item) {
    return `I can't wait to start ${item}`;
  });
  
  console.log(plans);
  