
interface User {
  name: string;
  age: number;
}

interface ApiResponse<T> {
  code: string;
  result: T
}

function getUserInfo(): ApiResponse<User> {
  return {
    code: '200',
    result: {
      name: 'zs',
      age: 19
    }  
  }
}

// function getLineInfo(): ApiResponse<> {

// }

interface ProductItemInfo {
  name: string;
  price: number
}

type MusicProductKind = 'a' | 'b'

type MovieProductKind = 'c' | 'd'

type ProductKind = MusicProductKind | MovieProductKind

type ProductInfo<T extends ProductKind> = Record<T, ProductItemInfo>

const musicProduct = {
  a: {
    name: 'aa',
    price: 10
  },
  b: {
    name: 'bb',
    price: 20
  }
}

function getMusicProduct(): ApiResponse<ProductInfo<MusicProductKind>> {
  return {
    code: '200',
    result: musicProduct
  }
}

const movieProduct = {
  c: {
    name: 'cc',
    price: 15
  },
  d: {
    name: 'dd',
    price: 25
  }
}

function getMovieProduct(): ApiResponse<ProductInfo<MovieProductKind>> {
  return {
    code: '200',
    result: movieProduct
  }
}

const { result: movieRes } = getMovieProduct()

interface GraphItem extends ProductItemInfo {
  date: string;
}

const graphItem: GraphItem = {
  date: '2012',
  name: 'zs',
  price: 12
}

function formatGraphData<T extends ProductKind>(result: ProductInfo<T>): Record<keyof T, GraphItem> {
    const graphData = {} as Record<keyof T, GraphItem>
  for(const key in result) {
    graphData[key as keyof T] = {
      ...result[key],
      date: '222'
    }
  }
  return graphData;
}

formatGraphData<MovieProductKind>(movieRes)