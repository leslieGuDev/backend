import mongoose from "mongoose";

const destinationSchema = mongoose.Schema(
  {
    id: String,
    ident: String,
    type: String,
    name: String,
    latitude_deg: String,
    longitude_deg: String,
    elevation_ft: String,
    continent: String,
    iso_country: String,
    iso_region: String,
    municipality: String,
    scheduled_service: String,
    gps_code: String,
    iata_code: String,
    local_code: String,
    home_link: String,
    wikipedia_link: String,
    keywords: String,
  },
  {
    timestamps: true,
  }
);

export const Destination = mongoose.model("Destination", destinationSchema);
