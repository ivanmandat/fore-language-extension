# IDimSelection.ToVariant

IDimSelection.ToVariant
-


# IDimSelection.ToVariant


## Синтаксис


ToVariant: Variant;


## Описание


Метод ToVariant формирует значение
 отметки.


## Комментарии


Значение отметки формируется в виде массива и предназначено для использования
 в методе [Parse](IDimSelection.Parse.htm).
 Формирование осуществляется по значениям атрибута - Идентификатор.


## Пример


Для выполнения примера предполагается наличие справочника с идентификатор
 "D_TO", содержащего схему отметки.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Dimen: IDimInstance;

	    DimenSelectSchema: IDimSelectionSchema;

	    SelectSchemaPrimit: IDimSelectionSchemaPrimitive;

	    Selection: IDimSelection;

	    i: Integer;

	    v: Variant;

	Begin

	    MB := MetabaseClass.Active;

	    MDes := MB.ItemById("D_TO");

	    Dimen := MDes.Open(Null) As IDimInstance;

	    Selection := Dimen.CreateSelection;

	    For i := 0 To 9 Do

	        Selection.SelectElement(i, False);

	    End For;

	    v := Selection.ToVariant;

	    If MDes.Children.Count <> 0 Then

	        MObj := MDes.Children.Item(0).Edit;

	        DimenSelectSchema := MObj As IDimSelectionSchema;

	        SelectSchemaPrimit := DimenSelectSchema.Add(SelectionPrimitiveType.Specified);

	        (SelectSchemaPrimit As IDimListSelectionPrimitive).Selection.Parse(v);

	        MObj.Save;

	    End If;

	End Sub UserProc;


После выполнения примера в схеме отметки справочнка «D_TO», будет создан
 примитив, содержащий отметку первых 10 элементов справочника.


См. также:


[IDimSelection](IDimSelection.htm) | [IDimSelection.Parse](IDimSelection.Parse.htm)
 | [IDimSelection.AttributeToVariant](IDimSelection.AttributeToVariant.htm)
 | [IDimSelection.ParseAttribute](IDimSelection.ParseAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
