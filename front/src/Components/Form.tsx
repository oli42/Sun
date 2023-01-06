import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';


interface UseFormInputs {
    lat: string
    lng: string
}

export default function Form() {

  const { register, handleSubmit, reset, formState, formState: { isSubmitSuccessful } } = useForm<UseFormInputs>();
  const [sun, setSun] = useState({});

  async function getData(data: UseFormInputs) {
      let url = `https://api.sunrisesunset.io/json?lat=${data.lat}/&lng=${data.lng}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const result = await response.json();
      setSun(result);
      console.log(result);

  }


  const onSubmit = (data: UseFormInputs) => {
      getData(data);
    };

  useEffect(() => {
    if (formState.isSubmitSuccessful){
        reset({lat: "",
        lng: ""});
    }
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>lattitude</label>
      <input {...register("lat", { required: true })} />

      <label>longitude</label>
      <input {...register("lng", { required: true })} />

      <input type="submit" />
      <input type="reset" />
    </form>
  );
}