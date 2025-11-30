# ISmR.Code

ISmR.Code
-


# ISmR.Code


## Синтаксис


Code: String;


## Описание


Свойство Code определяет текст
 программы.


## Комментарии


Для получения результата используйте свойство [ISmR.Result](ISmR.Result.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


					Sub UserProc;

		Var

		    pR: ISmR;

		    x: ISlSerie;

		    y, x1, x2: Array[12] Of Double;

		    code, lf: String;

		    i, res: Integer;

		Begin

		    pR := New SmR.Create;

		    /// Входные ряды:

		    // Y:

		    y[00] := 6209;  y[01] := 6385;  y[02] := 6752;

		    y[03] := 6837;  y[04] := 6495;  y[05] := 6907;

		    y[06] := 7349;  y[07] := 7213;  y[08] := 7061;

		    y[09] := 7180;  y[10] := 7132;  y[11] := 7137;

		    x := pR.Inputs.Add;

		    x.Value := y;

		    x.Name := "y";

		    // X1:

		    x1[00] := 4110;  x1[01] := 4280;  x1[02] := 4459;

		    x1[03] := 4545;  x1[04] := 4664;  x1[05] := 4861;

		    x1[06] := 5195;  x1[07] := 5389;  x1[08] := 5463;

		    x1[09] := 5610;  x1[10] := 5948;  x1[11] := 6218;

		    x := pR.Inputs.Add;

		    x.Value := x1;

		    x.Name := "x1";

		    // X2:

		    x2[00] := 3415;  x2[01] := 3673;  x2[02] := 4013;

		    x2[03] := 4278;  x2[04] := 4577;  x2[05] := 5135;

		    x2[06] := 5388;  x2[07] := 5610;  x2[08] := 5787;

		    x2[09] := 6181;  x2[10] := 6633;  x2[11] := 6910;

		    x := pR.Inputs.Add;

		    x.Value := x2;

		    x.Name := "x2";

		    // Текст программы:

		    lf := Char.Chr(10);

		    code := "";

		    // Задание уравнения: y~x1+x2 - формула,

		    // y - объясняемый ряд, x1, x2- объясняющие ряды,

		    // если хотим исключить константу, пишем x1+x2-1:

		    code := code + "model <- lm(y~x1+x2, na.action = na.exclude, model = TRUE, x = TRUE, y = TRUE, qr = TRUE,
		 singular.ok = TRUE)" + lf;

		    // коэффициенты

		    code := code + "coe<-t(coefficients(model))" + lf;

		    // модельный ряд

		    code := code + "fit<-fitted(model)" + lf;

		    pR.Code := code;

		    // Возвращаемый результат:

		    pR.Result.Name := "fit";

		    // Расчёт модели:

		    res := pR.Execute;

		    Debug.WriteLine(pR.Errors);

		    Debug.WriteLine("Результат расчёта:");

		    Debug.Indent;

		    If res = 0 Then

		        For i := 0 To pR.Result.Value.Length-1 Do

		            Debug.WriteLine(pR.Result.Value[i].ToString);

		        End For;

		    End If;

		    Debug.Unindent;

		End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты, полученные
 с использованием языка программирования R.


См. также:


[ISmR](ISmR.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
