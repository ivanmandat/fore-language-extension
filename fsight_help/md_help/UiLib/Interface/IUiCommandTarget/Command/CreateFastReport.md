# CreateFastReport

CreateFastReport
-


# Команда CreateFastReport


## Назначение


Создание регламентного отчета на основе указанной базы данных временных
 рядов. В отчете в список источников данных автоматически будет добавлена
 указанная база данных временных рядов. Для нее будет создан один срез.
 На базе этого среза на листе отчета в ячейке «B2» будет создана область
 данных. После этого отчета будет открыт на редактирование.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Описание объекта репозитория - База данных временных рядов,
		 на основе которой необходимо создать регламентный отчет с областью
		 данных.


## Особенности применения


Команда может применяться только для базы данных временных рядов.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 база данных временных рядов с идентификатором «OBJ_RUBRICATOR».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Report");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MB.ItemById("OBJ_RUBRICATOR");

	    Target.Execute("CreateFastReport", Context);

	End Sub Button1OnClick;


При нажатии кнопки на основе указанной базы данных временных рядов будет
 создан и открыт на редактирование регламентный отчет.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
