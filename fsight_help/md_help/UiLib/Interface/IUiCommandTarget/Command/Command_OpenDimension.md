# OpenDimension

OpenDimension
-


# Команда OpenDimension


## Назначение


Открытие справочника на просмотр.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm)
		 Открытый справочник, для которого необходимо отобразить окно
		 просмотра данных.


## Особенности применения


Команда может применяться только для справочников репозитория.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 справочник с идентификатором "Dim_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Dim: IDimInstance;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Dim := MB.ItemById("Dim_1").Open(Null) As IDimInstance;

	    Target := WinApplication.Instance.GetPluginTarget("Dim");

	    Context := Target.CreateExecutionContext;

	    Context.Data := Dim;

	    Target.Execute("OpenDimension", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт на просмотр справочник "Dim_1".


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
