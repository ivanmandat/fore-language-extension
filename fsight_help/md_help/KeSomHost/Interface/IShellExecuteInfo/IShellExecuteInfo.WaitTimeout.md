# IShellExecuteInfo.WaitTimeout

IShellExecuteInfo.WaitTimeout
-


# IShellExecuteInfo.WaitTimeout


## Синтаксис


WaitTimeout: Integer;


## Описание


Свойство WaitTimeout определяет
 время, в течение которого будет ожидаться завершение работы запускаемого
 приложения.


## Комментарии


WaitTimeout учитывается, если
 свойству [IShellExecuteInfo.WaitToTerminate](IShellExecuteInfo.WaitToTerminate.htm)
 установлено значение True. По
 умолчанию свойству WaitTimeout
 установлено значение «-1» при этом ожидание завершения длится неопределенное
 время. Если в свойстве WaitTimeout
 задать какое-либо время, то по его истечению текущее приложение вновь
 станет доступным.


Значение свойства WaitTimeout
 указывается в миллисекундах.


## Пример


Использование свойства приведено в примере для [IProcess.Start](../IProcess/IProcess.Start.htm).


См. также:


[IShellExecuteInfo](IShellExecuteInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
