module.exports = function(sequelize, DataTypes) {
    var Temp = sequelize.define("temp", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      client_id: {
        type: DataTypes.INTEGER
      },
      order_quantity: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      storage_location: {
          type: DataTypes.STRING,
          allowNull: true
      },
      rush_status: {
        type: DataTypes.ENUM,
        values: ['none', '1 week', '2 weeks']
      },
      order_notes: {
          type: DataTypes.TEXT,
          allowNull: true
      },
      order_extra_costs: {
          type: DataTypes.INTEGER,
          default: 0,
      },
      discount_percent: {
        type: DataTypes.INTEGER,
        default: 1
      },
      order_subtotal: {
          type: DataTypes.INTEGER,
          default: 0,
      },
      tax_exempt: {
        type: DataTypes.ENUM,
        values: ['no', 'yes']
      },
      order_tax_percent: {
          type: DataTypes.INTEGER,
          defaultValue: 1,
      },
      order_total: {
          type: DataTypes.INTEGER,
          default: 0,
      },
      date_due: {
          type: DataTypes.DATE,
          allowNull: true
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    },{
  
      underscored: true,
      timestamps: true
    });
    
    Temp.associate = function(models) {
      Temp.hasMany(models.frame, {foreignKey: 'temp_id'});
    };
  
    return Temp;
  };