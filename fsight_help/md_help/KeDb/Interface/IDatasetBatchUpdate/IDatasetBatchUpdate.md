# IDatasetBatchUpdate

IDatasetBatchUpdate
-


# IDatasetBatchUpdate


## Описание


Интерфейс IDatasetBatchUpdate
 содержит свойства и методы для обновления значений записей в источнике
 данных.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [BatchCommand](IDatasetBatchUpdate.BatchCommand.htm)
		 Свойство BatchCommand
		 определяет способ обновления записей в источнике данных.


		 ![](../../Property_Image.gif)
		 [Connection](IDatasetBatchUpdate.Connection.htm)
		 Свойство Connection
		 возвращает текущее соединение с сервером БД.


		 ![](../../Property_Image.gif)
		 [Failed](IDatasetBatchUpdate.Failed.htm)
		 Свойство Failed возвращает
		 признак обновления записи в источнике данных после применения
		 обновления.


		 ![](../../Property_Image.gif)
		 [FailPolicy](IDatasetBatchUpdate.FailPolicy.htm)
		 Свойство FailPolicy
		 определяет вид действия, осуществляемый при возникновении ошибки
		 во время обновления.


		 ![](../../Property_Image.gif)
		 [FastInsert](IDatasetBatchUpdate.FastInsert.htm)
		 Свойство FastInsert
		 определяет, используется ли режим быстрой вставки для обновления
		 записей источника данных.


		 ![](../../Property_Image.gif)
		 [Fields](IDatasetBatchUpdate.Fields.htm)
		 Свойство Fields позволяет
		 работать с параметрами коллекции полей источника данных.


		 ![](../../Property_Image.gif)
		 [KeyFieldNames](IDatasetBatchUpdate.KeyFieldNames.htm)
		 Свойство KeyFieldNames
		 определяет имена ключевых полей.


		 ![](../../Property_Image.gif)
		 [RecordCount](IDatasetBatchUpdate.RecordCount.htm)
		 Свойство RecordCount
		 возвращает количество имеющихся записей в буфере.


		 ![](../../Property_Image.gif)
		 [RecordFields](IDatasetBatchUpdate.RecordFields.htm)
		 Свойство RecordFields
		 возвращает массив значений записи, находящейся в буфере.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AddRecord](IDatasetBatchUpdate.AddRecord.htm)
		 Метод AddRecord добавляет
		 обновленные значения записи в буфер.


		 ![](../../Sub_Image.gif)
		 [BeginUpdate](IDatasetBatchUpdate.BeginUpdate.htm)
		 Метод BeginUpdate начинает
		 обновление (очистка буфера).


		 ![](../../Sub_Image.gif)
		 [Commit](IDatasetBatchUpdate.Commit.htm)
		 Метод Commit применяет
		 обновление (сохраняет значение записей из буфера в источник данных).


		 ![](../../Sub_Image.gif)
		 [Rollback](IDatasetBatchUpdate.Rollback.htm)
		 Метод Rollback отменяет
		 обновление.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
