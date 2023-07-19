const SubsService = require('./SubjectService');

const addSub = async (tenmonhoc, gvdunglop, loaimon) => {
    try {
        return await SubsService.addSub(tenmonhoc, gvdunglop, loaimon);
    } catch (error) {
        return false;
    }
}
const getById = async (id) => {
    try {
        return await SubsService.getById(id);
    } catch (error) {
        return false;
    }
}
const getAll = async () => {
    try {
        return await SubsService.getAll();
    } catch (error) {
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return await SubsService.deleteById(id);
    } catch (error) {
        return false;
    }
}
const updateById = async (id,tenmonhoc,gvdunglop,loaimon) => {
    try {
        return await SubsService.updateById(id,tenmonhoc,gvdunglop,loaimon);
    } catch (error) {
        return false;
    }
}
const getByTitle = async (title) => {
    try {
        return await SubsService.getByTitle(title);
    } catch (error) {
        return false;
    }
}
module.exports = {
    addSub
    , getById, getAll, deleteById,
    updateById,getByTitle,
};