const { ObjectId } = require("mongodb");

module.exports = class Brand {
    constructor({
        name,
        image = null,
        isEnable = true,
        isDeleted = false,
        createdAt = new Date(),
        createdBy = new ObjectId("000000000000000000000000"),
        modifiedAt = new Date(),
        modifiedBy = new ObjectId("000000000000000000000000"),
        _id
    }) {
        this.name = name;
        this.image = image;
        this.isEnable = isEnable;
        this.isDeleted = isDeleted;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
        this.modifiedAt = modifiedAt;
        this.modifiedBy = modifiedBy;
        this._id = _id
    }

    getId() {
        return this._id?.toString() ?? null;
    }
}