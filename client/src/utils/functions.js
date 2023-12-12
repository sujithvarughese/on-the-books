import { axiosAPI, axiosDB } from "./axios.js";

const searchBooks = async (searchString) => {
    try {
        const response = await axiosAPI(`/subjects/${searchString}.json?limit=36`)
        const { works } = response.data
        return works.map(work => {
            return {
                title: work.title,
                author: work.authors[0]?.name,
                coverID: work.cover_id,
                OLID: work.key.substring(7),
                coverEditionKey: work.cover_edition_key,
                yearPublished: work.first_publish_year,
            }
        })
    } catch (error) {
        throw new Error(error)
    }
}

const getBookDescription = async (olid) => {
    try {
        const response = await axiosAPI(`/works/${olid}.json`)
        const { description } = response.data
        return description
    } catch (error) {
        throw new Error(error)
    }
}

const addBookToLibrary = async (book) => {
    console.log("Adding to library...");
    // create new book document in data (adding additional fields with default values to match fields in document)
    const response = await axiosDB.post("/library", {
        ...book,
        status: "unread",
        rating: 0,
        bookNotes: []
    })
    console.log(response);

}

export { searchBooks, addBookToLibrary, getBookDescription }