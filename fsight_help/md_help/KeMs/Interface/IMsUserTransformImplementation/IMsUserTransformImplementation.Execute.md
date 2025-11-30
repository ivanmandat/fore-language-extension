# IMsUserTransformImplementation.Execute

IMsUserTransformImplementation.Execute
-


# IMsUserTransformImplementation.Execute


## Синтаксис


Execute(


Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);


Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm);


Explained: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


Explanatories: [IMsFormulaTermList](../IMsFormulaTermList/IMsFormulaTermList.htm));


## Параметры


Calculation. Настройки,
 необходимые для расчета модели;


Coord. Измерение,
 по которому осуществляется расчет;


Explained. Моделируемый ряд;


Explanatories. Коллекция термов,
 используемых как факторы при моделировании.


## Описание


Метод Execute осуществляет расчет
 модели с помощью алгоритма пользователя.


## Комментарии


Данный метод должен быть переопределен в пользовательском классе.


## Пример


Данный пример является макросом, содержащим пользовательский метод расчета
 модели.


Добавьте ссылки на системные сборки: Cube, Matrix, Ms.


			Public Class My_Method: Object, IMsUserTransformImplementation Param1, Param2: Double;

    Sub Execute(Calculation: IMsMethodCalculation; Coo: IMsFormulaTransformCoord; Explained: IMsFormulaTerm; Explanatories: IMsFormulaTermList);

    Var

        Matr: IMatrix;

        Mcoo: IMatrixCoord;

        Cub: ICubeInstance;

        i: Integer;

        Term: IMsFormulaTerm;

        ModelAr, FactorAr: Array Of Double;

        Period: IMsModelPeriod;

    Begin

        //Получение матрицыпеременной, в которую будут сохранены рассчитанные данные

        Matr := Calculation.Variable(Explained.Slice.Variable.VariableStub);

        Mcoo := Matr.CreateCoord;

        Matr.ValueFlag := Matr.ValueFlag + 1;

        ModelAr := Explained.Serie(Calculation);

        Period := Calculation.Period;

        //Расчет

        If Explanatories.Count <> 0 Then

            Term := Explanatories.Item(0);

            FactorAr := Term.Serie(Calculation);

            For i := 0 To Period.ForecastEndDate.Year - Period.IdentificationStartDate.Year Do

                MCoo.Item(0) := i;

                MCoo.Item(1) := 1;

                If Double.IsNan(ModelAr[i]) Then

                    Matr.Item(Mcoo) := (FactorAr[i] + (FactorAr[i - 1] + FactorAr[i - 2])) * Param1 / Param2;

                Else

                    Matr.Item(Mcoo) := (ModelAr[i] + FactorAr[i]) * Param1 / Param2;

                End If;

                Calculation.CurrentPoint := DateTime.AddYears(Calculation.CurrentPoint, 1);

            End For;

        Else

            For i := 0 To Period.ForecastEndDate.Year - Period.IdentificationStartDate.Year Do

                MCoo.Item(0) := i;

                MCoo.Item(1) := 1;

                Matr.Item(Mcoo) := Math.RandBetween(0, 100) * Param1 / Param2;

            End For;

        End If;

        //Сохранение данныхв переменную

        Cub := ((Explained.Slice.Variable.VariableStub As IMsVariable).Cube As IMetabaseObject).Open(Null) As ICubeInstance;

        Cub.Destinations.DefaultDestination.CreateStorage.SaveMatrix(Matr, Matr.ValueFlag);

    End Sub Execute;

    Sub Set_params(ParamValue: IMsUserMethodParams);

    Begin

        Param1 := ParamValue.Item(0).Value As Double;

        Param2 := ParamValue.Item(1).Value As Double;

    End Sub Set_params;

End Class My_Method;


При расчете модели, настроенной на использование пользовательского метода,
 будет осуществляться расчет данных по некоторой зависимости между моделируемым
 рядом и фактором модели. После расчета данные будут сохранены в выходную
 переменную.


См. также:


[IMsUserTransformImplementation](IMsUserTransformImplementation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
