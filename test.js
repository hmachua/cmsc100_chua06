import needle from 'needle';

needle.post('http://localhost:3000/save-student', { stdnum: "2023-00001", fname: "Mary Jane", lname: "Watson", age: 20 }, { json: true }, (err, res) => {
    console.log("Mary Jane Watson:", res.body);
});

needle.post('http://localhost:3000/save-student', { stdnum: "2023-00002", fname: "Peter", lname: "Parker", age: 21 }, { json: true }, (err, res) => {
    console.log("Peter Parker:", res.body);
});

needle.post('http://localhost:3000/save-student', { stdnum: "2023-00003", fname: "Harry", lname: "Osborn", age: 22 }, { json: true }, (err, res) => {
    console.log("Harry Osborn:", res.body);
});

needle.post('http://localhost:3000/save-student', { stdnum: "2023-00004", fname: "Gwen", lname: "Stacy", age: 20 }, { json: true }, (err, res) => {
    console.log("Gwen Stacy:", res.body);
});

needle.post('http://localhost:3000/save-student', { stdnum: "2023-00005", fname: "Miles", lname: "Morales", age: 19 }, { json: true }, (err, res) => {
    console.log("Miles Morales:", res.body);
});

needle.post('http://localhost:3000/update', { fname: "Mary Jane" }, { json: true }, (err, res) => {
    console.log("Update Result:", res.body);
});

needle.post('http://localhost:3000/remove-user', { stdnum: "2023-00002" }, { json: true }, (err, res) => {
    console.log("Remove User Result:", res.body);
});

needle.post('http://localhost:3000/remove-all-user', {}, { json: true }, (err, res) => {
    console.log("Remove All Users Result:", res.body);
});

needle.get('http://localhost:3000/user?stdnum=2023-00001', (err, res) => {
    console.log("Search User Result:", res.body);
});

needle.get('http://localhost:3000/members', (err, res) => {
    console.log("All Members:", res.body);
});