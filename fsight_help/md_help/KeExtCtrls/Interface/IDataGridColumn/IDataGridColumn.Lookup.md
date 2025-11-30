# IDataGridColumn.Lookup

IDataGridColumn.Lookup
-


# IDataGridColumn.Lookup


## Синтаксис


Lookup: [IDataGridLookup](../IDataGridLookup/IDataGridLookup.htm);


## Описание


Свойство Lookup определяет параметры
 отображения выбранного элемента в раскрывающемся списке справочника.


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


После нажатия на кнопку в первый столбец компонента будет встроен раскрывающийся
 список справочника D_TO. После выбора элемента справочника, наименование
 этого элемента будет отображаться в ячейке. Значение ячейки будет содержать
 идентификатор выбранного элемента.


Если не устанавливать свойство LookUp,
 то после выбора элемента, в ячейке будет отображаться идентификатор выбранного
 элемента.


См. также:


[IDataGridColumn](IDataGridColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
