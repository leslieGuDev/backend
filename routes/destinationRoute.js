import express from "express";
import { Destination } from "../models/desModal.js";

const router = express.Router();

router.post("/", async (request, response) => {
  try {
    const newDestinations = await Destination.create(request.body);

    return response.status(201).send(newDestinations);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:destination", async (request, response) => {
  try {
    const { destination } = request.params;

    const destinations = await Destination.find({
      name: eval("/" + destination + "/i"),
    });

    return response.status(200).json(destinations.slice(0, 6));
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const destinations = await Destination.find({});

    return response.status(201).json({
      message: "destination got successfully",
      destinations: destinations,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.delete("/", async (request, response) => {
  try {
    const result = await Destination.deleteMany({});

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
export default router;
