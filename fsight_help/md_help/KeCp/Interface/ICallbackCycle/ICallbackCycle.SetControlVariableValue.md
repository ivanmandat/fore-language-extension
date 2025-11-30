# ICallbackCycle.SetControlVariableValue

ICallbackCycle.SetControlVariableValue
-


# ICallbackCycle.SetControlVariableValue


## Синтаксис


SetControlVariableValue(VariableNumber: Integer;
 TimeMoment: Integer; Value: Double): Variant;


## Параметры


EquationNumber. Индекс уравнения,
 содержащего переменную.


TimeMoment. Текущая точка переменной.


Value. Значение переменной.


## Описание


Метод SetControlVariableValue
 устанавливает значение управляющей переменной.


## Комментарии


Для получения значения фазовой переменной используйте метод [ICallbackCycle.GetTermValue](ICallbackCycle.GetTermValue.htm).


## Пример


Использование метода приведено в примере для [ICallbackCycle.Execute](ICallbackCycle.Execute.htm).


См. также:


[ICallbackCycle](ICallbackCycle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
