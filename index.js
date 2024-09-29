import express from "express"
import mongoose from "mongoose"
import Weapon from "./models/weapons.js"

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    return res.json({message: "Hello Monster Hunter World"});
});

app.post("/test", async (req, res) => {
    fetch('https://mhw-db.com/weapons/94')
    .then(response => response.json())
    .then(async weapon => {
        // your code here
        //console.log(weapon);
        // const newWeapon = new Weapon({"id": 10,    
        // "type": "String",
        // "rarity": 10,
        // "name": "String",
        // "attack": {"display": 10, "raw": 10},
        // "durability": {"red": 1, "orange": 1, 
        //     "yellow": 1, "green": 1, "blue": 1,
        //     "white": 1, "purple": 1},
        // "affinity": 1,
        // "defense": 1,
        // "damageType": "String",
        // "elements": {"elemType": "String", "damage": 1, "hidden": true},
        // "crafting": {"craftable": true, "previous": 1, "branches": [1, 2]},
        // "assets": {"icon": "String", "image": "String"}})
        const newWeapon = new Weapon(weapon)
        // 
        newWeapon["elements"] = weapon["elements"][0]
        newWeapon["elements"]["element"] = weapon["elements"][0]["type"]
        console.log(newWeapon)

        //await Weapon.create(newWeapon)
        console.log("weapon saved")
        return res.status(200).json({"status": "weapon saved"})
        });
        

})


const start = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017");
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch(err) {
        console.log(err);
    }
};

start();

