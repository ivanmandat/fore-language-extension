# ILoEquation.Addends

ILoEquation.Addends
-


# ILoEquation.Addends


## Синтаксис


Addends: [ILoAddends](../ILoAddends/ILoAddends.htm);


## Описание


Свойство Addends возвращает
 коллекцию слагаемых уравнения.


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

	    // Список переменных

	    Vars:= FPAS.Variables;

	    For I := 1 To 2 Do

	        s := "x" + i.ToString;

	        // Переменная с ретроспективой

	        Vrbl:=Vars.Add(s);

	        Vrbl.Retrospective := Retro;

	        Vrbl.Forestall := Forestall;

	    End For;

	    // Список уравнений

	    EqS := FPAS.Equations;

	    // Уравнение №1

	    Eq := EqS.Add;

	    // Список слагаемых

	    AddendS := Eq.Addends;

	    Addend := Addends.Add(Vars.FindById("x1")); //левая часть уравнения

	    Addend.Coeff := 1;//коэф. при переменной

	    Addend.Lag := 0;//лаг

	    Addend := Addends.Add(Vars.FindById("x1")); //первое слагаемое

	    Addend.Coeff := 2;//коэф. при переменной

	    Addend.Lag := 1;//лаг

	    Addend := Addends.Add(Vars.FindById("x1"));//второе слагаемое

	    Addend.Coeff := 0.25 ;//коэф. при переменной

	    Addend.Lag := -1;//лаг

	    // Уравнение №2

	    Eq := EqS.Add;

	    // Список слагаемых

	    AddendS := Eq.Addends;

	    Addend := Addends.Add(Vars.FindById("x2")); //левая часть уравнения

	    Addend.Coeff := 1;//коэф. при переменной

	    Addend.Lag := 0;//лаг

	    Addend := Addends.Add(Vars.FindById("x1")); //первое слагаемое

	    Addend.Coeff := 12.6;//коэф. при переменной

	    Addend.Lag := -1;//лаг

	    Addend := Addends.Add(Vars.FindById("x2"));//второе слагаемое

	    Addend.Coeff := 26;//коэф. при переменной

	    Addend.Lag := 1; //лаг

	    FPAS.Extremum:=ExtremumType.Maximum;

	    TimeInterval := 5;

	    Res := FPAS.Evaluate(TimeInterval) As ILinDecompResults;

	    Debug.WriteLine(Res.ErrorMsg);

	End Sub UserProc;


После выполнения примера, будет рассчитана линейная система, в окно
 консоли будет выведено сообщение об имеющихся ошибках.


См. также:


[ILoEquation](ILoEquation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
