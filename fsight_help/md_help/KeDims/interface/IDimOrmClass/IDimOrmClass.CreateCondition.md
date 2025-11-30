# IDimOrmClass.CreateCondition

IDimOrmClass.CreateCondition
-


# IDimOrmClass.CreateCondition


## Синтаксис


CreateCondition: [IDimOrmCondition](../IDimOrmCondition/IDimOrmCondition.htm);


## Описание


Метод CreateCondition создает
 объект для работы с условиями.


## Пример


В рассматриваемом примере на форме располагаются компоненты: UiDimension,
 DimensionTree, Button. Для кнопки описано событие OnClick.


	Class MyForm: Form

	    dtree: DimensionTree;

	    cmdSelect: Button;

	    uidim: UiDimension;


	    Sub cmdSelectOnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        pDimModel : IDimensionModel;

	        pManager : IDimOrmManager;

	        pClass : IDimOrmClass;

	        pCond : IDimOrmCondition;

	        pCondition : IOrmCondition;

	        pDimElement : IDimElement;

	        pDim : IDimInstance;

	        pDimElements : IDimElementArray;

	        i : Integer;

	    Begin

	        pDim := uidim.DimInstance;

	        pDimModel := uidim.Dimension;

	        pManager := New DimOrmManager.Create;

	        pClass := pManager.CreateClass(pDimModel);

	        pCond := pClass.CreateCondition;

	        pCondition := pCond.Conditions.Add;

	        pCondition.AttributeName := "TEMP1";

	        pCondition.Operator_ := OrmComparisonOperator.IsNotNull;

	        pDimElement := pDim.NewElement;

	        pDimElements := pDim.Elements.Elements;

	        For i := 0 To pDimElements.Count - 1 Do

	            pDimElement.Element := pDimElements.Element(i);

	            If pCond.Evaluate(pDimElement) Then

	                dtree.Selection.SelectElement(pDimElement.Element, False);

	            End If;

	        End For;

	    End Sub cmdSelectOnClick;

	End Class MyForm;


После запуска формы необходимо нажать на кнопку, после чего отметка
 в дереве будет изменена: будут выделены только те элементы, у которых
 по атрибуту TEMP1 будет найдено непустое значение.


См. также:


[IDimOrmClass](IDimOrmClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
