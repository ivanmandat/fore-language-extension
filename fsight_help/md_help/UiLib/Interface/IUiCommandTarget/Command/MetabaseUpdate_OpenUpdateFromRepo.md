# OpenUpdateFromRepo

OpenUpdateFromRepo
-


# Команда OpenUpdateFromRepo


## Назначение


Открытие обновления из репозитория в менеджере обновлений платформы.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующие значения:


		 Параметр
		 Описание


		 [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm)
		 Объект репозитория - Обновление.


## Особенности применения


В качестве параметра должен передаваться объект репозитория Обновление.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 объект обновления с идентификатором «Update01_01_2010».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("MetabaseUpdate");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MB.ItemById("Update01_01_2010").Bind;

	    Target.Execute("OpenUpdateFromRepo", Context);

	End Sub Button1OnClick;


При нажатии на кнопку указанное обновление будет открыто в менеджере
 обновлений платформы.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
