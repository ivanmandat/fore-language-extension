# IUiPrxCellChangeEventArgs

IUiPrxCellChangeEventArgs
-


# IUiPrxCellChangeEventArgs


Сборка: Report;


## Описание


Интерфейс IUiPrxCellChangeEventArgs
 предназначен для работы с параметрами событий ячейки, происходящих после
 изменения значения в ячейке.


## Иерархия наследования


           [IEventArgs](ForeSys.chm::/Interface/IEventArgs/IEventArgs.htm)


           [IUiReportBaseEventArgs](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


           IUiPrxCellChangeEventArgs


## Комментарии


Интерфейс описывает аргумент событий ReportEvents.OnCellChange
 и [IPrxReportUserEvents.EventOnCellChange](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnCellChange.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](IUiPrxCellChangeEventArgs.Column.htm)
		 Свойство Column возвращает
		 столбец, в котором находится редактируемая ячейка.


		 ![](../../Property_Image.gif)
		 [Row](IUiPrxCellChangeEventArgs.Row.htm)
		 Свойство Row возвращает
		 строку, в которой находится редактируемая ячейка.


		 ![](../../Property_Image.gif)
		 [Sheet](IUiPrxCellChangeEventArgs.Sheet.htm)
		 Свойство Sheet возвращает
		 лист отчёта, на котором находится редактируемая ячейка.


		 ![](../../Property_Image.gif)
		 [Value](IUiPrxCellChangeEventArgs.Value.htm)
		 Свойство Value возвращает
		 новое значение в ячейке.


## Свойства, унаследованные от [IUiReportBaseEventArgs](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [UiRep](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.UiRep.htm)
		 Свойство UiRep возвращает
		 объект, содержащий компонент UiReport,
		 сгенерировавший событие.


См. также:


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
