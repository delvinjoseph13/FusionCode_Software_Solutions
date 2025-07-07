import eventModel from "../model/event.js"

export const getallEvents=async(req,res)=>{
    try {
        const events=await eventModel.find({});
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const postnewEvent=async(req,res)=>{
    const {title, start, end, user}=req.body;
    try {
        const newEvent=eventModel.create({
            title, start, end, user

        })

        res.status(201).json({newEvent})
    } catch (error) {
        res.status(500).json({error:error.message})
    }

}