# EaxMdService.getTopobase

EaxMdService.getTopobase
-


**


# EaxMdService.getTopobase


## Синтаксис


getTopobase(report: [PP.Exp.EaxAnalyzer](EaxMdService.getTopobase.htm),
 mapkey: Number, typeTopobase: [PP.MapChartType](dhtmlMapChart.chm::/Enums/MapChartType.htm),
 callback: PP.Delegate);


## Параметры


*report.* Экспресс-отчет,
 для карты которого нужно загрузить топооснову;


*mapkey.* Ключ карты экспресс-отчета;


*typeTopobase.* Тип карты, для которой
 нужно загрузить топооснову;


*callback.* Возвратная
 функция. Необязательный параметр.


## Описание


Метод getTopobase** возвращает
 топооснову карты экспресс-отчета.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»), а также в отчёте должна быть [изменена карта](UiMaps.chm::/Configure/MapConfigure.htm)
 на карту в формате svg. Перейдём в рабочую область представления «Карта». Получим топооснову карты
 экспресс-отчета:


// Получим сервис для работы с экспресс-отчетом
var eaxMdService = expressBox.getDataView().getService();
// Задаем тип топоосновы
var mapChartType = PP.Ui.MapChartType.SVG;
// Получим топооснову карты экспресс-отчета
console.log(eaxMdService.getTopobase(expressBox.getSource(), expressBox.getSource().getTopobaseOd().k, mapChartType));

В результате выполнения примера в консоль браузера была выведена в виду
 строки топооснова карты экспресс-отчета. Далее приводится фрагмент вывода:


<svg version="1.1" xmlns:p5="http://www.fsight.ru"
 width="988.523px" height="593.97px" xml:space="preserve"
 proportionality="0.6512" xmlns="http://www.w3.org/2000/svg">

<g p5:ItemType="Layer" id="RootLayer" flags="0">

<g id="Regions" p5:ItemType="Layer" flags="0">


...


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
