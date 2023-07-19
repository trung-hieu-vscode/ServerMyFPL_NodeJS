const subsModel = require('./SubjectModel')

const addSubss = async (tenmonhoc, gvdunglop, loaimon) => {
    try {
        const subs = {
            tenmonhoc, gvdunglop, loaimon
        }
        const p = new subsModel(subs);
        await p.save();
        return true;
    } catch (error) {
        console.log('add new Subjects error: ', error);
        return false;
    }
}
const getById = async (id) => {
    try {

        return subsModel.findById(id);
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
// const getBytenmonhoc = async (tenmonhoc) => {
//     try {

//         const subs =await subsModel.find({ tenmonhoc: { $regex: tenmonhoc, $options: 'i' }, });
//         if (subs.length === 0) {
//             return false
//         }
//         return subs
//     } catch (error) {
//         console.log('error: ', error);
//         return false;
//     }
// }

const getAll = async () => {
    try {
        return subsModel.find()
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const deleteById = async (id) => {
    try {
        return subsModel.findOneAndDelete({ _id: id })
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}
const updateById = async (id, tenmonhoc, gvdunglop, loaimon) => {
    try {
        const subs = await subsModel.findById(id)
        if (subs) {
            subs.tenmonhoc = tenmonhoc ? tenmonhoc : subs.tenmonhoc;
            subs.gvdunglop = gvdunglop ? gvdunglop : subs.gvdunglop;
            subs.loaimon = loaimon ? loaimon : subs.loaimon;
            await subs.save();
            return true;
        }
    } catch (error) {
        console.log('error: ', error);
        return false;
    }
}

module.exports = {
    addSubss, getById, getAll, deleteById,
    updateById,getByTitle,
}
