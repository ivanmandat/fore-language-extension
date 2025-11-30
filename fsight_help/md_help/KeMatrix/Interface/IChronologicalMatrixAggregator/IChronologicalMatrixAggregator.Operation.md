# IChronologicalMatrixAggregator.Operation

IChronologicalMatrixAggregator.Operation
-


# IChronologicalMatrixAggregator.Operation


## Синтаксис


Operation(Index: Integer): Integer;


## Параметры


Index - индекс метода агрегации.


## Описание


Свойство Operation возвращает метод агрегации, индекс которого передается посредством параметра Index.


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
