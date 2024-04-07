import mongoose from "mongoose";

const searchingSchema = mongoose.Schema(
  {
    travelers: {
      adults: Number,
      kids: Number,
      infants: Number,
    },
    tier: String,
    from: String,
    to: String,
    start: String,
  },
  {
    timestamps: true,
  }
);

export const Search = mongoose.model("Search", searchingSchema);
