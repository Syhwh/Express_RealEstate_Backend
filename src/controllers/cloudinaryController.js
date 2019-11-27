
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');
module.exports = {
  // async upload(req, res) {
  //   try {
  //     console.log(req.files)
  //     //const propertyImage = await cloudinary.v2.uploader.upload(req.files.image.path);
  //     const propertyImage='ok'
  //     res.status(200).json({ message: 'Image Created', propertyImage });
  //   } catch (error) {
  //     console.log(error)
  //     res.status(403).json({ error });
  //   }
  // }

  async upload(req, res) {
    try {
      const uploader = async (path) => await cloudinary.uploads(path);
      const urls = []
      const files = req.files; 
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path)
        urls.push(newPath)     
        fs.unlinkSync(path)
      }

      res.status(200).json({
        message: 'images uploaded successfully',
        data: urls
      })
    } catch (error) {
      res.status(401).json({ error })
    }

  }

}