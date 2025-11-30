# IPivot.AggregationElement

IPivot.AggregationElement
-


# IPivot.AggregationElement


## Синтаксис


AggregationElement: Integer;


## Описание


Свойство AggregationElement
 определяет элемент, по которому в матрице будут доступны агрегированные
 данные по фиксированным измерениям.


## Комментарии


Способ агрегации данных при множественной отметке в фиксированных измерениях
 задается в свойстве [IPivot.FixedElementsAggregation](IPivot.FixedElementsAggregation.htm).
 Для сохранения агрегированных данных в результирующей [матрице](IPivot.Matrix.htm)
 задайте в свойстве AggregationElement
 какой-либо отрицательный индекс элемента. Для получения агрегированных
 данных необходимо в координате матрицы в качестве [элемента](ForeSys.chm::/Interface/IMatrixModelCoord/IMatrixModelCoord.Item.htm)
 для последнего измерения задать указанный в AggregationElement
 индекс элемента.


Для проверки, произведена ли агрегация данных, используйте свойство
 [IPivot.IsAggregationCalced](IPivot.IsAggregationCalced.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS. Среди измерений источника имеется измерение с идентификатором
 COUNTRY. В отчете данное измерение включено в список фиксированных.


Добавьте ссылки на системные сборки: Dimensions, Express, Matrix, Metabase,
 Pivot.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Analyzer: IEaxAnalyzer;

		    Pivot: IPivot;

		    DimSel: IDimSelection;

		Begin

		    MB := MetabaseClass.Active;

		    Analyzer := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

		    //Таблица с данными экспресс-отчета

		    Pivot := Analyzer.Pivot;

		    Pivot.FixedElementsAggregation := PivotAggregationOperation.None;

		    //Выведем матрицу в окно консоли

		    LogMatrix(Pivot.Matrix);

		    Debug.WriteLine("=======================================================");

		    Pivot.FixedElementsAggregation := PivotAggregationOperation.Sum;

		    //Элемент, по которому будут доступны агрегированные данные

		    Pivot.AggregationElement := -2;

		    DimSel := Pivot.Selection.FindById("COUNTRY");

		    DimSel.SelectElement(0, False);

		    DimSel.SelectElement(1, False);

		    DimSel.SelectElement(2, False);

		    //Выведем матрицу в окно консоли

		    LogMatrix(Pivot.Matrix);

		    //Проверим результат агрегации

		    Debug.WriteLine("=======================================================");

		    If Pivot.IsAggregationCalced Then

		        Debug.WriteLine("Агрегация рассчитана")

		    Else

		        Debug.WriteLine("Агрегация не рассчитана");

		    End If;

		End Sub UserProc;


		//Вывод матрицы в окно консоли

		Sub LogMatrix(Matrix: IMatrix);

		Var

		    Iterator: IMatrixIterator;

		    Coord: IMatrixCoord;

		    Item: String;

		    i: Integer;

		Begin

		    Iterator := Matrix.CreateIterator;

		    Coord := Matrix.CreateCoord;

		    Iterator.Move(IteratorDirection.First);

		    Debug.WriteLine("Элементы:");

		    While Iterator.Valid Do

		        Iterator.PutCurrentPos(Coord);

		        Item := "[";

		        For i := 0 To Coord.Count - 1 Do

		            If i > 0 Then

		                Item := Item + ", ";

		            End If;

		            Item := Item + Coord.Item(i).ToString;

		        End For;

		        Item := Item + "] ";

		        Item := Item + (Iterator.Value As Double).ToString;

		        Debug.WriteLine(Item);

		        Iterator.Move(IteratorDirection.Next);

		    End While;

		End Sub LogMatrix;


При выполнении примера в консоль среды разработки будет выведено две
 матрицы: матрица с исходными данными таблицы и матрица, полученная после
 агрегации при множественной отметке в фиксированном измерении COUNTRY.
 Агрегированные значения будут сохранены по элементу «-2»


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
