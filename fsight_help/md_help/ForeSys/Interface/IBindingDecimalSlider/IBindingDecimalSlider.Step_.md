# IBindingDecimalSlider.Step_

IBindingDecimalSlider.Step_
-


# IBindingDecimalSlider.Step_


## Синтаксис


Step_: Decimal;


## Описание


Свойство Step_ определяет значение
 параметра «STEP» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «STEP» определяет шаг
 изменения значения ползунка. Шаг изменения должен быть задан в диапазоне
 между [минимальным](IBindingDecimalSlider.MinValue.htm) и [максимальным](IBindingDecimalSlider.MaxValue.htm) значениями.


Значение свойства Step_ учитывается,
 если свойство [IBindingDecimalSlider.StepDefined](IBindingDecimalSlider.StepDefined.htm)
 имеет значение True. При изменении
 значения свойства Step_ свойству
 [IBindingDecimalSlider.StepDefined](IBindingDecimalSlider.StepDefined.htm)
 автоматически присваивается значение True.


## Пример


Использование свойства приведено в примере для [IBindingDecimalSlider.MaxValue](IBindingDecimalSlider.MaxValue.htm).


См. также:


[IBindingDecimalSlider](IBindingDecimalSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
