# ChangePassword

ChangePassword
-


# Команда ChangePassword


## Назначение


Вызов стандартного диалога изменения пароля текущего пользователя.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm)
		 Репозиторий, в котором необходимо сменить пароль для текущего
		 пользователя.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1».


Добавьте ссылки на системные сборки: Forms, Metabase, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("Adm");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MetabaseClass.Active;

	    Target.Execute("ChangePassword", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт стандартного диалога смены пароля
 для текущего пользователя.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
