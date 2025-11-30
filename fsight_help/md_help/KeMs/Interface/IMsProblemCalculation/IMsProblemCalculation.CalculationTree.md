# IMsProblemCalculation.CalculationTree

IMsProblemCalculation.CalculationTree
-


# IMsProblemCalculation.CalculationTree


## Синтаксис


IMsCalculationTree: [IMsCalculationTree](../IMsCalculationTree/IMsCalculationTree.htm);


## Описание


Свойство CalculationTree возвращает
 дерево расчёта [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


Дерево расчёта в иерархической форме представляет последовательность
 расчёта, а также позволяет отображать на какой узел дерева установлена
 точка останова.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором Button1 и компонента [TreeList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeList.htm)
 с идентификатором TreeList1. В репозитории должен присутствовать контейнер
 моделирования с идентификатором MODEL_SPACE, содержащий задачу моделирования
 с идентификатором PROBLEM.


Добавьте ссылки на системные сборки: Metabase, Ms.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    ModelSpaceDescr: IMetabaseObjectDescriptor;

	    Problem: IMsProblem;

	    CalcSettings: IMsProblemCalculationSettings;

	    Calculation: IMsProblemCalculation;

	    CalculationTree: IMsCalculationTree;

	    CalcChildren: IMsCalculationTreeNodes;

	Begin

	    Mb := MetabaseClass.Active;

	    ModelSpaceDescr := Mb.ItemById("MODEL_SPACE");

	    Problem := Mb.ItemByIdNamespace("PROBLEM", ModelSpaceDescr.Key).Bind As IMsProblem;

	    CalcSettings := Problem.CreateCalculationSettings;

	    CalcSettings.FactIncluded := True;

	    Calculation := Problem.Calculate(CalcSettings);

	    CalculationTree := Calculation.CalculationTree;

	    CalcChildren := CalculationTree.Children;

	    FillCalcList(CalcChildren, Null);

	    End Sub Button1OnClick;


	Sub FillCalcList(Items: IMsCalculationTreeNodes; ParentNode: ITreeListNode);

	Var

	    TreeNodes: ITreeListNodes;

	    i: Integer;

	    Item: IMsCalculationTreeNode;

	    TreeNode: ITreeListNode;

	    Text: String;

	Begin

	    TreeNodes := TreeList1.Nodes;

	    For i := 0 To Items.Count - 1 Do

	        Item := Items.Item(i);

	        Text := Item.Text;

	        If Item.Kind = MsCalculationTreeNodeKind.Model Then

	            Text := Text + " (установлена точка останова!)";

	        End If;

	        TreeNode := TreeNodes.AddChild(ParentNode, Text);

	        FillCalcList(Item.Children, TreeNode);

	        TreeNode.Expand(False);

	    End For;

	End Sub FillCalcList;


После выполнения примера в компонент TreeList будет выведено дерево
 расчёта задачи моделирования.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
