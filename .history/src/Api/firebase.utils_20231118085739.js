import { collection, writeBatchm doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
export const addCollectionsAndDocuments = async (
  collectionKey,
  documentsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db)
  documentsToAdd.forEach(element => {
    const docsRef = doc
  });
};
