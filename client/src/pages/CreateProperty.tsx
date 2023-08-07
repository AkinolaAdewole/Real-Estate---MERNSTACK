import React,{useState} from 'react'
import { useGetIdentity } from '@refinedev/core'
import {useForm } from '@refinedev/react-hook-form';
import { FieldValue } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Form from 'components/common/Form';

const CreateProperty = () => {
  const navigate = useNavigate();

  const {data:user}= useGetIdentity();
  const[propertyImage, setPropertyImage]=useState({
                  name:'',
                     url:'' });

  const { refineCore:{onFinish, formLoading}, 
           register, handleSubmit}   = useForm();


          // The handleImageChange function is defined with a parameter file of type File.
  const handleImageChange=(file:File)=>{
    // Inside the function, a constant named reader is declared as a 
    // function that takes a readFile parameter of type File and returns a Promise<string>.
      const reader = (readFile: File) =>
      new Promise<string>((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.onload = () => resolve(fileReader.result as string);
          fileReader.readAsDataURL(readFile);
      });

        reader(file).then((result: string) =>
            setPropertyImage({ name: file?.name, url: result }),
        );
  };

  // The reader function uses the FileReader API to read the content of the readFile and convert it to a Base64-encoded data URL. 
  // It sets up an onload event handler to handle the successful reading of the file.

  // Within the reader function, a Promise is returned that will resolve with the Base64-encoded data URL 
  // when the file is successfully read.

  const onFinishHandler=()=>{};

  return (
      <Form
      type="Create a property"
      register={register}
      onFinish={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      propertyImage={propertyImage}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      />
  )
}

export default CreateProperty