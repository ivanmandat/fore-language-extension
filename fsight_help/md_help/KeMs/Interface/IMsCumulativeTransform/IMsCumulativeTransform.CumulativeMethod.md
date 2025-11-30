# IMsCumulativeTransform.CumulativeMethod

IMsCumulativeTransform.CumulativeMethod
-


# IMsCumulativeTransform.CumulativeMethod


## Синтаксис


		CumulativeMethod: [MsCumulativeMethodType](../../Enums/MsCumulativeMethodType.htm);


## Описание


Свойство CumulativeMethod определяет
 метод накопления.


## Комментарии


По умолчанию свойство имеет значение [MsCumulativeMethodType.Average](../../Enums/MsCumulativeMethodType.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере моделирования
 должна присутствовать модель накопления с идентификатором MODEL_CUMULATIVE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Ms, Metabase.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ModelCont: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    TransformVar: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		    Formula: IMsFormula;

		    CumTr: IMsCumulativeTransform;

		    trInfo: IMsFormulaTermInfo;

		    DataSC: IVariableStub;

		    Calcul: IMsModelCalculation;

		    SelSetFactory: IDimSelectionSetFactory;

		    SelSet: IDimSelectionSet;

		    Sel: IDimSelection;

		    i: Integer;

		    ResultVals: Array Of Double;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    ModelCont := mb.ItemById("MS");

		    // Получаем модель накопления

		    Model := mb.ItemByIdNamespace("MODEL_CUMULATIVE", ModelCont.Key).Edit As IMsModel;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    CumTr := Formula.Method As IMsCumulativeTransform;

		    // Заменяем входную переменную

		    Transform.Inputs.Clear;

		    DataSC := (ModelCont.Bind As IMsModelSpace).DefaultObject As IVariableStub;

		    TransformVar := Transform.Inputs.Add(DataSC);

		    SelSetFactory := New DimSelectionSetFactory.Create;

		    SelSet := SelSetFactory.CreateDimSelectionSet;

		    For i := 0 To DataSC.DimensionCount - 1 Do

		        Sel := SelSet.Add((DataSC.Dimension(i) As IMetabaseObject).Open(Null) As IDimInstance);

		        Sel.SelectElement(2, False);

		    End For;

		    Slice := TransformVar.Slices.Add(SelSet);

		    trInfo := Transform.CreateTermInfo;

		    trInfo.Slice := Slice;

		    CumTr.Input := trInfo;

		    // Задаем метод накопления

		    CumTr.CumulativeMethod := MsCumulativeMethodType.Median;

		    // Создаем параметры расчета

		    calcul := Model.CreateCalculation;

		    calcul.Period.IdentificationStartDate := Transform.Period.IdentificationStartDate;

		    calcul.Period.IdentificationEndDate := Transform.Period.IdentificationEndDate;

		    calcul.Period.ForecastStartDate := Transform.Period.ForecastStartDate;

		    calcul.Period.ForecastEndDate := Transform.Period.ForecastEndDate;

		    // Получаем и выводим значения моделируемой переменной

		    ResultVals := CumTr.Result.Serie(Calcul As IMsMethodCalculation);

		    For i := 0 To ResultVals.Length - 1 Do

		        Debug.WriteLine(ResultVals[i]);

		    End For;

		    // Сохраняем модель

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера для модели будут изменены входная переменная
 и метод расчёта накопления. В окно консоли будут выведены значения моделируемой
 переменной.


См. также:


[IMsCumulativeTransform](IMsCumulativeTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
