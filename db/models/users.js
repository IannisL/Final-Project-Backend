import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 8;

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 1,
        maxLenght: 12,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 14,
        required: true,
    },
    age: {
        type: Number,
        min: 18,
        max: 200,
    },
    admin: {
        type: Boolean,
        defult: false
    },
    title: {
        type: String,
        enum: ["PokeRanger", "Lass", "Youngster", "PKMN Trainer", "Researcher","Biker","Artist","PokeBreeder","Couple","Explorer","Swimmer","Leader"]
    },
    team: { type: String, required: true, min: 6 },
    boxed: { type: Boolean, default: true},
    createdAt: { type: Date, default: Date.now },
    location: { type: String, enum: ["battle area", "Route 5", "Unknown", "Area1", "Vern Forest"]},
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, retDoc) {
            delete retDoc.password; // removes password from the json doc
            return retDoc;

        }

    }
});
usersSchema.index({ email: 1 });
usersSchema.index({ username: 1 });


//Authentication
usersSchema.pre('save', async function (next) {
    // if the password has not changed continue
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});


export default mongoose.model('User', usersSchema);