import { useGetIdentity, useOne } from "@refinedev/core";
import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity<{
    email: string;
    name: string;
    id: any;
    userid: any;
  }>();

  const { data, isLoading, isError } = useOne({
    resource: "user",
    id: user?.userid,
  });

  // console.log(data?.data);

  const myProfile = data?.data ?? {};

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  // Check if the fetched data matches the user's name
  if (myProfile.name === user?.name) {
    return (
      <Profile
        type="My"
        name={myProfile.name}
        email={myProfile.email}
        avatar={myProfile.avatar}
        properties={myProfile.allProperties}
      />
    );
  } else {
    // Handle the case where the fetched data doesn't match the user's name
    return <div>Data does not match user's name</div>;
  }
};

export default MyProfile;





// import { useGetIdentity, useOne } from "@refinedev/core";

// import { Profile } from "components";

// const MyProfile = () => {
//     // const { data: user } = useGetIdentity({
//     //     v3LegacyAuthProviderCompatible: true,
//     // });

//     const { data: user } = useGetIdentity<{
//       email: string;
//       name: string;
//       id: any;
//       userid:any;
//   }>();
  

//     const { data, isLoading, isError } = useOne({
//         resource: "user",
//         id: user?.userid,
//     });

//      console.log(data);
//     //  console.log("User:", user);
    
//     const myProfile = data?.data ?? {};
//     // console.log("User:", user);
//     // console.log("Data:", data);
//     // console.log("MyProfile:", myProfile);
    

//     if (isLoading) return <div>loading...</div>;
//     if (isError) return <div>error...</div>;

//     return (
//         <Profile
//             type="My"
//             name={myProfile.name}
//             email={myProfile.email}
//             avatar={myProfile.avatar}
//             properties={myProfile.allProperties}
//         />
//     );
// };

// export default MyProfile;
