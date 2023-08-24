import { useQuery } from "@tanstack/react-query";
import  Axios  from "axios";

export const Contacts = () =>{

  const {data,isLoading,isError} = useQuery(["cat"],()=>{

   return Axios.get("https://catfact.ninja/fact").then((res)=> res.data);

  });

  if(isError){

    return(
      <h1>Error...</h1>
    )
  };

  if(isLoading){
    return(
      <h1>Loading....</h1>
    )
  };
    return (
        <div className="Contacts">
          <h1>{data?.fact}</h1> 
        </div>
    )
};