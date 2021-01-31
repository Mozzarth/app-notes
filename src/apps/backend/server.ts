import app from './app'


app.listen(process.env.NODE_PORT || 3000, () => {
    console.log(`App is running at http://localhost:${process.env.NODE_PORT} in ${process.env.NODE_ENV} mode`)
})

