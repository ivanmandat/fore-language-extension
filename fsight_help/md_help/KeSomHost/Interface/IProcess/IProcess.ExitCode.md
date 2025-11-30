# IProcess.ExitCode

IProcess.ExitCode
-


# IProcess.ExitCode


## Синтаксис


ExitCode: Integer;


## Описание


Свойство ExitCode возвращает
 код завершения процесса.


## Комментарии


Данное свойство актуально, если свойство [IProcess.HasExited](IProcess.HasExited.htm)
 вернуло значение True. Попытки
 обращения к данному свойству до завершения процесса приведут к возникновению
 ошибок.


## Пример


Использование свойства приведено в примере для [IProcess.Start](IProcess.Start.htm).


См. также:


[IProcess](IProcess.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
