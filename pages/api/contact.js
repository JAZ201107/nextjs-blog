import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    // const uri =
    //   "mongodb+srv://NobleCat:Zyy1211@cluster0.vnydltw.mongodb.net/my-blog?retryWrites=true&w=majority";

    //    mongodb+srv://undefined:undefined@undefined.vnydltw.mongodb.net/undefined?retryWrites=true&w=majority
    const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusternames}.vnydltw.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    let client;
    try {
      client = await MongoClient.connect(uri);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    try {
      const result = await client
        .db()
        .collection("messages")
        .insertOne(newMessage);

      newMessage.id = result.insertedId;
    } catch (e) {
      res.status(500).json({ message: "Storing message failed!" });
      return;
    } finally {
      client.close();
    }

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
};

export default handler;
