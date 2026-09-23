//Array.from = crea 100 elementos
//(_, i) = recibe el índice de cada elemento
const productos = Array.from({length: 100}, (_, i) => ({
    id: i.toString(),
    name: `Producto ${i+1}`,
    price: Math.floor(Math.random() * 1000) //precios entre 0 y 999
}))

export default productos;