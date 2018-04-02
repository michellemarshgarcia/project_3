module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 40]
            }
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
             type: DataTypes.STRING,
             validate: {
                 len: [10],
                 is: ["^[0-9]+$",'i']
             }           
        },     
        type: {
            type: DataTypes.STRING
        }
    });

    Contact.associate = function(models) {
        Contact.belongsTo(models.Client, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Contact;
};