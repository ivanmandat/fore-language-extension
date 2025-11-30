# EaxMdService.setGridParam

EaxMdService.setGridParam
-


# EaxMdService.setGridParam


## Синтаксис


setGridParam(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 metadata: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*metadata.* Метаданные;


*callback.* Возвратная функция.


## Описание


Метод setGridParam задает параметры
 таблицы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей в рабочей
 области экспресс-отчёта.


// Задаем координаты ячейки
Metadata = {
headerTitleType: "Rows",
headerTitleContentType: "Attr",
targetSection: "Corner"
}
// Зададим параметры
eaxMdService.setGridParam(eaxAnalyzer, Metadata );
// Перерисовываем
expressBox.getDataView().refreshAll();

В результате выполнения примера для уголка таблицы было задано наименование
 атрибута из боковика.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
