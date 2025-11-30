# IDimSelection.Parse

IDimSelection.Parse
-


# IDimSelection.Parse


## Синтаксис


Parse(Value: Variant; [Strict: Boolean = False]);


## Параметры


Value. Значение отметки, из
 которого осуществляется преобразование.


Strict. Необязательный параметр,
 определяющий, будет ли генерироваться исключительная ситуация, если в
 значении Value имеются элементы,
 отсутствующие в текущей отметке. По умолчанию свойству установлено значение
 False, при этом отсутствующие
 элементы пропускаются. Если установить значение True,
 будет генерироваться исключительная ситуация.


## Описание


Метод Parse восстанавливает
 отметку из значения, передаваемого посредством параметра Value.


## Комментарии


Используется вместе с методом [ToVariant](IDimSelection.ToVariant.htm).
 Восстановление осуществляется по значениям атрибута «Идентификатор».


## Пример


Для выполнения примера предполагается наличие справочника с идентификатор
 «D_TO», содержащего схему отметки.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MDes: IMetabaseObjectDescriptor;

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


После выполнения примера в схеме отметки справочника «D_TO» будет создан
 примитив, содержащий отметку первых 10 элементов справочника.


См. также:


[IDimSelection](IDimSelection.htm) | [IDimSelection.ToVariant](IDimSelection.ToVariant.htm)
 | [IDimSelection.AttributeToVariant](IDimSelection.AttributeToVariant.htm)
 | [IDimSelection.ParseAttribute](IDimSelection.ParseAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
