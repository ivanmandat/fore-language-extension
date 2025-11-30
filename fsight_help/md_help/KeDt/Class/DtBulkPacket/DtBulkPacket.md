# DtBulkPacket

DtBulkPacket
-


# DtBulkPacket


## Описание


Класс DtBulkPacket реализует объект, представляющий из себя пакет данных для транзакционного приёмника данных.


## Комментарии


Объект данного класса используется при экспорте с помощью метода [PutBulk](../../Interface/IDtBulkConsumer/IDtBulkConsumer.PutBulk.htm).


## Свойства объекта класса, унаследованные от [IDtBulkPacket](../../Interface/IDtBulkPacket/IDtBulkPacket.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Data](../../Interface/IDtBulkPacket/IDtBulkPacket.Data.htm)
		 Свойство Data определяет
		 двумерный массив данных, которые необходимо экспортировать в рамках
		 одной транзакции.


		 ![](../../Property_Image.gif)
		 [ErrorMessage](../../Interface/IDtBulkPacket/IDtBulkPacket.ErrorMessage.htm)
		 Свойство ErrorMessage
		 возвращает текст сообщения об ошибке после вставки пакета.


		 ![](../../Property_Image.gif)
		 [Failed](../../Interface/IDtBulkPacket/IDtBulkPacket.Failed.htm)
		 Свойство Failed возвращает
		 признак неудачного экспорта указанной записи.


		 ![](../../Property_Image.gif)
		 [FailedRows](../../Interface/IDtBulkPacket/IDtBulkPacket.FailedRows.htm)
		 Свойство FailedRows
		 возвращает количество записей, во время экспорта которых произошла
		 ошибка.


		 ![](../../Property_Image.gif)
		 [FailPolicy](../../Interface/IDtBulkPacket/IDtBulkPacket.FailPolicy.htm)
		 Свойство FailPolicy
		 определяет вид действия, осуществляемый при возникновении ошибки
		 во время экспорта данных.


		 ![](../../Property_Image.gif)
		 [StopLimit](../../Interface/IDtBulkPacket/IDtBulkPacket.StopLimit.htm)


		 Свойство StopLimit
		 определяет количество ошибочных записей, при достижении которого
		 выполнение операции прекращается.


		 ![](../../Property_Image.gif)
		 [Successful](../../Interface/IDtBulkPacket/IDtBulkPacket.Successful.htm)
		 Свойство Successful
		 возвращает признак успешного завершения экспорта пакета данных.


См. также:


[Классы сборки Dt](../KeDt_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
