import { getData, writeData, updateUser } from '../data.js';


export function usersGet(req, res) {
    const data = getData();
    res.json(data.users);
}

export function usersPost(req, res) {
    const user = req.body;
    user.id = Math.round(Math.random() * 9999999999999);

    const data = getData();
    data.users.push(user);
    writeData(data);

    res.status(201);
    res.json(user);
}

// Skinny Controller, Fat Model
export function usersPut(req, res) {
    const id = parseInt(req.params.id);

    updateUser(id, req.body);

    res.json(req.body);
}

// Fat Controller, Skinny Model
export function usersDelete(req, res) {
    const id = parseInt(req.params.id);

    const data = getData();
    data.users = data.users.filter(user => user.id !== id);
    writeData(data);

    res.json({ "deleted": id });
}