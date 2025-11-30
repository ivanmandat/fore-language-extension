# ICubeCombinedExecutor.AddCubeDest

ICubeCombinedExecutor.AddCubeDest
-


# ICubeCombinedExecutor.AddCubeDest


## Синтаксис


		AddCubeDest(CubeDest: [ICubeInstanceDestination](../ICubeInstanceDestination/ICubeInstanceDestination.htm);
		 Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm));


## Параметры


CubeDest. Вариант отображения
 куба, который необходимо добавить для расчёта.


Selection. Отметка измерений
 в соответствии с которой осуществляется расчёт.


## Описание


Метод AddCubeDest добавляет
 вариант отображения куба в список для параллельного расчёта.


## Комментарии


Куб, для которого получен вариант отображения, должен соответствовать
 требованиям, представленным в описании интерфейса [ICubeCombinedExecutor](ICubeCombinedExecutor.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE». Куб включает в себя три измерения,
 также в кубе созданы и настроены два варианта отображения. Настройки куба
 удовлетворяют [заданным требованиям](ICubeCombinedExecutor.htm).


Добавьте
 ссылки на системные сборки: Cubes, Dimensions, ForeSystem, Matrix, Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CubeInst: ICubeInstance;

		    Dests: ICubeInstanceDestinations;

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

		    //Открываем куб, получаем первый вариант отображения, задаём отметку и добавляем для параллельного вычисления

		    CubeInst := MB.ItemById("STD_CUBE").Open(Null) As ICubeInstance;

		    Dests := CubeInst.Destinations;

		    Dest := Dests.Item(0);

		    Sels := Dest.CreateDimSelectionSet;

		    Sels.Item(0).SelectAll;

		    Sels.Item(1).SelectAll;

		    Sels.Item(2).SelectAll;

		    CCE.AddCubeDest(Dest, Sels);

		    //Получаем второй вариант отображения, задаём отметку и добавляем для параллельного вычисления

		    Dest := Dests.Item(1);

		    Sels := Dest.CreateDimSelectionSet;

		    Sels.Item(0).SelectAll;

		    Sels.Item(1).SelectAll;

		    Sels.Item(2).SelectAll;

		    CCE.AddCubeDest(Dest, Sels);

		    //Вычисляем добавленные варианты отображения куба

		    CCE.Execute;

		    //Выводим результат для каждого варианта отображения куба

		    For i := 0 To CCE.Count - 1 Do

		        Item := CCE.Item(i);

		        Debug.WriteLine("Вариант отображения: " + Item.Destination.Name + ". MultiExecuted: " + Item.MultiExecuted.ToString);

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


При выполнении примера осуществляется параллельный расчёт двух вариантов
 отображения куба. Результаты расчётов будут выведены в консоль среды разработки.


См. также:


[ICubeCombinedExecutor](ICubeCombinedExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
