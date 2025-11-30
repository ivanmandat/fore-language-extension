# ShowCreateShortcut

ShowCreateShortcut
-


# Команда ShowCreateShortcut


## Назначение


Вызов стандартного окна создания ярлыка объекта репозитория.


## Параметры использования


Параметры команды передаются в свойстве [Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать одно из следующих
 значений:


		 Тип значения


		 Описание


		 [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
		 Папка, в которой будет создан ярлык.


		 Array
		 Массив типа Variant,
		 содержащий следующие элементы:


			- [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
			 - Папка, в которой будет создан ярлык.

			- [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)
			 - Корневой элемент, выше которого нельзя будет подняться в
			 дереве. Папка, указываемая в первом элементе массива, должна
			 располагаться под корневым элементом.


## Особенности применения


Отсутствуют


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1" и объекта репозитория с
 идентификатором "Obj_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    v: variant;

	    mb: IMetabase;

	    Folder: IMetabaseObjectDescriptor;

	    Root: IMetabaseObjectDescriptor;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	    Data: Array Of Variant;

	Begin

	    MB := MetabaseClass.Active;

	    Folder := MB.ItemById("Obj_1");

	    Root := MB.ItemById("Obj_1");

	    Target := WinApplication.Instance.GetPluginTarget("Fld");

	    Context := Target.CreateExecutionContext;

	    Data := New Variant[2];

	    Data[0] := Folder;

	    Data[1] := Root;

	    Context.Data := Data;

	    v := Target.Execute("ShowCreateShortcut", Context);

	    If Not v.IsNull Then

	        text := (v As IMetabaseObjectDescriptor).Name;

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет выведено окно создания ярлыка объекта репозитория
 "Obj_1".


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
