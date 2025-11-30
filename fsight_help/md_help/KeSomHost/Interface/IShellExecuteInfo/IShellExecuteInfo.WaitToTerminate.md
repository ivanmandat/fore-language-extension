# IShellExecuteInfo.WaitToTerminate

IShellExecuteInfo.WaitToTerminate
-


# IShellExecuteInfo.WaitToTerminate


## Синтаксис


WaitToTerminate: Boolean;


## Описание


Свойство WaitToTerminate определяет
 признак ожидания завершения работы запускаемого приложения.


## Комментарии


Если свойству установить значение True,
 то после запуска какого-либо приложения текущее приложение будет ожидать
 его завершения. Во время ожидания текущее приложение будет недоступно.
 Ожидание будет длиться в течение времени, заданного в свойстве [IShellExecuteInfo.WaitTimeout](IShellExecuteInfo.WaitTimeout.htm).


## Пример


Использование свойства приведено в примере для [IProcess.Start](../IProcess/IProcess.Start.htm).


См. также:


[IShellExecuteInfo](IShellExecuteInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
