# DimSrv.send

DimSrv.send
-


# DimSrv.send


## Синтаксис


send(body: String, callback: PP.Delegate | Function,
 errorCallback: PP.Delegate | Function, contentType: String, urlParams:
 String);


## Параметры


body. Тело запроса к веб-сервису;


callback. Процедура обратного
 вызова;


errorCallback. Процедура обратного
 вызова при ошибке;


contentType. Используемый протокол:


	- application/json. Используется
	 протокол JSON-RPC. По умолчанию;


	- text/xml. Используется
	 протокол SOAP.


urlParams. Параметры URL запроса;


## Описание


Метод send отправляет запрос
 сервису для работы с деревом метаданных.


## Пример


Пример использования метода аналогичен примеру использования метода
 [ExpressionService.send](dhtmlUfe.chm::/Classes/PP_Ufe/ExpressionService/ExpressionService.send.htm).


См. также:


[DimSrv](DimSrv.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
