/*The Postal Index Number
(PIN) or PIN Code is a 6
digit code of Post Office
numbering used
by India Post.
Create a regex pattern to
validate PIN code 400088
*/

let str='Street:  9/5, Ashirwad Inds Estate, Ram Mandir Road, Goregaon (west) \
City:   Mumbai \
State/province/area:    Maharashtra \
Phone number  222873227 \
Zip code  400062 \
Country calling code  +91 \
Country  India'


regexStr = / [0-9]{6} /i

let pinStr=str.match(regexStr);

console.log(pinStr);

 