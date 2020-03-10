```javascript

const bodyparser = require('koa-bodyparser')

app.use(bodyparser({
    multipart:true, // 支持文件上传
    encoding:'gzip',
    formidable: {
        maxFileSize: 200 * 1024 * 1024	// 设置上传文件大小最大限制，默认2M
    },
}));

router.post('/uploadAvatar', async (ctx, next) => {
    const file = ctx.request.files.file;	// 获取上传文件
    const reader = fs.createReadStream(file.path);	// 创建可读流
    const ext = file.name.split('.').pop();		// 获取上传文件扩展名
    const upStream = fs.createWriteStream(`public/upload/${Math.random().toString()}.${ext}`);		// 创建可写流
    let res = await reader.pipe(upStream);	// 可读流通过管道写入可写流
    if (res) {
        return ctx.body = {
            url: `http://${ip.address()}:3000${res.path.substr(6, res.path.length)}`,
            code: 0,
            success: true,
            msg: '上传成功',
        };
    }
});



   var params = new FormData();

    params.append('file', file);

    $.ajax({
        data: params,
        url: 'http://10.96.120.157:3000/users/uploadAvatar',
        type: 'post',
        contentType: false,
        // 默认文件类型application/x-www-form-urlencoded  设置之后multipart/form-data
        processData: false,
        success: function (res) {
            console.log(res);
            layer.msg('上传成功');
            console.log(index);
        },
        error: function (error) {
            console.log(error)
            layer.msg('上传失败');
        }
    })
```
