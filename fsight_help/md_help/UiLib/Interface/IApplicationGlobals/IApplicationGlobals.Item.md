# IApplicationGlobals.Item

IApplicationGlobals.Item
-


# IApplicationGlobals.Item


## Синтаксис


Item(Name: String): Variant;


## Параметры


Name. Наименование глобальной
 переменной.


## Описание


Свойство Item определяет значение
 указанной глобальной переменной.


## Комментарии


Параметр Name регистрозависимый.


Если указанная глобальная переменная не существует, то при чтении свойство
 вернёт значение Null, а при установке
 значения будет создана переменная с указанными именем и значением.


## Пример


Для выполнения примера предполагается наличие формы.


Добавьте ссылку на системную сборку Forms, UI.


	Sub UserProc;

	Var

	    App: IWinApplication;

	    Glob: IApplicationGlobals;

	Begin

	    App := WinApplication.Instance;

	    Glob := App.Globals;

	    Glob.Item("META") := "Repository";

	End Sub UserProc;


В результате выполнения примера будет изменено значение глобальной переменной
 приложения «META». Если данная переменная не существует, то она будет
 создана.


См. также:


[IApplicationGlobals](IApplicationGlobals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
