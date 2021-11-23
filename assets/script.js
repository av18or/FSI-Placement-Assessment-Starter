

// First, tell us your name
let yourName = "Clayton Gorham" // HINT: Replace this with your own name!


// identifies the total vote div so we can tie in all votes as a total in our qty-votes table/column:
let totalVotes = document.querySelector("#qty-total");


// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle




// ginger bread

let gbVotes = localStorage.getItem('gbVotes');
if (gbVotes === null) {
    gbVotes = 0;

} else {
    gbVotes = parseInt(gbVotes)
}

// choc chip 

let ccVotes = localStorage.getItem('ccVotes');
if (ccVotes === null) {
    gbVotes = 0;

} else {
    ccVotes = parseInt(ccVotes)
}


// sugar sprinkle

let ssVotes = localStorage.getItem('ssVotes');
if (ssVotes === null) {
    ssVotes = 0;

} else {
    ssVotes = parseInt(ssVotes)
}



/////

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`




////


// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {

gbVotes = gbVotes + 1;
document.querySelector("#qty-gb").textContent = gbVotes;

// adds to total vote column by adding all three together
totalVotes.textContent = gbVotes + ccVotes + ssVotes;

   
})
// ginger bread event listener (-)
document.getElementById('minus-gb').addEventListener('click', function() {
    gbVotes = gbVotes - 1;
    document.querySelector("#qty-gb").textContent = gbVotes;

    // adds to total vote column by adding all three together
    totalVotes.textContent = gbVotes + ccVotes + ssVotes;


})


////





// chocolate chip event listeners (+) 
document.getElementById('add-cc').addEventListener('click', function() {
    ccVotes = ccVotes + 1;
    document.querySelector("#qty-cc").textContent = ccVotes;

    // adds to total vote column by adding all three together
    totalVotes.textContent = gbVotes + ccVotes + ssVotes;
    
})

// chocolate chip event listener (-)
document.getElementById('minus-cc').addEventListener('click', function() {
    ccVotes = ccVotes - 1;
    document.querySelector("#qty-cc").textContent = ccVotes;

    // adds to total vote column by adding all three together
    totalVotes.textContent = gbVotes + ccVotes + ssVotes;
    
})










// sugar cookie event listener (+)
document.getElementById('add-sugar').addEventListener('click', function() {
    ssVotes = ssVotes + 1;
    document.querySelector("#qty-sugar").textContent = ssVotes;

   // adds to total vote column by adding all three together
    totalVotes.textContent = gbVotes + ccVotes + ssVotes; 
})

// sugar cookie event listener (-)
document.getElementById('minus-sugar').addEventListener('click', function() {
    ssVotes = ssVotes - 1;
    document.querySelector("#qty-sugar").textContent = ssVotes;

    // adds to total vote column by adding all three together
    totalVotes.textContent = gbVotes + ccVotes + ssVotes;
    
})