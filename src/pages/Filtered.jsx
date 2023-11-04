import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Results } from "../components"
import { useQuery } from "@apollo/client"
import { GET_PROPERTIES } from "../queries"
import { useGlobalState } from "../context/GlobalContext"

function Filtered() {
  const { filter } = useParams()
  const { dispatch } = useGlobalState()

  const { data, refetch } = useQuery(GET_PROPERTIES, {
    variables: {
      para: filter
    },
  })

  useEffect(() => {
    refetch()
  }, [filter, refetch])

  useEffect(() => {
    dispatch({ type: 'SET_PROPERTIES', payload: data?.allPropiedades?.nodes })
  }, [data, dispatch])

  return (
    <div className="m-0 md:m-16">
      <Results />
    </div>
  )
}

export default Filtered