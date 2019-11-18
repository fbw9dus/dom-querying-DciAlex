////** all the variable */
///** body */

var body = document.querySelector("body");

///** H1 **/

var h1Menu = document.querySelector(".title");

/////* Main */

var main = document.querySelector(".main");

////* all ul classe */

var foodCatall = document.querySelectorAll(".food-category");
// var foodCat = document.querySelector(".main > food-category");

///* all Label class */

var labelAll = document.querySelectorAll(".category");

//* all foods items */

var foodItemsAll = document.querySelectorAll(".food-item");

///** allergy-warning */

var allergiesAlert = document.querySelector(".allergy-warning");

///** warning h3 text*/

var WarningText = document.querySelector("#warning");

///**allergies */

var alergyList = document.querySelectorAll("section ul li:nth-child(even)");
var allergyes = document.querySelectorAll(".allergies");


////** allergy-info *//

var allergyInfo = document.querySelectorAll(".allergy-info");


////**FOOTER */

var footer = document.querySelector(".footer")

///** food-description */

var footerDesc = document.querySelectorAll(".food-desc")

////** food description h2 */
var h3foodDesc = document.querySelector(".food-desc > h3");

///*** Variable END */

///** Main Cod **/

///*** body */

body.style.fontFamily = "Arial"

///** H1  */

h1Menu.style.display = "flex";
h1Menu.style.justifyContent = "center";

///**main */

main.style.display = "flex"
main.style.flexDirection = "row"
main.style.flexWrap = "wrap"
main.style.justifyContent = "space-around"

///*** Color generator */

for (i = 0; i < labelAll.length; i++){
    labelAll[i].style.color = "red"
    labelAll[i].style.fontStyle = "italic"
}
function colorGenerator (){
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}
colorGenerator()
var foodCatall = document.querySelectorAll(".food-category")
foodCatall.forEach(item =>{
    item.style.backgroundColor = colorGenerator();
    item.style.padding = "2rem"
    item.style.width = "20rem"
})


///** Menu main */


 
main.style.display = "flex";
main.style.justifyContent = "center";



///** All the food categori */

foodCatall.forEach(item =>{
    item.style.backgroundColor = colorGenerator();
    item.style.padding = "1.3em"
    item.style.width = "20rem"
})






///**category names */

// labelAll.forEach(item =>{
//     labelAll.style.borderBottom= " ";
// })


////*** allergiesAlert */
allergiesAlert.style.display = "flex";
allergiesAlert.style.flexDirection = "column";
allergiesAlert.style.alignItems = "center"

//***Warning Text */


WarningText.style.fontSize = "2rem";
WarningText.style.textAlign = "Center";
WarningText.style.fontFamily = "Sans";

/** Alergys */

allergyes.forEach(item =>{
    item.style.listStyle = "none";
    item.style.width = "18rem";
})
alergyList.forEach(item =>{
   item.style.backgroundColor = "blue";
   item.style.justifyItems = "center";
})


///**Footer */


footer.style.display = "flex"
footer.style.flexDirection = "row"
footer.style.flexWrap = "wrap"
footer.style.justifyContent = "space-around"



footerDesc.forEach(item =>{
    item.style.border = "2px solid yellow"
    item.style.borderRadius = "50%"
    item.style.padding = "3.6rem"
})









