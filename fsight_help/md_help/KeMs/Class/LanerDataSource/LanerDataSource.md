# LanerDataSource

LanerDataSource
-


# LanerDataSource


Сборка: Ms;


## Описание


Класс LanerDataSource предназначен
 для работы с рабочей книгой базы данных временных рядов, являющейся источником
 данных для интеллектуального анализа.


## Комментарии


Если данные для интеллектуального анализа расположены в таблице репозитория,
 используйте класс [TableDataSource](../TableDataSource/TableDataSource.htm).


## Свойства объекта класса, унаследованные от [IDmLanerDataSource](../../Interface/IDmLanerDataSource/IDmLanerDataSource.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Laner](../../Interface/IDmLanerDataSource/IDmLanerDataSource.Laner.htm)
		 Свойство Laner
		 определяет рабочую книгу базы данных временных рядов, содержащую
		 данные для интеллектуального анализа.


## Свойства объекта класса, унаследованные от [IDmDataSource](../../Interface/IDmDataSource/IDmDataSource.htm)


		 Имя свойства


		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Caption](../../Interface/IDmDataSource/IDmDataSource.Caption.htm)
		 Свойство Caption
		 определяет заголовок источника данных.


		 ![](../../Property_Image.gif)
		 [DataInColumns](../../Interface/IDmDataSource/IDmDataSource.DataInColumns.htm)
		 Свойство DataInColumns
		 определяет признак расположения данных в столбцах.


		 ![](../../Property_Image.gif)
		 [Field](../../Interface/IDmDataSource/IDmDataSource.Field.htm)
		 Свойство Field
		 возвращает указанное поле источника данных.


		 ![](../../Property_Image.gif)
		 [FieldCount](../../Interface/IDmDataSource/IDmDataSource.FieldCount.htm)
		 Свойство FieldCount
		 возвращает количество полей в источнике данных.


		 ![](../../Property_Image.gif)
		 [Item](../../Interface/IDmDataSource/IDmDataSource.Item.htm)
		 Свойство Item возвращает
		 значение указанного поля из источника данных.


		 ![](../../Property_Image.gif)
		 [ReadOnly](../../Interface/IDmDataSource/IDmDataSource.ReadOnly.htm)
		 Свойство ReadOnly
		 определяет признак доступности данных только для чтения.


		 ![](../../Property_Image.gif)
		 [RecordCount](../../Interface/IDmDataSource/IDmDataSource.RecordCount.htm)
		 Свойство RecordCount
		 возвращает количество записей в источнике данных.


		 ![](../../Property_Image.gif)
		 [SupportsEdit](../../Interface/IDmDataSource/IDmDataSource.SupportsEdit.htm)
		 Свойство SupportsEdit
		 определяет признак поддержки редактирования источником данных.


## Методы объекта класса, унаследованные от [IDmDataSource](../../Interface/IDmDataSource/IDmDataSource.htm)


		 Имя метода


		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddResultColumn](../../Interface/IDmDataSource/IDmDataSource.AddResultColumn.htm)
		 Метод AddResultColumn
		 добавляет столбец, содержащий результаты анализа.


		 ![](../../Sub_Image.gif)
		 [AddResultRows](../../Interface/IDmDataSource/IDmDataSource.AddResultRows.htm)
		 Метод AddResultRows
		 добавляет строки, содержащие результаты анализа.


		 ![](../../Sub_Image.gif)
		 [CopyFrom](../../Interface/IDmDataSource/IDmDataSource.CopyFrom.htm)
		 Метод CopyFrom
		 выполняет копирование указанного источника данных.


		 ![](../../Sub_Image.gif)
		 [RefreshRecordCount](../../Interface/IDmDataSource/IDmDataSource.RefreshRecordCount.htm)
		 Метод RefreshRecordCount
		 обновляет количество записей в источнике данных.


		 ![](../../Sub_Image.gif)
		 [Save](../../Interface/IDmDataSource/IDmDataSource.Save.htm)
		 Метод Save сохраняет
		 источник данных.


См. также:


[Классы
 сборки Ms](../KeMs_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
