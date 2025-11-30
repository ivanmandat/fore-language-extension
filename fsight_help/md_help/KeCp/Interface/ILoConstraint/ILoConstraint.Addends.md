# ILoConstraint.Addends

ILoConstraint.Addends
-


# ILoConstraint.Addends


## Синтаксис


Addends: [ILoAddends](../ILoAddends/ILoAddends.htm);


## Описание


Свойство Addends возвращает
 коллекцию слагаемых, используемых для создания ограничения.


## Комментарии


Свойство доступно только для чтения.


## Пример


Добавьте ссылки на системные сборки: Cp.


	Sub UserProc;

	Var

	    ZCU: LinearOptimization;

	    VarS: ILoVariables;

	    Vrbl: ILoVariable;

	    ConstrS: ILoConstraints;

	    Constr: ILoConstraint;

	    AddendS: ILoAddends;

	    Addend: ILoAddend;

	    EqS: ILoEquations;

	    Eq: ILoEquation;

	    ObjFun: ILoCriterionFunction;

	    Res: ILoResults;

	    Retro: Array[1] Of Double;

	    I, J: Integer;

	    s: String;

	    Val: Double;

	    ci: ICultureInfo;

	    TimeInterval: Integer;

	Begin

	    ZCU := New LinearOptimization.Create;

	    // Переменные

	    Retro := New Double[1];

	    Retro[0] := 1;


	    // Список переменных

	    Vars := ZCU.Variables;

	    For I := 1 To 6 Do

	        s := "x" + i.ToString;

	        Vrbl := Vars.Add(s);

	        Vrbl.Retrospective := Retro;

	    End For;

	    // Список ограничений

	    ConstrS := ZCU.Constraints;

	    //====x1

	    For i := 1 To 6 Do

	        Constr := ConstrS.Add;

	        Constr.LowerBound := 0;

	        Constr.UpperBound := 1e20;

	        AddendS := Constr.Addends;

	        Addend := AddendS.Add(Vars.FindById("x1"));

	        Addend.Coeff := 1; //коэф. при переменной

	        Addend.Lag := i; //лаг

	    End For;


	    Constr := ConstrS.Add;

	    Constr.LowerBound := 2;

	    Constr.UpperBound := 1e20;

	    AddendS := Constr.Addends;

	    Addend := AddendS.Add(Vars.FindById("x1"));

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 7; //лаг

	    //====x2

	    For i := 1 To 6 Do

	        Constr := ConstrS.Add;

	        Constr.LowerBound := 0;

	        Constr.UpperBound := 1e20;

	        AddendS := Constr.Addends;

	        Addend := AddendS.Add(Vars.FindById("x2"));

	        Addend.Coeff := 1; //коэф. при переменной

	        Addend.Lag := i; //лаг

	    End For;


	    Constr := ConstrS.Add;

	    Constr.LowerBound := 2;

	    Constr.UpperBound := 1e20;

	    AddendS := Constr.Addends;

	    Addend := AddendS.Add(Vars.FindById("x2"));

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 7; //

	    //====x3

	    For i := 1 To 6 Do

	        Constr := ConstrS.Add;

	        Constr.LowerBound := 0;

	        Constr.UpperBound := 1e20;

	        AddendS := Constr.Addends;

	        Addend := AddendS.Add(Vars.FindById("x3"));

	        Addend.Coeff := 1; //коэф. при переменной

	        Addend.Lag := i; //лаг

	    End For;


	    Constr := ConstrS.Add;

	    Constr.LowerBound := 2;

	    Constr.UpperBound := 1e20;

	    AddendS := Constr.Addends;

	    Addend := AddendS.Add(Vars.FindById("x3"));

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 7; //

	    //====x4

	    For i := 1 To 7 Do

	        Constr := ConstrS.Add;

	        Constr.LowerBound := 0;

	        Constr.UpperBound := 1e20;

	        AddendS := Constr.Addends;

	        Addend := AddendS.Add(Vars.FindById("x4"));

	        Addend.Coeff := 1; //коэф. при переменной

	        Addend.Lag := i; //лаг

	    End For;


	    //====x5

	    For i := 1 To 7 Do

	        Constr := ConstrS.Add;

	        Constr.LowerBound := 0;

	        Constr.UpperBound := 1e20;

	        AddendS := Constr.Addends;

	        Addend := AddendS.Add(Vars.FindById("x5"));

	        Addend.Coeff := 1; //коэф. при переменной

	        Addend.Lag := i; //лаг

	    End For;

	    //====x6

	    For i := 1 To 7 Do

	        Constr := ConstrS.Add;

	        Constr.LowerBound := 0;

	        Constr.UpperBound := 1e20;

	        AddendS := Constr.Addends;

	        Addend := AddendS.Add(Vars.FindById("x6"));

	        Addend.Coeff := 1; //коэф. при переменной

	        Addend.Lag := i; //лаг

	    End For;


	    // Список уравнений

	    EqS := ZCU.Equations;

	    // Уравнение №1

	    Eq := EqS.Add;

	    AddendS := Eq.Addends;

	    Addend := Addends.Add(Vars.FindById("x1")); //левая часть

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 0; //лаг

	    Addend := Addends.Add(Vars.FindById("x1")); //1-е слагаемое

	    Addend.Coeff := 0.5; //коэф. при переменной

	    Addend.Lag := 1; //лаг

	    Addend := Addends.Add(Vars.FindById("x2")); //2-е слагаемое

	    Addend.Coeff := -0.3; //коэф. при переменной

	    Addend.Lag := 1; //лаг

	    Addend := Addends.Add(Vars.FindById("x3")); //3-е слагаемое

	    Addend.Coeff := 0.1; //коэф. при переменной

	    Addend.Lag := 1; //лаг

	    Addend := Addends.Add(Vars.FindById("x4")); //4-е слагаемое

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 1; //лаг


	    // Уравнение №2

	    Eq := EqS.Add;

	    AddendS := Eq.Addends;

	    Addend := Addends.Add(Vars.FindById("x2")); //левая часть

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 0; //лаг

	    Addend := Addends.Add(Vars.FindById("x1")); //1-е слагаемое

	    Addend.Coeff := -0.2; //коэф. при переменной

	    Addend.Lag := 1; //лаг

	    Addend := Addends.Add(Vars.FindById("x2")); //2-е слагаемое

	    Addend.Coeff := 0.1; //коэф. при переменной

	    Addend.Lag := 1; //лаг

	    Addend := Addends.Add(Vars.FindById("x5")); //3-е слагаемое

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 1; //лаг


	    // Уравнение №3

	    Eq := EqS.Add;

	    AddendS := Eq.Addends;

	    Addend := Addends.Add(Vars.FindById("x3")); //левая часть

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 0; //лаг

	    Addend := Addends.Add(Vars.FindById("x3")); //1-е слагаемое

	    Addend.Coeff := 0.1; //коэф. при переменной

	    Addend.Lag := 1; //лаг

	    Addend := Addends.Add(Vars.FindById("x6")); //2-е слагаемое

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 1; //лаг

	    // Целевая функция

	    ObjFun := ZCU.CriterionFunction;

	    //=== x4

	    For i := 1 To 7 Do

	        Addend := ObjFun.Addends.Add(Vars.FindById("x4"));

	        Addend.Coeff := 1;

	        Addend.Lag := 7 - i;

	    End For;


	    //=== x5

	    For i := 1 To 7 Do

	        Addend := ObjFun.Addends.Add(Vars.FindById("x5"));

	        Addend.Coeff := 1;

	        Addend.Lag := 7 - i;

	    End For;

	    //=== x6

	    For i := 1 To 7 Do

	        Addend := ObjFun.Addends.Add(Vars.FindById("x6"));

	        Addend.Coeff := 1;

	        Addend.Lag := 7 - i;

	    End For;

	    TimeInterval := 7;

	    ZCU.Extremum := ExtremumType.Minimum;

	    Res := ZCU.Evaluate(TimeInterval) As ILoResults;

	    s := "Оптимальное значение: " + Res.OptimalValue.ToString;

	    Debug.WriteLine(s);

	    s := Res.ErrorMsg + " (Код: " + Res.Status.ToString + ")";

	    Debug.WriteLine(s);

	    s := "     ";


	    For j := 1 To Vars.Count Do

	        Vrbl := Vars.Item(j - 1);

	        s := s + Vrbl.Id + ",        ";

	    End For;

	    Debug.WriteLine(s);

	    ci := CultureInfo.Current;

	    For i := 1 To TimeInterval Do

	        s := "t=" + i.ToString + ", ";

	        For j := 1 To Vars.Count Do

	            Vrbl := Vars.Item(j - 1);

	            Val := Res.VarValues(Vrbl.Id)[i - 1];

	            s := s + ci.FormatDoublePrec(Val, 6) + ", ";

	        End For;

	        Debug.WriteLine(s);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены [![](../../Opened.gif)![](../../Closed.gif)результаты
 расчетов](javascript:TextPopup(this)).


	Module execution started


	Оптимальное значение: 6.3482475000000003


	Нет ошибки (Код: 0)


	     x1,        x2,
	        x3,        x4,
	        x5,        x6,


	t=1, 1,300000, 0,900000, 1,100000, 0,000000,
	 0,170000, 0,000000,


	t=2, 0,490000, 0,000000, 0,110000, 0,000000,
	 0,098000, 0,000000,


	t=3, 0,256000, 0,000000, 0,011000, 0,000000,
	 0,051200, 0,000000,


	t=4, 0,129100, 0,000000, 0,001100, 0,000000,
	 0,025820, 0,000000,


	t=5, 0,064660, 0,000000, 0,000110, 0,000000,
	 0,012932, 0,000000,


	t=6, 0,032341, 0,000000, 0,000011, 1,983828,
	 2,006468, 1,999999,


	t=7, 2,000000, 2,000000, 2,000000, 0,000000,
	 0,000000, 0,000000,


	Module execution finished


См. также:


[ILoConstraint](ILoConstraint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
