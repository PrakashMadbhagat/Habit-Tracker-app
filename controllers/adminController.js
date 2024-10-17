const User = require('../models/User');
const Habit = require('../models/Habit')

const getUser = async (req,res) =>{
    try {
        const users = await User.find().select('-password');
        const userStats = [] ;
        for(const user of users){

            const habits = await Habit.find({userId : user._id});
            const totalHabits = habits.length;

            const completedHabits = habits.filter(habit => habit.progress > 0).length;
            const complitionHabit = totalHabits ? (completedHabits / totalHabits) * 100 : 0
            userStats.push({
                    username : user.username ,
                    totalHabits ,
                    completedHabits ,
                    complitionHabit 
                }) ;
        }
        res.status(201).json({ message: "Fetch User Successfully", userStats })
    } catch (error) {
        res.status(500).json({ message: "Error Fetching User", error: error.message })
    }

}
const CreateHabitTemplete = async (req,res) =>{
    try {
        const { title , frequency} = req.body;
        const habitTemplete = new Habit({
            title ,
            frequency 
        })
        await habitTemplete.save();
        res.status(201).json({ message: "Creating Habit templete Successfully", habitTemplete })
    } catch (error) {
        res.status(500).json({ message: "Error Creating Habit templete", error: error.message })
    }

}

module.exports = {getUser , CreateHabitTemplete}