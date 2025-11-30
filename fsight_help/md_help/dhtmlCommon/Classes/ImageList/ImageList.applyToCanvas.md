# ImageList.applyToCanvas

ImageList.applyToCanvas
-


# ImageList.applyToCanvas


## Синтаксис


applyToCanvas(context: CanvasRenderingContext2D,
 rowIdx: Number, colIdx: Number);


## Параметры


context. Контекст рисования
 канвы;


rowIdx. Индекс строки;


colIdx. Индекс столбца.


## Описание


Метод applyToCanvas осуществляет
 отрисовку загруженного изображения на [канве](dhtmlGraphicBase.chm::/components/canvas/canvas.htm).


## Комментарии


Для загрузки изображения используйте метод [ImageList.loadImage](ImageList.loadImage.htm).


## Пример


Для выполнения примера создайте html-страницу и в теге <head> добавьте
 ссылки на следующие js- и css-файлы:


	- PP.js;


	- PP.css.


Также на одном уровне с html-страницей разместите файл с наименованием
 «1.png», содержащий изображение.


В конце документа в теге <body>
 в качестве значения атрибута «onLoad»
 указываем имя функции, которая выполняется после окончания загрузки тела
 страницы:


<body onload="createImagelist()">
    <div id="canvas" style="float:left; margin: 5px;"></div>
</body>
В тег <head> добавьте
 тег <script>, содержащий
 следующий код:


function createImagelist() {
    var imagelist = new PP.ImageList();
    // Создаем канву
    canvas = new PP.Ui.Canvas({
        // Устанавливаем родительский элемент
        ParentNode: document.getElementById("canvas"),
        // Устанавливаем глобальную прозрачность
        GlobalOpacity: 1,
    });
    // Указываем источник изображения
    imagelist.setSource("1.png");
    imagelist.ImageLoading.add(function () {
        // Устанавливаем размеры канвы
        canvas.setBounds(14, 9, 411, 211);
        // Устанавливам стиль заливки фигур
        canvas.setFillStyle("#6BBC80");
        // Рисуем прямоугольник
        canvas.drawRect(0, 50, 411, 211, true, false);
        // Применяем изменения канвы
        canvas.flush();
    });
    // Загружаем изображение для последующей отрисовки на канве
    function applyToCanvas() {
        imagelist.applyToCanvas(canvas.getContext(), 0, 0, 14, 14);
        if (imagelist.isImageLoaded())
            {
                console.log("Изображение загружено");
            }
            else {
                console.log("Изображение не загружено");
        };
    };
    imagelist.ImageLoaded.add(applyToCanvas);
    imagelist.loadImage();
};
В результате выполнения примера на html-странице будет размещена канва
 c изображением из заданного файла «1.png». В консоли отобразится сообщение
 о загрузке изображения:


Изображение загружено


См. также:


[ImageList](ImageList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
