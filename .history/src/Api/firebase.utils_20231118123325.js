import { collection, writeBatch, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
export const addCollectionsAndDocuments = async (
  collectionKey,
  documentsToAdd,
  field = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  documentsToAdd.forEach((element) => {
    const docsRef = doc(collectionRef, element[field].toLowerCase());
    batch.set(docsRef, element);
  });
  await batch.commit();
  console.log("done");
};
