import { CaretLeft, CaretRight, MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import api from '../../services/api'

import './styles.scss'

interface Product {
  _id: string
  name: string
  description: string
  imageUrl: string
  listPrice: number
  price: number
  installmentsQuantity: number
  installmentsValue: number
}

export function Shop() {
  const [products, setProducts] = useState<Product[]>([])
  const [pageNumber, setPageNumber] = useState(0)
  const [searchedPlant, setSearchedPlant] = useState('')

  function formatCurrency(price: number) {
    return Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100)
  }

  async function getProducts() {
    const response = await api.get<Product[]>('/plant')
    const product = response.data

    setProducts(product)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const filterPlants = products.filter((filterPlant) =>
    filterPlant.name.toLowerCase().includes(searchedPlant.toLowerCase()),
  )

  const productsPerPage = 9
  const pagesVisited = pageNumber * productsPerPage

  const filterDisplayProducts = filterPlants
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return (
        <div className="product-box" key={product._id}>
          <Link to={{ pathname: `/plant/${product._id}` }}>
            <img src={product.imageUrl} alt={product.name} />
          </Link>
          <div className="product-info">
            <Link
              className="product-name"
              to={{ pathname: `/plant/${product._id}` }}
            >
              <p>{product.name}</p>
            </Link>
            {product.listPrice !== null && (
              <p className="product-list-price">
                {formatCurrency(product.listPrice)}
              </p>
            )}
            <p className="product-price">{formatCurrency(product.price)}</p>
            <p className="product-installments">
              à vista ou em {product.installmentsQuantity}x de{' '}
              {formatCurrency(product.installmentsValue)}
            </p>
          </div>
        </div>
      )
    })

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return (
        <div className="product-box" key={product._id}>
          <Link to={{ pathname: `/plant/${product._id}` }}>
            <img src={product.imageUrl} alt={product.name} />
          </Link>
          <div className="product-info">
            <Link
              className="product-name"
              to={{ pathname: `/plant/${product._id}` }}
            >
              <p>{product.name}</p>
            </Link>
            {product.listPrice !== null && (
              <p className="product-list-price">
                {formatCurrency(product.listPrice)}
              </p>
            )}
            <p className="product-price">{formatCurrency(product.price)}</p>
            <p className="product-installments">
              à vista ou em {product.installmentsQuantity}x de{' '}
              {formatCurrency(product.installmentsValue)}
            </p>
          </div>
        </div>
      )
    })

  const pageCount = Math.ceil(products.length / productsPerPage)
  function changePage({ selected }: any) {
    setPageNumber(selected)
  }

  console.log(searchedPlant)

  return (
    <div className="shop-container">
      <div className="input-box">
        <div className="return">
          <CaretLeft />
          <Link to="/">Voltar</Link>
        </div>
        <form action="">
          <input
            type="search"
            placeholder="O que voce está procurando?"
            value={searchedPlant}
            onChange={(e) => {
              setSearchedPlant(e.target.value)
            }}
          />
          <button>
            <MagnifyingGlass size={25} />
          </button>
        </form>
      </div>
      <div className="products-list">
        {searchedPlant === '' ? displayProducts : filterDisplayProducts}
      </div>

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationButtons'}
        previousLinkClassName={'previousButton'}
        nextLinkClassName={'nextButton'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </div>
  )
}
