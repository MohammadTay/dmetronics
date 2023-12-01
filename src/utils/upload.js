import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const upload = async (file) => {
    try {

        const storageRef = ref(storage, "profileImage-" + `${file.name}`);
        await uploadBytesResumable(storageRef, file)
        const url = await getDownloadURL(storageRef)
        return url
    } catch (error) {
        console.log(err);
    }

}

export default upload