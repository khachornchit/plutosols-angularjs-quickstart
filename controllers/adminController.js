var app = angular.module("plutoSolutions", []);

app.controller("plutoSolutionsController", ['$scope', 'shopService', function ($scope, shopService) {

    $scope.InitProduct = function () {
        shopService.getCategories(function (data, status, message) {
            $scope.categories = data;
            shopService.getTransportations(function (data, status, message) {
                $scope.transportations = data;
            });
        });
    };

    $scope.uploadImagesLabel = "อัพโหลดรูปภาพ";
    $scope.categoryLabel = "ประเภท";
    $scope.productLabel = [];
    $scope.productLabel.Name = "ชื่อสินค้า";
    $scope.productLabel.Description = "คำอธิบาย";
    $scope.productLabel.Color = "สี";
    $scope.productLabel.Quantity = "จำนวน";
    $scope.productLabel.Price = "ราคา";
    $scope.productLabel.Hip = "สะโพก";
    $scope.productLabel.Bust = "รอบอก";
    $scope.productLabel.SleeveCircle = "วงแขน";
    $scope.productLabel.SleeveLength = "ความยาวแขน";
    $scope.productLabel.SleeveBegin = "ต้นแขน";
    $scope.productLabel.HemWidth = "รอบชายเสื้อ";
    $scope.productLabel.LengthTotal = "ความยาว";
    $scope.productLabel.LengthFlexible = "สามารถยืดได้ถึง";
    $scope.productLabel.Waist = "รอบเอว";
    $scope.productLabel.PhotoId = "รหัสรูปภาพ";
    $scope.productLabel.Otherwise = "รายละเอียดอื่นๆ";
    $scope.unit = "นิ้ว";
    $scope.unitCurrency = "บาท"
    $scope.unitQty = "ตัว"
    $scope.validationCurrency = "กรุณาใส่เป็น ตัวเลข และ จุดทศนิยม";
    $scope.validationQty = "กรุณาใส่เป็น ตัวเลข";
    $scope.validationGeneral = "กรุณาอย่าใส่ ' และ \"";

    $scope.getProduct = function () {
        shopService.getProduct($scope.productId, function (data, status, message) {
            $scope.product = data;
            $scope.status = status;
            $scope.message = message;
        });
    };

    $scope.postProduct = function () {
        shopService.getNewPhotoId(function (data, status, message) {
            $scope.newPhotoId = data.Id;
            shopService.postProduct($scope.product, function (data, status, message) {
            });
        });
    };

    $scope.checkCategory = function (categoryId) {
        if (categoryId == 1 || categoryId == 4) {
            return false;
        } else {
            return true;
        }
    };
    
    function getCategories() {
        shopService.getCategories(function (data, status, message) {
            $scope.categories = data;
        });
    };

    function getTransportations() {
        shopService.getTransportations(function (data, status, message) {
            $scope.transportations = data;
        });
    };

    function getLastPhotoId() {
        shopService.getLastPhotoId(function (data, status, message) {
            $scope.lastPhotoId = data.Id;
        });
    };

    function getNewPhotoId() {
        shopService.getNewPhotoId(function (data, status, message) {
            $scope.newPhotoId = data.Id;
        });
    };
}]);

app.service('shopService', ['$http', '$log', function ($http, $log) {
    this.getProduct = function (id, callback) {
        $http({
            url: '/api/product/' + id,
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            },
            function (resp) {
                alert('เกิดความผิดพลาด ขณะใช้งาน getProduct()');
            });
    };
    this.postProduct = function (product, callback) {
        $http.post(
            '/api/product/',
            JSON.stringify(product)
        ).then(
            function (resp) {
                //if (resp.data)
                //    callback(resp.data, resp.status, resp.statusText)
            },
            function (resp) {
                alert('เกิดความผิดพลาดในการเพิ่มสินค้า ' + resp.statusText + '<br />' + JSON.stringify(product));
            });
    };
    this.getCategories = function (callback) {
        $http({
            url: '/api/category',
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            },
            function (resp) {
                alert('เกิดความผิดพลาด ขณะใช้งาน getCategories()');
            });
    };
    this.getTransportations = function (callback) {
        $http({
            url: '/api/transportation',
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            },
            function (resp) {
                alert('เกิดความผิดพลาด ขณะใช้งาน getTransportations()');
            });
    };
    this.getTransportation = function (id, callback) {
        $http({
            url: '/api/transportation/' + id,
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            },
            function (resp) {
                alert('เกิดความผิดพลาด ขณะใช้งาน getTransportation()');
            });
    };
    this.getLastPhotoId = function (callback) {
        $http({
            url: '/api/photo/last',
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            },
            function (resp) {
                alert('เกิดความผิดพลาด ขณะใช้งาน getLastPhotoId()');
            });
    };
    this.getNewPhotoId = function (callback) {
        $http({
            url: '/api/photo/newid',
            method: 'GET'
        }).then(
            function (resp) {
                callback(resp.data, resp.status, resp.statusText);
            },
            function (resp) {
                alert('เกิดความผิดพลาด ขณะใช้งาน getNewPhotoId()');
            });
    };
}]);

app.directive("fileinput", [function () {
    return {
        scope: {
            fileinput: "=",
            filepreview: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var preview = document.querySelector('#preview');
                var files = document.querySelector('input[type=file]').files;
                preview.innerHTML = "";
                function readAndPreview(file) {
                    if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                        scope.fileinput = file;
                        var reader = new FileReader();
                        reader.addEventListener("load", function () {
                            var image = new Image();
                            image.height = 150;
                            image.title = file.name;
                            image.className = "previewImage";
                            image.src = this.result;
                            preview.appendChild(image);
                        }, false);

                        reader.readAsDataURL(file);
                    }
                }

                if (files) {
                    [].forEach.call(files, readAndPreview);
                }
            });
        }
    }
}]);