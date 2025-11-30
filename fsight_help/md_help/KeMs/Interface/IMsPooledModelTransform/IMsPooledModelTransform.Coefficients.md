# IMsPooledModelTransform.Coefficients

IMsPooledModelTransform.Coefficients
-


# IMsPooledModelTransform.Coefficients


## Синтаксис


Coefficients(Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 Array;


## Параметры


Coord. Срез моделируемой переменной,
 для которого осуществляется расчет.


## Описание


Свойство Coefficients определяет
 массив значений коэффициентов уравнения модели.


## Комментарии


Coord не может принимать значение
 Null.


Если в уравнении присутствует константа, то её значение указывается
 в последнем элементе массива Coefficients.


Для сохранения коэффициентов в Coefficients
 необходимо поместить массив значений, для сброса коэффициентов - присвоить
 значение Null. Признак того, что коэффициенты сохранены, возвращает свойство
 [IMsPooledModelTransform.IsCoefficientsSaved](IMsPooledModelTransform.IsCoefficientsSaved.htm).


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

        Coord: IMsFormulaTransformCoord;

        Coef: Array Of Double;

        StatCoef: IModelCoefficients;

        CoefficientsAR: ICoefficients;

        Sub PrintArray(Arr: Array Of Double);

        Var

            i: Integer;

        Begin

            i := Arr.Length;

            If i > 0 Then

                For i := 0 To Arr.Length - 1 Do

                    Debug.WriteLine("    " + Arr[i].ToString);

                End For;

            Else

                Debug.WriteLine("    значения не рассчитывались");

            End If;

        End Sub PrintArray;

    Begin

        MB := MetabaseClass.Active;

        MsKey := Mb.ItemById("OBJ_MS").Key;

        MObj := MB.ItemByIdNamespace("MODEL", MsKey).Edit;

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

    //идентификация уравнения

        PooledModel.Identify(Calc As IMsMethodCalculation, Coord);

    //получаем рассчитанные коэффициенты

        Coef := PooledModel.Coefficients(Coord);

    //если коэффициенты не сохранены - сохраняем

        If Not PooledModel.IsCoefficientsSaved(Coord) Then

            PooledModel.Coefficients(Coord) := Coef;

        End If;

    //выводим в консоль коэффициенты модели

        Debug.WriteLine("Коэффициенты модели:");

        PrintArray(Coef);

    //получаем и выводим в консоль статистические характеристики модели

        StatCoef := PooledModel.StatCoefficients(Coord);

        Coef := StatCoef.Coefficients.StandardError;

        Debug.WriteLine("Стандартная ошибка:");

        PrintArray(Coef);

    //получаем и выводим коэффициенты авторегрессии

        CoefficientsAR := PooledModel.ARMACoefficients(Coord).CoefficientsAR;

        Debug.WriteLine("Коэффициенты авторегрессии:");

        Coef := CoefficientsAR.Estimate;

        PrintArray(Coef);

        MObj.Save;

    End Sub UserProc;


После выполнения примера коэффициенты модели будут сохранены и выведены
 в окно консоли. Также будут выведены коэффициенты авторегрессии и часть
 статистических характеристик: значение стандартной ошибки.


См. также:


[IMsPooledModelTransform](IMsPooledModelTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
