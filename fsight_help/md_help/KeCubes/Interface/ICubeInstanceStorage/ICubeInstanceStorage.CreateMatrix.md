# ICubeInstanceStorage.CreateMatrix

ICubeInstanceStorage.CreateMatrix
-


# ICubeInstanceStorage.CreateMatrix


## Синтаксис


		CreateMatrix(


		Dimensions: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


		Options: Integer;


		ExecuteSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
		 [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Параметры


Dimensions. Отметка, в соответствии
 с которой осуществляется создание матрицы для куба.


Options. Параметр зарезервирован
 для внутреннего использования. Передавайте в качестве значения - 0.


ExecuteSet. Параметр зарезервирован
 на будущее.


## Описание


Метод CreateMatrix создаёт пустую
 матрицу, которая в дальнейшем может быть заполнена данными и сохранена
 в куб.


## Комментарии


Метод позволяет быстро создать пустую матрицу без фактического построения
 куба. Структура матрицы будет соответствовать отметке, указанной в параметре
 Dimensions. Если в параметре
 Dimensions передаётся пустая
 отметка, то матрица будет соответствовать максимальной отметке куба.


В текущей реализации в качестве значения параметра ExecuteSet
 передавайте значение Null или
 отметку, указанную в Dimensions.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CubInst: ICubeInstance;

		    Dest: ICubeInstanceDestination;

		    Sels: IDimSelectionSet;

		    Sel: IDimSelection;

		    Matr: IMatrix;

		    Coord: IMatrixCoord;

		    Sto: ICubeInstanceStorage;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    CubInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

		    Dest := CubInst.Destinations.DefaultDestination;

		    Sels := Dest.CreateDimSelectionSet;

		    For Each Sel In Sels Do

		        Sel.SelectElement(0, False);

		    End For;

		    //Получение матрицы значений по указанной отметке

		    Sto := Dest.CreateStorage(CubeInstanceStorageOptions.None);

		    Matr := Sto.CreateMatrix(Sels, 0, Null);

		    Matr.ValueFlag := Matr.ValueFlag + 1;

		    //Создание координаты в матрице

		    Coord := Matr.CreateCoord;

		    For i := 0 To Matr.DimensionCount - 1 Do

		        Coord.Item(i) := 0;

		    End For;

		    //Изменение значения по координате

		    Matr.Item(Coord) := 100;

		    //Сохранение значения

		    Sto.SaveMatrix(Matr, Matr.ValueFlag);

		End Sub UserProc;


При выполнении примера по заданной отметке куба будет создана пустая
 матрица. В матрицу будет записано значение. После этого матрица сохраняется
 в куб.


См. также:


[ICubeInstanceStorage](ICubeInstanceStorage.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
