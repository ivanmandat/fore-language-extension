# OpenRubricator

OpenRubricator
-


# Команда OpenRubricator


## Назначение


Создание экспресс-отчета на основе базы данных временных рядов и открытие
 его на просмотр.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующие значения:


		 Параметр
		 Описание


		 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Описание объекта репозитория - База данных временных рядов.


## Особенности применения


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 база данных временных рядов с идентификатором "Rub_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Target := WinApplication.Instance.GetPluginTarget("Express");

	    Context := Target.CreateExecutionContext;

	    Context.Data := MB.ItemById("Rub_1");

	    Target.Execute("OpenRubricator", Context);

	End Sub Button1OnClick;


При нажатии кнопки будет создан новый экспресс-отчет на основе базы
 данных временных рядов "Rub_1". Данный отчет будет открыт в
 режиме просмотра.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
