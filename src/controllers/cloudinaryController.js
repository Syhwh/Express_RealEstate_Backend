
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

  async upload(req, res, next) {
    const uploader = async (path) => await cloudinary.uploads(path, 'Images');
    if (req.method === 'POST') {
      const urls = []
      const files = req.files;
      console.log('files')
      console.log(files)
      for (const file of files) {
        const { path } = file;
        const newPath = await uploader(path)
        urls.push(newPath)
        console.log(urls)
        fs.unlinkSync(path)
      }

      res.status(200).json({
        message: 'images uploaded successfully',
        data: urls
      })

    } else {
      res.status(405).json({
        err: `${req.method} method not allowed`
      })
    }
  }

}