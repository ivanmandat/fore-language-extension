# ICpResults.ErrorMsg

ICpResults.ErrorMsg
-


# ICpResults.ErrorMsg


## Синтаксис


ErrorMsg: String;


## Описание


Свойство ErrorMsg возвращает
 информационное сообщение о результатах расчета.


## Комментарии


Свойство доступно только для чтения.


## Пример


Добавьте ссылки на системные сборки: Cp.


	Sub UserProc;

	Var

	    FPAS: LinearDecomposition;

	    VarS: ILoVariables;

	    Vrbl: ILoVariable;

	    EqS: ILoEquations;

	    Eq: ILoEquation;

	    AddendS: ILoAddends;

	    Addend: ILoAddend;

	    Res: ILinDecompResults;

	    Retro, Forestall: Array[2] Of Double;

	    I: Integer;

	    TimeInterval: Integer;

	    S: String;

	Begin

	    FPAS := New LinearDecomposition.Create;

	    // Переменные

	    Retro := New Double[2];

	    Retro[0] := 1;

	    Retro[1] := 2;

	    Forestall := New Double[2];

	    Forestall[0] := 3;

	    Forestall[1] := 4;

	    // Cписок переменных

	    Vars:= FPAS.Variables;

	    For I := 1 To 2 Do

	        s := "x" + i.ToString;

	        // переменная с ретроспективой

	        Vrbl:=Vars.Add(s);

	        Vrbl.Retrospective := Retro;

	        Vrbl.Forestall := Forestall;

	    End For;

	    // Cписок уравнений

	    EqS := FPAS.Equations;

	    // Уравнение №1

	    Eq := EqS.Add;

	    // список слагаемых

	    AddendS := Eq.Addends;

	    //левая часть уравнения

	    Addend := Addends.Add(Vars.FindById("x1"));

	    //коэффициент при переменной

	    Addend.Coeff := 1;

	    //лаг

	    Addend.Lag := 0;

	    //первое слагаемое

	    Addend := Addends.Add(Vars.FindById("x1"));

	    //коэффициент при переменной

	    Addend.Coeff := 2;

	    //лаг

	    Addend.Lag := 1;

	    //второе слагаемое

	    Addend := Addends.Add(Vars.FindById("x1"));

	    //коэффициент при переменной

	    Addend.Coeff := 0.25 ;

	    //лаг

	    Addend.Lag := -1;

	    // Уравнение №2

	    Eq := EqS.Add;

	    // список слагаемых

	    AddendS := Eq.Addends;

	    //левая часть уравнения

	    Addend := Addends.Add(Vars.FindById("x2"));

	    //коэффициент при переменной

	    Addend.Coeff := 1;

	    //лаг

	    Addend.Lag := 0;

	    //первое слагаемое

	    Addend := Addends.Add(Vars.FindById("x1"));

	    //коэффициент при переменной

	    Addend.Coeff := 12.6;

	    //лаг

	    Addend.Lag := -1;

	    //второе слагаемое

	    Addend := Addends.Add(Vars.FindById("x2"));

	    //коэффициент при переменной

	    Addend.Coeff := 26;

	    //лаг

	    Addend.Lag := 1;

	    FPAS.Extremum:=ExtremumType.Maximum;

	    TimeInterval := 5;

	    Res := FPAS.Evaluate(TimeInterval) As ILinDecompResults;

	    Debug.WriteLine(Res.ErrorMsg);

	End Sub UserProc;


После выполнения примера, будет рассчитана линейная система, в окно
 консоли будет выведено сообщение об имеющихся ошибках.


См. также:


[ICpResults](ICpResults.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
