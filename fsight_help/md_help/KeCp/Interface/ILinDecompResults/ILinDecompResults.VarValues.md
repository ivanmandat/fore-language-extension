# ILinDecompResults.VarValues

ILinDecompResults.VarValues
-


# ILinDecompResults.VarValues


## Синтаксис


VarValues(VarId: String): Array;


## Параметры


VarId. Идентификатор переменной.


## Описание


Свойство VarValues возвращает
 вычисленные значения переменной в виде массива.


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

	    Trajectory: Array[5] Of Double;

	    Val: Double;

	    I,J: Integer;

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

	    Trajectory := New Double[5];

	    For i := 0 To 4 Do

	        Trajectory[i] := 2 + i;

	    End For;

	    // Список переменных

	    Vars:= FPAS.Variables;

	    For I := 1 To 2 Do

	        s := "x" + i.ToString;

	        Vrbl:=Vars.Add(s);

	        Vrbl.Retrospective := Retro;

	        Vrbl.Forestall := Forestall;

	    End For;

	    // Управляющая переменная

	    Vrbl := Vars.Add("U2");

	    Vrbl.Name := "Control Variable";

	    Vrbl.Retrospective := Retro;

	    Vrbl.Forestall := Forestall;

	    Vrbl.Trajectory := Trajectory;

	    Vrbl.ControlVariable := True;

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

	    Addend := Addends.Add(Vars.FindById("U2")); //управляющая переменная

	    Addend.Coeff := 1; //коэф. при переменной

	    Addend.Lag := 1; //лаг

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

	    For j := 1 To Vars.Count Do

	        Vrbl := Vars.Item(j - 1);

	        If (Vrbl.ControlVariable = False) Then

	            s := s + Vrbl.Id + ",             ";

	        End If;

	    End For;

	    Debug.WriteLine(s);

	    For i := 1 To TimeInterval Do

	        s := "t=" + i.ToString + ",    ";

	        For j := 1 To Vars.Count Do

	            Vrbl := Vars.Item(j - 1);

	            If (Vrbl.ControlVariable = False) Then

	                Val := Res.VarValues(Vrbl.Id)[i - 1];

	                s := s + Val.ToString + ", ";

	            End If;

	        End For;

	        Debug.WriteLine(s);

	    End For;

	End Sub UserProc;


После выполнения примера будет рассчитана линейная система, в окно консоли
 будет выведено сообщение об имеющихся ошибках и результаты вычисления
 переменных.


См. также:


[ILinDecompResults](ILinDecompResults.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
