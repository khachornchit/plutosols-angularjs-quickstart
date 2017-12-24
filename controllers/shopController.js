app.controller("shopController", ['$scope', 'shopServices', '$location', '$window', '$localStorage', function ($scope, shopServices, $location, $window, $localStorage) {
    $scope.Url = $location.absUrl();
    $scope.Labels = {
        BrandName: 'SSHOP-539',
        Navbar: {
            Home: "หน้าแรก",
            Cloth: "เสื้อผ้าสไตล์เกาหลี",
            Dress: "เดรสเกาหลี",
            NewArrival: "สินค้า มาใหม่",
            SignIn: "เข้าระบบ",
            Contact: "ติดต่อเรา"
        },
        MoreDetail: "ดูรายละเอียด",
        AvailableOption: "รายละเอียดเพิ่มเติม",
        Categories: {
            Title: 'ประเภทสินค้า',
            Items: [
                "เสื้อผ้าสไตล์เกาหลี",
                "เดรสเกาหลี",
                "สินค้ามาใหม่"
            ]
        },
        BestSellers: {
            Title: 'สินค้าขายดี'
        },
        Contactus: {
            Title: "ติดต่อเรา",
            Name: "ชื่อ",
            Email: "อีเมล์",
            Phone: "เบอร์โทร",
            Message: "ข้อความ",
            Send: "ส่งข้อความ"
        }
    };

    $scope.HomeImages = $window.HomeImages;
    $scope.NavbarImages = $window.NavbarImages;
    $scope.Products = $window.Products;
    $scope.Dresses = $window.Dresses;
    $scope.NewArrivals = $window.NewArrivals;

    $scope.InitShop = function () {
        shopServices.HomeImages(function (dataHomeImages, status, message) {
            $scope.HomeImages = dataHomeImages;
            shopServices.NavbarImages(function (dataNavbarImages, status, message) {
                $scope.NavbarImages = dataNavbarImages;
                shopServices.Products(function (dataProducts, status, message) {
                    $scope.Products = dataProducts;
                    shopServices.Dresses(function (dataDresses, status, message) {
                        $scope.Dresses = dataDresses;
                        shopServices.NewArrivals(function (dataNewArrival, status, message) {
                            $scope.NewArrivals = dataNewArrival;                                                            
                        });
                    });
                });
            });
        });       
    };
    
    $scope.GotoProductDetail = function (obj) {
        $localStorage.ProductDetail = obj;
        $window.location.href = '/product/detail/' + obj.Product.ProductId;
    };
    $scope.InitProductDetail = function () {
        $scope.ProductDetail = $localStorage.ProductDetail;
    };
    $scope.getImagePath = function (imagePath) {
        return imagePath.replace("~/", "/");
    };
    $scope.getProductUrl = function (photoId) {
        return "/product/" + photoId;
    };
    $scope.getProductDetailUrl = function (photoId) {
        return "/product/detail/" + photoId;
    };
    $scope.getPrice = function (price) {
        return 'ราคา ' + price + " บาท";
    };
    $scope.getPhotoPathHome1 = function () {
        var index = Math.floor((Math.random() * $scope.photoHome1.length) + 1);
        var imagePath = $scope.photoHome1[index].ImagePath;
        return imagePath.replace("~/", "");
    };
    $scope.CurrentUrl = function () {
        $scope.url = $location.absUrl();
    };
    $scope.getHip = function (parameter) {
        if (parameter == null) {
            return 'รอบสะโพก : -'
        } else {
            return 'รอบสะโพก : ' + parameter + ' นิ้ว';
        }
    };
    $scope.getBust = function (parameter) {
        if (parameter == null) {
            return 'รอบอก : -'
        } else {
            return 'รอบอก : ' + parameter + ' นิ้ว';
        }
    };
    $scope.getSleeveCircle = function (parameter) {
        if (parameter == null) {
            return 'รอบวงแขน : -'
        } else {
            return 'รอบวงแขน : ' + parameter + ' นิ้ว';
        }
    };
    $scope.getSleeveLength = function (parameter) {
        if (parameter == null) {
            return 'ความยาวแขน : -'
        } else {
            return 'ความยาวแขน : ' + parameter + ' นิ้ว';
        }
    };
    $scope.getSleeveBegin = function (parameter) {
        if (parameter == null) {
            return 'ขนาดต้นแขน : -'
        } else {
            return 'ขนาดต้นแขน : ' + parameter + ' นิ้ว';
        }
    };
    $scope.getHemWidth = function (parameter) {
        if (parameter == null) {
            return 'รอบชายเสื้อ : -'
        } else {
            return 'รอบชายเสื้อ : ' + parameter + ' นิ้ว';
        }
    };
    $scope.getLengthTotal = function (parameter) {
        if (parameter == null) {
            return 'ความยาว : -'
        } else {
            return 'ความยาว : ' + parameter + ' นิ้ว';
        }
    };
    $scope.getLengthFlexible = function (parameter) {
        if (parameter == null) {
            return 'สามารถยืดได้ : -'
        } else {
            return 'สามารถยืดได้ : ' + parameter + ' นิ้ว';
        }
    };
    $scope.getWaist = function (parameter) {
        if (parameter == null) {
            return 'รอบเอว : -'
        } else {
            return 'รอบเอว : ' + parameter + ' นิ้ว';
        }
    };
    $scope.getOtherwise = function (parameter) {
        if (parameter == null) {
            return 'อื่นๆ : -'
        } else {
            return 'อื่นๆ : ' + parameter + ' นิ้ว';
        }
    };
}]);