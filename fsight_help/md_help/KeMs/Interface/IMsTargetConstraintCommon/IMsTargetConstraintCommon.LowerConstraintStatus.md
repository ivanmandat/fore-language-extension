# IMsTargetConstraintCommon.LowerConstraintStatus

IMsTargetConstraintCommon.LowerConstraintStatus
-


# IMsTargetConstraintCommon.LowerConstraintStatus


## Синтаксис


LowerConstraintStatus: [TargetConstraintStatusType](KeCp.chm::/Enums/TargetConstraintStatusType.htm);


## Описание


Свойство LowerConstraintStatus
 возвращает состояние нижней границы ограничения.


## Комментарии


Значение доступно после расчета целевой задачи. Для получения состояния
 верхней границы ограничения используйте свойство [IMsTargetConstraintCommon.UpperBoundFixed](IMsTargetConstraintCommon.UpperBoundFixed.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего настроенную целевую
 задачу с идентификатором «TARGETPROBLEM».


Добавьте ссылки на системные сборки: Cp, Metabase, Ms.


			Sub
 UserProc;

Var

    mb: IMetabase;

    MsObj: IMetabaseObject;

    Ms: IMsModelSpace;

    Problem: IMsProblem;

    TargetProblem: IMsTargetProblem;

    i, j: Integer;

    CalcSettings: IMsProblemCalculationSettings;

    Calc: IMsProblemCalculation;

    targetConstraints: IMsTargetConstraints;

    targetConstr: IMsTargetConstraint;

    targetConstrArray: IMsTargetConstraintInfoArray;

    targetConstrInfo: IMsTargetConstraintInfo;

    controlVariables: IMsFormulaTermList;

    controlTerm: IMsTargetFormulaTerm;

    varConstraints: IMsTargetVarConstraints;

    varConstr: IMsTargetVarConstraint;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MS").Bind;

    Ms := MsObj As IMsModelSpace;

    // Получаем целевую задачу

    Problem := mb.ItemByIdNamespace("TARGETPROBLEM",
 MsObj.Key).Bind As IMsProblem;

    TargetProblem := Problem.AdditionalDetails.Item(0) As IMsTargetProblem;

    // Создаем настройки расчета
 задачи

    CalcSettings := Problem.CreateCalculationSettings;

    // Создаем объект для расчета
 задачи

    Calc := Problem.Calculate(CalcSettings);

    // Выполняем расчет

    Calc.Run;

    // Получаем рассчитанную
 задачу и выводим результаты в окно консоли

    TargetProblem := (Problem.AdditionalDetails.Item(0) As IMsTargetProblem);

    // Получаем ограничения целевой
 функции

    targetConstraints := targetProblem.Constraints;

    // Перебираем все ограничения
 целевой функции

    For i := 0 To targetConstraints.Count
 - 1 Do

        targetConstr := targetConstraints.Item(i);

        Debug.WriteLine("Ограничение
 целевой функции: " + (i + 1).ToString);

        //
 Получаем значения ограничения целевой функции и выводим их в окно консоли

        targetConstrArray
 := targetConstr.ConstraintInfoArray;

        Debug.Indent;

        Debug.WriteLine("Значение,
 отвечающее оптимальному решению");

        Debug.Indent;

        For
 j := 0 To targetConstrArray.Count
 - 1 Do

            targetConstrInfo
 := targetConstrArray.Item(j);

            Debug.WriteLine(targetConstrInfo.OptimalValue);

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Значения
 нижней границы; Статус");

        Debug.Indent;

        For
 j := 0 To targetConstrArray.Count
 - 1 Do

            targetConstrInfo
 := targetConstrArray.Item(j);

            Debug.Write(targetConstrInfo.LowerBound.ToString
 + "; " + #9);

            Debug.WriteLine(StatusToStr(targetConstrInfo.LowerConstraintStatus));

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Значения
 множителя Лагранжа для нижней границы");

        Debug.Indent;

        For
 j := 0 To targetConstrArray.Count
 - 1 Do

            targetConstrInfo
 := targetConstrArray.Item(j);

            Debug.WriteLine(targetConstrInfo.LowerBoundLagrangeMultiplier);

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Значения
 верхней границы; Статус");

        Debug.Indent;

        For
 j := 0 To targetConstrArray.Count
 - 1 Do

            targetConstrInfo
 := targetConstrArray.Item(j);

            Debug.Write(targetConstrInfo.UpperBound.ToString
 + "; " + #9);

            Debug.WriteLine(StatusToStr(targetConstrInfo.UpperConstraintStatus));

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Значения
 множителя Лагранжа для верхней границы");

        Debug.Indent;

        For
 j := 0 To targetConstrArray.Count
 - 1 Do

            targetConstrInfo
 := targetConstrArray.Item(j);

            Debug.WriteLine(targetConstrInfo.UpperBoundLagrangeMultiplier);

        End
 For;

        Debug.Unindent;

        Debug.Unindent;

    End For;

    // Получаем управляющие переменные

    controlVariables := TargetProblem.ControlVariables;

    // Перебираем управляющие
 переменные

    For i := 0 To controlVariables.Count
 - 1 Do

        controlTerm := controlVariables.Item(i)
 As IMsTargetFormulaTerm;

        Debug.WriteLine("Управляющая
 переменная: " + controlTerm.TermToText);

        Debug.Indent;

        //
 Получаем ограничения управляющей переменной и выводим их в окно консоли

        varConstraints :=
 controlTerm.VarConstraints;

        Debug.WriteLine("Значения
 нижней границы; Статус");

        Debug.Indent;

        For
 j := 0 To varConstraints.Count
 - 1 do

            varConstr
 := varConstraints.Item(j);

            Debug.Write(varConstr.LowerBound.ToString
 + "; " + #9);

            Debug.WriteLine(StatusToStr(varConstr.LowerConstraintStatus));

        End
 For;

        Debug.Unindent;

        Debug.WriteLine("Значения
 верхней границы; Статус");

        Debug.Indent;

        For
 j := 0 To varConstraints.Count
 - 1 do

            varConstr
 := varConstraints.Item(j);

            Debug.Write(varConstr.UpperBound.ToString
 + "; " + #9);

            Debug.WriteLine(StatusToStr(varConstr.UpperConstraintStatus));

        End
 For;

        Debug.Unindent;

        Debug.Unindent;

    End For;

End Sub UserProc;


// Функция для вывода статуса

Function StatusToStr(Status: TargetConstraintStatusType):
 String;

Var

    s: String;

Begin

    Select Case
 Status

        Case
 TargetConstraintStatusType.Disabled: s := "Снято";

        Case
 TargetConstraintStatusType.NotReached: s := "Не
 достигнуто";

        Case
 TargetConstraintStatusType.Reached: s := "Достигнуто";

    End Select;

    Return s;

End Function
 StatusToStr;


В результате выполнения примера в окно консоли будут выведены результаты
 расчета ограничений целевой задачи.


См. также:


[IMsTargetConstraintCommon](IMsTargetConstraintCommon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
