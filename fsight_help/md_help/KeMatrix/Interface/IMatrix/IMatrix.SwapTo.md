# IMatrix.SwapTo

IMatrix.SwapTo
-


# IMatrix.SwapTo


## Синтаксис


SwapTo(Dims: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)): [IMatrix](IMatrix.htm);


## Параметры


Dims - отметка измерений, в соответствии с которой осуществляется перестановка измерений в матрице.


## Описание


Метод SwapTo осуществляет перемещение измерений с данными в матрице. Измерения перемещаются в соответствии с отметкой элементов, передаваемой посредством параметра Dims.


## Пример


Для выполнения примера предполагается наличие куба с идентификатором "Cube_1", содержащего три измерения.


Sub Main;


Var


MB: IMetabase;


Cube: ICubeInstance;


DefDes: ICubeInstanceDestination;


Matr, Matr1: IMatrix;


DimSS, DimSS1: IDimSelectionSet;


SSFact: IDimSelectionSetFactory;


DimS: IDimSelection;


i, x, y, z: Integer;


M: Matrix[3];


Begin


MB := MetabaseClass.Active;


Cube := MB.ItemById("Cube_1").Open(Null) As ICubeInstance;


DefDes := Cube.Destinations.DefaultDestination;


DimSS := DefDes.CreateDimSelectionSet;


For Each DimS In DimSS Do


DimS.SelectAll;


End For;


SSFact := New DimSelectionSetFactory.Create;


DimSS1 := SSFact.CreateDimSelectionSet;


//Отметка измерений, расположенных в обратном порядке


For i := DimSS.Count - 1 To 0 Step - 1 Do


DimSS1.Add(DimSS.Item(i).Dimension);


End For;


For Each DimS In DimSS1 Do


DimS.SelectAll;


End For;


//Исходная матрица


Matr := DefDes.Execute(DimSS);


//Матрица с переставленными измерениями


Matr1 := Matr.SwapTo(DimSS1);


M := Matr;


Debug.WriteLine("Исходная матрица");


For x := Matr.LowerBound(0) To Matr.UpperBound(0) Do


For y := Matr.LowerBound(1) To Matr.UpperBound(1) Do


For z := Matr.LowerBound(2) To Matr.UpperBound(2) Do


Debug.Write(M[x, y, z] + " ");


End For;


Debug.WriteLine("");


End For;


Debug.WriteLine("");


End For;


M := Matr1;


Debug.WriteLine("Матрица с переставленными измерениями");


For x := Matr1.LowerBound(0) To Matr1.UpperBound(0) Do


For y := Matr1.LowerBound(1) To Matr1.UpperBound(1) Do


For z := Matr1.LowerBound(2) To Matr1.UpperBound(2) Do


Debug.Write(M[x, y, z] + " ");


End For;


Debug.WriteLine("");


End For;


Debug.WriteLine("");


End For;


End Sub Main;


После выполнения примера на базе куба будет получена матрица с данными. После перестановки измерений в обратном порядке будет получена вторая матрица с данными. Значения элементов обеих матриц будут выведены в консоль среды разработки.


См.также:


[IMatrix](IMatrix.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
