# IEtlPlainDataBulkConsumer.UseStopLimit

IEtlPlainDataBulkConsumer.UseStopLimit
-


# IEtlPlainDataBulkConsumer.UseStopLimit


## Синтаксис


UseStopLimit: Boolean;


## Описание


Свойство UseStopLimit определяет
 признак необходимости прекращения выполнения задачи при превышении предельного
 количества ошибочных записей.


## Комментарии


Допустимые значения:


	- True. При превышении
	 предельного количества ошибочных записей выполнение задачи будет прекращено;


	- False. При превышении
	 предельного количества ошибочных записей выполнение задачи не будет
	 прекращено.


Для задания количества ошибочных записей используйте свойство [IEtlPlainDataBulkConsumer.StopLimit](IEtlPlainDataBulkConsumer.StopLimit.htm).


## Пример


Использование свойства приведено в примере для свойства [IEtlPlainDataBulkConsumer.EventId](IEtlPlainDataBulkConsumer.EventId.htm).


См. также:


[IEtlPlainDataBulkConsumer](IEtlPlainDataBulkConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
