# IBasicMatrixAggregator.OperationName

IBasicMatrixAggregator.OperationName
-


# IBasicMatrixAggregator.OperationName


## Синтаксис


OperationName(Operation: Integer): String;


## Параметры


Operation - индекс метода агрегации.


## Описание


Свойство OperationName возвращает наименование метода агрегации, передаваемого посредством параметра Operation.


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


?rh-cbt_start condition="Online" ?>См. также:


[IBasicMatrixAggregator](IBasicMatrixAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
