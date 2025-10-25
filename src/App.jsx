import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layouts"
import { Home } from "./pages"
import { Toast } from "./components/ux/Toast"

function App() {

  return (
    <>
      <Toast />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App