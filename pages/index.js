import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Flex } from '@chakra-ui/core';

export default function Home() {
  return (
    <>
      <Flex justifyContent='center' style={{ backgroundColor: 'red' }}>
        <h1>Hey</h1>;
      </Flex>
    </>
  );
}
