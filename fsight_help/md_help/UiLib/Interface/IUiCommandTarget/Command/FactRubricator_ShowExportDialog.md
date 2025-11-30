# ShowExportDialog

ShowExportDialog
-


# Команда ShowExportDialog


## Назначение


Вызов мастера для запуска существующего или создания нового объекта
 экспорта в базе данных временных рядов.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать одно из следующих
 значений:


		 Тип значения
		 Описание


		 [IRubricatorInstance](KeCubes.chm::/Interface/IRubricatorInstance/IRubricatorInstance.htm)
		 База данных временных рядов, для которой будет создан новый
		 объект экспорта.


		 [IExportRequestInstance](KeCubes.chm::/Interface/IExportRequestInstance/IExportRequestInstance.htm)
		 Запускаемый объект экспорта.


## Особенности применения


В зависимости от типа передаваемого параметра будет создан новый, либо
 запущен существующий объект экспорта данных. Команда может применяться
 только для базы данных временных рядов.


## Пример 1


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории должна быть создана
 база данных временных рядов с идентификатором «OBJ_RUBRICATOR». В базе
 создан объект экспорта с идентификатором «Export».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Rub: IMetabaseObjectDescriptor;

	    Export: IExportRequestInstance;

	    CommandTarget: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Rub := MB.ItemById("OBJ_RUBRICATOR");

	    Export := MB.ItemByIdNamespace("Export", Rub.Key).Open(Null) As IExportRequestInstance;

	    CommandTarget := WinApplication.Instance.GetPluginTarget("FactRubricator");

	    Context := CommandTarget.CreateExecutionContext;

	    Context.Data := Export;

	    Context.ParentWindow := Self As IWin32Window;

	    Context.Modal := True;

	    CommandTarget.Execute("ShowExportDialog", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт мастер для запуска указанного объекта
 экспорта данных в базе данных временных рядов. Окно мастера будет открыто
 модально относительно текущей формы.


## Пример 2


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории должна быть создана
 база данных временных рядов с идентификатором «OBJ_RUBRICATOR».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    RubInst: IRubricatorInstance;

	    CommandTarget: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    RubInst := MB.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

	    CommandTarget := WinApplication.Instance.GetPluginTarget("FactRubricator");

	    Context := CommandTarget.CreateExecutionContext;

	    Context.Data := RubInst;

	    Context.ParentWindow := Self As IWin32Window;

	    Context.Modal := True;

	    CommandTarget.Execute("ShowExportDialog", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт мастер создания нового или запуска
 существующего объекта экспорта данных в базе данных временных рядов. Окно
 мастера будет открыто модально относительно текущей формы.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
