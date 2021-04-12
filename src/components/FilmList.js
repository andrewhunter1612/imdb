import Film from './Film'
const FilmList = ({films}) => {

    const filmList = films.map((film) => {
        return <Film name={film.name} url={film.url}/>
    })

    return (
        <>
            {filmList}
        </>
    )
}
export default FilmList