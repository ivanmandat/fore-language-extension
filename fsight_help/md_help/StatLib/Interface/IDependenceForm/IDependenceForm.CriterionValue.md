# IDependenceForm.CriterionValue

IDependenceForm.CriterionValue
-


# IDependenceForm.CriterionValue


## Синтаксис


CriterionValue: Double;


## Описание


Свойство CriterionValue возвращает
 значение критерия для формы зависимости. По данному критерию производится
 выбор лучшей формы зависимости.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    trend: SmCurveEstimation;

    d0: Double;

    status, i: Integer;

    ar: Array Of Double;

    Forms: IDependenceForms;

Begin

    trend := New SmCurveEstimation.Create;

    ar := New Double[25];

    ar[00] := 4110;

    ar[01] := 4280;

    ar[02] := 4459;

    ar[03] := 4545;

    ar[04] := 4664;

    ar[05] := 4861;

    ar[06] := 5195;

    ar[07] := 5389;

    ar[08] := 5463;

    ar[09] := 5610;

    ar[10] := 5948;

    ar[11] := 6218;

    ar[12] := 6521;

    ar[13] := 6788;

    ar[14] := 7222;

    ar[15] := 7486;

    ar[16] := 7832;

    ar[17] := 8153;

    ar[18] := 8468;

    ar[19] := 9054;

    ar[20] := 9499;

    ar[21] := 9866;

    ar[22] := 10217;

    ar[23] := 10763;

    ar[24] := 10683;

    trend.Explained.Value := ar;

    trend.Explanatory.IsTrend := True;

    trend.ModelPeriod.LastPoint := 20;

    trend.ForecastLastPoint := 30;

    trend.SeasonalComponent.Mode := SeasonalityType.additive;

    trend.SeasonalComponent.Cycle := 4;

    status := trend.Execute;

    If status <> 0 Then

        Debug.WriteLine(trend.Errors);

    Else

        Forms := trend.DependenceForms;

        For i := 0 To Forms.Count - 1 Do

            d0 := Forms.Item(i).CriterionValue;

            Debug.WriteLine(Forms.Item(i).Name + ", " + Forms.Item(i).DisplayName + ": " + d0.ToString);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения критериев
 форм зависимостей:


Выполнение модуля начато


Linear, Линейная: 0.973442052301061


Quadratic, Квадратичная: 0.998640353781097


Polynomial, Полиномиальная: 0.998686672768859


Compound, Составная: 0.99523315583646


Growth, Уравнение роста: 0.99523315583646


Logarithmic, Логарифмическая: 0.757901354326158


Hyperbolic, Гиперболическая: 0.433696314338472


Exponential, Экспоненциальная: 0.99523315583646


Inverse, Обратная: 0.39338706623371


Power, Степенная: 0.827009167454031


Logistic, Логистическая: 0.193088557440221


SquareRoot, Квадратный корень: 0.899302867141096


LogParabolic, Логарифмически-параболическая: 0.99850526232148


PreviousValue, : nan


Value, : nan


Выполнение модуля завершено


См. также:


[IDependenceForm](IDependenceForm.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
