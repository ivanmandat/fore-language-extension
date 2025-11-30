# IChronologicalMatrixAggregator.OperationCount

IChronologicalMatrixAggregator.OperationCount
-


# IChronologicalMatrixAggregator.OperationCount


## Синтаксис


OperationCount: Integer;


## Описание


Свойство OperationCount возвращает количество доступных методов агрегации.


## Пример


Sub Main;


Var


Man: IMatrixAggregatorManager;


ChronAggr: IChronologicalMatrixAggregator;


i: Integer;


Begin


Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;


ChronAggr := Man.CreateAggregator("ChronologicalMatrixAggregator") As IChronologicalMatrixAggregator;


For i := 0 To ChronAggr.OperationCount - 1 Do


Debug.WriteLine(ChronAggr.OperationName(ChronAggr.Operation(i)));


End For;


End Sub Main;


После выполнения примера в консоль среды разработки будут выведены наименования всех методов, доступных при использовании хронологического механизма агрегации.


См.также:


[IChronologicalMatrixAggregator](IChronologicalMatrixAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
