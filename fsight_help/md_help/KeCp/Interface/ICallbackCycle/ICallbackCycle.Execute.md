# ICallbackCycle.Execute

ICallbackCycle.Execute
-


# ICallbackCycle.Execute


## Синтаксис


Execute;


## Описание


Метод Execute выполняет
 расчет управляющих переменных.


## Комментарии


Для получения и изменения значения переменных используйте методы [ICallbackCycle.GetTermValue](ICallbackCycle.GetTermValue.htm)
 и [ICallbackCycle.SetControlVariableValue](ICallbackCycle.SetControlVariableValue.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку «Cp».


	Class MyCallbackCycle: Object, ICallbackCycle

	    Public

	        U_Vars, P_Vars: INonLoVariables;

	        U, P: array[10] Of double;

	        Vrbl: INonLoVariable;


	    Public Function GetTermValue(EquationNumber: Integer; TimeMoment: Integer): Variant;

	    Begin

	        Return P[EquationNumber];

	    End Function GetTermValue;


	    Public Sub SetControlVariableValue(VariableNumber: Integer; TimeMoment: Integer; Value: Double);

	    Begin

	        U[VariableNumber] := Value * TimeMoment / 100;

	    End Sub SetControlVariableValue;


	    Public Sub Execute;

	    Begin

	        P := U;

	    End Sub Execute;

	End Class MyCallbackCycle;


Использование данного класса для расчёта нелинейной оптимизации приведено
 в описании [ICpNonLinearOptimization.CallbackCycle](../ICpNonLinearOptimization/ICpNonLinearOptimization.CallbackCycle.htm).


См. также:


[ICallbackCycle](ICallbackCycle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
