const Habit = require('../models/Habit');

const createHabit = async (req,res) =>{
    try {
        const habit = new Habit({...req.body , userId : req.user.id});
        await habit.save();
        res.status(201).json({ message: "Create Habit Successfully", habit })
    } catch (error) {
        res.status(500).json({ message: "Error Creating Habit", error: error.message })
    }
}
const getHabit = async (req,res) =>{
    try {
        const habits = await Habit.find({ userId : req.user.id});
        res.status(201).json({ message: "Fetch Habit Successfully", habits })
    } catch (error) {
        res.status(500).json({ message: "Error Fetching Habit", error: error.message })
    }
}
const updateHabit = async (req,res) =>{
    try {
        const habit = await Habit.findByIdAndUpdate( req.params.id , req.body , {new : true});
        res.status(201).json({ message: "Update Habit Successfully", habit })
    } catch (error) {
        res.status(500).json({ message: "Error Updating Habit", error: error.message })
    }
}
const deleteHabit = async (req,res) =>{
    try {
        const habit = await Habit.findByIdAndDelete( req.params.id);
        res.status(201).json({ message: "Delete Habit Successfully", habit })
    } catch (error) {
        res.status(500).json({ message: "Error Deleting Habit", error: error.message })
    }
}

module.exports = { createHabit , getHabit , updateHabit , deleteHabit}