# ITsStatistics.Execute

ITsStatistics.Execute
-


# ITsStatistics.Execute


## Синтаксис


Execute: [ITsStatisticsTree](../ITsStatisticsTree/ITsStatisticsTree.htm);


## Описание


Метод Execute выполняет
 построение дерева статистических характеристик.


## Комментарии


Значения, для которых рассчитываются статистические характеристики,
 определяет свойство [ITsStatistics.Values](ITsStatistics.Values.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей следующие
 компоненты:


	- LanerBox с идентификатором
	 «LanerBox1»;


	- UiErAnalayzer с идентификатором
	 «UiErAnalayzer1», являющийся источником данных для «LanerBox1».
	 В «UiErAnalayzer1» должна быть загружена рабочая книга базы данных
	 временных рядов;


	- TreeList с идентификатором
	 «TreeList1», содержащий три колонки.


Добавьте ссылки на системные сборки: Collection, Cubes, Ms, Stat, Transform.


	Sub UserProc;

	Var

	    Stat: ITsStatistics;

	    CalcSerie: ILanerCalculateSerie;

	    Transform: IMsFormulaTransform;

	    Formula: IMsFormula;

	    SummaryStat: ISummaryStatistics;

	    TabSheet: ITabSheet;

	    TabSelection: ITabSelection;

	    Range: ITabRange;

	    i, j: integer;

	    Arr: IArrayList;

	    Tree: ITsStatisticsTree;

	    StatNode, ParentNode: ITreeListNode;

	    HashT: IHashtable;

	    Grid:IEaxGrid;

	Begin

	    // Очищаем компонент для вывода дерева статистик

	    TreeList1.Nodes.Clear;

	    TreeList1.ShowColumnHeaders := True;

	    If LanerBox1.SelectedSeriesCount = 0 Then

	        Return;

	    End If;

	    // Создаем класс для построения дерева статистик

	    Stat := New TsStatistics.Create;

	    // Передаем статистические характеристики для построения дерева

	    CalcSerie := LanerBox1.SelectedSeries(0) As ILanerCalculateSerie;

	    If CalcSerie.Transform <> Null Then

	        Transform := CalcSerie.Transform.Transform As IMsFormulaTransform;

	        If (Transform <> Null) And (Transform.FormulaCount <> 0) Then

	            Formula := Transform.FormulaItem(0);

	            SummaryStat := Formula.Method.Summary(Transform.CreateCoord(Null));

	            Stat.SummaryStatistics := SummaryStat;

	        End If;

	    End If;

	    // Получаем диапазон ячеек, выделенных в LanerBox

	    Grid := UiErAnalyzer1.ErAnalyzer.Grid;

	    TabSheet := Grid.TabSheet;

	    TabSelection := TabSheet.View.Selection;

	    If TabSelection.Range.IsCell Then

	        Range := Grid.SpecificRange(EaxRangeType.Internal);

	    Else

	        Range := TabSelection.Range;

	    End If;

	    // Получаем значения в выделенном диапазоне

	    Arr := New ArrayList.Create;

	    For i := Range.Left To Range.Right Do

	        For j := Range.Top To Range.Bottom Do

	            Arr.Add(TabSheet.CellValue(j, i));

	        End For;

	    End For;

	    // Передаем значения для построения дерева

	    Stat.Values := Arr.ToArray;

	    // Исключаем часть статистик из построения дерева

	    Stat.IncludeStatistics(TsStatisticsType.Skew) := False;

	    Stat.IncludeStatistics(TsStatisticsType.Kurt) := False;

	    // Включаем в построение дерева только рассчитанные статистики

	    Stat.CalculatedOnly := True;

	    // Отстраиваем дерево

	    Tree := Stat.Execute;

	    If Tree = Null Then

	        Return;

	    End If;

	    HashT := New Hashtable.Create;

	    For i := 0 To Tree.Count - 1 Do

	        ParentNode := Null;

	        If Tree.ParentNode(i) <> -1 Then

	            ParentNode := HashT(Tree.ParentNode(i));

	        End If;

	        StatNode := TreeList1.Nodes.AddChild(ParentNode, Tree.Name(i));

	        If Tree.Type(i) = TsStatisticsTreeNodeType.Statistics Then

	            StatNode.ColumnText(1) := Tree.Value(i);

	            StatNode.ColumnText(2) := Tree.ShortName(i);

	            Debug.WriteLine(Tree.StatNode(Tree.Data(i) As TsStatisticsType));

	        End If;

	        HashT(i) := StatNode;

	    End For;

	    HashT.Clear;

	    TreeList1.Nodes.TreeControl.InnerRoot.Expand(True);

	End Sub UserProc;


В результате выполнения примера в «TreeList1» будет выведено дерево
 статистических характеристик, рассчитанных для диапазона данных, выделенного
 в «LanerBox1». Индексы рассчитанных характеристик будут выведены в окно
 консоли.


См. также:


[ITsStatistics](ITsStatistics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
