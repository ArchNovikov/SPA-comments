const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    homePage: {type: DataTypes.STRING}
})

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    commentText: {type: DataTypes.STRING, allowNull: false},
    file: {type: DataTypes.STRING}
})

Comment.hasOne(User)
User.belongsTo(Comment)

User.hasMany(Comment)
Comment.belongsTo(User)

module.exports = {
    User,
    Comment
}