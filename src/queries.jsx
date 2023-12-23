import { gql } from '@apollo/client'

export const GET_PROPERTIES = gql`
  query getHouses(
    $para: String = ""
    $ciudad: String = ""
    $nombre: String = ""
    $tipo: String = ""
    $precioMin: Float = 0
    $precioMax: Float = 9999999999999
    $banos: Int = 0
    $habitaciones: Int = 0
    $estado: String = ""
    $pais: String = ""
    $zona: String = ""
  ) {
    allPropiedades {
      nodes {
        obtenerPrecio (
          para: $para,
          ciudad: $ciudad,
          nombre: $nombre,
          tipo: $tipo,
          precioMin: $precioMin,
          precioMax: $precioMax,
          banos: $banos,
          habitaciones: $habitaciones,
          estado: $estado,
          pais: $pais,
          zona: $zona
        ) {
          GET_PROPIEDADES {
            ciudad
            nombre
            para
            precio
            tipo
            destacado
            image {
              sourceUrl
            }
          }
        }
        id
      }
    }
  }
`;

export const GET_PROPIEDAD_ID = gql`
  query GetPropiedad($id: ID!) {
    propiedadBy(id: $id) {
      GET_PROPIEDADES {
        area
        ciudad
        fieldGroupName
        habitaciones
        nombre
        para
        precio
        tipo
        caracteristicasInternas
        caracteristicasExternas
        banos
        departamento
        descripcion
        estado
        garaje
        pais
        pisos
        image {
          sourceUrl
        }
        galeria {
          image1 {
            sourceUrl
          }
          image2 {
            sourceUrl
          }
          image3 {
            sourceUrl
          }
          image4 {
            sourceUrl
          }
          image5 {
            sourceUrl
          }
          image6 {
            sourceUrl
          }
          image7 {
            sourceUrl
          }
          image8 {
            sourceUrl
          }
          image9 {
            sourceUrl
          }
          image10 {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const INCREMENT_VIEW_MUTATION = `
  mutation IncrementView($postId: ID!) {
    incrementView(postId: $postId) {
      postId
      views
    }
  }
`;