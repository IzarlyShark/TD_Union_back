import User from "../models/Personal.js";
import jwt from 'jsonwebtoken'
const {sign} = jwt

export const getInfo = async (req, res, next) => {
    try {
        const {id} = req.user
        const user =  await User.findById(id);
        res.send(user)
    } catch (error) {
        next(error);
    }
}

export const create = async (req, res, next) => {
    try {
        const body = req.body;
        const user = await User.create(body);
        res.status(201).send({message:'User created', data : user});
    } catch (error) {
        next(error);    
    }
}

export const login =  async (req, res, next) => {
    try {
        const {login, password} = req.body;
        const user = await User.findOne({login, password});

        if(!user) res.status(401).send({message : 'User not found'});

        const token = sign({id : user._id}, 'secret', {expiresIn : '1h'});
        res.send({token});
    } catch (error) {
        next(error);
    }
}

export const logout = async (req, res, next) => {
    try {
        res.send("Ok, logout");
    } catch (error) {
        next(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const {name, login, password, role} = req.body;
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, {name, login, password, role}, {new : true});
        res.send(user);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        res.send({message : 'User deleted', data : user});
    } catch (error) {
        next(error);
    }
}