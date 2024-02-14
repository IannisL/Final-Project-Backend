import mongoose from 'mongoose';

const PokemaneSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: String, required: true, min: 6 },
    pokeImage: { type: String , default: true },
    boxed: { type: Boolean, default: true},
    createdAt: { type: Date, default: Date.now },
    location: { type: String, enum: ["battle area", "Route 5", "Unknown", "Area1", "Vern Forest"]},
});

const Pokemane = mongoose.model('pokemane', PokemaneSchema);

export default Pokemane;