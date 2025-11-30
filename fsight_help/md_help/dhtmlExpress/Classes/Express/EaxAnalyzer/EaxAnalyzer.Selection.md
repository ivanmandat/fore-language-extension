# EaxAnalyzer.Selection

EaxAnalyzer.Selection
-


**


# EaxAnalyzer.Selection


## Синтаксис


Selection: Object


## Описание


Свойство Selection** содержит выделенные ячейки в таблице экспресс-отчета.


## Комментарии


Значение свойства задается из JSON и с помощью метода setSelection, а возвращается с помощью метода getSelection.


Свойство содержит значение в виде массива JSON-объектов со следующими полями: range - область выделения в таблице экспресс-отчета, type - тип выделения.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Выделим произвольную область в таблице экспресс-отчета, а затем получим координаты, длину и ширину данной области:


var eaxAnalyzer = expressBox.getSource();
// Работаем, если были выделены ячейки
if(eaxAnalyzer.getIsSelectionChanged()) {
    // Получим выделенные элементы экспресс-отчета
    var selection = eaxAnalyzer.getSelection();
    // Получим информацию о первой выделенной области
    var info = selection.range.parts.it[0];
    // Выведем координаты выделенной области
    console.log("Top: " + info.top);
    console.log("Left: " + info.left);
    // Выведем ширину и высоту выделенной области
    console.log("Width: " + info.width);
    console.log("Height: " + info.height);
}

В результате выполнения примера в консоли браузера будут выведены координаты, ширина и высота выделенной области в таблице:


Top: 3

Left: 2

Width: 2

Height: 4


См. также:


[EaxAnalyzer](EaxAnalyzer.ChartData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
