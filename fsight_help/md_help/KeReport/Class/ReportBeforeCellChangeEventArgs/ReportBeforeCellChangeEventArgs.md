# ReportBeforeCellChangeEventArgs

ReportBeforeCellChangeEventArgs
-


# ReportBeforeCellChangeEventArgs


Сборка: Report;


## Описание


Класс ReportBeforeCellChangeEventArgs
 предназначен для работы с параметрами события, возникающего до изменения
 значения ячейки.


## Комментарии


Для работы с аргументами событий происходящих при изменении значения
 ячейки используйте класс [UiPrxCellChangeEventArgs](../UiPrxCellChangeEventArgs/UiPrxCellChangeEventArgs.htm).


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Create](ReportBeforeCellChangeEventArgs.Create.htm)
		 Конструктор Create
		 создает аргумент события, возникающего до изменения значения ячейки.


## Конструкторы, унаследованные от [ReportEventArgs](../ReportEventArgs/ReportEventArgs.htm)


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateArgs](../ReportEventArgs/ReportEventArgs.CreateArgs.htm)
		 Конструктор CreateArgs
		 создает аргумент событий компонента [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm).


## Конструкторы, унаследованные от [ReportCellEventArgs](../ReportCellEventArgs/ReportCellEventArgs.htm)


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateReportCellArgs](../ReportCellEventArgs/ReportCellEventArgs.CreateReportCellArgs.htm)
		 Конструктор CreateReportCellArgs
		 создает аргумент событий, связанных с ячейкой таблицы.


## Свойства объекта класса, унаследованные от


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Value](../../Interface/IReportBeforeCellChangeEventArgs/IReportBeforeCellChangeEventArgs.Value.htm)
		 Свойство Value определяет
		 измененное значение, которое будет содержаться в ячейке после
		 отработки события.


## Свойства объекта класса, унаследованные от [IReportEventArgs](../../Interface/IReportEventArgs/IReportEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Report](../../Interface/IReportEventArgs/IReportEventArgs.Report.htm)
		 Свойство Report возвращает
		 компонент [ReportBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ReportBox.htm),
		 сгенерировавший какое-либо событие.


		 ![](../../Property_Image.gif)
		 [Sheet](../../Interface/IReportEventArgs/IReportEventArgs.Sheet.htm)
		 Свойство Sheet возвращает
		 лист регламентного отчета, на котором произошло какое-либо событие.


## Свойства объекта класса, унаследованные от [IReportCellEventArgs](../../Interface/IReportCellEventArgs/IReportCellEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](../../Interface/IReportCellEventArgs/IReportCellEventArgs.Column.htm)
		 Свойство Column возвращает
		 индекс столбца, в котором находится ячейка, для которой генерируется
		 событие.


		 ![](../../Property_Image.gif)
		 [Row](../../Interface/IReportCellEventArgs/IReportCellEventArgs.Row.htm)
		 Свойство Row возвращает
		 индекс строки, в которой находится ячейка, для которой генерируется
		 событие.


См. также:


[Классы
 сборки Report](../KeReport_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
