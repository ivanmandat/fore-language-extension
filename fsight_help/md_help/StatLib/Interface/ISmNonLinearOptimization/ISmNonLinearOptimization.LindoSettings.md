# ISmNonLinearOptimization.LindoSettings

ISmNonLinearOptimization.LindoSettings
-


# ISmNonLinearOptimization.LindoSettings


## Синтаксис


LindoSettings: [ILindoSettings](../ILindoSettings/ILindoSettings.htm);


## Описание


Свойство LindoSettings
 возвращает параметры модуля LINDO.


## Комментарии


Параметры модуля LINDO учитываются, если он выбран для решения задачи
 нелинейной оптимизации, то есть свойство [ISmNonLinearOptimization.SolverType](ISmNonLinearOptimization.SolverType.htm)
 имеет значение [NLOSolverType.Lindo](../../Enums/NLOSolverType.htm).


## Пример


Для выполнения примера на компьютере должен быть установлен модуль LINDO
 по следующему пути: c:\Lindoapi\.


Добавьте ссылку на системную сборку Stat.


			Sub
 UserProc;

Var

    nlo: ISmNonLinearOptimization;

    lb, ub: Array[0..3] Of Double;

    init: Array[0..3] Of Double;

    intvec: Array[0..3] Of Integer;

    LinConCfs: Array[0..3] Of Double;

    LinCons: ISlLinearConstraints;

    LinCon: ISlLinearConstraint;

    NonLinCons: INonLinearConstraints;

    NonLinCon: INonLinearConstraint;

    LindoSettings: ILindoSettings;

    LindoParamUnit: ILindoParamUnit;

    LindoParamUnits: ILindoParamUnits;

    i,res: Integer;

    OptVal, Dval: Double;

    s: string;

    Warnings: Array Of
 String;

Begin

    // Создаем объект для решения
 задачи оптимизации

    nlo := New
 SmNonLinearOptimization.Create;

    // Задаем параметры области
 построения

    For i := 0 To 3
 Do

        lb[i] := 1;

        ub[i] := 5;

        LinConCfs[i] := 1;

    End For;

    nlo.Boundary.BoundaryLower := lb;

    nlo.Boundary.BoundaryUpper := ub;

    // Задаем порядок коэффициентов

    nlo.CoefficientsOrder := "x1;x2;x3;x4";

    // Задаем целевую функцию

    nlo.FunctionString := "x1*x4*(x1+x2+x3)+x3";

    // Задаем начальные приближения

    init[0] :=
 1;

    init[1] := 5;

    init[2] := 5;

    init[3] := 1;

    nlo.InitApproximation := init;

    // Задаем массив признаков
 целочисленных переменных

    intvec[0] :=
 1;

    intvec[1] := 1;

    intvec[2] := 1;

    intvec[3] := 1;

    nlo.IntVec := intvec;

    // Задаем параметры линейных
 ограничений

    LinCons := nlo.LinearConstraints;

    LinCon := LinCons.Add;

    LinCon.BoundaryLower := -10e20;

    LinCon.BoundaryUpper := 20;

    LinConCfs[0] := 1;

    LinConCfs[1] := 1;

    LinConCfs[2] := 1;

    LinConCfs[3] := 1;

    LinCon.Value := LinConCfs;

    // Задаем количество итераций
 для решения задачи

    nlo.MaxIteration := 75;

    // Задаем параметры нелинейных
 ограничений

    NonLinCons := nlo.NonLinearConstraints;

    NonLinCon := NonLinCons.Add;

    NonLinCon.BoundaryLower := -10e20;

    NonLinCon.BoundaryUpper := 40;

    NonLinCon.NonLinearFunction := "x1*x1+x2*x2+x3*x3+x4*x4";

    NonLinCon := NonLinCons.Add;

    NonLinCon.BoundaryLower := 25;

    NonLinCon.BoundaryUpper := 10e21;

    NonLinCon.NonLinearFunction := "x1*x2*x3*x4";

    // Указываем, что задача
 будет решаться с помощью модуля LINDO

    nlo.SolverType := NLOSolverType.Lindo;

    // Получаем параметры модуля

    LindoSettings := nlo.LindoSettings;

    // Указываем пути к библиотеке
 и лицензии LINDO

    LindoSettings.DLLPath := "c:\Lindoapi\bin\win32\lindo8_0.dll";

    LindoSettings.LicensePath := "c:\Lindoapi\license\lndapi80.lic";

    // Указываем файл, в который
 будет выгружена задача

    LindoSettings.MPIPath := "c:\Problem.mpi";

    // Указываем, что модель
 не будет удалена сразу после выполнения

    LindoSettings.DisposeLindoModelAfterExecute
 := False;

    // Задаем параметры модели

    LindoParamUnits := LindoSettings.ModelParams;

    LindoParamUnit := LindoParamUnits.Add;

    // Указываем значение параметра
 LS_DPARAM_SOLVER_OPTTOL

    LindoParamUnit.ParamKey := 1257;

    LindoParamUnit.ParamValue := 0.001;

    // Задаем параметры среды

    LindoParamUnits := LindoSettings.EnvParams;

    // Указываем значение параметра
 LS_DPARAM_SOLVER_FEASTOL

    LindoParamUnit := LindoParamUnits.Add;

    LindoParamUnit.ParamKey := 1254;

    LindoParamUnit.ParamValue := 0.003;

    // Задаем тип решаемой задачи
 и метод решения

    LindoSettings.ProblemType := LindoProblemType.MIP;

    LindoSettings.SolverType := LindoSolverType.Barrier;

    // Задаем тип результата

    LindoSettings.ProblemResultType := LindoProblemResultType.MIPPrimalSolution;

    LindoSettings.ProblemResultWhichType := LindoProblemResultWhichType.BasicPrimal;

    // Выполняем расчет

    res := nlo.Execute;

    If (res <> 0) Or (LindoSettings.nErrorCode
 <> 0) Then

        Debug.WriteLine(nlo.Errors);

        Debug.WriteLine("Код
 ошибки Lindo: " + LindoSettings.nErrorCode.ToString);

        Debug.WriteLine("Тест
 ошибки Lindo: " + LindoSettings.MessageString);

    Else

        //
 Получаем предупреждения, возникшие при расчете и выводим их

        Warnings := LindoSettings.Warnings;

        For
 i := 0 To Warnings.Length
 - 1 Do

            Debug.WriteLine("Предупреждение: " + Warnings[i]);

        End
 For;

        //
 Выводим результаты расчета

        Debug.WriteLine("== Значение целевой функции ==");

        OptVal := nlo.OptimalFunctionValue;

        Debug.WriteLine(OptVal.ToString);

        Debug.WriteLine("===
 Решение ===");

        Print(nlo.Solution);

        Debug.WriteLine("===
 Градиент целевой функции ===");

        Print(nlo.FunctionGradient);

        //
 Выводим информацию о методе расчета

        Dval := LindoSettings.GetDouLindoInfo(LindoDouInfoType.DINFO_MIP_TOT_TIME,
 res);

        Debug.WriteLine("Общее
 время расчета задачи целочисленной оптимизации, " +

            "включая время на загрузку и выгрузку модели,
 оптимизацию, эвристику: " + Dval.ToString);

        i := LindoSettings.GetIntLindoInfo(LindoIntInfoType.IINFO_MIP_THREADS,
 res);

        Debug.WriteLine("Количество
 параллельных потоков, используемых для решения " +

            "задачи целочисленной оптимизации: "
 + i.ToString);

        s := LindoSettings.GetStrLindoInfo(LindoStrInfoType.SINFO_MIP_THREAD_LOAD,
 res);

        Debug.WriteLine("Строка,
 содержащая поток рабочей нагрузки в последнем вызове LSsolveMIP: "
 + s);

    End If;

End Sub UserProc;


// Процедура для вывода данных

Sub Print(Data: Array Of
 Double);

Var

    i: Integer;

    CI: ICultureInfo;

Begin

    CI := CultureInfo.Current;

    Debug.WriteLine("---Begin---");

    For i := 0
 To Data.Length - 1
 Do

        If
 Double.IsNan(Data[i]) Then

            Debug.WriteLine("---empty---");

        Else

            Debug.WriteLine(i.ToString
 + ", " + CI.FormatDoublePrec(Data[i],
 4));

        End
 If;

    End For;

    Debug.WriteLine("---End---");

End Sub Print;


В результате выполнения примера с помощью модуля LINDO будет рассчитана
 задача оптимизации. Результаты будут выведены в окно консоли. Задача в
 формате, пригодном для использования в LINDO, будет выгружена в файл «c:\Problem.mpi».


См. также:


[ISmNonLinearOptimization](ISmNonLinearOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
