import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TestButton from "../components/base/button/TestButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Devamsh Manoj - Full Stack Developer </title>
        <meta
          name="description"
          content="I build modern, creative, responsive, mobile-friendly, scalable, and practical web and mobile experiences delivered with high quality, performance, and speed. I am a Full Stack Developer with a passion for building great products. I have experience building web applications using React, NextJS, NodeJS, Express, MongoDB, MySQL, TypeScript, JavaScript, HTML, CSS, Bootstrap, Material UI, Tailwind CSS, and more. I aim to bring revolution to the way we perceive web and mobile applications by building exquisite applications that are beautiful, functional, and easy to use."
        />
        <meta
          name="keywords"
          content="Devamsh Manoj, Full Stack Developer, Javascript Developer, React Developer, Node JS Developer"
        />
        <meta name="author" content="Devamsh Manoj" />
        <meta name="robots" content="index, follow" />
      </Head>
    </>
  );
};

export default Home;
