# ICallbackNLOptimization.GetConstraintPartialDeriv

ICallbackNLOptimization.GetConstraintPartialDeriv
-


# ICallbackNLOptimization.GetConstraintPartialDeriv


## Синтаксис


GetConstraintPartialDeriv(IndxCnstr: Integer; IndxVrb:
 Integer): Variant;


## Параметры


IndxCnstr. Индекс ограничения;


IndxVrb. Индекс переменной.


## Описание


Метод GetConstraintPartialDeriv
 рассчитывает и возвращает в метод оптимизации значение частной производной
 по j-ой переменной от i-го
 ограничения.


## Комментарии


Для получения значения целевой функции используйте метод [ICallbackNLOptimization.GetObjFunValue](ICallbackNLOptimization.GetObjFunValue.htm).


## Пример для класса CallBackNLO


В примере приведено описание пользовательского класса, используемого
 для расчета значений переменных, целевой функции и нелинейных ограничений.
 Использование данного класса для обработки событий приведено в примере
 для [ISmNonLinearOptimization.Callback](../ISmNonLinearOptimization/ISmNonLinearOptimization.Callback.htm).


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Public Class CallBackNLO : Object, ICallbackNLOptimization

	            U: array[10] Of double;

	            res: double;

	    Public  CallCount: integer;

	    Public  log: boolean;

	            options: array[16] Of Double;

	    Public  MAXCOUNT: integer;

	            i: integer;


	    Public Constructor Create;

	    Begin

	    End Constructor Create;


	    Public Sub SetArgValues(indx: Integer; Value: Double);

	    Begin

	        U[indx] := Value;

	    End Sub SetArgValues;


	    Public Function GetObjFunValue: Variant;

	    Begin

	        res := U[0]*U[3]*(U[0]+U[1]+U[2])+U[2];

	        CallCount := CallCount + 1;

	        If MAXCOUNT < CAllCount Then

	            Options[0] := 1;

	        End If;

	        Return res;

	    End Function GetObjFunValue;


	    Public Function GetObjFunPartialDeriv(indx: Integer) : Variant;

	    Begin

	        Return 1;

	    End Function GetObjFunPartialDeriv;


	    Public Function GetConstraintValue(indx: Integer) : Variant;

	    Begin

	        Select Case indx

	            Case 0: res := U[0]*U[0] + U[1]*U[1] + U[2]*U[2] + U[3]*U[3];

	            Case 1: res := U[0]*U[1]*U[2]*U[3];

	        End Select;

	        Return res;

	    End Function GetConstraintValue;


	    Public Function GetConstraintPartialDeriv(indxCnstr: Integer; indxVrb: Integer) : Variant;

	    Begin

	        res:=Double.Nan;

	        Return res;

	    End Function GetConstraintPartialDeriv;


	    Public Sub set_Options(Val: Array Of Double);

	    Begin

	        val := Options;

	    End Sub set_Options;


	    Public Function get_Options: Array Of Double;

	    Begin

	        Return Options;

	    End Function get_Options;

	End Class CallBackNLO;


## Пример для класса CallBackBCO


В примере приведено описание пользовательского класса, используемого
 для расчета значений переменных, целевой функции и нелинейных ограничений.
 Использование данного класса для обработки событий приведено в примере
 для [ISmBoxConstrainedOptimization.Callback](../ISmBoxConstrainedOptimization/ISmBoxConstrainedOptimization.Callback.htm).


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Public Class CallBackBCO : Object, ICallbackNLOptimization

	            U: Array[3] Of Double;

	            res: Double;

	    Public  CallCount: Integer;

	    Public  log: Boolean;

	            options: Array[16] Of Double;

	    Public  MAXCOUNT: Integer;

	            i: Integer;


	    Public Sub SetArgValues(indx: Integer; Value: Double);

	    Begin

	        U[indx] := Value;

	    End Sub SetArgValues;


	    Public Function GetObjFunValue: Variant;

	    Begin

	        res := U[0]-4*U[1]+2*U[2];

	        CallCount := CallCount + 1;

	        If MAXCOUNT < CAllCount Then

	            options[0] := 1;

	        End If;

	        Return res;

	    End Function GetObjFunValue;


	    Public Function GetObjFunPartialDeriv(indx: Integer) : Variant;

	    Begin

	        Return 0;

	    End Function GetObjFunPartialDeriv;


	    Public Function GetConstraintValue(indx: Integer) : Variant;

	    Begin

	        Return 0;

	    End Function GetConstraintValue;


	    Public Function GetConstraintPartialDeriv(indxCnstr: Integer; indxVrb: Integer) : Variant;

	    Begin

	        Return 0;

	    End Function GetConstraintPartialDeriv;


	    Public Sub set_Options(Val: Array Of Double);

	    Begin

	        val := Options;

	    End Sub set_Options;


	    Public Function get_Options: Array Of Double;

	    Begin

	        Return Options;

	    End Function get_Options;

	End Class CallBackBCO;


	См. также:


	[ICallbackNLOptimization](ICallbackNLOptimization.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
