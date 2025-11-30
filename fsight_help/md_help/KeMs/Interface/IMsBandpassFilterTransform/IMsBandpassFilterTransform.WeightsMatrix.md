# IMsBandpassFilterTransform.WeightsMatrix

IMsBandpassFilterTransform.WeightsMatrix
-


# IMsBandpassFilterTransform.WeightsMatrix


## Синтаксис


WeightsMatrix(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);

             Coord:
 [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 Array;


## Параметры


Calculation. Настройки, необходимые
 для расчёта модели;


Coord. Срез, по которому осуществляется
 расчёт.


## Описание


Свойство WeightsMatrix возвращает
 матрицу весов после расчёта метода.


## Комментарии


Используется стационарный фильтр Бакстера-Кинга, поэтому рассчитанная
 матрица содержит одно измерение: 1×(q+1),
 где q - значение параметра опережения/лага,
 определяемое свойством [IMsBandpassFilterTransform.Width](IMsBandpassFilterTransform.Width.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере присутствуют
 переменные с идентификаторами VAR_BPF_CYCLE, VAR_BPF_NONCYCLE и модель
 с идентификатором MODEL_NEW_BPF. Модель использует для расчёта фильтр
 Бакстера-Кинга.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    ModelSpace, ModelObj: IMetabaseObject;

    Transf: IMsFormulaTransform;

    Formula: IMsFormula;

    Model: IMsModel;

    BandpassF: IMsBandpassFilterTransform;

    TransSeries: IMsFormulaTransformVariables;

    VarStab: IVariableStub;

    TransVar: IMsFormulaTransformVariable;

    TermInfo: IMsFormulaTermInfo;

    Calculation: IMsMethodCalculation;

    Coo: IMsFormulaTransformCoord;

    Weights: Array Of Double;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    Mb := MetabaseClass.Active;

    // Получаем модель

    ModelSpace := Mb.ItemById("CONT_MODEL").Bind;

    ModelObj := Mb.ItemByIdNamespace("MODEL_NEW_BPF", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    // Получаем параметры модели

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    BandpassF := Formula.Method As IMsBandpassFilterTransform;

    TransSeries := Transf.Series;

    TermInfo := Transf.CreateTermInfo;

    // Задаём настройки компонент

    If BandpassF.OutputType = MsBPFOutputType.CycleSeries Then

        VarStab := Mb.ItemByIdNamespace("VAR_BPF_NONCYCLE", ModelSpace.Key).Bind As IVariableStub;

        TransVar := TransSeries.Add(VarStab);

        TermInfo.Slice := TransVar.Slices.Add(Null);

        BandpassF.NonCyclicalTerm := TermInfo;

    Else

        VarStab := Mb.ItemByIdNamespace("VAR_BPF_CYCLE", ModelSpace.Key).Bind As IVariableStub;

        TransVar := TransSeries.Add(VarStab);

        TermInfo.Slice := TransVar.Slices.Add(Null);

        BandpassF.CycleTerm := TermInfo;

    End If;

    // Задаём параметры для расчёта

    Calculation := Transf.CreateCalculation;

    Calculation.Period.ForecastEndDate := Model.Transform.Period.ForecastEndDate;

    Calculation.Period.ForecastStartDate := Model.Transform.Period.ForecastStartDate;

    Calculation.Period.IdentificationEndDate := Model.Transform.Period.IdentificationEndDate;

    Calculation.Period.IdentificationStartDate := Model.Transform.Period.IdentificationStartDate;

    Calculation.CurrentPoint := Model.Transform.Period.IdentificationStartDate;

    Coo := Transf.CreateCoord(Transf.Outputs.Item(0));

    // Выполняем расчёт

    BandpassF.Execute(Calculation, Coo);

    Weights := BandpassF.WeightsMatrix(Calculation, Coo);

    For i := 0 To Weights.Length - 1 Do

        Debug.WriteLine(Weights[i]);

    End For;

    // Сохраняем модель

    ModelObj.Save;

End Sub UserProc;


В результате выполнения примера для модели будет задана переменная,
 в которую выгружаются значения циклической или нециклической компоненты
 (в зависимости от компоненты, выгружаемой в моделируемую переменную).
 Модель будет рассчитана, матрица весов будет выведена в окно консоли.


См. также:


[IMsBandpassFilterTransform](IMsBandpassFilterTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
