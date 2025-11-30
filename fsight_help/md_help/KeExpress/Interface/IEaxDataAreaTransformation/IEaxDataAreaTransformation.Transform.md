# IEaxDataAreaTransformation.Transform

IEaxDataAreaTransformation.Transform
-


# IEaxDataAreaTransformation.Transform


## Синтаксис


Transform: Object;


## Описание


Свойство Transform возвращает
 объект для работы с параметрами формулы преобразования данных.


## Комментарии


Для работы с объектом, возвращаемым данным свойством, его необходимо
 привести к интерфейсу [IMsFormulaTransform](KeMs.chm::/Interface/IMsFormulaTransform/IMsFormulaTransform.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, который содержит в себе отредактированную формулу
 в редакторе выражений.


Добавьте ссылки на системные сборки: Dimension, Express, Metabase, Ms,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DArea: IEaxDataArea;

	    DAreaSlice: IEaxDataAreaSlice;

	    CalcTransformations: IEaxDataAreaTransformations;

	    CalcTransformation: IEaxDataAreaTransformation;

	    Transform: IMsFormulaTransform;

	    GeneratedName: String;

	    FormulaCount: Integer;

	    Formula: IMSFormula;

	    Gen: IMsFormulaStringGenerator;

	    SelSet: IDimSelectionSet;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим срез источника данных

	    DArea := Express.DataArea;

	    DAreaSlice := DArea.Slices.Item(0);

	    // Получим формулу преобразования данных в аналитической области

	    CalcTransformations := DAreaSlice.CalcTransformations;

	    CalcTransformation := CalcTransformations.Item(0);

	    // Зададим отметку и ключ измерения

	    SelSet := Express.Pivot.Selection;

	    CalcTransformation.Selection := SelSet;

	    CalcTransformation.DimKey := Express.Pivot.DimItem(0).Key;

	    // Выведем в консоль

	    Debug.WriteLine("Значение элемента - " + CalcTransformation.Element.ToString);

	    Debug.WriteLine("Идентификатор элемента - " + CalcTransformation.ElementId);

	    Debug.WriteLine("Ключ формулы преобразования - " + CalcTransformation.Key.ToString);

	    // Получим и выведем в консоль сгенерированное наименование формулы

	    GeneratedName := CalcTransformation.GeneratedName;

	    Debug.WriteLine("Сгенерированное наименование формулы - " + GeneratedName);

	    // Выведем в консоль масштаб текущей единицы измерения

	    Debug.WriteLine("Масштабединицы измерения: " + CalcTransformation.DefaultUnit.ToString);

	    // Зададим наименование формулы

	    CalcTransformation.Name := "TransformFormula";

	    // Выведем в окно консоли количество методов расчета формулы

	    Transform := CalcTransformation.Transform As IMsFormulaTransform;

	    FormulaCount := Transform.FormulaCount;

	    Debug.WriteLine("Количество методов расчета - " + FormulaCount.ToString);

	    // Получим и выведем в окно консоли наименование метода расчета

	    Formula := Transform.FormulaItem(0);

	    Gen := Formula.CreateStringGenerator;

	    Gen.ShowFullVariableNames := True;

	    Debug.WriteLine("Наименование метода расчета - " + Gen.Execute);

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- в окно консоли выведется сгенерированное наименование формулы
	 преобразования данных, значение вычисляемого элемента, его идентификатор,
	 ключ формулы преобразования;


	- изменится наименование формулы;


	- в окно консоли выведется масштаб единицы измерения;


	- в окно консоли выведется количество методов расчета формулы;


	- в окно консоли выведется наименование метода расчета формулы.


См. также:


[IEaxDataAreaTransformation](IEaxDataAreaTransformation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
