# IDmReportDataSource

IDmReportDataSource
-


# IDmReportDataSource


Сборка: Ms;


## Описание


Интерфейс IDmReportDataSource
 предназначен для работы с регламентным отчётом как источником данных для
 интеллектуального анализа.


## Иерархия наследования


           [IDmDataSource](../IDmDataSource/IDmDataSource.htm)


           IDmReportDataSource


## Комментарии


Если данные для интеллектуального анализа расположены в таблице репозитория,
 то используйте интерфейс [IDmTableDataSource](../IDmTableDataSource/IDmTableDataSource.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Range](IDmReportDataSource.Range.htm)
		 Свойство Range
		 определяет диапазон ячеек таблицы, содержащий данные.


		 ![](../../Property_Image.gif)
		 [TabSheet](IDmReportDataSource.TabSheet.htm)
		 Свойство TabSheet
		 определяет таблицу, содержащую данные.


## Свойства, унаследованные от [IDmDataSource](../IDmDataSource/IDmDataSource.htm)


		 Имя свойства


		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Caption](../IDmDataSource/IDmDataSource.Caption.htm)
		 Свойство Caption
		 определяет заголовок источника данных.


		 ![](../../Property_Image.gif)
		 [DataInColumns](../IDmDataSource/IDmDataSource.DataInColumns.htm)
		 Свойство DataInColumns
		 определяет признак расположения данных в столбцах.


		 ![](../../Property_Image.gif)
		 [Field](../IDmDataSource/IDmDataSource.Field.htm)
		 Свойство Field
		 возвращает указанное поле источника данных.


		 ![](../../Property_Image.gif)
		 [FieldCount](../IDmDataSource/IDmDataSource.FieldCount.htm)
		 Свойство FieldCount
		 возвращает количество полей в источнике данных.


		 ![](../../Property_Image.gif)
		 [Item](../IDmDataSource/IDmDataSource.Item.htm)
		 Свойство Item возвращает
		 значение указанного поля из источника данных.


		 ![](../../Property_Image.gif)
		 [ReadOnly](../IDmDataSource/IDmDataSource.ReadOnly.htm)
		 Свойство ReadOnly
		 определяет признак доступности данных только для чтения.


		 ![](../../Property_Image.gif)
		 [RecordCount](../IDmDataSource/IDmDataSource.RecordCount.htm)
		 Свойство RecordCount
		 возвращает количество записей в источнике данных.


		 ![](../../Property_Image.gif)
		 [SupportsEdit](../IDmDataSource/IDmDataSource.SupportsEdit.htm)
		 Свойство SupportsEdit
		 определяет признак поддержки редактирования источником данных.


## Методы


		 Имя метода


		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyToTabSheet](IDmReportDataSource.CopyToTabSheet.htm)
		 Метод CopyToTabSheet
		 копирует данные в отдельную таблицу.


## Методы, унаследованные от [IDmDataSource](../IDmDataSource/IDmDataSource.htm)


		 Имя метода


		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddResultColumn](../IDmDataSource/IDmDataSource.AddResultColumn.htm)
		 Метод AddResultColumn
		 добавляет столбец, содержащий результаты анализа.


		 ![](../../Sub_Image.gif)
		 [AddResultRows](../IDmDataSource/IDmDataSource.AddResultRows.htm)
		 Метод AddResultRows
		 добавляет строки, содержащие результаты анализа.


		 ![](../../Sub_Image.gif)
		 [CopyFrom](../IDmDataSource/IDmDataSource.CopyFrom.htm)
		 Метод CopyFrom
		 выполняет копирование указанного источника данных.


		 ![](../../Sub_Image.gif)
		 [RefreshRecordCount](../IDmDataSource/IDmDataSource.RefreshRecordCount.htm)
		 Метод RefreshRecordCount
		 обновляет количество записей в источнике данных.


		 ![](../../Sub_Image.gif)
		 [Save](../IDmDataSource/IDmDataSource.Save.htm)
		 Метод Save сохраняет
		 источник данных.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
