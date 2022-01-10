module.exports = function toReadable (number) {
  let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = '';

  if (number === 0) {
    result = 'zero'
  }
    if(number >= 100){
        result += arr1[Math.floor(number / 100)] + ' hundred ';
        number %= 100;
      }
      if (number < 20 && number > 9) {
        result += arr2[Math.floor(number - 10)];
      }
        else {
           if(number < 10 && number > 0){
              result += arr1[number];
          }
              else {
                  if(number !== 0) {
                     result += arr3[Math.floor(number / 10) - 1];
                         if(number % 10 !== 0){
                           result += ' ' + arr1[(number % 10)];
            }
          }
        }
      }
      return  result.trim();
 
  }