# RdsBatchCallbackContinue

RdsBatchCallbackContinue
-


# RdsBatchCallbackContinue


## Описание


Перечисление RdsBatchCallbackContinue
 содержит дальнейшие действия при возникновении ошибки во время выполнения
 пакета элементов справочника НСИ.


Используется следующим методом:


	- [IRdsBatchCallback.OnError](../Interface/IRdsBatchCallback/IRdsBatchCallback.OnError.htm).


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 Abort. Остановить выполнение
		 пакета без отображения ошибки.


		 1
		 Error. Остановить выполнение
		 пакета с отображением ошибки.


		 2
		 Continue_. Продолжить
		 выполнение пакета.


См. также:


[Перечисления
 сборки Rds](KeRds_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
