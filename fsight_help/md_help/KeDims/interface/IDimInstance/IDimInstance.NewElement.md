# IDimInstance.NewElement

IDimInstance.NewElement
-


# IDimInstance.NewElement


## Синтаксис


NewElement: [IDimElement](../IDimElement/IDimElement.htm);


## Описание


Метод NewElement создает объект
 для работы с элементом измерения.


## Пример


В рассматриваемом примере на форме располагаются компоненты: UiDimension,
 EditBox, DimensionCombo, Button. Для кнопки описано событие OnClick, для
 формы OnShow.


	Class UserForm: Form

	    EditBox1: EditBox;

	    uidimCountries: UiDimension;

	    dcCountries: DimensionCombo;

	    Label1: Label;

	    Button1: Button;

	    Mb: IMetabase;

	    Cat: IRubricator;

	    Inst: IRubricatorInstance;

	    pAttrs : IMetaAttributes;


	    Sub UserFormOnShow(Sender: Object; Args: IEventArgs);

	    Begin

	        Mb := MetabaseClass.Active;

	        Cat := Mb.ItemById(EditBox1.Text).Bind As IRubricator; // EditBox1.Text содержит идентификатор базы данных временных рядов

	        Inst := (Cat As IMetabaseObject).Open(Null) As IRubricatorInstance;

	        pAttrs := Inst.Facts.Dictionary.Attributes;

	        uidimCountries.Object := pAttrs.FindById("COUNTRY").ValuesObject;

	    End Sub UserFormOnShow;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        DManager: IDimOrmManager;

	        DimModel: IDimensionModel;

	        DimInst : IDimInstance;

	        DClass : IDimOrmClass;

	        DCond : IDimOrmCondition;

	        Cond : IOrmCondition;

	        factory : IDimSelectionSetFactory;

	        selections : IDimSelectionSet;

	        selection : IDimSelection;

	        Element : IDimElement;

	        i: Integer;

	    Begin

	        DimModel := dcCountries.Dimension.Dimension;

	        DimInst := dcCountries.Dimension.DimInstance;

	        DManager := New DimOrmManager.Create;

	        DClass := DManager.CreateClass(DimModel);

	        DCond := DClass.CreateCondition;

	        Cond := DCond.Conditions.Add;

	        Cond.AttributeName := "Grouped";

	        Cond.Operator_ := OrmComparisonOperator.IsNotNull;

	        factory := New DimSelectionSetFactory.Create;

	        selections := factory.CreateDimSelectionSet;

	        selection := selections.Add(DimInst);

	        Element := DimInst.NewElement;

	        For i := 0 To DimInst.Elements.Count-1 Do

	            Element.Element := i;

	            If DCond.Evaluate(Element) Then

	                selection.SelectElement(Element.Element,False);

	            End If;

	        End For;

	        selection.CopyTo(dcCountries.Selection, True);

	    End Sub Button1OnClick;

	End Class UserForm;


После запуска формы необходимо произвести отметку в раскрывающемся списке
 измерения, затем нажать на кнопку, после чего отметка в списке будет изменена:
 будут выделены только те элементы, у которых по атрибуту Grouped будет
 найдено непустое значение.


См. также:


[IDimInstance](IDimInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
