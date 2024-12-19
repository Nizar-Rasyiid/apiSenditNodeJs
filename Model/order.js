const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sendit_v2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
const Pemesanan = sequelize.define(
  "Pemesanan",
  {
    id_pemesanan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jarak: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lokasi_jemput: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lokasi_tujuan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama_penerima: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_kurir: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    no_hp_penerima: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_paket: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    keterangan: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nama_pengirim: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_hp_pengirim: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  {
    tableName: "pemesanans",
    timestamps: false,
  }
);

module.exports = Pemesanan;
