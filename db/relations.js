const User = require("./api/models/user.model"); //Nos importamos el modelo de User
const Movie = require("./api/models/movie.model");
const Actor = require("../api/models/actor.models")

const addRelationsToModels = () => {
    try {
        Actor.belongsToMany(Movie, {
            through: "actor_movies",
            timestamps: false
        })
        Movie.belongsToMany(Actor, {
               through: "actor_movies",
            timestamps: false
        })
        
        console.log("Relations added to all models")
    } catch(error) {
        console.log(error)
    }
};

module.exports = addRelationsToModels;
