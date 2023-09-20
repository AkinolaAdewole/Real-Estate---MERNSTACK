import { useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";

import { Profile } from "components";


const AgentProfile = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: id as string,
    });

    
    

    if (isLoading) return <div>Loading...</div>;

    if (isError || !data) {
        // Handle the error here, such as displaying a generic error message
        return <div>Error: An error occurred.</div>;
    }

    const myProfile = data?.data ?? {};
    // console.log(data);

    const { name = "N/A", email = "N/A", avatar = "", allProperties = [] } = myProfile;

    return (
        <Profile
            type="Agent"
            name={name}
            email={email}
            avatar={avatar}
            properties={allProperties}
        />
    );
};



// const AgentProfile = () => {
//     const { id } = useParams();

//     const { data, isLoading, isError } = useOne({
//         resource: "users",
//         id: id as string,
//     });

//     console.log(data);

//     const myProfile = data?.data ?? [];

//     if (isLoading) return <div>loading...</div>;
//     if (isError) return <div>error...</div>;

//     return (
//         <Profile
//             type="Agent"
//             name={myProfile.name}
//             email={myProfile.email}
//             avatar={myProfile.avatar}
//             properties={myProfile.allProperties}
//         />
//     );
// };

export default AgentProfile;
