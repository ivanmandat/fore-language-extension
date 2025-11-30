# IMsCalculationModelTreeNode.Breakpoint

IMsCalculationModelTreeNode.Breakpoint
-


# IMsCalculationModelTreeNode.Breakpoint


## Синтаксис


		Breakpoint: [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm);


## Описание


Свойство Breakpoint возвращает
 точку останова.


## Комментарии


Свойство возвращает базовый интерфейс для работы с точкой останова.
 Для работы с параметрами различных видов точек останова приведите интерфейс
 [IMsBreakpoint](../IMsBreakpoint/IMsBreakpoint.htm)
 к интерфейсу [IMsModelCalendarBreakpoint](../IMsModelCalendarBreakpoint/IMsModelCalendarBreakpoint.htm)
 или [IMsDataBreakpoint](../IMsDataBreakpoint/IMsDataBreakpoint.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 расположенной на ней кнопкой с идентификатором BUTTON1 и компонента [TreeList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeList.htm) с идентификатором
 TREELIST1. В репозитории также должен присутствовать контейнер моделирования
 с идентификатором MODEL_SPACE, содержащий задачу моделирования с идентификатором
 PROBLEM.


Пример является обработчиком события OnClick
 для кнопки BUTTON1.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

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

		    Problem := Mb.ItemByIdNamespace("PROBLEM",ModelSpaceDescr.Key).Bind As IMsProblem;

		    CalcSettings := Problem.CreateCalculationSettings;

		    CalcSettings.FactIncluded:= True;

		    Calculation := Problem.Calculate(CalcSettings);

		    CalculationTree := Calculation.CalculationTree;

		    CalcChildren := CalculationTree.Children;

		    FillCalcList(CalcChildren, Null);

		End Sub Button1OnClick;


		Sub FillCalcList(Items:IMsCalculationTreeNodes; ParentNode: ITreeListNode);

		Var

		    TreeNodes: ITreeListNodes;

		    i: Integer;

		    Item: IMsCalculationTreeNode;

		    ModelKindItem: IMsCalculationModelTreeNode;

		    TreeNode: ITreeListNode;

		    Text: String;

		Begin

		    TreeNodes := TreeList1.Nodes;

		    For i := 0 To Items.Count - 1 Do

		        Item := Items.Item(i);

		        Text := Item.Text;

		        If Item.Kind = MsCalculationTreeNodeKind.Model Then

		        Text := Text + "(установлена точка останова!)";

		        ModelKindItem := Item As IMsCalculationModelTreeNode;

		        Debug.WriteLine("Точка останова: " + ModelKindItem.Breakpoint.Name);

		        Debug.WriteLine("Сработала в точке: " + ModelKindItem.CurrentPoint.ToString);

		        Debug.WriteLine("----");

		    End If;

		        TreeNode := TreeNodes.AddChild(ParentNode,Text);

		        FillCalcList(Item.Children,TreeNode);

		        TreeNode.Expand(False);

		    End For;

		End Sub FillCalcList;


В результате выполнения примера в компонент TreeList
 будет выведено дерево расчёта задачи моделирования. В окно консоли будет
 выведена информация об элементах дерева, являющихся точками останова.


См. также:


[IMsCalculationModelTreeNode](IMsCalculationModelTreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
