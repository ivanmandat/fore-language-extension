# EaxAnalyzer.getServiceTbFormat

EaxAnalyzer.getServiceTbFormat
-


**


# EaxAnalyzer.getServiceTbFormat


## Синтаксис


getServiceTbFormat(typeTopobase: [PP.MapChartType](dhtmlMapChart.chm::/Enums/MapChartType.htm));


## Параметры


*typeTopobase.* Формат топоосновы, указываемый в виде объекта
 типа [PP.MapChartType](dhtmlMapChart.chm::/Enums/MapChartType.htm).


## Описание


Метод getServiceTbFormat**
 преобразует указанный формат топоосновы в TopobaseFormat (перечисление
 сервисов платформы).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Преобразуем формат топоосновы в
 SVG :


var eaxAnalyzer = expressBox.getSource();
// Преобразуем формат топоосновы
console.log("TopobaseFormat: " + eaxAnalyzer.getServiceTbFormat(PP.MapChart.Type.SVG));

В результате выполнения примера в консоли браузера будет выведен преобразованный
 формат:


TopobaseFormat: Svg


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
