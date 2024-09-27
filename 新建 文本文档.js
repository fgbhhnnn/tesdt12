var body = $response.body;
var obj = JSON.parse(body);

// 遍历 `list` 数组，找到 `type = 2` 的项并修改 `number`
obj.data.list.forEach(item => {
    if (item.type === 2) {
        item.number = 42;  // 修改成你需要的值
    }
});

// 将修改后的对象转为 JSON 字符串
body = JSON.stringify(obj);
$done({body});