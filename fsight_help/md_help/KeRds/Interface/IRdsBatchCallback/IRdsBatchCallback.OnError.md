# IRdsBatchCallback.OnError

IRdsBatchCallback.OnError
-


# IRdsBatchCallback.OnError


## Синтаксис


OnError(Element: Integer; ErrorType: Integer; Error:
 [IException](ForeSys.chm::/Interface/IException/IException.htm)):
 [RdsBatchCallbackContinue](../../Enums/RdsBatchCallbackContinue.htm);


## Параметры


Element. Ключ элемента, который
 вызвал ошибку.


ErrorType. Тип ошибки.


Error. Описание исключительной
 ситуации.


## Описание


Метод OnError реализует событие,
 происходящее при возникновении ошибки во время выполнения пакета.


Параметр ErrorType возвращает
 тип ошибки, специфичный для каждого типа пакетов. Например, для пакета
 удаления элементов тип ошибки определяется перечислением [RdsBatchDeleteError](../../Enums/RdsBatchDeleteError.htm).


## Комментарии


OnError должен возвращать значение,
 определяющее дальнейшее действие. Оно задается элементом перечисления
 [RdsBatchCallbackContinue](../../Enums/RdsBatchCallbackContinue.htm).


## Пример


Использование метода приведено в примере для [IRdsDictionaryBatch.Callback](../IRdsDictionaryBatch/IRdsDictionaryBatch.Callback.htm).


См. также:


[IRdsBatchCallback](IRdsBatchCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
