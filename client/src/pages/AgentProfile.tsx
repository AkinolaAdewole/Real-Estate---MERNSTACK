import { useOne } from "@refinedev/core";
import { useGetIdentity } from "@refinedev/core";
import { useParams } from "react-router-dom";

import { Profile } from "components";

const AgentProfile = () => {

    const{ data : user } = useGetIdentity<{
        email: string;
        name: string;
    }>();

    const { id } = useParams();

    const { data, isLoading, isError } = useOne({
        resource: "users",
        // id: id as string,
        id
    });

    // console.log(id);
    // console.log(resource);
    
    

    // Check if data is defined before accessing data.data
    const myProfile = data?.data ?? {};
    // console.log(myProfile);
    

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="Agent"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            properties={myProfile.allProperties}
        />
    );
};

export default AgentProfile;
