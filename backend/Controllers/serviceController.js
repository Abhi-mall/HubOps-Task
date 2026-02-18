import services from "../data/service.js"

export const getServices = (req, res) => {
  try {
    res.status(200).json({success: true, data: services,  message: "Services fetched successfully", })
  } catch (error) {
    res.status(500).json({success: false, message: "Failed to fetch services", error: error.message})
  }
}