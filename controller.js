import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase");

const studentSchema = new mongoose.Schema({
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

const Student = mongoose.model('Student', studentSchema, 'studentData');

const saveStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.json({ inserted: true });
    } catch (error) {
        res.json({ inserted: false });
    }
};

const updateStudent = async (req, res) => {
    try {
        const result = await Student.updateOne(
            { fname: req.body.fname }, 
            { lname: 'Parker' }
        );
        res.json({ updated: result.acknowledged });
    } catch (error) {
        res.json({ updated: false });
    }
};

const removeUser = async (req, res) => {
    try {
        const result = await Student.deleteOne({ stdnum: req.body.stdnum });
        res.json({ deleted: result.deletedCount > 0 });
    } catch (error) {
        res.json({ deleted: false });
    }
};

const removeAllUser = async (req, res) => {
    try {
        const result = await Student.deleteMany({});
        if (result.acknowledged) {
            res.json({ deleted: true });
        } else {
            res.json({ deleted: false });
        }
    } catch (error) {
        res.json({ deleted: false });
    }
};

const getUser = async (req, res) => {
    try {
        const student = await Student.find({ stdnum: req.query.stdnum });
        res.json(student);
    } catch (error) {
        res.json([]);
    }
};

const getMembers = async (req, res) => {
    try {
        const students = await Student.find({});
        res.json(students);
    } catch (error) {
        res.json([]);
    }
};

export {saveStudent, updateStudent, removeUser, removeAllUser, getUser, getMembers};