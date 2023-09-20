
import { useGetIdentity, useOne } from "@refinedev/core";

import { Profile } from "components";

const MyProfile = () => {
    // const { data: user } = useGetIdentity({
    //     v3LegacyAuthProviderCompatible: true,
    // });

    const { data: user } = useGetIdentity<{
      email: string;
      name: string;
      id: any;
      userid:any;
  }>();
  

    const { data, isLoading, isError } = useOne({
        resource: "user",
        id: user?.userid,
    });

    //  console.log(data);
     console.log("User:", user);
    
    const myProfile = data?.data ?? {};
    // console.log("User:", user);
    // console.log("Data:", data);
    // console.log("MyProfile:", myProfile);
    

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="My"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            properties={myProfile.allProperties}
        />
    );
};

export default MyProfile;
