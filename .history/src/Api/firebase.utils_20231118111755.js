import { collection, writeBatch, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
export const addCollectionsAndDocuments = async (
  collectionKey,
  documentsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  documentsToAdd.forEach((element) => {
    const docsRef = doc(collectionRef, element.title.toLowerCase());
    batch.set(docsRef, element);
  });
  await batch.commit();
};
