# IPivot.Matrix

IPivot.Matrix
-


# IPivot.Matrix


## Синтаксис


Matrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Свойство Matrix возвращает данные
 таблицы в виде матрицы.


## Комментарии


Матрица данных - это совокупность данных, представленных в числовой
 форме, состоящих из строк и столбцов.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS_IPIVOT. Отчёт содержит таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Matrix, Metabase,
 Pivot.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    DimSelectionSet: IDimSelectionSet;

		    Analyzer: IEaxAnalyzer;

		    Pivot: IPivot;

		    PivotMatrix: IMatrix;

		    DimCount: Integer;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим экспресс-отчёт

		    Analyzer := MB.ItemById("EXPRESS_IPIVOT").Bind As IEaxAnalyzer;

		    // Получим таблицу данных экспресс-отчета

		    Pivot := Analyzer.Pivot;

		    // Получим отметку измерения, по которой строится таблица

		    DimSelectionSet := Pivot.Selection;

		    // Выберем все элементы отметки

		    DimSelectionSet.Item(0).SelectAll;

		    // Получим данные таблицы
		 в виде матрицы

		    PivotMatrix := Pivot.Matrix;

		    // Установим значение в матрице по отметке измерения

		    PivotMatrix.SetValueBySelection(DimSelectionSet, 10);

		    // Получим количество измерений матрицы

		    DimCount := PivotMatrix.DimensionCount;

		    // Выведем в окно консоли

		    Debug.WriteLine("Количество измерений матрицы = " + DimCount.ToString);

		End Sub UserProc;


После выполнения примера:


	- матрица данных заполнится значениями по отметке измерения, по
	 которой строится таблица;


	- в консоль выведется количество измерений матрицы.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
