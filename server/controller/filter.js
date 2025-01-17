// Controller functions
import connection from "../config/index.js";

export class FilterController {
  static getCreate(req, res) {
    const dashboard = req.body;

    if (!dashboard || Object.keys(dashboard).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid data provided.",
      });
    }

    connection.query(
      "INSERT INTO filters SET ?",
      [dashboard],
      (err, result) => {
        if (err) {
          console.error("Database error:", err);
          return res.status(500).json({
            success: false,
            message: "Failed to submit data to the database.",
            error: err.message,
          });
        }

        res.status(201).json({
          success: true,
          message: "Data submitted successfully.",
          data: { insertedId: result.insertId },
        });
      }
    );
  }

  static getData(req, res) {
    connection.query("SELECT * FROM filters", (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error fetching data.",
          error: err.message,
        });
      }

      if (result.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No data found.",
        });
      }

      res.status(200).json({
        success: true,
        book: result,
      });
    });
  }

  static getId(req, res) {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID is required.",
      });
    }

    connection.query(
      "SELECT * FROM filters WHERE id = ?",
      [id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Error fetching data by ID.",
            error: err.message,
          });
        }

        if (result.length === 0) {
          return res.status(404).json({
            success: false,
            message: "No data found for the given ID.",
          });
        }

        res.status(200).json({
          success: true,
          result: result[0],
        });
      }
    );
  }

  static putProduct(req, res) {
    const { id, name, status } = req.body;

    if (!id || !name || !status) {
      return res.status(400).json({
        success: false,
        message: "ID, name, and status are required.",
      });
    }

    connection.query(
      "UPDATE filters SET name = ?, status = ? WHERE id = ?",
      [name, status, id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Error updating product details.",
            error: err.message,
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            message: "Product not found.",
          });
        }

        res.status(200).json({
          success: true,
          message: "Product details updated successfully.",
        });
      }
    );
  }

  static createEditdata(req, res) {
    const { id, ...data } = req.body;
    const item = { name: data.name, status: data.status };
    connection.query(
      "UPDATE filters SET ? WHERE id = ?",
      [item, id],
      (err, result) => {
        if (err) {
          console.log("error", err);
          return res.status(500).json({
            success: false,
            message: "Error updating data.",
            error: err.message,
          });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({
            success: false,
            message: "No data found for the given ID.",
          });
        }

        res.status(200).json({
          success: true,
          message: "Data updated successfully.",
        });
      }
    );
  }
}
