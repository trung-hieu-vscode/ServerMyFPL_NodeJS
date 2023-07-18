const newsModel = require('./NewsModel')

const addNew = async (title, content, date) => {
    try {
        const news = {
            title, content, date
        }
        const p = new newsModel(news);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new news error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return newsModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const getByTitle = async (title) => {
    try {

        const news =await newsModel.find({ title: { $regex: title, $options: 'i' }, });
        if (news.length === 0) {
            return false
        }
        return news
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

const getAll = async () => {
    try {
        return newsModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return newsModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, title, content, date) => {
    try {
        const news = await newsModel.findById(id)
        if (news) {
            news.title = title ? title : news.title;
            news.content = content ? content : news.content;
            news.date = date ? date : news.date;
            await news.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

module.exports = {
    addNew, getById, getAll, deleteById,
    updateById,getByTitle,
}
