import React,{useState} from 'react'
import { useGetIdentity } from '@refinedev/core'
import { FieldValue, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Form from 'components/common/Form';

const CreateProperty = () => {
  const navigate = useNavigate();
  const {data:user}= useGetIdentity();
  const[propertyImage, setPropertyImage]=useState({
                  name:'',
                     url:'' });

  const {refineCore:{onFinish, formLoading}, register, handleSubmit}=useForm();

  const handleImageChange=()=>{};
  const onFinishHandler=()=>{};
  return (
      <Form
      type="create"
      register={register}
      onFinsh={onFinish}
      formLoading={formLoading}
      handleSubmit={handleSubmit}
      propertyImage={propertyImage}
      handleImageChange={handleImageChange}
      onFinishHandler={onFinishHandler}
      />
  )
}

export default CreateProperty