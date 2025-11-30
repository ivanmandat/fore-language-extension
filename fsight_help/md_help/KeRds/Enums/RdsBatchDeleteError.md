# RdsBatchDeleteError

RdsBatchDeleteError
-


# RdsBatchDeleteError


## Описание


Перечисление RdsBatchDeleteError
 содержит виды ошибок, возникших при выполнении пакета удаления элементов
 справочника НСИ.


Используется следующим методом:


	- [IRdsBatchCallback.OnError](../Interface/IRdsBatchCallback/IRdsBatchCallback.OnError.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Common. Общая ошибка.


		 1
		 ReferenceExists. Есть
		 ссылка на удаляемый элемент.


## Комментарии


Для работы с пакетом удаления элементов справочника используется интерфейс
 [IRdsDictionaryBatchDelete](../Interface/IRdsDictionaryBatchDelete/IRdsDictionaryBatchDelete.htm).


См. также:


[Перечисления
 сборки Rds](KeRds_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
