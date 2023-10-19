import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({origin:`https://user-api-syot.onrender.com/api`}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Add other necessary CORS headers here
    next();
  });

const port = 7000;




const user = {

    data :[
        {
            name: "Alice",
            password: "password1",
            profession: "teacher",
            id: 1,
          },
           {
            name: "Bob",
            password: "password2",
            profession: "librarian",
            id: 2,
          },
           {
            name: "Charlie",
            password: "password3",
            profession: "clerk",
            id: 3,
          },
          {
            name: "David",
            password: "password4",
            profession: "engineer",
            id: 4,
          },
          {
            name: "Ella",
            password: "password5",
            profession: "doctor",
            id: 5,
          },
           {
            name: "Frank",
            password: "password6",
            profession: "designer",
            id: 6,
          },
           {
            name: "Grace",
            password: "password7",
            profession: "developer",
            id: 7,
          },
         {
            name: "Hannah",
            password: "password8",
            profession: "artist",
            id: 8,
          },
          {
            name: "Isaac",
            password: "password9",
            profession: "chef",
            id: 9,
          },
           {
            name: "Julia",
            password: "password10",
            profession: "writer",
            id: 10,
          },
           {
            name: "Kevin",
            password: "password11",
            profession: "musician",
            id: 11,
          },
          {
            name: "Lily",
            password: "password12",
            profession: "athlete",
            id: 12,
          },
          {
            name: "Michael",
            password: "password13",
            profession: "scientist",
            id: 13,
          },
          {
            name: "Nora",
            password: "password14",
            profession: "pilot",
            id: 14,
          },
          {
            name: "Oliver",
            password: "password15",
            profession: "journalist",
            id: 15,
          },
          {
            name: "Paige",
            password: "password16",
            profession: "entrepreneur",
            id: 16,
          },
          {
            name: "Quinn",
            password: "password17",
            profession: "lawyer",
            id: 17,
          },
          {
            name: "Ryan",
            password: "password18",
            profession: "architect",
            id: 18,
          },
          {
            name: "Sophia",
            password: "password19",
            profession: "psychologist",
            id: 19,
          },
          {
            name: "Tyler",
            password: "password20",
            profession: "economist",
            id: 20,
          },
           {
            name: "Victoria",
            password: "password21",
            profession: "historian",
            id: 21,
          },
           {
            name: "William",
            password: "password22",
            profession: "geologist",
            id: 22,
          },
           {
            name: "Xander",
            password: "password23",
            profession: "pharmacist",
            id: 23,
          },
           {
            name: "Yara",
            password: "password24",
            profession: "mechanic",
            id: 24,
          },
          {
            name: "Zoe",
            password: "password25",
            profession: "veterinarian",
            id: 25,
          },
           {
            name: "Aaron",
            password: "password26",
            profession: "teacher",
            id: 26,
          },
           {
            name: "Bella",
            password: "password27",
            profession: "librarian",
            id: 27,
          },
          {
            name: "Cameron",
            password: "password28",
            profession: "clerk",
            id: 28,
          },
          {
            name: "Daniel",
            password: "password29",
            profession: "engineer",
            id: 29,
          },
          {
            name: "Emily",
            password: "password30",
            profession: "doctor",
            id: 30,
          },
          {
            name: "Fiona",
            password: "password31",
            profession: "designer",
            id: 31,
          },
          {
            name: "George",
            password: "password32",
            profession: "developer",
            id: 32,
          },
          {
            name: "Haley",
            password: "password33",
            profession: "artist",
            id: 33,
          },
          {
            name: "Ian",
            password: "password34",
            profession: "chef",
            id: 34,
          },
          {
            name: "Jessica",
            password: "password35",
            profession: "writer",
            id: 35,
          },
          {
            name: "Kai",
            password: "password36",
            profession: "musician",
            id: 36,
          },
          {
            name: "Liam",
            password: "password37",
            profession: "athlete",
            id: 37,
          },
          {
            name: "Mia",
            password: "password38",
            profession: "scientist",
            id: 38,
          },
        {
            name: "Noah",
            password: "password39",
            profession: "pilot",
            id: 39,
          },
          {
            name: "Olivia",
            password: "password40",
            profession: "journalist",
            id: 40,
          },
          {
            name: "Parker",
            password: "password41",
            profession: "entrepreneur",
            id: 41,
          },
          {
            name: "Quincy",
            password: "password42",
            profession: "lawyer",
            id: 42,
          },
          {
            name: "Riley",
            password: "password43",
            profession: "architect",
            id: 43,
          },
          {
            name: "Samantha",
            password: "password44",
            profession: "psychologist",
            id: 44,
          },
           {
            name: "Theo",
            password: "password45",
            profession: "economist",
            id: 45,
          },
         {
            name: "Uma",
            password: "password46",
            profession: "historian",
            id: 46,
          },
           {
            name: "Victor",
            password: "password47",
            profession: "teacher",
            id: 47,
          },
          {
            name: "Wendy",
            password: "password48",
            profession: "teacher",
            id: 48,
          },
          {
            name: "Xavier",
            password: "password49",
            profession: "mechanic",
            id: 49,
          },
           {
            name: "Yasmine",
            password: "password50",
            profession: "veterinarian",
            id: 50,
          },
    ],
    
  };

app.get("/api", (req, res) => {
  

  res.json(user);
});



app.get('/api/userid=:id',(req,res)=>{
    const id = req.params.id;

    if (user[`user${id}`]) {
        const userData = user[`user${id}`];
        res.json(userData);
      } else {
        res.json({"error":"No user Found"});
      }

})

app.get('/api/username=:name', (req, res) => {
    const name = req.params.name;
  
    const userWithName = Object.values(user).filter((userData) => userData.name === name);
  
    if (userWithName) {
      res.json(userWithName);
    } else {
        res.json({"error":"No user Found"});
    }
  });


app.get('/api/profession=:pro',(req,res)=>{
    const userProfession = req.params.pro;

    const userWithProfession = Object.values(user).filter((profession)=>profession.profession == userProfession);
        if(userWithProfession)
        {
            res.json(userWithProfession);
        }
        else{
            res.json({"error":"No user Found"});
        }
})
  
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(port);
  }
});
