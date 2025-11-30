# IDimOrmManager.SelectElements

IDimOrmManager.SelectElements
-


# IDimOrmManager.SelectElements


## Синтаксис


SelectElements(Criteria: [IDimTextCriteria](../IDimTextCriteria/IDimTextCriteria.htm);
 Selections: [IDimSelectionSet](../IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


Criteria - условие поиска;


Selections - отметка элементов.


## Описание


Метод SelectElements формирует
 отметку элементов, удовлетворяющих условиям.


## Пример


В рассматриваемом примере на форме располагаются компоненты: UiDimension,
 DimensionCombo, Button, EditBox. Для кнопки описано событие OnClick.


	Class UserForm: Form

	    txtPattern: EditBox;

	    Button1: Button;

	    uidimCountries: UiDimension;

	    dcCountries: DimensionCombo;


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        pDim : IDimInstance;

	        pManager: IDimOrmManager;

	        pCriteria : IDimTextCriteria;

	        pFactory : IDimSelectionSetFactory;

	        pSelections : IDimSelectionSet;

	        pSelection : IDimSelection;

	    Begin

	        pManager := New DimOrmManager.Create;

	        pDim := dcCountries.Selection.Dimension;

	        pFactory := New DimSelectionSetFactory.Create;

	        pSelections := pFactory.CreateDimSelectionSet;

	        pSelection := pSelections.Add(pDim);

	        pCriteria := New DimTextCriteria.Create;

	        pCriteria.CriteriaOptions := TextCriteriaOptions.FreeText Or TextCriteriaOptions.SearchName;

	        pCriteria.Text := txtPattern.Text;

	        pManager.SelectElements(pCriteria, pSelections);

	        pSelection.CopyTo(dcCountries.Selection, True);

	    End Sub Button1OnClick;

	End Class UserForm;


После запуска формы необходимо ввести текст для поиска и нажать на кнопку,
 после чего в раскрывающемся списке измерения будет выделены только те
 элементы, у которых в наименовании был найден искомый текст.


См. также:


[IDimOrmManager](IDimOrmManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
