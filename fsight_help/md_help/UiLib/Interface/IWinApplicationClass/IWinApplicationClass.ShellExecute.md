# IWinApplicationClass.ShellExecute

IWinApplicationClass.ShellExecute
-


# IWinApplicationClass.ShellExecute


## Синтаксис


ShellExecute(Info: [IWinShellExecuteInfo](../IWinShellExecuteInfo/IWinShellExecuteInfo.htm));


## Параметры


Info. Информация о файле (приложении), которое необходимо запустить.


## Описание


Метод ShellExecute осуществляет открытие файла (приложения), информация о котором передается посредством параметра Info.


## Комментарии


Если при открытии файла (приложения) возникает какая-либо ошибка, то для метода ShellExecute будет сгенерирована исключительная ситуация.


## Пример


Для выполнения примера предполагается наличие файла «C:\Doc\Catalog.xls».


			Sub UserProc;

Var

    Info: IWinShellExecuteInfo;

Begin

    Info := New WinShellExecuteInfo.Create;

    Info.Directory := "C:\Doc";

    Info.File := "Catalog.xls";

    WinApplication.ShellExecute(Info);

End Sub UserProc;


При выполнении примера указанный файл будет открыт приложением, зарегистрированным для этого в операционной системе.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
