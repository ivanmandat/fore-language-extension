# IForeRuntime.ExternReferenceLogger

IForeRuntime.ExternReferenceLogger
-


# IForeRuntime.ExternReferenceLogger


## Синтаксис


		ExternReferenceLogger: [IExternReferenceLogger](../IExternReferenceLogger/IExternReferenceLogger.htm);


## Описание


Свойство ExternReferenceLogger
 возвращает настройки логирования изменений счётчика внешних ссылок.


## Пример


Добавьте ссылку на системную сборку Fore.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    ExtLogger: IExternReferenceLogger;

		    //...

		Begin

		    Mb := MetabaseClass.Active;

		    ExtLogger := (Mb As IForeServices).GetRuntime.ExternReferenceLogger;

		    ExtLogger.Collapse := True;

		    ExtLogger.Enable := True;

		    ExtLogger.ObjectIndexing := True;

		    //...

		    // Выполняемый код приложения

		    //...

		    ExtLogger.Enable := False;

		    ExtLogger.SaveToFile("D:\ExtLog.txt");

		    //...

		    // Продолжение кода приложения

		    //...

		End Sub UserProc;


Указанный пример в общем виде иллюстрирует каким образом в коде приложения
 может быть включено логирование изменений счётчика внешних ссылок, а затем
 полученный лог сохранён в файл.


См. также:


[IForeRuntime](IForeRuntime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
