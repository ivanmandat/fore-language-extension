# ISysEventLog.Write

ISysEventLog.Write
-


# ISysEventLog.Write


## Синтаксис


Write(Message: String; eventType: [SysEventType](../../Enums/SysEventType.htm));


## Параметры


Message.
 Текст события;


eventType.
 Категория события.


## Описание


Метод Write создает запись в
 журнале событий Windows.


## Комментарии


Параметр eventType не
 может принимать значение Null.


## Пример


					Sub UserProc;

		Var

		    WinLog: ISysEventLog;

		Begin

		    WinLog := New SysEventLog.Create;

		    WinLog.Write("Предупреждение!", SysEventType.Warning);

		End Sub UserProc;


После выполнения примера в журнале событий Windows будет сделана запись.


См. также:


[ISysEventLog](ISysEventLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
