# Настройка перечня рассчитываемых статистик

Настройка перечня рассчитываемых статистик
-


# Настройка перечня рассчитываемых статистик


## Пример


Для выполнения примера предполагается наличие формы, содержащей следующие компоненты:


-
кнопку с идентификатором «Button1»;


-
LanerBox с идентификатором «LanerBox1»;


-
UiErAnalayzer с идентификатором «UiErAnalayzer1», являющийся источником данных для «LanerBox1». В «UiErAnalayzer1» должна быть загружена рабочая книга БД временных рядов;


-
TreeList с идентификатором «TreeList1», содержащий 2 столбца.


Добавьте ссылки на следующие системные сборки:


-
Collection;


-
Transform.


Пример является обработчиком события OnClick для компонента «Button1»:


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    EaxStat: IEaxStatistics;

    Tree: ITsStatisticsTree;

    i: integer;

    Nodes: ITreeListNodes;

    StatNode, ParentNode: ITreeListNode;

    HashT: IHashtable;

    Wbk: IEaxWorkbook;

Begin

    EaxStat := UiErAnalyzer1.ErAnalyzer.Statistics;

    Wbk := UiErAnalyzer1.ErAnalyzer As IEaxWorkbook;

    Wbk.Statistics.Visible := True;

    Wbk.Statistics.Enabled := True;

    // Исключаем часть статистик из построения дерева
    EaxStat.StatisticsVisible(TsStatisticsType.Max) := False;

    EaxStat.StatisticsVisible(TsStatisticsType.Min) := False;

    EaxStat.StatisticsVisible(TsStatisticsType.Average) := False;

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


После выполнения примера при нажатии на кнопку будет отрисовано дерево статистик для таблицы рабочей книги. В дереве не будут отображаться значения «Минимум», «Максимум» и «Среднее».


См. также:


[Примеры](Laner_Samples.htm) | [ILaner](../Interface/ILaner/ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
