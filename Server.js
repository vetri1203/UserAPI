import express from "express";

const app = express();
app.use(express.json());

const port = 7000;




const user = {
    user1: {
      name: "Alice",
      password: "password1",
      profession: "teacher",
      id: 1,
    },
    user2: {
      name: "Bob",
      password: "password2",
      profession: "librarian",
      id: 2,
    },
    user3: {
      name: "Charlie",
      password: "password3",
      profession: "clerk",
      id: 3,
    },
    user4: {
      name: "David",
      password: "password4",
      profession: "engineer",
      id: 4,
    },
    user5: {
      name: "Ella",
      password: "password5",
      profession: "doctor",
      id: 5,
    },
    user6: {
      name: "Frank",
      password: "password6",
      profession: "designer",
      id: 6,
    },
    user7: {
      name: "Grace",
      password: "password7",
      profession: "developer",
      id: 7,
    },
    user8: {
      name: "Hannah",
      password: "password8",
      profession: "artist",
      id: 8,
    },
    user9: {
      name: "Isaac",
      password: "password9",
      profession: "chef",
      id: 9,
    },
    user10: {
      name: "Julia",
      password: "password10",
      profession: "writer",
      id: 10,
    },
    user11: {
      name: "Kevin",
      password: "password11",
      profession: "musician",
      id: 11,
    },
    user12: {
      name: "Lily",
      password: "password12",
      profession: "athlete",
      id: 12,
    },
    user13: {
      name: "Michael",
      password: "password13",
      profession: "scientist",
      id: 13,
    },
    user14: {
      name: "Nora",
      password: "password14",
      profession: "pilot",
      id: 14,
    },
    user15: {
      name: "Oliver",
      password: "password15",
      profession: "journalist",
      id: 15,
    },
    user16: {
      name: "Paige",
      password: "password16",
      profession: "entrepreneur",
      id: 16,
    },
    user17: {
      name: "Quinn",
      password: "password17",
      profession: "lawyer",
      id: 17,
    },
    user18: {
      name: "Ryan",
      password: "password18",
      profession: "architect",
      id: 18,
    },
    user19: {
      name: "Sophia",
      password: "password19",
      profession: "psychologist",
      id: 19,
    },
    user20: {
      name: "Tyler",
      password: "password20",
      profession: "economist",
      id: 20,
    },
    user21: {
      name: "Victoria",
      password: "password21",
      profession: "historian",
      id: 21,
    },
    user22: {
      name: "William",
      password: "password22",
      profession: "geologist",
      id: 22,
    },
    user23: {
      name: "Xander",
      password: "password23",
      profession: "pharmacist",
      id: 23,
    },
    user24: {
      name: "Yara",
      password: "password24",
      profession: "mechanic",
      id: 24,
    },
    user25: {
      name: "Zoe",
      password: "password25",
      profession: "veterinarian",
      id: 25,
    },
    user26: {
      name: "Aaron",
      password: "password26",
      profession: "teacher",
      id: 26,
    },
    user27: {
      name: "Bella",
      password: "password27",
      profession: "librarian",
      id: 27,
    },
    user28: {
      name: "Cameron",
      password: "password28",
      profession: "clerk",
      id: 28,
    },
    user29: {
      name: "Daniel",
      password: "password29",
      profession: "engineer",
      id: 29,
    },
    user30: {
      name: "Emily",
      password: "password30",
      profession: "doctor",
      id: 30,
    },
    user31: {
      name: "Fiona",
      password: "password31",
      profession: "designer",
      id: 31,
    },
    user32: {
      name: "George",
      password: "password32",
      profession: "developer",
      id: 32,
    },
    user33: {
      name: "Haley",
      password: "password33",
      profession: "artist",
      id: 33,
    },
    user34: {
      name: "Ian",
      password: "password34",
      profession: "chef",
      id: 34,
    },
    user35: {
      name: "Jessica",
      password: "password35",
      profession: "writer",
      id: 35,
    },
    user36: {
      name: "Kai",
      password: "password36",
      profession: "musician",
      id: 36,
    },
    user37: {
      name: "Liam",
      password: "password37",
      profession: "athlete",
      id: 37,
    },
    user38: {
      name: "Mia",
      password: "password38",
      profession: "scientist",
      id: 38,
    },
    user39: {
      name: "Noah",
      password: "password39",
      profession: "pilot",
      id: 39,
    },
    user40: {
      name: "Olivia",
      password: "password40",
      profession: "journalist",
      id: 40,
    },
    user41: {
      name: "Parker",
      password: "password41",
      profession: "entrepreneur",
      id: 41,
    },
    user42: {
      name: "Quincy",
      password: "password42",
      profession: "lawyer",
      id: 42,
    },
    user43: {
      name: "Riley",
      password: "password43",
      profession: "architect",
      id: 43,
    },
    user44: {
      name: "Samantha",
      password: "password44",
      profession: "psychologist",
      id: 44,
    },
    user45: {
      name: "Theo",
      password: "password45",
      profession: "economist",
      id: 45,
    },
    user46: {
      name: "Uma",
      password: "password46",
      profession: "historian",
      id: 46,
    },
    user47: {
      name: "Victor",
      password: "password47",
      profession: "teacher",
      id: 47,
    },
    user48: {
      name: "Wendy",
      password: "password48",
      profession: "teacher",
      id: 48,
    },
    user49: {
      name: "Xavier",
      password: "password49",
      profession: "mechanic",
      id: 49,
    },
    user50: {
      name: "Yasmine",
      password: "password50",
      profession: "veterinarian",
      id: 50,
    },
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