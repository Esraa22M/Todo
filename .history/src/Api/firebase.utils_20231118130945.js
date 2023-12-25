import {
  collection,
  writeBatch,
  doc,
  query,
  getDocs,
} from "firebase/firestore";
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
export const getTodosAndDocuments = async () => {
  const collectionRef = collection(db, "Todos");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const Todos = querySnapshot.docs;
  const TodosList = [];
};
