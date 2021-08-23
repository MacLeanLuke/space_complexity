function boooo(n){
    for(let i = 0; i < n.length; i++){ // this function adds one item in memory 
        console.log('boooo!');
    }
}

boooo([1,2,3,4,5]) // The space complexity is therefore, O(1)

function arrayOfHiNTimes(n){
    let hiArray = []; 
    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi'; // given that the memory that this function uses is highly depended on the input given as 'n' we don't really care about the variable 'i' that we initiate on the line above. As the input n gets larger, it is the only thing that matters.
    }
    return hiArray;
}

console.log(arrayOfHiNTimes(6)); // therefore, the space complexity of this function is O(n)
