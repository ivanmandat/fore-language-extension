# Конструктор Style

Конструктор Style
-


**


# Конструктор Style


## Синтаксис


PP.Style(settings: Object);


## Параметры


settings. JSON-объект
 со значениями свойств экземпляра класса.


## Описание


Конструктор Style** создаёт экземпляр класса [Style](Style.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы сценария jquery.js, PP.js и файл стилей PP.css. Добавим в документ
 текстовую область и установим для неё новый стиль:


<script type="text/javascript">
    var textArea, style;
    $().ready(function () {
        // Создадим текстовую область
        textArea = new PP.Ui.TextArea({
                Width: 200,
                Height: 100,
                Content: "2013" // Содержимое
            });
        // Создадим тень жёлтого цвета
        var shadow = new PP.Shadow({
                Color: new PP.Color(PP.Color.Colors.yellow)
            });

        shadow.setAngle(45); // Угол падения тени
        shadow.setSize(10); // Разница в размере тени относительно объекта
        // Создадим стиль для текстовой области
        style = {
            Release: new PP.Style({
                    // Создадим кисть со сплошной заливкой
                    Background: new PP.SolidColorBrush({
                            Color: PP.Color.Colors.lightblue
                        }),
                    // Зададим полужирный курсив
                    Font: new PP.Font({
                            IsBold: true,

                            IsItalic: true
                        }),
                    // Создадим границу
                    Border: new PP.Border({
                            Radius: 10
                        }),
                    Shadow: shadow // Установим тень
                })
        };
        // Установим стиль
        textArea.setStyle(style);
        // Добавим данную область в документ
        textArea.addToNode(document.body);
        // Получим представление стиля в виде CSS
        console.log("CSS: " + style.Release.toCSSFormat());
    });
</script>

В результате выполнения примера в документе была создана текстовая область
 с голубым цветом заливки, полужирным и курсивным начертанием шрифта, границей
 с радиусом закругления, равным 10, и тенью жёлтого цвета:


![](Style.png)


В консоли браузера было выведено представление стиля, установленного
 для текстовой области, в виде строки CSS:


CSS: box-shadow:0px 0px 0px 10px rgba(255, 255,
 0, 1) ;color:#000000;font-size:12px;font-family:Calibri, Helvetica;font-weight:bold;font-style:italic;text-decoration:none;border-style:none;border-width:0px;border-radius:10px;background:#ADD8E6;


См. также:


[Style](Style.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
