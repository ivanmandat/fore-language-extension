# ReportEvents.OnBeforeTransferDataDataIsland

ReportEvents.OnBeforeTransferDataDataIsland
-


# ReportEvents.OnBeforeTransferDataDataIsland


## Синтаксис


OnBeforeTransferDataDataIsland(DataIsland: [IPrxDataIsland](../../Interface/IPrxDataIsland/IPrxDataIsland.htm);
 Var Cancel: Boolean);


## Параметры


DataIsland. Область данных,
 сгенерировавшая событие;


Cancel.
 Признак отмены сохранения данных.


## Описание


Метод OnBeforeTransferDataDataIsland
 реализует событие, происходящее перед сохранением измененных значений
 области данных.


## Комментарии


Допустимые значения параметра Cancel:


	- True. Данные сохранены
	 не будут;


	- False. Данные будут
	 сохранены. Значение по умолчанию.


См. также:


[ReportEvents](ReportEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
