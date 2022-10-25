import {initializeApp } from "firebase/app";
import {
        GoogleAuthProvider,
        getAuth,
        signInWithPopup,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        sendPasswordResetEmail,
        signOut,
} from "firebase/auth";
import {reauthenticateWithCredential, updatePassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  updateDoc
} from "firebase/firestore";
import { data } from "autoprefixer";
const firebaseConfig = {
    apiKey: "AIzaSyADIeFkZCwAUDdChxmnAx-O_3G_0l_UPLY",
    authDomain: "foodify-eaa30.firebaseapp.com",
    projectId: "foodify-eaa30",
    storageBucket: "foodify-eaa30.appspot.com",
    messagingSenderId: "1020648063167",
    appId: "1:1020648063167:web:6f95e8028ab05df520860a",
    measurementId: "G-8SLHQ0KHJG"
  };

const app = initializeApp(firebaseConfig);

//Yen add 
// var database = app.database();

//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password, phone) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      phone,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};

//
const reauthenticate = (currentPassword) => {
  //const auth = getAuth(app);
  var user = auth.currentUser;
  var cred = auth.EmailAuthProvider.credential(
      user.email, currentPassword);
  return user.reauthenticateWithCredential(cred);
};

const changePassword = (currentPassword, newPassword) => {
  reauthenticate(currentPassword).then(() => {
    var user = auth.currentUser;
    updatePassword(user, newPassword).then(() => {
      console.log("Password updated!");
    }).catch((error) => { console.log(error); });
  }).catch((error) => { console.log(error); });
};
//
const updateProfileFirebase = async (newEmail, newName, newPhone) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    // const profileRef = collection(db, "users");
    //
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    //const doc = await getDocs(q);
    alert("Debug3");
    // const data = doc.docs[0].data();
    await updateDoc(q, {
      name: newPhone,
      authProvider: "local",
      email: newEmail,
      phone: newName,
    });
    alert("Data Updated");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
  //
};

const updateData = async (newName,newEmail,newPhone) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const q = query(collection(db, "users"), where("uid", "==", user?.uid));
  const doc = await getDocs(q);
  updateDoc(doc, {
    name: newName,
    email: newEmail,
    phone: newPhone,
  })
  .then(() => {
    alert("Data Updated")
  })
  .catch((err) => {
    alert(err)
  })
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  changePassword,
  updateProfileFirebase
};

export default db;