// import React from 'react';
// import App from "../App";
// // export default {
// //     getUsers: function() {
// //         return axios.get("https://randomuser.me/api/?results=200&nat=us");
// //     }
// // };

// componentDidMount() {
//     fetch("https://randomuser.me/api/?results=200&nat=us")
//     .then(results => { return results.json()})
//     .then(data => {let pictures = data.results.map((person) =>{
//         return (
//             <div>
//                 <img src={person.picture.large} />
//                 <p>{person.email}</p>
//             </div>
//         )
//     })
// this.setState ({ pictures: pictures}); 
// console.log(this.StaticRange.pictures)
// })
// }

// render () {
//     return (
//         <div className ="App">
//             <header className ="App-header">
//                 <img src={logo} className="App-logo">
//                     <h1>Employee Directory</h1>
//                     <h2>Contact Information</h2>
//                 </img>
//             </header>

//             {this.state.pictures}
//         </div>
//     )
// }
// export default App;