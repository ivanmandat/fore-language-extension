# RdsService.endBatch

RdsService.endBatch
-


# RdsService.endBatch


## Синтаксис


endBatch(fireElemsCallback: Boolean, callback: function|PP.Delegate, errCallback: function|PP.Delegate);


## Параметры


fireElemsCallback. Признак вызова возвратной функции для каждого запроса. Если параметр равен значению true, то для каждого запроса будет выполняться возвратная функция, иначе - не будет;


callback. Обработчик завершения пакетного запроса;


errCallback. Обработчик ошибочного завершения пакетного запроса.


## Описание


Метод endBatch выключает пакетный режим отправки запросов сервису.


## Комментарии


Метод возвращает значение true, если запрос отправлен, и значение false, если его отправка не состоялась.


Включение пакетного режима осуществляется методом [RdsService.beginBatch](RdsService.beginBatch.htm).


## Пример


Пример использования приведён на странице описания метода [RdsService.beginBatch](RdsService.beginBatch.htm).


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
