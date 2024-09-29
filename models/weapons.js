import mongoose from "mongoose"

const WeaponSchema = new mongoose.Schema({
    "id": Number,
    "type": String,
    "rarity": Number,
    "name": String,
    "attack": {"display": Number, "raw": Number},
    "durability": {"red": Number, "orange": Number, 
        "yellow": Number, "green": Number, "blue": Number,
        "white": Number, "purple": Number},
    "affinity": Number,
    "defense": Number,
    "damageType": String,
    "elements": {"element": String, "damage": Number, "hidden": Boolean},
    "crafting": {"craftable": Boolean, "previous": Number, "branches": [Number]},
    "assets": {"icon": String, "image": String}

});


const Weapon = mongoose.model("Weapon", WeaponSchema);

export default Weapon;