# IWinShellExecuteInfo.Verb

IWinShellExecuteInfo.Verb
-


# IWinShellExecuteInfo.Verb


## Синтаксис


Verb: String;


## Описание


Свойство Verb определяет команду,
 которую необходимо использовать при открытии приложения или документа.


## Комментарии


Список команд, поддерживаемых определенными типами файлов, можно получить
 из реестра операционной системы. Каждой команде соответствует подраздел,
 расположенный в следующей ветке реестра: [HKEY_CLASSES_ROOT\<Тип файла>+file\Shell]
 (например, [HKEY_CLASSES_ROOT\txtfile\shell] - содержит список команд,
 поддерживаемых текстовыми файлами).


## Пример


Для выполнения примера предполагается наличие текстового файла «c:\Report.txt».


			Sub UserProc;

Var

    Info: IWinShellExecuteInfo;

Begin

    Info := New WinShellExecuteInfo.Create;

    Info.File := "c:\Report.txt";

    Info.Verb := "Print";

    WinApplication.ShellExecute(Info);

End Sub UserProc;


После выполнения примера указанный файл будет отправлен на печать.


См. также:


[IWinShellExecuteInfo](IWinShellExecuteInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
