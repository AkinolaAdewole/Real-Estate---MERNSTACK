import { useState } from "react";
import { useGetIdentity } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

import { FieldValues } from "react-hook-form";

import Form from "components/common/Form";

const CreateProperty = () => {
    // const { data: user, error } = useGetIdentity({
    //     v3LegacyAuthProviderCompatible: true,
    // });
    const { data: user, error } = useGetIdentity<{
      email: string;
      name: string;
  }>();

    const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
    } = useForm();

    const handleImageChange = (file: File) => {
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

    const onFinishHandler = async (data: FieldValues) => {
        if (!propertyImage.name) return alert("Please select an image");

        // Check if user and user.email are defined before accessing them
        if (!user || !user.email) {
            console.error("User data is missing");
            return; // Handle this case appropriately
        }

        await onFinish({
            ...data,
            photo: propertyImage.url,
            email: user.email,
        });
    };

    // Handle the error state from useGetIdentity if needed
    if (error) {
        console.error("Error fetching user data:", error);
        // Handle the error state appropriately
    }

    return (
        <Form
            type="Create"
            register={register}
            onFinish={onFinish}
            formLoading={formLoading}
            handleSubmit={handleSubmit}
            handleImageChange={handleImageChange}
            onFinishHandler={onFinishHandler}
            propertyImage={propertyImage}
        />
    );
};

export default CreateProperty;
