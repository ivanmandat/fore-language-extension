# EaxMdService.setGridCMenuCellInHeader

EaxMdService.setGridCMenuCellInHeader
-


**


# EaxMdService.setGridCMenuCellInHeader


## Синтаксис


setGridCMenuCellInHeader(report: PP.Exp.[EaxDocument](../EaxDocument/EaxDocument.htm),
 metadata: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчета;


*metadata.* Устанавливаемые настройки заголовков таблицы;


*callback.* Возвратная
 функция.


## Описание


Метод setGridCMenuCellInHeader**
 реализует пункты контекстного меню заголовков таблицы для детализации,
 обобщения или фиксирования элементов.


## Комментарии


Метод устарел, для детализации/обобщения используется событие [EaxGridView.HyperlinkMouseDown](../EaxGridView/EaxGridView.HyperlinkMouseDown.htm).


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
