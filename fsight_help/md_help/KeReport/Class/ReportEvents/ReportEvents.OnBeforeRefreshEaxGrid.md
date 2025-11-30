# ReportEvents.OnBeforeRefreshEaxGrid

ReportEvents.OnBeforeRefreshEaxGrid
-


# ReportEvents.OnBeforeRefreshEaxGrid


## Синтаксис


OnBeforeRefreshEaxGrid(EaxGrid: [IEaxGrid](KeExpress.chm::/Interface/IEaxGrid/IEaxGrid.htm);
 Var Cancel: Boolean);


## Параметры


EaxGrid. Обновляемая аналитическая
 область данных;


Cancel. Признак отмены выполнения
 обновления аналитической области данных.


## Описание


Метод OnBeforeRefreshEaxGrid
 реализует событие, наступающее перед обновлением аналитической области
 данных.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Аналитическая
	 область данных обновлена не будет;


	- False. Аналитическая
	 область данных будет обновлена.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
