# IWinApplicationClass.Instance

IWinApplicationClass.Instance
-


# IWinApplicationClass.Instance


## Синтаксис


Instance: [IWinApplication](../IWinApplication/IWinApplication.htm);


## Описание


Свойство Instance возвращает объект, предназначенный для работы с запущенным приложением.


## Пример


			Sub UserProc;

Var

    WinApp: IWinApplication;

Begin

    WinApp := WinApplication.Instance;

    //Дальнейшая работа со свойствами и методами IWinApplication через переменную WinApp
End Sub UserProc;


В примере в общем виде показан способ получения объекта, предназначенного для управления запущенным приложением.


См. также:


[IWinApplicationClass](IWinApplicationClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
