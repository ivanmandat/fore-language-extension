# OpenLoginDialog

OpenLoginDialog
-


# Команда OpenLoginDialog


## Назначение


Вызов диалога подключения к репозиторию.


## Особенности применения


Если подключение к репозиторию, с указанными в диалоге учетными данными,
 пройдет удачно, то метод [Execute](../IUiCommandTarget.Execute.htm)
 вернет значение True, иначе False. Если для репозитория указан
 объект автозапуска, то при удачном подключении он будет запущен.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Result: Boolean;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("Std");

	    Result := Target.Execute("OpenLoginDialog", Null);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт диалог подключения к репозиторию.
 В переменной «Result» будет результат подключения.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
