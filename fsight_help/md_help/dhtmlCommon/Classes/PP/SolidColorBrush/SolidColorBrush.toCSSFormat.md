# SolidColorBrush.toCSSFormat

SolidColorBrush.toCSSFormat
-


# SolidColorBrush.toCSSFormat


## Синтаксис


toCSSFormat();


## Описание


Метод toCSSFormat возвращает
 строку в формате css с настройками кисти со сплошной градиентной заливкой.


## Пример


Для выполнения примера необходимо наличие на html-странице
 ссылок на файлы сценария jquery.js, PP.js и файл стилей PP.css. Создадим div-элемент и
 установим для него сплошную заливку фона:


// Создаём div-элемент
var divElem = PP.createElement(document.body);
// Настраиваем стили для данного элемента
divElem.style.cssText = "width: 200px; height: 100px; border: 1px solid rgb(102, 102, 102);";
// Создаём кисть со сплошной заливкой
var brush = new PP.SolidColorBrush({
    Color: "Yellow",
    Opacity: 0.2
});
// Устанавливаем заливку фона для div-элемента
divElem.style.cssText += brush.toCSSFormat();
В результате выполнения примера в документе был создан div-элемент,
 для которого была применена сплошная заливка:


![](SolidColorBrush_toCSSFormat.png)


[SolidColorBrush](SolidColorBrush.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
