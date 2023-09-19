const {S3Client,PutObjectCommand} = require('@aws-sdk/client-s3');
 const fs = require('fs')
const s3Client = new S3Client({
    region:'eu-north-1',
    endpoint:'https://s3-eu-north-1.amazonaws.com/learn-aws-storage',  //learn-s3-storage is the bucket name
    credentials: {
        accessKeyId: 'AKIAZZSMIBOGLUMC5BHI ',
        secretAccessKey: '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'
    }
})

const uploadFile = async()=>{
    try {
        const fileContent = fs.readFileSync('BIP_5499.jpg')
        const object =  new PutObjectCommand({
            Bucket:'learn-aws-storage',
            Key:'BIP_5499.jpg',
            Body:fileContent
        })
        await s3Client.send(object)
    } catch (e) {
        console.log(e)
    }
}

uploadFile()