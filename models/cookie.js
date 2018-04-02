module.exports = function(sequelize, DataTypes) {
    var Cookie = sequelize.define("Cookie", {
        theme: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }         
        }
    });

    return Cookie;
};