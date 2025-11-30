# IWinShellExecuteInfo.ShowCommand

IWinShellExecuteInfo.ShowCommand
-


# IWinShellExecuteInfo.ShowCommand


## Синтаксис


ShowCommand: [ShowWindowCommand](../../Enums/ShowWindowCommand.htm);


## Описание


Свойство ShowCommand определяет
 состояние окна открываемого файла (приложения).


## Пример


Для выполнение примера предполагается наличие файла «D:\Work\Files\catalog.xls».


			Sub UserProc;

Var

    Info: IWinShellExecuteInfo;

Begin

    Info := New WinShellExecuteInfo.Create;

    Info.Directory := "D:\Work\Files";

    Info.File := "catalog.xls";

    Info.ShowCommand := ShowWindowCommand.ShowMinimized;

    WinApplication.ShellExecute(Info);

End Sub UserProc;


При выполнении примера будет открыт указанный файл. Окно программы будет
 минимизировано в панель задач.


См. также:


[IWinShellExecuteInfo](IWinShellExecuteInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
