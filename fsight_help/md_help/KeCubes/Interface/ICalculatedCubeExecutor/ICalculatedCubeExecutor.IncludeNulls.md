# ICalculatedCubeExecutor.IncludeNulls

ICalculatedCubeExecutor.IncludeNulls
-


# ICalculatedCubeExecutor.IncludeNulls


## Синтаксис


IncludeNulls: Boolean;


## Описание


Свойство IncludeNulls определяет
 признак включения пустых значений в результирующую матрицу.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом пустые значения исключаются из результирующей матрицы куба. При
 установке значения True пустые
 ячейки будут включены в результирующую матрицу.


Примечание.
 При большом количестве измерений в кубе включение пустых значений в результирующую
 матрицу может значительным образом увеличить количество используемых ресурсов
 компьютера (в частности, объем занимаемой оперативной памяти).


## Пример


Для выполнения примера предполагается наличие в репозитории вычисляемого
 куба с идентификатором CALC_CUBE.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cube: ICalculatedCubeInstance;

	    Exe: ICalculatedCubeExecutor;

	    Matr: IMatrix;

	    Iter: IMatrixIterator;

	Begin

	    MB := MetabaseClass.Active;

	    Cube := Mb.ItemById("CALC_CUBE").Open(Null) As ICalculatedCubeInstance;

	    Exe := Cube.CreateExecutor(Null);

	    Exe.EvaluateOnly := EvaluateOnlyType.All;

	    Exe.IncludeNulls := True;

	    (Exe As ICubeInstanceDestinationExecutor).PrepareExecute(Null);

	    Exe.Execute;

	    Matr := Exe.Matrix;

	    Iter := Matr.CreateIterator;

	    Iter.Move(IteratorDirection.First);

	    While Iter.Valid Do

	        Debug.WriteLine("' " + Iter.Value + " '");

	        Iter.Move(IteratorDirection.Next);

	    End While;

	End Sub UserProc;


При выполнении примера будет осуществлен расчет результирующей матрицы
 вычисляемого куба. Расчет производится по полной отметке куба, в результирующую
 матрицу будут включены пустые значения. Полученные значения будут выведены
 в консоль среды разработки.


См. также:


[ICalculatedCubeExecutor](ICalculatedCubeExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
