import Image from "next/image";
import styles from "./page.module.css";
import ProfileComponent from "./components/Profile";
import FactsComponent from "./components/Facts";
import ButtonsComponent from "./components/Buttons";
import TabsComponent from "./components/Tabs";
import ProjectContainer from "./components/ProjectContainer";



export default function Home() {
  return (
    <div className={styles.main}>
      <ProfileComponent />
      <FactsComponent />
      <ButtonsComponent />
      <TabsComponent />
      <ProjectContainer />

    </div>

  );
}
