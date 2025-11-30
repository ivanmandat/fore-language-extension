# EtlActionOnProblem

EtlActionOnProblem
-


# EtlActionOnProblem


## Описание


Перечисление EtlActionOnProblem
 содержит способы обработки ошибок, которые могут возникнуть при работе
 с данными.


Используется следующими свойствами:


	- [IEtlPlainDataCopy.ActionOnProblem](../Interface/IEtlPlainDataCopy/IEtlPlainDataCopy.ActionOnProblem.htm);


	- [IEtlPlainDataBulkConsumer.ActionOnProblem](../Interface/IEtlPlainDataBulkConsumer/IEtlPlainDataBulkConsumer.ActionOnProblem.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Действие
		 не определено.


		 1
		 Abort. Остановка
		 выполнения задачи ETL.


		 2
		 DiscardInvalidRecords.
		 Пропуск только некорректных записей.


		 3
		 DiscardRecordsInTransaction.
		 Пропуск всех записей в рамках одной транзакции.


См. также:


[Перечисления сборки Etl](KeEtl_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
