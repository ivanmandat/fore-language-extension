# IBasicMatrixAggregator.OperationCount

IBasicMatrixAggregator.OperationCount
-


# IBasicMatrixAggregator.OperationCount


## Синтаксис


OperationCount: Integer;


## Описание


Свойство OperationCount возвращает количество доступных методов агрегации.


## Пример


Sub Main;


Var


Man: IMatrixAggregatorManager;


BasicAggr: IBasicMatrixAggregator;


i: Integer;


Begin


Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;


BasicAggr := Man.CreateAggregator("BasicMatrixAggregator") As IBasicMatrixAggregator;


For i := 0 To BasicAggr.OperationCount - 1 Do


Debug.WriteLine(BasicAggr.OperationName(BasicAggr.Operation(i)));


End For;


End Sub Main;


После выполнения примера в консоль среды разработки будут выведены наименования всех методов, доступных при использовании основного механизма агрегации.


См. также:


[IBasicMatrixAggregator](IBasicMatrixAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
