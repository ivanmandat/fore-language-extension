# FieldEditor

FieldEditor
-


# Команда FieldEditor


## Назначение


Вызов стандартного диалога редактирования параметров поля таблицы.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [ITableField](KeDb.chm::/Interface/ITableField/ITableField.htm)
		 Поле таблицы, для которого необходимо открыть диалог редактирования
		 параметров.


## Особенности применения


Используется для полей таблицы.


## Пример


Для выполнения примера предполагается наличие формы и расположенной
 на ней кнопки с наименованием "Button1". В репозитории имеется
 таблица с идентификатором "Table_1".


Добавьте ссылки на системные сборки: Forms, Metabase, Db, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Field: ITableField;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    Table := MB.ItemById("Table_1").Bind As ITable;

	    Field := Table.Fields.Item(0);

	    Target := WinApplication.Instance.GetPluginTarget("Db");

	    Context := Target.CreateExecutionContext;

	    Context.Data := Field;

	    Target.Execute("FieldEditor", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт диалога для редактирования параметров
 первого поля таблицы "Table_1".


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
