# ShowImportDialog

ShowImportDialog
-


# Команда ShowImportDialog


## Назначение


Вызов мастера для запуска существующего или создания нового объекта
 импорта в базе данных временных рядов.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать одно из следующих
 значений:


		 Тип значения
		 Описание


		 [IRubricatorInstance](KeCubes.chm::/Interface/IRubricatorInstance/IRubricatorInstance.htm)
		 База данных временных рядов, для которой будет создан новый
		 объект импорта.


		 [IImportRequestInstance](KeCubes.chm::/Interface/IImportRequestInstance/IImportRequestInstance.htm)
		 Запускаемый объект импорта.


## Особенности применения


В зависимости от типа передаваемого параметра будет создан новый, либо
 запущен существующий, объект импорта данных. Команда может применяться
 только для базы данных временных рядов.


## Пример 1


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием «Button1». В репозитории должна быть создана
 база данных временных рядов с идентификатором «OBJ_RUBRICATOR». В базе
 создан объект импорта с идентификатором «Import».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        MB: IMetabase;

	        Rub: IMetabaseObjectDescriptor;

	        Import: IImportRequestInstance;

	        CommandTarget: IUiCommandTarget;

	        Context: IUiCommandExecutionContext;

	    Begin

	        MB := MetabaseClass.Active;

	        Rub := MB.ItemById("OBJ_RUBRICATOR");

	        Import := MB.ItemByIdNamespace("Import", Rub.Key).Open(Null) As IImportRequestInstance;

	        CommandTarget := WinApplication.Instance.GetPluginTarget("FactRubricator");

	        Context := CommandTarget.CreateExecutionContext;

	        Context.Data := Import;

	        Context.ParentWindow := Self As IWin32Window;

	        Context.Modal := True;

	        CommandTarget.Execute("ShowImportDialog", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт мастер для запуска указанного объекта
 импорта данных в базе данных временных рядов. Окно мастера будет открыто
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

	    CommandTarget.Execute("ShowImportDialog", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт мастер создания нового или запуска
 существующего объекта импорта данных в базе данных временных рядов. Окно
 мастера будет открыто модально относительно текущей формы.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
