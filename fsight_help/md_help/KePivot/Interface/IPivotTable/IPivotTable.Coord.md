# IPivotTable.Coord

IPivotTable.Coord
-


# IPivotTable.Coord


## Синтаксис


Coord(Row: Integer; Column: Integer): [IMatrixCoord](KeMatrix.chm::/Interface/IMatrixCoord/IMatrixCoord.htm);


## Параметры


Row. Индекс строки;


Column. Индекс столбца.


## Описание


Свойство Coord возвращает координату
 в матрице с данными по индексу строки и столбца таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором «EXP_PTS».


Добавьте ссылки на системные сборки: Cubes, Express, Matrix, Metabase,
 Pivot.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Express: IEaxAnalyzer;

		    Pivot: IPivot;

		    PTable: IPivotTable;

		    Matr: IMatrix;

		    Coord: IMatrixCoord;

		Begin

		    // Получим доступ к репозиторию

		    MB := MetabaseClass.Active;

		    // Получим доступ к экспресс-отчёту

		    Express := MB.ItemById("EXP_PTS").Bind As IEaxAnalyzer;

		    Pivot := Express.Pivot;

		    // Получим таблицу

		    PTable := Pivot.ObtainTable;

		    Matr := Pivot.Matrix;

		    Coord := PTable.Coord(0, 0);

		    Debug.WriteLine(Matr.Item(Coord));

		    If PTable.DataType(0, 0) = CubeDataType.Default_ Then

		        Debug.WriteLine("Данные из источника");

		    Else

		        Debug.WriteLine("Расчётные данные");

		    End If;

		End Sub UserProc;


При выполнении примера в консоль среды разработки будет выведено значение
 указанной ячейки, а также способ формирования данных в ячейке.


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
