import UploadDocsForm from "../components/UploadDocsForm"
import Layout from "../layout/Layout"


const UploadDocument = () => {
  return (
    <Layout>
    <div className="container mx-auto px-4">
        <UploadDocsForm/>
    </div>
    </Layout>
  )
}

export default UploadDocument