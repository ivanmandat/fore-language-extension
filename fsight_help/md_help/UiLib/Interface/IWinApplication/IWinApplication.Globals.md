# IWinApplication.Globals

IWinApplication.Globals
-


# IWinApplication.Globals


## Синтаксис


Globals: [IApplicationGlobals](../IApplicationGlobals/IApplicationGlobals.htm);


## Описание


Свойство Globals возвращает
 коллекцию глобальных переменных приложения.


## Пример


			Sub UserProc;

Var

    App: IWinApplication;

    Glob: IApplicationGlobals;

Begin

    App := WinApplication.Instance;

    Glob := App.Globals;

    Glob.Add("Index", 123);

    Debug.WriteLine(Glob.Count);

End Sub UserProc;


При выполнении примера в список глобальных переменных добавится переменная
 «Index» со значением 123.


См. также:


IApplication


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
