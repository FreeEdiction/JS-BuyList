var LIST = $('.firstColomn');
var LIST2 = $('.products');
var LIST3 = $('.Bought');
var ITEM_TEMPLATE = $('.prod').html();
var ITEM_TEMPLATE1 = $('.prod1').html();
var ITEM_TEMPLATE2 = $('.prod2').html();

$(function(){
    $('.butAdd').click(function(){
       var title = $('input').val();
        if(title!="")
        addItem(title);
    });
});
document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
        var title = $('input').val();
        if(title!="")
        addItem(title);
    }
    // Отменяем действие браузера
    return false;
}

function addItem(title) {
    var node = $(ITEM_TEMPLATE); //Create new HTML node
    var nodeX = $(ITEM_TEMPLATE1);
    var nodeY = $(ITEM_TEMPLATE2);

    node.find(".productName").text(title);
    nodeX.find(".span").text(title);
    nodeY.find(".span").text(title);

//Delete Action
    node.find(".deleting").click(function(){
        node.remove();
        nodeX.remove();
        nodeY.remove();
    });
    node.find(".minus").click(function(){
        node.find(".num").text(parseInt(node.find(".num").text())+1);
        nodeX.find(".num1").text(parseInt(nodeX.find(".num1").text())+1);
        nodeY.find(".num1").text(parseInt(nodeY.find(".num1").text())+1);

        if(parseInt(node.find(".num").text())< 2){
            node.find(".plus").attr('disabled',true);
        }
        if(parseInt(node.find(".num").text())>= 2){
            node.find(".plus").attr('disabled',false);
        }
    });
    node.find(".plus").click(function(){
        node.find(".num").text(parseInt(node.find(".num").text())-1);
        nodeX.find(".num1").text(parseInt(nodeX.find(".num1").text())-1);
        nodeY.find(".num1").text(parseInt(nodeY.find(".num1").text())-1);

        if(parseInt(node.find(".num").text())< 2){
            node.find(".plus").attr('disabled',true);
        }
        if(parseInt(node.find(".num").text())>= 2){
            node.find(".plus").attr('disabled',false);
        }
    });
    node.find(".buying").click(function () {
        buyItem(node,nodeX,nodeY);
    });
    node.find(".productName").click(function () {
         changeName(node,nodeX,nodeY);
         node.find(".focus").focusout(function () {
             finishChanging(node, nodeX, nodeY);
         });


    });

    node.find(".notBuying").click(function () {
        notBuyItem(node,nodeX,nodeY);
    });
    $(".input").val("");
    $(".input").focus();
    nodeY.hide();
    LIST.append(node); //Add to the end of the list
    LIST2.append(nodeX);
    LIST3.append(nodeY);



}
function notBuyItem(node,nodeX,nodeY) {
    node.find(".name").removeClass("fontCrossed");
    node.find(".minus").removeClass("visibility");
    node.find(".plus").removeClass("visibility");
    node.find(".num").removeClass("position");
    node.find(".buying").show();
    node.find(".deleting").show();
    node.find(".buying").removeClass("visbility");
    node.find(".deleting").removeClass("visbility");
    node.find(".notBuying").addClass("visibility");
    nodeX.show();
    nodeY.hide();

}


function buyItem(node,nodeX,nodeY) {
    node.find(".name").addClass("fontCrossed");
    node.find(".minus").addClass("visibility");
    node.find(".plus").addClass("visibility");
    node.find(".num").addClass("position");
    node.find(".buying").hide();
    node.find(".deleting").hide();
    node.find(".buying").addClass("visbility");
    node.find(".deleting").addClass("visbility");
    node.find(".notBuying").removeClass("visibility");
    nodeX.hide();
    nodeY.find(".span").addClass("fontCrossed");
    nodeY.show();
}
function changeName(node,nodeX,nodeY) {
    node.find(".focus").val(node.find(".productName").text());
    if (!node.find(".name").hasClass("fontCrossed")) {
    node.find(".productName").hide();
    node.find(".focus").removeClass("visibility");
    node.find(".focus").focus();
}
}
function finishChanging(node,nodeX,nodeY) {
    if (node.find(".focus").val() == "") {
        alert("Товар не може мати пусте ім'я! ВВедіть назву товару!");
        node.find(".focus").focus();
    }
    if (node.find(".focus").val() != "") {
    node.find(".productName").text(node.find(".focus").val());
    nodeX.find(".span").text(node.find(".focus").val());
    nodeY.find(".span").text(node.find(".focus").val());
    node.find(".focus").addClass("visibility");
    node.find(".productName").show();
}
}

function updateNode(node, fn) {
    node.fadeOut(250, function(){
        fn();
        node.fadeIn(250);
    });
}
addItem("Огірки");
addItem("Помідори");
addItem("Капуста");




