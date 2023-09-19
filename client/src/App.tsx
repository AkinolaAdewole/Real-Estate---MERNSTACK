import {
  AuthBindings,
  Authenticated,
  GitHubBanner,
  Refine,
} from "@refinedev/core";

import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import PeoplAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import StarOutlineRounded from "@mui/icons-material/StarOutlineRounded";
import VillaOutlined from "@mui/icons-material/VillaOutlined";
import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import Dashboard  from "@mui/icons-material/Dashboard";

import dataProvider from "@refinedev/simple-rest";
import axios, { AxiosRequestConfig } from "axios";
import { CredentialResponse } from "interfaces/google";

import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "pages/categories";

import {
  CreateProperty,
  EditProperty,
  AllProperties,
  Login,
  MyProfile,
  PropertyDetails,
  Agents,
  AgentProfile,
  Home,
} from "pages";

import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { parseJwt } from "utils/parse-jwt";
// import { Header } from "./components/header/Header";
import { ColorModeContextProvider } from "./contexts/color-mode";

interface CredentialResponses {
  credential: string; // Update this to match the actual structure of your CredentialResponse
}

type AuthActionResponse = {
  success: boolean;
  redirectTo: string;
  // Add any other properties you need here
};

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});



function App() {
  const { t, i18n } = useTranslation();

  const authProvider: AuthBindings = {

    // login: async ({ credential }: CredentialResponse): Promise<AuthActionResponse> => {
    //   try {
    //     const profileObj = credential ? parseJwt(credential) : null;
    
    //     if (profileObj) {
    //       const response = await fetch(
    //         "http://localhost:3500/api/v1/users",
    //         {
    //           method: "POST",
    //           headers: { "Content-Type": "application/json" },
    //           body: JSON.stringify({
    //             name: profileObj.name,
    //             email: profileObj.email,
    //             avatar: profileObj.picture,
    //           }),
    //         }
    //       );
    
    //       if (response.status === 200) {
    //         const data = await response.json();
    //         localStorage.setItem(
    //           "user",
    //           JSON.stringify({
    //             ...profileObj,
    //             avatar: profileObj.picture,
    //             userid: data._id,
    //           })
    //         );
    //         localStorage.setItem("token", `${credential}`);
            
    //         // Return a successful response
    //         return {
    //           success: true,
    //           redirectTo: "/",
    //         };
    //       } else {
    //         console.log("Login failed with response status:", response.status);
    //         // Handle authentication error and reject the promise
    //         throw new Error("Login failed");
    //       }
    //     }
    //   } catch (error) {
    //     // Handle any exceptions or network errors and reject the promise
    //     console.error("Authentication error:", error);
    //     throw new Error("Authentication failed");
    //   }
    
    //   // Return a default response for unsuccessful login
    //   return {
    //     success: false,
    //     redirectTo: "/login", // Adjust the redirect URL as needed
    //   };
    // },
    

    login: async ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

       if(profileObj){
        // const response = await fetch(
        //   'http://localhost:3800/api/v1/users',
        //   {
        //     method:"POST",
        //     headers:{"content-Type":"application/json"},
        //     body: JSON.stringify({
        //       name:profileObj.name,
        //       email:profileObj.email,
        //       avatar:profileObj.picture,
        //     }),
        //   }
        // );

        try {
          const response = await axios.post(
            'http://localhost:3800/api/v1/users', // URL to your backend endpoint
            {
              name: profileObj.name,
              email: profileObj.email,
              avatar: profileObj.picture,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )


          if(response.status=== 200){
            const data = await response.data
                  localStorage.setItem(
                    "user",
                    JSON.stringify({
                      ...profileObj,
                      avatar: profileObj.picture,
                      userid: data._id,
                    })
                  );
          } else{
            console.log("Login failed with response status:", response.status);
            // return Promise.reject({
            //   success: false,
            //   message: "Login failed",
            // });
          }
        } catch (error) {
          console.error(error);
          
        }
        // const data = await response.json();

       

       }
       localStorage.setItem("token", `${credential}`);
      //  return Promise.resolve()

       return {
        success: true,
         redirectTo: "/",
       }

    },  



    logout: async () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return {};
        });
      }

      return {
        success: true,
        redirectTo: "/login",
      };
    },
    onError: async (error) => {
      console.error(error);
      return { error };
    },
    check: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return {
          authenticated: true,
        };
      }

      return {
        authenticated: false,
        error: {
          message: "Check failed",
          name: "Token not found",
        },
        logout: true,
        redirectTo: "/login",
      };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }

      return null;
    },
  };

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };




  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
              notificationProvider={notificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              i18nProvider={i18nProvider}
              resources={[

                {
                  name:"Dashboard",
                  list:Home,
                  icon:<Dashboard/>
                },

                {
                  name: "Properties",
                  list: AllProperties,
                  show: PropertyDetails,
                  create:CreateProperty,
                  edit:EditProperty,
                  icon: <VillaOutlined />
                },

                {
                  name: "Agents",
                  list: Agents,
                  show: AgentProfile,
                  icon:<PeoplAltOutlined />
                },

                {
                  name:"Reviews",
                  list: Home,
                  icon:<StarOutlineRounded />
                },

                {
                  name:"Messages",
                  list:Home,
                  icon:<ChatBubbleOutline />
                },

                {
                  name:"My profile",
                  list:MyProfile,
                  options:{label: "My profile"},
                }
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "SN84TC-6PiH5r-W8E8zN",
              }}
            >



              <Routes>
                <Route
                  element={
                    <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                      <ThemedLayoutV2>
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >

                  <Route
                    index
                    element={<NavigateToResource resource="Dashboard" />}
                  />

                  <Route path="/Dashboard">
                     <Route index element={<Home/>}/>
                  </Route>
                 


                  <Route path="/Properties">
                    <Route index element={<AllProperties/>} />
                    <Route path="create" element={<CreateProperty />} />
                    <Route path="edit/:id" element={<EditProperty />} />
                    <Route path="show/:id" element={<PropertyDetails />} />
                  </Route>

                  <Route path="/Agents">
                    <Route index element={<Agents />} />
                    <Route path="/Agents/AgentProfile" element={<AgentProfile />} />
                  </Route>

                  <Route path="/Reviews">
                    <Route index element={<Home />} />
                  </Route>

                  <Route path="/Messages">
                    <Route index element={<Home />} />
                  </Route>

                  <Route path="/My Profile">
                    <Route index element={<MyProfile />} />
                    <Route path="create" element={<CategoryCreate />} />
                    <Route path="edit/:id" element={<CategoryEdit />} />
                    <Route path="show/:id" element={<CategoryShow />} />
                  </Route>

                  <Route path="*" element={<ErrorComponent />} />
                </Route>


                <Route
                  element={
                    <Authenticated fallback={<Outlet />}>
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<Login />} />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
