const express = require('express');
const model = require('./model');


const server = express();
server.use(express.json());
//server get request
server.get('/', (req, res) => {
    res.send('Hello World!');
});
server.get('/api/students', (req, res) => {
    model.getStudents()
        .then(students => {
            res.json(students);
        }
        )
        .catch(err => {
            res.send(err);
        }
        );      //res.send(students);        
});
server.get('/api/students/:id', (req, res) => {
    const {id} = req.params;
    model.getStudent(id)
        .then(student => {
        if(student==null){
            res.status(404).json({message:"student not found"});

        }else{
            res.json(student);
        }
        }).catch(err => {
            res.status(500).json({message:"error"});
        })                                           
});
//server post request
server.post('/api/students', (req, res) => {
    let body = req.body;
    if(!body.name){
        res.status(400).json({message:"name is required"});     
    }
    model.addStudent(body)
        .then(student => {  
            res.json(student);
        }).catch(err => {
            res.status(500).json({message:"error"});
        })  
});
// server update request
server.put('/api/students/:id', (req, res) => {
    const {id} = req.params;
    let body = req.body;
    if(!body.name){
        res.status(400).json({message:"name is required"});
    }
    model.updateStudent(id,body)
        .then(student => { 
            if(student==null){
                res.status(404).json({message:"student not found"});
            }else{
                res.json(student);
            }
        }).catch(err => {
            res.status(500).json({message:"error"});
        })
});
// server delete request
server.delete('/api/students/:id', (req, res) => {
    const {id} = req.params;
    model.deleteStudent(id)
        .then(student => {
            if(student==null){
                res.status(404).json({message:"student not found"});
            }else{
                res.json(student);
            }
        }).catch(err => {
            res.status(500).json({message:"error"});
        })
});
  



const port =4000;
server.listen(port, () => console.log(`Listening on port ${port}`));