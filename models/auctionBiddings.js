const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // 경매 입찰 테이블(등록테이블)
  const AuctionBidding = sequelize.define(
    "AuctionBidding",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      minPrice: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize: sequelize,
      timestamps: true,
      modelName: "AuctionBidding",
      tableName: "auctionBiddings",
      paranoid: true,
      charset: "utf8",
      collation: "utf8_general_ci",
    }
  );
  return AuctionBidding;
};
