# IDataGridLookup.Dimension

IDataGridLookup.Dimension
-


# IDataGridLookup.Dimension


## Синтаксис


Dimension: [IUiDimension](../IUiDimension/IUiDimension.htm);


## Описание


Свойство Dimension определяет
 справочник, по элементам которого будет осуществляться поиск введенных
 значений.


## Комментарии


Если данное свойство установлено, то при вводе значений в ячейку, в
 справочнике будет осуществляться поиск по атрибуту, назначение которого
 Идентификатор. Наименования найденных элементов будут отображаться в поле
 ячейки, но значение ячейки будет соответствовать введенному значению.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки «Button1» и компонента DataGrid с наименованием «DataGrid1».
 В репозитории имеется справочник с идентификатором D_TO.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Obj: IMetabaseObjectDescriptor;

	Begin

	    MB := MetabaseClass.Active;

	    Obj := MB.ItemById("D_TO");

	    UiDimension1.Object := Obj;

	    UiDimension1.Active := True;

	    Col := DataGrid1.Columns.Item(0);

	    Col.Lookup.Dimension := UiDimension1;

	    Col.EditorBinding := "UI=""DimCombo""ID=""D_TO""SELECTIONMODE=SingleSelect";

	End Sub Button1OnClick;


После нажатия на кнопку в первый столбец компонента встроится комбинированное
 дерево измерения D_TO. После выбора элемента измерения, наименование
 этого элемента будет отображаться в ячейке. Значение ячейки будет содержать
 идентификатор выбранного элемента.


Если не устанавливать свойство LookUp, то после выбора элемента, в ячейке
 будет отображаться идентификатор выбранного элемента.


См. также:


[IDataGridLookup](IDataGridLookup.htm) | [IDataGridColumn.EditorBinding](../IDataGridColumn/IDataGridColumn.EditorBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
