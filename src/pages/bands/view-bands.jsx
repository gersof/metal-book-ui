import * as React from 'react';
import { useEffect,useState } from 'react';
import {app, db,analytics, storage} from '../../firebase-service';
import { collection, doc, setDoc,getDocFromCache, getDocs  } from "firebase/firestore";
import { getDoc } from 'firebase/firestore/lite';
import BandCard from '../../common/components/bands/band-card';
import { Key } from '@mui/icons-material';
import { getDownloadURL, ref } from 'firebase/storage';

export default function ViewBandsPage() {
  const [bandList, setBandList] = useState([]);

  const extractBandData=async(queryResult)=>{
    return new Promise(function(resolve, reject) {
      const totalBand= queryResult?.size??0;
      let itemCounter=0;
      const resultData=[];
      queryResult?.forEach((doc) => {
        itemCounter++;
        // doc.data() is never undefined for query doc snapshots
        const item={id:doc?.id, band:doc?.data()};
        console.log(item);
        resultData.push(item)
        if(totalBand==itemCounter) resolve(resultData);
      });
    });
  };
  const getImageUrl = async (imageAdd) => {
    
    const gsReference = ref(storage, imageAdd);
    const imgUrl = await getDownloadURL(gsReference);
    console.log(imgUrl);
    return imgUrl;
  };

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const docRef = collection(db,'Artists');
        const querySnapshot = await getDocs(docRef);
        const bands=await extractBandData(querySnapshot);
      await  bands?.forEach(async (item) => {
          item.band['loginUrl']=await getImageUrl(item?.band?.mainBandImage)
        });
console.log(bands);
        setBandList(bands);
     
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    fetchMyAPI();
  }, [])
  return (
    <>
    <h1>Hola desde el ViewBands</h1>
    {
      bandList?.map((x,i)=>{
        return <div key={i}>
        <BandCard data={{...x}}/>
        <br/>
        </div>
      })
    }
    </>
  );
}
