import React from "react";
import Head from "next/head";

export function MetaInfo({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
}
