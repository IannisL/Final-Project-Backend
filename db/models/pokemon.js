// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

// const SALT_ROUNDS = 8;

// const PokemonSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minLength: 3,
//         maxLenght: 18,
//     },
//     type: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     gender: {
//         type: String,
//         minLength: 1,
//         maxLength: 8,
//         required: true,
//     },
//     quanity: {
//         type: Number,
//         min: 1,
//         max: 20000,
//     },
//     cry: {
//         type: Boolean,
//         defult: false
//     },
//     location: {
//         type: String,
//         enum: ["battle area", "Route 5", "Unknown", "Area1", "Vern Forest"]
//     },
// }, {
//     timestamps: true,
//     toJSON: {
//         transform: function (doc, retDoc) {
//             delete retDoc.password; // removes password from the json doc
//             return retDoc;

//         }

//     }
// });
// PokemonSchema.index({ name: 1 });
// PokemonSchema.index({ quanity: 1 });



// PokemonSchemaSchema.pre('save', async function (next) {
//     // if the password has not changed continue
//     if (!this.isModified("password")) return next();

//     this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
//     return next();
// });


// export default mongoose.model('pokemon', PokemonSchema);