import db from '../config/firebase.js';

export async function getAll() {
  const snapshot = await db.collection('products').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getById(id) {
  const docRef = db.collection('products').doc(id);
  const docSnap = await docRef.get();
  return docSnap.exists ? { id: docSnap.id, ...docSnap.data() } : null;
}

export async function create(data) {
  const docRef = await db.collection('products').add(data);
  return { id: docRef.id, ...data };
}

export async function remove(id) {
  await db.collection('products').doc(id).delete();
}

