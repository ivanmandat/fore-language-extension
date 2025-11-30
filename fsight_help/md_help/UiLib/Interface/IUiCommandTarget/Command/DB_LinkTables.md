# LinkTables

LinkTables
-


# Команда LinkTables


## Назначение


Вызов мастера создания прикрепленной таблицы.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Описание папки репозитория, в которой будет создана прикрепленная
		 таблица.


## Особенности применения


Нет


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    CommandTarget: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    CommandTarget := WinApplication.Instance.GetPluginTarget("Db");

	    Context := CommandTarget.CreateExecutionContext;

	    Context.Data := MetabaseClass.Active.Root;

	    Context.ParentWindow := Self As IWin32Window;

	    Context.Modal := True;

	    CommandTarget.Execute("LinkTables", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт мастер создания прикрепленной таблицы.
 Окно мастера будет открыто модально относительно текущей формы. Если в
 мастере указать все параметры и нажать кнопку «Готово»,
 то прикрепленная таблица будет создана в корневой папке текущего репозитория.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
