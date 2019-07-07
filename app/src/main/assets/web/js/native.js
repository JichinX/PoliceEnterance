window.cdv = {
    ready: function (cb) {
        if (window.WebViewJavascriptBridge) {
            WebViewJavascriptBridge.init(function (message, responseCallback) {
                console.log('JS got a message', message);
                var data = {
                    'Javascript Responds': 'Wee!'
                };
                responseCallback(data);
            });

            cb();
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady',
                function () {
                    WebViewJavascriptBridge.init(function (message, responseCallback) {
                        console.log('JS got a message', message);
                        var data = {
                            'Javascript Responds': 'Wee!'
                        };
                        responseCallback(data);
                    });

                    cb();
                },
                false);
        }
    },
    getLocation: function (cb) {
        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler(
                'location', {},
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                }
            );
        }
    },
    takePicture: function (cb) {
        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler(
                'camera', {},
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                }
            );
        }
    },
    qr: function (cb) {
        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler(
                'qr', {},
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                }
            );
        }
    },
    chooseImage: function (cb) {

        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler(
                'picture', {},
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                }
            );
        }
    },
    upload: function (localFiles, cb) {

        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler(
                'upload', {
                    files: localFiles
                },
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                }
            );
        }
    },
    print: function (localFiles, cb) {

        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler(
                'text_print', localFiles,
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                }
            );
        }
    },
    video: function (data, cb) {

        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler(
                'video_record', data,
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                }
            );
        }
    },
    quickCamera: function (localFiles, cb) {
        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler(
                'quick_camera', localFiles,
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                }
            );
        }
    },
    setRightIcon: function (url, cb) {

        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler(
                'setRightIcon', {
                    url: url
                },
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                }
            );
        }
    },
    onRightIconClick: function (cb) {
        window.WebViewJavascriptBridge.registerHandler("onRightIconClick", cb);
    },
    back: function (cb) {
        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler('back', {},
                function (responseData) {
                    console.log(responseData);
                    var resp = JSON.parse(responseData);
                    cb(resp);
                });
        }
    },
    exit: function (cb) {
        if (!window.WebViewJavascriptBridge) {
            var obj = {};
            obj.code = 30001;
            obj.msg = "未初始化";
            cb(obj);
        } else {
            window.WebViewJavascriptBridge.callHandler('exit');
        }
    }
};
