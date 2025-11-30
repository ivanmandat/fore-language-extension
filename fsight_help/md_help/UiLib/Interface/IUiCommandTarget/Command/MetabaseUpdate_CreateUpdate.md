# CreateUpdate

CreateUpdate
-


# Команда CreateUpdate


## Назначение


Вызов менеджера обновлений для создания нового обновления.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm)
		 Репозиторий, в рамках которого создается обновление.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    Target := WinApplication.Instance.GetPluginTarget("MetabaseUpdate");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MetabaseClass.Active;

	    Target.Execute("CreateUpdate", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт менеджер обновлений. В менеджере
 можно будет создать новое обновление для объектов текущего репозитория.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
