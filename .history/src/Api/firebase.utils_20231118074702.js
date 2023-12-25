import { collection, writeBatch } from "firebase/firestore";
import { db } from "./firebaseConfig";
export const addCollectionsAndDocuments = async (
  collectionKey,
  documentsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
};
