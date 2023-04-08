import { firestore } from "./firebase";
import { getDocs, collection,orderBy, query, limit } from "firebase/firestore";

export const findAllScores = async () => {

    const collection_ref = collection(firestore,"highscore");
    const q = query(collection_ref, orderBy("score", "desc"), limit(20));

    const docs_ref = await getDocs(q);

    const res = [];

    docs_ref.forEach(score => {
        res.push({
            id: score.id,
            ...score.data()
        })
    })
    console.log(res)
    return res;
}