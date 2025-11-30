# ExpressionService.endBatch

ExpressionService.endBatch
-


# ExpressionService.endBatch


## Синтаксис


endBatch(fireElemsCallback: Boolean, callback: Function,
 errCallback: Function);


## Параметры


fireElemsCallback. Признак
 вызова обработчика для каждого запроса. Если для параметра установлено
 значение true, то для каждого
 запроса будет вызван свой обработчик, иначе - для всех запросов будет
 вызван один обработчик;


callback. Обработчик завершения
 пакетного запроса;


errCallback. Обработчик ошибочного
 завершения пакетного запроса.


## Описание


Метод endBatch отключает пакетный
 режим отправки запросов и выполняет отправку сформированного пакета.


## Комментарии


Включение пакетного режима отправки запросов производится с помощью
 метода [beginBatch](ExpressionService.beginBatch.htm).


## Пример


Пример использования метода приведен в описании метода [ExpressionService.beginBatch](ExpressionService.beginBatch.htm).


См. также:


[ExpressionService](ExpressionService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
