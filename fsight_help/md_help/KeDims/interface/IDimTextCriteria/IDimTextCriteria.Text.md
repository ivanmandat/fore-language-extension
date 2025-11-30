# IDimTextCriteria.Text

IDimTextCriteria.Text
-


# IDimTextCriteria.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст
 поиска.


## Пример


В рассматриваемом примере на форме располагаются компоненты: два UiDimension,
 два EditBox, два DimensionCombo, Button. Для кнопки описано событие OnClick,
 для формы OnShow.


	Class TestForm: Form

	    EditBox1: EditBox;

	    uidimCountries: UiDimension;

	    dcCountries: DimensionCombo;

	    uidimIndicator: UiDimension;

	    dcIndicator: DimensionCombo;

	    EditBox2: EditBox;

	    Button1: Button;

	    Mb: IMetabase;

	    Cat: IRubricator;

	    Inst: IRubricatorInstance;

	    pAttrs: IMetaAttributes;


	    Sub TestFormOnShow(Sender: Object; Args: IEventArgs);

	    Begin

	        Mb := MetabaseClass.Active;

	        Cat := Mb.ItemById(EditBox1.Text).Bind As IRubricator; // база данных временных рядов

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

	        Criteria.CriteriaOptions := TextCriteriaOptions.LikeText Or TextCriteriaOptions.SearchStringAttributes;

	        Criteria.Text := EditBox2.Text;

	        selections := FactLookup.SetTextCriteria(Criteria, selections);

	        selections.Item(0).CopyTo(dcCountries.Selection, True);

	        selections.Item(1).CopyTo(dcIndicator.Selection, True);

	    End Sub Button1OnClick;

	End Class TestForm;


После запуска формы необходимо произвести отметку в раскрывающих списках
 измерений, затем ввести текст для поиска и нажать на кнопку, после чего
 отметка в списках будет изменена: останутся выделенными только те элементы,
 которые соответствуют критерию поиска.


См. также:


[IDimTextCriteria](IDimTextCriteria.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
