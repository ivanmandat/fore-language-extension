# UiChart.OnGetPointNameRoot

UiChart.OnGetPointNameRoot
-


# UiChart.OnGetPointNameRoot


## Синтаксис


Sub OnGetPointNameRoot(Sender:
 Object; Args: [IUiChartPointNameRootEventArgs](../../Interface/IUiChartPointNameRootEventArgs/IUiChartPointNameRootEventArgs.htm));


Begin


//набор операторов


End Sub
 OnGetPointNameRoot;


## Параметры


Sender - параметр, возвращающий
 компонент, сгенерировавший событие.


Args - параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetPointNameRoot позволяет
 определить корневой элемент для иерархии наименований оси категорий.


## Пример


В рассматриваемом примере предполагается существование объекта UiChart1 типа UiChart.
 [Описание
 класса CChartPointNameNode](../../Interface/IChartPointNameNode/CChartPointNameNode.htm) приведено в интерфейсе [IChartPointNameNode](../../Interface/IChartPointNameNode/IChartPointNameNode.htm).


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


[UiChart](UiChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
