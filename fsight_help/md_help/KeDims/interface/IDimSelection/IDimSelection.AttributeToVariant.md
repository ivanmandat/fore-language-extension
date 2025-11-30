# IDimSelection.AttributeToVariant

IDimSelection.AttributeToVariant
-


# IDimSelection.AttributeToVariant


## Синтаксис


AttributeToVariant(Attribute: [IDimAttribute](../IDimAttribute/IDimAttribute.htm)):
 Variant;


## Параметры


Attribute - атрибут справочника,
 по значениям которого необходимо организовать отметку. По данному атрибуту
 в справочнике должен быть создан уникальный индекс.


## Описание


Метод AttributeToVariant формирует
 значение отметки по значениям указанного атрибута элементов.


## Комментарии


Значение отметки формируется в виде массива и предназначено для использования
 в методе [ParseAttribute](IDimSelection.ParseAttribute.htm).
 Формирование осуществляется по значениям атрибута, передаваемого посредством
 параметра Attribute.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента UiDimension
 с наименованием "UiDimension1" и каких-либо компонентов, использующих
 данные компонента UiDimension.
 Для справочника, загруженного в UiDimension,
 имеется схема отметки. Первый примитив содержит отметку элементов по списку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Dim: IDimensionModel;

	    MObj: IMetabaseObject;

	    DimenSelectSchema: IDimSelectionSchema;

	    SelectSchemaPrimit: IDimSelectionSchemaPrimitive;

	    Sel: IDimSelection;

	    Attr: IDimAttribute;

	    v: Variant;

	Begin

	    Dim := UiDimension1.Dimension;

	    MObj := (Dim As IMetabaseObject).Children.Item(0).Bind;

	    DimenSelectSchema := MObj As IDimSelectionSchema;

	    SelectSchemaPrimit := DimenSelectSchema.Item(0);

	    Sel := (SelectSchemaPrimit As IDimListSelectionPrimitive).Selection;

	    Attr := Dim.Attributes.Name;

	    v := Sel.AttributeToVariant(Attr);

	    UiDimension1.Selection.ParseAttribute(v, Attr);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку в компоненте "UiDimension1"
 будет установлена отметка, соответствующая отметке в примитиве схемы отметки
 справочника. Преобразование осуществляется по атрибуту - Наименование.


См. также:


[IDimSelection](IDimSelection.htm) | [IDimSelection.ParseAttribute](IDimSelection.ParseAttribute.htm)
 | [IDimSelection.ToVariant](IDimSelection.ToVariant.htm)
 | [IDimSelection.Parse](IDimSelection.Parse.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
