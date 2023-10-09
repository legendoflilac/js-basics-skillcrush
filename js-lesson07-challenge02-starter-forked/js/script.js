// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic"; //Default value for subscription drop down
var subDuration = 1; //Default value for duration drop down

subTypeElement.addEventListener("change", function(e){
    subType = e.target.value;
    updateSubscriptionDiv();
    //console.log(subType);
})

subDurationElement.addEventListener("change", function(e){
    subDuration = Number(e.target.value);
    updateSubscriptionDiv();
    //console.log(subDuration);
})

var updateSubscriptionDiv = function() {
    var monthlyCost = 5; //default cost for basic
    console.log(subType);
    if (subType === "standard") {
        monthlyCost = 7;
    }
    else if (subType === "premium") {
        monthlyCost = 10;
    }

    var total = subDuration * monthlyCost
    result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};