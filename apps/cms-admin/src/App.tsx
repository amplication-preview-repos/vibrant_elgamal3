import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ContactFormList } from "./contactForm/ContactFormList";
import { ContactFormCreate } from "./contactForm/ContactFormCreate";
import { ContactFormEdit } from "./contactForm/ContactFormEdit";
import { ContactFormShow } from "./contactForm/ContactFormShow";
import { NewsletterList } from "./newsletter/NewsletterList";
import { NewsletterCreate } from "./newsletter/NewsletterCreate";
import { NewsletterEdit } from "./newsletter/NewsletterEdit";
import { NewsletterShow } from "./newsletter/NewsletterShow";
import { BlogList } from "./blog/BlogList";
import { BlogCreate } from "./blog/BlogCreate";
import { BlogEdit } from "./blog/BlogEdit";
import { BlogShow } from "./blog/BlogShow";
import { AdminUserList } from "./adminUser/AdminUserList";
import { AdminUserCreate } from "./adminUser/AdminUserCreate";
import { AdminUserEdit } from "./adminUser/AdminUserEdit";
import { AdminUserShow } from "./adminUser/AdminUserShow";
import { PodcastVideoList } from "./podcastVideo/PodcastVideoList";
import { PodcastVideoCreate } from "./podcastVideo/PodcastVideoCreate";
import { PodcastVideoEdit } from "./podcastVideo/PodcastVideoEdit";
import { PodcastVideoShow } from "./podcastVideo/PodcastVideoShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CMS"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ContactForm"
          list={ContactFormList}
          edit={ContactFormEdit}
          create={ContactFormCreate}
          show={ContactFormShow}
        />
        <Resource
          name="Newsletter"
          list={NewsletterList}
          edit={NewsletterEdit}
          create={NewsletterCreate}
          show={NewsletterShow}
        />
        <Resource
          name="Blog"
          list={BlogList}
          edit={BlogEdit}
          create={BlogCreate}
          show={BlogShow}
        />
        <Resource
          name="AdminUser"
          list={AdminUserList}
          edit={AdminUserEdit}
          create={AdminUserCreate}
          show={AdminUserShow}
        />
        <Resource
          name="PodcastVideo"
          list={PodcastVideoList}
          edit={PodcastVideoEdit}
          create={PodcastVideoCreate}
          show={PodcastVideoShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
