# EaxMdService.setMapSelection

EaxMdService.setMapSelection
-


**


# EaxMdService.setMapSelection


## Синтаксис


setMapSelection(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 elements: Object, markers: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчета;


*elements.* Идентификаторы
 выделяемых территорий;


*markers.* Идентификаторы
 выделяемых маркеров;


*callback.* Возвратная
 функция.


## Описание


Метод setMapSelection**
 устанавливает выделение объектов карты экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей
 области экспресс-отчёта. Установим выделение объекта:


// Определим выделяемый элемент
elem = "RU-YAR";
// Установим выделение
eaxMdService.setMapSelection(eaxAnalyzer, elem);
// Получим представление карты
dV = expressBox.getDataView();
mV = dV.getMapView();
// Обновим карту
mV.refreshAll();

В результате выполнения примера в карте было применено выделение к элементу
 с идентификатором "RU-YAR".


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
