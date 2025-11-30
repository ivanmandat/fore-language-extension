# IWinApplicationClass.Help

IWinApplicationClass.Help
-


# IWinApplicationClass.Help


## Синтаксис


Help: [IWinApplicationHelp](../IWinApplicationHelp/IWinApplicationHelp.htm);


## Описание


Свойство Help возвращает настройки справки приложения.


## Пример


Для выполнения примера предполагается наличие файла справки «C:\Help\Project.chm».


			Sub UserProc;

Var

    Help: IWinApplicationHelp;

Begin

    Help := WinApplication.Help;

    Help.FileName := "C:\Help\Project.chm";

    Help.DisplayIndex;

End Sub UserProc;


При выполнении примера для приложения будет изменен файл справки. Также указанный файл будет открыт на вкладке Указатель.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
