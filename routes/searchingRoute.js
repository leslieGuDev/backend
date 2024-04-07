import express from "express";
import { Search } from "../models/searchingModal.js";

const router = express.Router();

// Route for save a search, I know it might be useless, but just wanna practice about posting/ creating content in database

router.post("/", async (request, response) => {
  try {
    const newSearch = await Search.create(request.body);

    return response.status(201).send(newSearch);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get("/", async (request, response) => {
  try {
    const searches = await Search.find({});

    return response.status(200).json({
      count: searches.length,
      data: searches,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
