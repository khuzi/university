import Head from "next/head";
import styles from "../styles/Home.module.css";

import { MetaInfo } from "../components";

export default function Home() {
  return (
    <div>
      <MetaInfo title="Home" />
      <h1>Home Page</h1>
    </div>
  );
}
