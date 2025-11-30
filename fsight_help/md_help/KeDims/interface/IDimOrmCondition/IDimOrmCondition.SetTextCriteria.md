# IDimOrmCondition.SetTextCriteria

IDimOrmCondition.SetTextCriteria
-


# IDimOrmCondition.SetTextCriteria


## Синтаксис


SetTextCriteria(Value: [IDimTextCriteria](../IDimTextCriteria/IDimTextCriteria.htm));


## Параметры


Value. Условие поиска.


## Описание


Метод SetTextCriteria определяет условие поиска по тексту атрибутов.


## Пример


В рассматриваемом примере на форме располагаются компоненты: UiDimension, DimensionTree, Button, EditBox. Для кнопки описано событие OnClick.


	Class UserForm: Form

	    cmdSearch: Button;

	    uidim: UiDimension;

	    tree: DimensionTree;

	    txtPattern: EditBox;


	    Sub Button1OnClick(Sender: Object; Args: IEventArgs);

	    Var

	        pMan : IDimOrmManager;

	        pClass : IDimOrmClass;

	        pCondition : IDimOrmCondition;

	        pCriteria : IDimTextCriteria;

	    Begin

	        pMan := New DimOrmManager.Create;

	        pClass := pMan.CreateClass(uidim.Dimension);

	        pCondition := pClass.CreateCondition;

	        pCriteria := New DimTextCriteria.Create;

	        pCriteria.CriteriaOptions := TextCriteriaOptions.FreeText Or TextCriteriaOptions.SearchStringAttributes;

	        pCriteria.Text := txtPattern.Text;

	        pCondition.SetTextCriteria(pCriteria);

	        pCondition.SelectElements(tree.Selection);

	    End Sub Button1OnClick;

	End Class UserForm;


После запуска формы необходимо ввести текст для поиска и нажать на кнопку, после чего отметка в дереве будет изменена: будут выделены только те элементы, у которых по какому-нибудь атрибуту будет найден искомый текст.


См. также:


[IDimOrmCondition](IDimOrmCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
