// find the first and last tweet

const array = ['I like cheese', 'Do you like cheese', 'my friends name is cheese'];

array[0]; // O(1)
array[array.length - 1]; // O(1)

// this evaluates to O(1)

// compare the dates of tweets.

const array1 = [{
    tweet: 'I like cheese', 
    date: 2019}, 
    {tweet: 'Do you like cheese', 
    date: 2020}, 
    {tweet: 'my friends name is cheese', 
    date: 2021}
];

function comareDatesOfTweets(array){
    oldestTweet = array[0] // space complexity evaluates to O(1)
    for(let i = 1; i < array.length; i++){ // O(1)
        if (array[i] < oldestTweet){ // O(n)
            oldestTweet = array[i]
        }
    }
}

//this evaluates to O(n) the instructor says that this will evaluate to O(n^2), but he didn't show his function, so I have no idea how he got to that conclusion.

// TRICK QUESTION: What is the space complexity of the following

"lahtneandsfo ianes".length

// the answer is that it depends on how the language is written. In the case of javascript, the answer is O(1) because length is simply a property of the string object. The string class is written in such a way that all that .function does is look up the property length in the object. It doesn't perform the function real time.