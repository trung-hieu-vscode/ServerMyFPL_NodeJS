const newsService = require('./NewsService');

const addNew = async (title, content, date) => {
    try {
        return await newsService.addNew(title, content, date);
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await newsService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await newsService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await newsService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,title,content,date) => {
    try {
        return await newsService.updateById(id,title,content,date);
    } catch (error) {
        return false;
    }
}
const getByTitle = async (title) => {
    try {
        return await newsService.getByTitle(title);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addNew, getById, getAll, deleteById,
    updateById,getByTitle,
};