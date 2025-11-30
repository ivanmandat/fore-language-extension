# IMsCalculationModelTreeNode.Model

IMsCalculationModelTreeNode.Model
-


# IMsCalculationModelTreeNode.Model


## Синтаксис


		Model: [IMsModel](../IMsModel/IMsModel.htm);


## Описание


Свойство Model возвращает модель,
 для которой установлена точка останова.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащего задачу моделирования
 с идентификатором PROBLEM.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ModelSpaceDescr: IMetabaseObjectDescriptor;

		    Problem: IMsProblem;

		    CalcSettings: IMsProblemCalculationSettings;

		    Calculation: IMsProblemCalculation;

		    CalculationTree: IMsCalculationTree;

		    CalcChildren: IMsCalculationTreeNodes;

		    i: Integer;

		    Item: IMsCalculationTreeNode;

		    ModelTreeNode: IMsCalculationModelTreeNode;

		Begin

		    mb := MetabaseClass.Active;

		    ModelSpaceDescr := Mb.ItemById("MODEL_SPACE");

		    Problem := Mb.ItemByIdNamespace("PROBLEM", ModelSpaceDescr.Key).Bind As IMsProblem;

		    CalcSettings := Problem.CreateCalculationSettings;

		    CalcSettings.FactIncluded := True;

		    Calculation := Problem.Calculate(CalcSettings);

		    CalculationTree := Calculation.CalculationTree;

		    CalcChildren := CalculationTree.Children;

		    For i := 0 To CalcChildren.Count - 1 Do

		        Item := CalcChildren.Item(i);

		        If Item.Kind = MsCalculationTreeNodeKind.Model Then

		            ModelTreeNode := Item As IMsCalculationModelTreeNode;

		            Debug.WriteLine("Точка остановы");

		            Debug.WriteLine("  - ключ: " + ModelTreeNode.Key.ToString);

		            Debug.WriteLine("  - ключ сценария: " + ModelTreeNode.Scenario.ToString);

		            Debug.WriteLine("  - присутствует родитель: " + (ModelTreeNode.Parent <> Null).ToString);

		            Debug.WriteLine("  - модель: " + (ModelTreeNode.Model As IMetabaseObject).Name);

		        End If;

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 о точках останова, если они присутствуют в задаче.


См. также:


[IMsCalculationModelTreeNode](IMsCalculationModelTreeNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
