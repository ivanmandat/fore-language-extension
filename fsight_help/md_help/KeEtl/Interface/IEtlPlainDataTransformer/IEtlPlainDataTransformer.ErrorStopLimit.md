# IEtlPlainDataTransformer.ErrorStopLimit

IEtlPlainDataTransformer.ErrorStopLimit
-


# IEtlPlainDataTransformer.ErrorStopLimit


## Синтаксис


ErrorStopLimit: Integer;


## Описание


Свойство ErrorStopLimit определяет
 максимальное количество записей, выводимых в ошибочный выход.


## Комментарии


По умолчанию свойству установлено значение «-1», при этом выводятся
 все ошибочные записи. Если в ErrorStopLimit
 определено какое-либо значение, то при превышении его будет выполнено
 действие, указанное в свойстве [IEtlPlainDataTransformer.ErrorOverlimitPolicy](IEtlPlainDataTransformer.ErrorOverlimitPolicy.htm).


## Пример


Пример использования приведен в описании свойства [IEtlPlainDataTransformer.ErrorOutput](IEtlPlainDataTransformer.ErrorOutput.htm).


См. также:


[IEtlPlainDataTransformer](IEtlPlainDataTransformer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
