# ICubeCombinedExecutor.AddCube

ICubeCombinedExecutor.AddCube
-


# ICubeCombinedExecutor.AddCube


## Синтаксис


		AddCube(Cube: [ICubeInstance](../ICubeInstance/ICubeInstance.htm);
		 Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


Cube. Открытый экземпляр куба,
 который необходимо добавить для расчёта.


Selection. Отметка измерений
 в соответствии с которой осуществляется расчёт.


## Описание


Метод AddCube добавляет куб
 в список для параллельного расчёта.


## Комментарии


Куб должен соответствовать требованиям, представленным в описании интерфейса
 [ICubeCombinedExecutor](ICubeCombinedExecutor.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории двух стандартных
 кубов с идентификаторами «STD_CUBE1» и «STD_CUBE2». Настройки кубов удовлетворяют
 [заданным требованиям](ICubeCombinedExecutor.htm). В каждом
 кубе по три измерения.


Добавьте
 ссылки на системные сборки: Cubes, Dimensions, ForeSystem, Matrix, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CubeInst: ICubeInstance;

		    Dest: ICubeInstanceDestination;

		    Sels: IDimSelectionSet;

		    CCE: ICubeCombinedExecutor;

		    Item: ICubeCombinedExecutorItem;

		    M: IMatrix;

		    Iter: IMatrixIterator;

		    i: Integer;

		Begin

		    MB := MetabaseClass.Active;

		    CCE := New CubeCombinedExecutor.Create;

		    //Открываем первый куб, задаём отметку и добавляем для параллельного вычисления

		    CubeInst := MB.ItemById("STD_CUBE1").Open(Null) As ICubeInstance;

		    Dest := CubeInst.Destinations.DefaultDestination;

		    Sels := Dest.CreateDimSelectionSet;

		    Sels.Item(0).SelectAll;

		    Sels.Item(1).SelectAll;

		    Sels.Item(2).SelectAll;

		    CCE.AddCube(CubeInst, Sels);

		    //Открываем второй куб, задаём отметку и добавляем для параллельного вычисления

		    CubeInst := MB.ItemById("STD_CUBE2").Open(Null) As ICubeInstance;

		    Dest := CubeInst.Destinations.DefaultDestination;

		    Sels := Dest.CreateDimSelectionSet;

		    Sels.Item(0).SelectAll;

		    Sels.Item(1).SelectAll;

		    Sels.Item(2).SelectAll;

		    CCE.AddCube(CubeInst, Sels);

		    //Вычисляем добавленные кубы

		    CCE.Execute;

		    //Выводим результат для каждого из кубов

		    For i := 0 To CCE.Count - 1 Do

		        Item := CCE.Item(i);

		        Debug.WriteLine("Куб: " + (Item.Cube.Cube As IMetabaseObject).Id + ". MultiExecuted: " + Item.MultiExecuted.ToString);

		        //Матрица с данными

		        M := Item.Matrix;

		        //Выводим элементы матрицы

		        Iter := M.CreateIterator;

		        Iter.Move(IteratorDirection.First);

		        While Iter.Valid Do

		            Debug.Write(Iter.Value + " ");

		            Iter.Move(IteratorDirection.Next);

		        End While;

		        Debug.WriteLine("");

		    End For;

		End Sub UserProc;


При выполнении примера осуществляется параллельный расчёт двух кубов.
 Результаты расчётов будут выведены в консоль среды разработки.


См. также:


[ICubeCombinedExecutor](ICubeCombinedExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
