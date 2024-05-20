

import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    await connect('mongodb+srv://Rahul_kanyal:<password>@merndb22.lzi1lep.mongodb.net/');
    console.log("---***Database Connected Successfully***---")
  } catch (error) {
    console.log(error);
  }
}

export default connectToMongo;