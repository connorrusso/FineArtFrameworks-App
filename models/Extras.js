module.exports = function(sequelize, DataTypes) {
    var Extras = sequelize.define("extras", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
          type: DataTypes.STRING
      },
      cost_type: {
          type: DataTypes.STRING
      },
      cost: {
          type: DataTypes.INTEGER
      }
    },{
        underscored: true,
        timestamps: true
    });
  
  
    
    Extras.associate = function(models) {
      /*
      // associations to go here :)
      Extras.belongsTo(models.Frame, { as: 'Frame', foreignKey: 'extras_id' });
      */
  
    };
  
  
    return Extras;
  };