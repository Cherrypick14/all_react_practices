import { useQuery } from "@tanstack/react-query";
import  Axios  from "axios";

export const Contacts = () =>{

  const {data} = useQuery(["cat"],()=>{

   return Axios.get("https://catfact.ninja/fact").then((res)=> res.data);

  });
    return (
        <div className="Contacts">
          <h1>{data?.fact}</h1> 
        </div>
    )
};