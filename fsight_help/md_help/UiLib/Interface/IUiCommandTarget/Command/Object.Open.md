# Object.Open

Object.Open
-


# Команда Object.Open


## Назначение


Открытие объекта.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать следующее значение:


		 Тип значения
		 Описание


		 [IMetabaseObjectParamValues](KeSom.chm::/Interface/IMetabaseObjectParamValues/IMetabaseObjectParamValues.htm)
		 Значения параметров, с которыми будет производиться открытие
		 объекта.


## Особенности применения


Команда может применяться только для объектов, поддерживающих открытие.
 Параметры для команды передаются в случае, если объект содержит дополнительные
 параметры. При открытии также учитывается значение свойства [Silent](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Silent.htm).


## Пример 1


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и объекта репозитория с
 идентификатором "Table_1", поддерживающего открытие объекта.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("Table_1");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Target.Execute("Object.Open", Null);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт объект с идентификатором "Table_1".


## Пример 2


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и объекта репозитория с
 идентификатором "Query_1", поддерживающего открытие объекта
 и содержащего один дополнительный параметр.


	Sub Button1OnClick(Sender: Object; Args: IEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Params: IMetabaseObjectParamValues;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("Query_1");

	    Params := ObjDes.Params.CreateEmptyValues;

	    Params.Item(0).Value := 200;

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Context := Target.CreateExecutionContext;

	    Context.Data := Params;

	    Target.Execute("Object.Open", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт объект с идентификатором "Query_1".
 Для параметра объекта будет установлено значение "200".


## Пример 3


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и объекта репозитория с
 идентификатором "Query_1", поддерживающего открытие объекта
 и содержащего дополнительные параметры.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ObjDes: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    MB := MetabaseClass.Active;

	    ObjDes := MB.ItemById("Query_1");

	    Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	    Context := Target.CreateExecutionContext;

	    Context.ExecutionMode := UiCommandExecutionMode.PromptUser;

	    Target.Execute("Object.Open", Context);

	End Sub Button1OnClick;


При нажатии на кнопку будет открыт объект с идентификатором "Query_1".
 Перед открытием будет выведен диалог установки значений параметров данного
 объекта.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
