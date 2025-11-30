# Конструктор CanvasSVGRenderer

Конструктор CanvasSVGRenderer
-


# Конструктор CanvasSVGRenderer


## Синтаксис


PP.Ui.CanvasSVGRenderer(settings: Object);


## Параметры


settings. JSON-объект со значениями
 свойств класса.


## Описание


Конструктор CanvasSVGRenderer
 создаёт экземпляр класса PP.Ui.CanvasSVGRenderer.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы сценария PP.js, PP.Util.js и файл стилей PP.css. В теге <body>
 в качестве значения атрибута «onLoad» требуется указать функцию «Ready()».


Создадим SVG-объект с изображением, преобразуем его в объект канвы,
 увеличим в 5 раз и добавим на страницу:


// Путь к изображению
var IMAGE_SOURCE = "../build/img/app/oldie_ie.jpg";
// Создаём SVG-объект с изображением
var createSVGImage = function(imageSrc, width, height) {
    // Создаем SVG-элемент
    var svgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElem.setAttribute("width", width);
    svgElem.setAttribute("height", height);
    var imageElem = document.createElementNS("http://www.w3.org/2000/svg", "image");
    imageElem.setAttributeNS(null, "width", width);
    imageElem.setAttributeNS(null, "height", height);
    imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", imageSrc);
    imageElem.setAttributeNS(null, "visibility", "visible");
    svgElem.appendChild(imageElem);
    return svgElem;
};
// Преобразуем SVG-объект в объект типа canvas
var renderSVGToCanvas = function(sender, svgElem) {
    var renderer = new PP.Ui.CanvasSVGRenderer({
        ImagePreloader: sender,
        ScaleX: 5,
        ScaleY: 5
    });
    return renderer.render(svgElem);
};
// Загружаем SVG-элемент с изображением в указанную вершину
var loadImage = function(node, imageSrc, svgElem) {
    var imagePreloader = new PP.Ui.ImagePreloader();
    imagePreloader.Preloaded.add(function() {
        var canvas = renderSVGToCanvas(imagePreloader, svgElem);
        node.appendChild(canvas);
    });
    imagePreloader.preload(imageSrc);
};
function Ready() {
    // Создаём SVG-элемент
    var svgElem = createSVGImage(IMAGE_SOURCE, 50, 50);
    loadImage(document.body, IMAGE_SOURCE, svgElem);
}
В результате выполнения примера на страницу было добавлено изображение,
 размещённое в элементе <canvas> и увеличенное в 5 раз:


![](CanvasSVGRenderer.png)


См. также:


[CanvasSVGRenderer](CanvasSVGRenderer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
