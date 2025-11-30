# IChartPointNameNode.Name

IChartPointNameNode.Name
-


# IChartPointNameNode.Name


## Синтаксис


Name: String;


## Описание


Свойство доступно только для чтения.


Свойство Name возвращает наименование
 уровня.


## Пример


В рассматриваемом примере предполагается существование объекта UiChart1 типа UiChart.
 [Описание класса CChartPointNameNode](CChartPointNameNode.htm)
 приведено в интерфейсе [IChartPointNameNode](IChartPointNameNode.htm).


	Sub UiChart1OnGetPointNameRoot(Sender: Object; Args: IUiChartPointNameRootEventArgs);

	Var

	    Root, MonthLevel, DayLevel: CChartPointNameNode;

	Begin

	    Root := New CChartPointNameNode.Create(Null);

	    Root.Format := "dd MMMM yyyy";

	    Root.Name := "Годы";

	    Root.Required := True;

	    MonthLevel := New CChartPointNameNode.Create(Root);

	    MonthLevel.Format := Root.Format;

	    MonthLevel.Name := "Месяцы";

	    MonthLevel.Required := True;

	    DayLevel := New CChartPointNameNode.Create(MonthLevel);

	    DayLevel.Format := Root.Format;

	    DayLevel.Name := "Дни";

	    DayLevel.Required := True;

	    Args.Result := Root As IChartPointNameNode;

	End Sub UiChart1OnGetPointNameRoot;


После выполнения примера будет определен корневой элемент для иерархии
 наименований оси категорий.


См. также:


[IChartPointNameNode](IChartPointNameNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
