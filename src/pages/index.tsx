import { Heading, Link as ChakraLink } from "@chakra-ui/react"
import Link from "next/link"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout title="OJILab Cloud">
    <Heading>Welcome OJILab Cloud!</Heading>

    <ChakraLink as={Link} href="/about">About</ChakraLink>
  </Layout>
)

export default IndexPage
