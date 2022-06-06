// Bài 3: three sum
var threeSum = function(array) {
    array.sort((a,b) => a - b);
   const triplets = [];

   for(let i=0; i < array.length - 2; i++){
       if(array[i] != array[i-1]){ // xét không bị trùng số
           let left = i + 1;
         let right = array.length - 1;

           while (left < right){
               const currentSum = array[i] + array[left] + array[right];
               if (currentSum === 0){
                   triplets.push([array[i], array[left], array[right]]);
                   while(array[left] == array[left + 1]) left ++
                   while(array[right] == array[right - 1]) right -- // đảm bảo không bị trùng số
                   left ++;
                   right --;
               } else if(currentSum < 0) {
                   left ++
               } else if(currentSum > 0){
                   right --
               }
           }
       }
   }
   return triplets
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// -1, 0, 1, 2, -1, -4