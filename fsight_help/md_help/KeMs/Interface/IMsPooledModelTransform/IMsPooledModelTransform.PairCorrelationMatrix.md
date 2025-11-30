# IMsPooledModelTransform.PairCorrelationMatrix

IMsPooledModelTransform.PairCorrelationMatrix
-


# IMsPooledModelTransform.PairCorrelationMatrix


## Синтаксис


PairCorrelationMatrix(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);
 Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 Array;


## Параметры


Calculation. Параметры расчета
 модели;


Coord. Срез моделируемой переменной,
 для которого осуществляется расчет.


## Описание


Свойство PairCorrelationMatrix
 возвращает матрицу корреляции факторов модели.


## Комментарии


Coord и Calculation
 не могут принимать значение Null.


Корреляционная матрица является трехмерным массивом вещественных чисел.
 Размерность первого измерения совпадает с размерностью объясняемой переменной.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором OBJ_MS. В данном контейнере должна присутствовать
 модель с идентификатором MODEL, использующая для расчета метод регрессии
 на панельных данных.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


			    Sub UserProc;

    Var

        MB: IMetabase;

        MsKey: Integer;

        MObj: IMetabaseObject;

        Model: IMsModel;

        Trans: IMsFormulaTransform;

        VarTrans: IMsFormulaTransformVariable;

        Formula: IMsFormula;

        PooledModel: IMsPooledModelTransform;

        Calc: IMsModelCalculation;

        CalcMethod: IMsMethodCalculation;

        Coord: IMsFormulaTransformCoord;

        CorrelationMatrix: Array Of Double;

        i, j, k: integer;

        Explanded: IMsFormulaTermSet;

    Begin

        MB := MetabaseClass.Active;

        MsKey := Mb.ItemById("OBJ_MS").Key;

        MObj := MB.ItemByIdNamespace("MODEL", MsKey).Bind;

        Model := MObj As IMsModel;

        Trans := Model.Transform;

        VarTrans := Trans.Outputs.Item(0);

        Formula := Trans.FormulaItem(0);

        PooledModel := Formula.Method As IMsPooledModelTransform;

        Calc := Model.CreateCalculation;

        Calc.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 01, 01);

        Calc.Period.IdentificationEndDate := DateTime.ComposeDay(2006, 12, 31);

        Calc.Period.ForecastStartDate := DateTime.ComposeDay(2007, 01, 01);

        Calc.Period.ForecastEndDate := DateTime.ComposeDay(2010, 12, 31);

        Coord := Trans.CreateCoord(VarTrans);

        CalcMethod := Calc As IMsMethodCalculation;

    //идентификация уравнения

        PooledModel.Identify(CalcMethod, Coord);

        Explanded := PooledModel.Explained;

    //получаем рассчитанные коэффициенты

        CorrelationMatrix := PooledModel.PairCorrelationMatrix(CalcMethod, Coord);

        For i := 0 To CorrelationMatrix.GetUpperBound(1) Do

            Debug.WriteLine(Explanded.Item(i).TermToText);

            For j := 0 To CorrelationMatrix.GetUpperBound(2) Do

                For k := 0 To CorrelationMatrix.GetUpperBound(3) Do

                    Debug.Write(String.Format("{0,6:F}", CorrelationMatrix[i, j, k].ToString));

                End For;

                Debug.WriteLine("");

            End For;

        End For;

    End Sub UserProc;


После выполнения примера в окно консоли будут выведены коэффициенты
 корреляции факторов для каждого среза объясняемой переменной модели.


См. также:


[IMsPooledModelTransform](IMsPooledModelTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
