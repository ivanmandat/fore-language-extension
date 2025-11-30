# IDimTextCriteria.Probe

IDimTextCriteria.Probe
-


# IDimTextCriteria.Probe


## Синтаксис


Probe: [IDimAttributeProbe](../IDimAttributeProbe/IDimAttributeProbe.htm);


## Описание


Свойство Probe осуществляет
 обратный вызов для определения, по каким атрибутам осуществлять поиск.


## Пример


В рассматриваемом примере на форме располагаются компоненты: два UiDimension,
 два EditBox, два DimensionCombo, Button. Для кнопки описано событие OnClick,
 для формы OnShow.


	Class TestForm: Form

	    Memo1: Memo;

	    EditBox1: EditBox;

	    uidimCountries: UiDimension;

	    dcCountries: DimensionCombo;

	    uidimIndicator: UiDimension;

	    dcIndicator: DimensionCombo;

	    Label1: Label;

	    Label2: Label;

	    EditBox2: EditBox;

	    Label3: Label;

	    Button1: Button;

	    Mb: IMetabase;

	    Cat: IRubricator;

	    Inst: IRubricatorInstance;

	    pAttrs : IMetaAttributes;


	    Sub TestFormOnShow(Sender: Object; Args: IEventArgs);

	    Begin

	        Mb := MetabaseClass.Active;

	        Cat := Mb.ItemById(EditBox1.Text).Bind As IRubricator;

	        Inst := (Cat As IMetabaseObject).Open(Null) As IRubricatorInstance;

	        pAttrs := Inst.Facts.Dictionary.Attributes;

	        uidimCountries.Object := pAttrs.FindById("COUNTRY").ValuesObject;

	        uidimIndicator.Object := pAttrs.FindById("INDICATOR").ValuesObject;

	    End Sub TestFormOnShow;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        selections: IDimSelectionSet;

	        factory: IDimSelectionSetFactory;

	        FactLookup: IRubricatorFactsLookup;

	        MetaLookup: IMetaDictionaryLookup;

	        Criteria: IDimTextCriteria;

	        ObjProbe: MyProbe;

	    Begin

	        factory := New DimSelectionSetFactory.Create;

	        selections := factory.CreateDimSelectionSet;

	        selections.Add(dcCountries.Dimension.DimInstance);

	        selections.Add(dcIndicator.Dimension.DimInstance);

	        dcCountries.Selection.CopyTo(selections.Item(0), True);

	        dcIndicator.Selection.CopyTo(selections.Item(1), True);

	        FactLookup := Inst.CreateFactsLookup;

	        MetaLookup := FactLookup.Lookup;

	        Criteria := New DimTextCriteria.Create;

	        Criteria.SelectOptions := ConditionSelectOptions.SelectedOnly;

	        Criteria.CriteriaOptions := TextCriteriaOptions.SearchProbeAttributes Or TextCriteriaOptions.FreeText;

	        Criteria.Text := EditBox2.Text;

	        ObjProbe := New MyProbe.Create;

	        Criteria.Probe := ObjProbe;

	        selections := FactLookup.SetTextCriteria(Criteria, selections);

	        selections.Item(0).CopyTo(dcCountries.Selection, True);

	        selections.Item(1).CopyTo(dcIndicator.Selection, True);

	    End Sub Button1OnClick;

	End Class TestForm;


	Public Class MyProbe: Object, IDimAttributeProbe

	    Public Function Probe(Dimension : IDimensionModel; Attribute : IDimAttribute) : Boolean;

	    Begin

	        Return (Attribute.Name = "SpecialName");

	    End Function Probe;

	End Class MyProbe;


После запуска формы необходимо произвести отметку в раскрывающих списках
 измерений, затем ввести текст для поиска и нажать на кнопку, после чего
 отметка в списках будет изменена: останутся выделенными только те элементы
 измерений, у которых по атрибуту SpecialName будет найден искомый текст.


См. также:


[IDimTextCriteria](IDimTextCriteria.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
