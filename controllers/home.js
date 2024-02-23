const fs = require("fs");
var pdf2img = require('pdf-img-convert');

const accepdtedDir = [
    "C:/",
    "D:/",
    "E:/",
    "F:/",
    "G:/",
    "H:/",
    "I:/",
    "J:/",
    "K:/",
]

module.exports = {
    convertPdf: async (url, filename, directory) => {
        if (url.length === 0 || filename.length === 0 || directory.length === 0) {
            return {
                status: "error",
                message: "Please fill in all the fields."
            }
        }

        try {
            if (accepdtedDir.some(dir => directory.startsWith(dir)) === false) {
                return {
                    status: "error",
                    message: "Invalid directory. Please use a directory that is accessible from the server."
                }
            }

            url = url.replace("file/d/", "uc?id=").replace("/view?usp=drive_link", "");
            var outputImages = await pdf2img.convert(url);
    
            // Extract image paths from each page
            // const imagePaths = pdfData.info.map((page, index) => `path/to/your/images/image_${index + 1}.png`);
            
            if (outputImages.length > 0) {
                if (!fs.existsSync(directory)) {
                    fs.mkdirSync(directory);
                }

                const errors = [];
    
                outputImages.forEach((buffer, index) => {
                    fs.writeFile(directory + filename + '-' + index + ".png", buffer, function (error) {
                        if (error) { 
                            errors.push(error);
                         }
                    });
                });

                if (errors.length > 0) {
                    return {
                        status: "error",
                        message: errors.join(", ")
                    }
                }

                return {
                    status: "success",
                    message: "Images have been successfully extracted from the PDF file, and saved to the directory " + directory
                }
            } else {
                return {
                    status: "error",
                    message: "No images found on the PDF file."
                }
            }
        } catch (error) {
            return {
                status: "error",
                message: error.message
            }
        }
    },
}