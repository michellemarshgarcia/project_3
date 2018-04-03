module.exports = function(sequelize, DataTypes) {
    var Cookie = sequelize.define("Cookie", {
        theme: {
            type: DataTypes.STRING,
            image: DataTypes.STRING,      
        }
    });

    return Cookie;
};