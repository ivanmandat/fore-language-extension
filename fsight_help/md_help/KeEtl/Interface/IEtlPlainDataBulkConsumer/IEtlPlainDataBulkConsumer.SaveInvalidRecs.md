# IEtlPlainDataBulkConsumer.SaveInvalidRecs

IEtlPlainDataBulkConsumer.SaveInvalidRecs
-


# IEtlPlainDataBulkConsumer.SaveInvalidRecs


## Синтаксис


SaveInvalidRecs: Boolean;


## Описание


Свойство SaveInvalidRecs определяет
 признак необходимости сохранения ошибочных (пропущенных) записей в отдельный
 файл.


## Комментарии


Допустимые значения:


	- True. Пропущенные записи
	 будут сохранены в отдельном файле;


	- False. Пропущенные записи
	 не будут сохранены в отдельном файле.


Для определения имени файла для ошибочных (пропущенных) записей используйте
 свойство [IEtlPlainDataBulkConsumer.InvalidRecsFileName](IEtlPlainDataBulkConsumer.InvalidRecsFileName.htm).


## Пример


Использование свойства приведено в примере для свойства [IEtlPlainDataBulkConsumer.EventId](IEtlPlainDataBulkConsumer.EventId.htm).


См. также:


[IEtlPlainDataBulkConsumer](IEtlPlainDataBulkConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
