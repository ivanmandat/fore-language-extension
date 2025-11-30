# IMatrixTransformer.Transform

IMatrixTransformer.Transform
-


# IMatrixTransformer.Transform


## Синтаксис


Transform: [IMatrix](../IMatrix/IMatrix.htm);


## Описание


Метод Transform преобразует
 данные матричного преобразователя в матрицу.


## Комментарии


Для преобразования данных из матричного преобразователя в матрицу добавьте
 или удалите временные измерения из коллекции с помощью методов [IMatrixTransformerDimensions.Add](../IMatrixTransformerDimensions/IMatrixTransformerDimensions.Add.htm) или
 [IMatrixTransformerDimensions.Remove](../IMatrixTransformerDimensions/IMatrixTransformerDimensions.Remove.htm).


## Пример


Для выполнения примера в репозиториии необходимо наличие календарного
 справочника с идентификатором «D_CALENDAR».


Добавьте ссылки на системные сборки: Dimensions, MathFin, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DimA: IDimInstance;

	    Mfactory: IMatrixFactory;

	    DimSel: IDimSelectionSet;

	    Dfactory: IDimSelectionSetFactory;

	    Matrix, NewMat: IMatrix;

	    i1, i, element: integer;

	    Coord: IMatrixCoord;

	    elements: IDimElements;

	    Selection: IDimSelection;

	    Iterator: IMatrixIterator;

	    trf: IMatrixTransformer;

	    mtd: IMatrixTransformerDimension;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим данные справочника

	    DimA := MB.ItemById("D_CALENDAR").Open(Null) As IDimInstance;

	    // Создадим отметку

	    Dfactory := New DimSelectionSetFactory.Create;

	    DimSel := Dfactory.CreateDimSelectionSet;

	    DimSel.Add(DimA);

	    // Создадим матрицу и заполним ее

	    Mfactory := New MatrixFactory.Create As IMatrixFactory;

	    Matrix := Mfactory.CreateMatrix(DimSel);

	    Coord := Matrix.CreateCoord;

	    For i1 := 0 To DimSel.Item(0).Dimension.Elements.Count - 1 Do

	        Coord.Item(0) := i1;

	        Matrix.Item(Coord) := Math.RandBetweenI(0, 12);

	    End For;

	    // Вывод координат в окно консоли

	    For i := 0 To DimSel.Count - 1 Do

	        elements := DimSel.Item(i).Dimension.Elements;

	        element := coord.Item(i);

	        If element <> -1 Then

	            Debug.WriteLine(element.ToString + " = (" + elements.Name(element) + ") -- ");

	        End If;

	    End For;

	    // Выведем полученную матрицу в окно консоли

	    Debug.WriteLine("Матрица: ");

	    Selection := DimSel.Item(0);

	        For Each Selection In Matrix.Dimensions Do

	            // Выведем измерения и их ключи

	            Debug.WriteLine("    Измерение - " + selection.Dimension.Name + "; Key = " + selection.Dimension.Key.ToString);

	            // Выведем элементы измерений

	            Debug.WriteLine("       Элементы: ");

	            For i := 0 To Selection.Dimension.Elements.Count - 1 Do

	                Debug.WriteLine("           " + selection.Dimension.Elements.Name(i));

	            End For;

	        End For;

	    // Выведем значения

	    Debug.WriteLine("Значения матрицы: ");

	    Iterator := matrix.CreateIterator;

	    Coord := matrix.CreateCoord;

	    Iterator.Move(IteratorDirection.First);

	    While Iterator.Valid Do

	        Iterator.PutCurrentPos(Coord);

	        Debug.WriteLine("   Значение = " + Iterator.Value As String);

	        Iterator.Move(IteratorDirection.Next);

	    End While;

	    // Создадим матричный преобразователь

	    trf := New MatrixTransformer.Create;

	    trf.Source := Matrix;

	    // Добавим два новых временных измерения

	    trf.Dimensions.Add(0, 3);

	    trf.Dimensions.Add(0, 2);

	    // Получим новую матрицу

	    NewMat := trf.Transform;

	    Debug.WriteLine("Количество значений в новой матрице = " + NewMat.ValueCount.ToString);

	    // Получим временные измерения

	    For i := 0 To trf.Dimensions.Count - 1 Do

	        mtd := trf.Dimensions.Item(i);

	        If Not mtd.MatchCase Then

	            mtd.MatchCase := True;

	        End If;

	        // Выведем в окно консоли

	        Debug.WriteLine("Временное измерение новой матрицы: ");

	        Debug.WriteLine

	        ("Индекс измерения - " + mtd.Index.ToString + "; " + "Измерение - " + mtd.Dimension.Name + "; " + "Элемент - " + mtd.Element.ToString);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено:


	- измерение, ключ, элементы, значения календарного измерения матрицы;


	- количество значений в новой полученной матрице;


	- данные временных измерений новой матрицы.


См. также:


[IMatrixTransformer](IMatrixTransformer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
