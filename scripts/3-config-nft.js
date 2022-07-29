import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xbD1802A0d6a038Cfdf4a950cE294Ce281Ffe4d3c");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Membership NFT",
        description: "This NFT will give you access to PokemonDAO!",
        image: readFileSync("scripts/assets/pokeball.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();