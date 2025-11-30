# IDmDataSource

IDmDataSource
-


# IDmDataSource


Сборка: Ms;


## Описание


Интерфейс IDmDataSource предназначен
 для работы с источником данных для интеллектуального анализа.


## Иерархия наследования


           IDmDataSource


## Комментарии


Данный класс является базовым. Для настройки специфических параметров
 источника приведите IDmDataSource
 к одному из следующих интерфейсов:


	- [IDmReportDataSource](../IDmReportDataSource/IDmReportDataSource.htm).
	 Источник данных - регламентный отчёт;


	- [IDmTableDataSource](../IDmTableDataSource/IDmTableDataSource.htm).
	 Источник данных - таблица.


## Свойства


		 Имя свойства


		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Caption](IDmDataSource.Caption.htm)
		 Свойство Caption
		 определяет заголовок источника данных.


		 ![](../../Property_Image.gif)
		 [DataInColumns](IDmDataSource.DataInColumns.htm)
		 Свойство DataInColumns
		 определяет признак расположения данных в столбцах.


		 ![](../../Property_Image.gif)
		 [Field](IDmDataSource.Field.htm)
		 Свойство Field
		 возвращает указанное поле источника данных.


		 ![](../../Property_Image.gif)
		 [FieldCount](IDmDataSource.FieldCount.htm)
		 Свойство FieldCount
		 возвращает количество полей в источнике данных.


		 ![](../../Property_Image.gif)
		 [Item](IDmDataSource.Item.htm)
		 Свойство Item возвращает
		 значение указанного поля из источника данных.


		 ![](../../Property_Image.gif)
		 [ReadOnly](IDmDataSource.ReadOnly.htm)
		 Свойство ReadOnly
		 определяет признак доступности данных только для чтения.


		 ![](../../Property_Image.gif)
		 [RecordCount](IDmDataSource.RecordCount.htm)
		 Свойство RecordCount
		 возвращает количество записей в источнике данных.


		 ![](../../Property_Image.gif)
		 [SupportsEdit](IDmDataSource.SupportsEdit.htm)
		 Свойство SupportsEdit
		 определяет признак поддержки редактирования источником данных.


## Методы


		 Имя метода


		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddResultColumn](IDmDataSource.AddResultColumn.htm)
		 Метод AddResultColumn
		 добавляет столбец, содержащий результаты анализа.


		 ![](../../Sub_Image.gif)
		 [AddResultRows](IDmDataSource.AddResultRows.htm)
		 Метод AddResultRows
		 добавляет строки, содержащие результаты анализа.


		 ![](../../Sub_Image.gif)
		 [CopyFrom](IDmDataSource.CopyFrom.htm)
		 Метод CopyFrom
		 выполняет копирование указанного источника данных.


		 ![](../../Sub_Image.gif)
		 [RefreshRecordCount](IDmDataSource.RefreshRecordCount.htm)
		 Метод RefreshRecordCount
		 обновляет количество записей в источнике данных.


		 ![](../../Sub_Image.gif)
		 [Save](IDmDataSource.Save.htm)
		 Метод Save сохраняет
		 источник данных.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
