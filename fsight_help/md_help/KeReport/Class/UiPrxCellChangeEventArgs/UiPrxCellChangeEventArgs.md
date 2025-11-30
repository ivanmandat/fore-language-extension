# UiPrxCellChangeEventArgs

UiPrxCellChangeEventArgs
-


# UiPrxCellChangeEventArgs


Сборка: Report;


## Описание


Класс UiPrxCellChangeEventArgs
 предназначен для работы с аргументами событий происходящих при изменении
 значения ячейки.


## Комментарии


Для работы с параметрами события, возникающего до изменения значения
 ячейки используйте класс [ReportBeforeCellChangeEventArgs](../ReportBeforeCellChangeEventArgs/ReportBeforeCellChangeEventArgs.htm).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateArgs](UiPrxCellChangeEventArgs.CreateArgs.htm)
		 Конструктор CreateArgs
		 создает аргумент события [IPrxReportUserEvents.EventOnCellChange](../../Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnCellChange.htm),
		 происходящего при изменении значения ячейки.


## Свойства объекта класса, унаследованные от [IUiPrxCellChangeEventArgs](../../Interface/IUiPrxCellChangeEventArgs/IUiPrxCellChangeEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../../Interface/IUiPrxCellChangeEventArgs/IUiPrxCellChangeEventArgs.Column.htm)
		 Свойство Column возвращает
		 столбец, в котором находится редактируемая ячейка.


		 ![](../../Property_Image.gif)
		 [Row](../../Interface/IUiPrxCellChangeEventArgs/IUiPrxCellChangeEventArgs.Row.htm)
		 Свойство Row возвращает
		 строку, в которой находится редактируемая ячейка.


		 ![](../../Property_Image.gif)
		 [Sheet](../../Interface/IUiPrxCellChangeEventArgs/IUiPrxCellChangeEventArgs.Sheet.htm)
		 Свойство Sheet возвращает
		 лист отчёта, на котором находится редактируемая ячейка.


		 ![](../../Property_Image.gif)
		 [Value](../../Interface/IUiPrxCellChangeEventArgs/IUiPrxCellChangeEventArgs.Value.htm)
		 Свойство Value возвращает
		 новое значение в ячейке.


## Свойства объекта класса, унаследованные от [IUiReportBaseEventArgs](../../Interface/IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [UiRep](../../Interface/IUiReportBaseEventArgs/IUiReportBaseEventArgs.UiRep.htm)
		 Свойство UiRep возвращает
		 объект, содержащий компонент UiReport,
		 сгенерировавший событие.


См. также:


[Классы
 сборки Report](../KeReport_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
