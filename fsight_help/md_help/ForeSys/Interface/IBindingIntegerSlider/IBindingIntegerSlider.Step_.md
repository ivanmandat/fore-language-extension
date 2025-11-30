# IBindingIntegerSlider.Step_

IBindingIntegerSlider.Step_
-


# IBindingIntegerSlider.Step_


## Синтаксис


Step_: Integer;


## Описание


Свойство Step_ определяет значение
 параметра «STEP» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «STEP» определяет шаг
 изменения значения ползунка. Шаг изменения должен быть задан в диапазоне
 между [минимальным](IBindingIntegerSlider.MinValue.htm) и [максимальным](IBindingIntegerSlider.MaxValue.htm) значениями.


Значение свойства Step_ учитывается,
 если свойство [IBindingIntegerSlider.StepDefined](IBindingIntegerSlider.StepDefined.htm)
 имеет значение True. При изменении
 значения свойства Step_ свойству
 [IBindingIntegerSlider.StepDefined](IBindingIntegerSlider.StepDefined.htm)
 автоматически присваивается значение True.


## Пример


Использование свойства приведено в примере для [IBindingIntegerSlider.MaxValue](IBindingIntegerSlider.MaxValue.htm).


См. также:


[IBindingIntegerSlider](IBindingIntegerSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
