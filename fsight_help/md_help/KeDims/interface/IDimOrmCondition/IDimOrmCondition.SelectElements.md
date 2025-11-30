# IDimOrmCondition.SelectElements

IDimOrmCondition.SelectElements
-


# IDimOrmCondition.SelectElements


## Синтаксис


SelectElements(Selection: [IDimSelection](../IDimSelection/IDimSelection.htm);
 [Options: [IDimConditionSelect](../IDimConditionSelect/IDimConditionSelect.htm)]);


## Параметры


Selection. Отметка элементов;


Options. Параметры поиска.


## Описание


Метод SelectElements формирует
 отметку элементов, удовлетворяющих условиям.


## Пример


В рассматриваемом примере на форме располагаются компоненты: UiDimension,
 DimensionTree, Button, EditBox. Для кнопки описано событие OnClick.


	Class UserForm: Form

	    uidim: UiDimension;

	    cmdSearch: Button;

	    tree: DimensionTree;

	    txtPattern: EditBox;


	    Sub cmdSearchOnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        pMan : IDimOrmManager;

	        pClass : IDimOrmClass;

	        pCondition : IDimOrmCondition;

	        pCriteria : IDimTextCriteria;

	        pOptions : IDimConditionSelect;

	    Begin

	        pMan := New DimOrmManager.Create;

	        pClass := pMan.CreateClass(uidim.Dimension);

	        pCondition := pClass.CreateCondition;

	        pCriteria := New DimTextCriteria.Create;

	        pCriteria.CriteriaOptions := TextCriteriaOptions.FreeText Or TextCriteriaOptions.SearchStringAttributes;

	        pCriteria.Text := txtPattern.Text;

	        pCondition.SetTextCriteria(pCriteria);

	        pOptions := New DimTextCriteria.Create;

	        pOptions.SelectOptions := ConditionSelectOptions.SelectedOnly;

	        pCondition.SelectElements(tree.Selection, pOptions);

	    End Sub cmdSearchOnClick;

	End Class UserForm;


После запуска формы необходимо ввести текст для поиска, произвести отметку
 в дереве и нажать на кнопку, после чего отметка в дереве будет изменена:
 останутся выделенными только те элементы, у которых по какому-нибудь атрибуту
 строкового типа будет найден искомый текст.


См. также:


[IDimOrmCondition](IDimOrmCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
