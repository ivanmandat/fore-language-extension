# IEaxStatistics.AllStatistics

IEaxStatistics.AllStatistics
-


# IEaxStatistics.AllStatistics


## Синтаксис


AllStatistics: [ITsStatisticsTree](KeTransform.chm::/Interface/ITsStatisticsTree/ITsStatisticsTree.htm);


## Описание


Свойство AllStatistics возвращает
 все статистические характеристики.


## Комментарии


Только рассчитанные статистические характеристики возвращает свойство
 [IEaxStatistics.Statistics](IEaxStatistics.Statistics.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей следующие
 компоненты:


	- Button с наименованием
	 «Button1»;


	- LanerBox с наименованием
	 «LanerBox1»;


	- UiErAnalayzer с наименованием
	 «UiErAnalayzer1», являющийся источником данных для «LanerBox1». В
	 «UiErAnalayzer1» должна быть загружена рабочая книга БД временных
	 рядов;


	- TreeList с наименованием
	 «TreeList1», содержащий 2 колонки.


Добавьте ссылки на системные сборки: Collection, Transform.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    EaxStat: IEaxStatistics;

	    Tree: ITsStatisticsTree;

	    i: integer;

	    Nodes: ITreeListNodes;

	    StatNode, ParentNode: ITreeListNode;

	    HashT: IHashtable;

	Begin

	    EaxStat := UiErAnalyzer1.ErAnalyzer.Statistics;

	    // Исключаем часть статистик из построения дерева

	    EaxStat.StatisticsVisible(TsStatisticsType.Skew) := False;

	    EaxStat.StatisticsVisible(TsStatisticsType.Kurt) := False;

	    EaxStat.CustomStatisticsVisible(EaxCustomStatisticsType.Scale) := False;


	    // Получаем статистики

	    Tree := EaxStat.AllStatistics;

	    // Очищаем компонент для вывода дерева статистик

	    Nodes := TreeList1.Nodes;

	    Nodes.Clear;

	    // Отстраиваем дерево

	    If Tree = Null Then

	        Return;

	    End If;

	    HashT := New Hashtable.Create;

	    For i := 0 To Tree.Count - 1 Do

	        ParentNode := Null;

	        If Tree.ParentNode(i) <> -1 Then

	            ParentNode := HashT(Tree.ParentNode(i));

	        End If;


	        StatNode := Nodes.AddChild(ParentNode, Tree.Name(i));

	        If Tree.Type(i) <> TsStatisticsTreeNodeType.Category Then

	            StatNode.ColumnText(1) := Tree.Value(i);

	        End If;

	        StatNode.Data := i;

	        HashT(i) := StatNode;

	    End For;

	    HashT.Clear;

	    Nodes.TreeControl.InnerRoot.Expand(True);

	End Sub Button1OnClick;


После выполнения примера в «TreeList1» будет выведено дерево статистических
 характеристик, рассчитанных для диапазона данных, выделенного в «LanerBox1».


См. также:


[IEaxStatistics](IEaxStatistics.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
