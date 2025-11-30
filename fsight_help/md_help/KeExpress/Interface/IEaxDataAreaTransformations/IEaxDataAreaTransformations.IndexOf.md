# IEaxDataAreaTransformations.IndexOf

IEaxDataAreaTransformations.IndexOf
-


# IEaxDataAreaTransformations.IndexOf


## Синтаксис


IndexOf(Value: [IEaxDataAreaTransformation](../IEaxDataAreaTransformation/IEaxDataAreaTransformation.htm)):
 Integer;


## Параметры


Value. Формула преобразования
 данных.


## Описание


Метод IndexOf возвращает индекс
 указанной формулы преобразования данных.


## Комментарии


Для перемещения формулы преобразования данных внутри коллекции используйте
 [IEaxDataAreaTransformations.MoveTo](IEaxDataAreaTransformations.MoveTo.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу. Таблица содержит в себе
 две отредактированные формулы.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	    TrsCalc: IEaxDataAreaTransformations;

	    TrCalc_a, TrCalc_b: IEaxDataAreaTransformation;

	    SelSet: IDimSelectionSet;

	    TransArray: IEaxTransformationTargetsArray;

	    i: Integer;

	    Tr: IEaxDataAreaTransformation;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим срез данных

	    Slice := Express.DataArea.Slices.Item(0);

	    // Получим коллекцию формул преобразования данных

	    TrsCalc := Slice.CalcTransformations;

	    // Получим формулы преобразования данных

	    TrCalc_a := TrsCalc.Item(0);

	    TrCalc_b := TrsCalc.Item(1);

	    // Переместим индексы формул преобразования данных

	    TrsCalc.MoveTo(1, 0);

	    // Выведем в окно консоли

	    Debug.WriteLine

	    ("Индекс перемещенной формулы преобразования данных = " + TrsCalc.IndexOf(TrCalc_b).ToString);

	    // Получим отметку и выведем элементы измерения, для которых настроена формула

	    SelSet := TrsCalc.TransformationsSelection;

	    Debug.WriteLine("Элементы в отметке - " + SelSet.Item(0).ToString("", ", ", False));

	    // Выведем в окно консоли выражение, преобразующее данные

	    TransArray := TrsCalc.TransformationElements(Null);

	    For i := 0 To TransArray.Count - 1 Do

	        Tr := TransArray.Transformation(i);

	        Debug.WriteLine("Формула преобразования данных - " + Tr.Expression.AsString);

	    End For;

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- формулы преобразования данных поменяются индексами;


	- в окно консоли выведется индекс перемещенной формулы;


	- в окно консоли выведутся элементы, для которых настроена формула
	 преобразования данных;


	- в окно консоли выведутся выражения преобразования данных для
	 всех элементов.


См. также:


[IEaxDataAreaTransformations](IEaxDataAreaTransformations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
