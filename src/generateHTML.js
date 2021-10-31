// const employeeData = require("../index")
// //[{},{}]
// const employCardDivs = ''

// const creatingCards = ()=>{
//   for(let employee in employeeData){
//     employeeData += ` <div>
//                         ${employee.name}
//                       </div>
//                       `
//   }
// }
// const testFunc = () =>{

// `
// <body>










// </body>


// `

// }

//     //This si the magic 
//     const readmeFile = testFunc();// The trick
//     fs.writeFile('index.html', readmeFile, err => {
//       if (err) throw (err);
//       console.log('README successfully generated!');
//     });

// // function generateHTML(data) {
// //   return `
// //   ${data.name}
// //   `
// // }

// // console.log(generateHTML());

// employeeArray[0]


//call index.js function in here, to return the employeeArray populated with all the employee data
//


function generateHTML(data) {
  return `
  
  <!DOCTYPE html>
  <html lang ="en">
  <head>
    <title> Team Profile </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style></style>
  </head>
  <body> 
  <section>
    <h1> ${data.name} </h1>
    <ul>
      <li> ${data.id}</li>
      <li></li>
      <li></li>
      <li></li>
    </ul>


  </section>
  
  
  </body>
  
  
  
  
  
  
  `
}



module.exports = generateHTML;