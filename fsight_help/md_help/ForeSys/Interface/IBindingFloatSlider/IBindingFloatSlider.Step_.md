# IBindingFloatSlider.Step_

IBindingFloatSlider.Step_
-


# IBindingFloatSlider.Step_


## Синтаксис


Step_: Double;


## Описание


Свойство Step_ определяет значение
 параметра «STEP» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «STEP» определяет шаг
 изменения значения ползунка. Шаг изменения должен быть задан в диапазоне
 между [минимальным](IBindingFloatSlider.MinValue.htm) и [максимальным](IBindingFloatSlider.MaxValue.htm) значениями.


Значение свойства Step_ учитывается,
 если свойство [IBindingFloatSlider.StepDefined](IBindingFloatSlider.StepDefined.htm)
 имеет значение True. При изменении
 значения свойства Step_ свойству
 [IBindingFloatSlider.StepDefined](IBindingFloatSlider.StepDefined.htm)
 автоматически присваивается значение True.


## Пример


Использование свойства приведено в примере для [IBindingFloatSlider.MaxValue](IBindingFloatSlider.MaxValue.htm).


См. также:


[IBindingFloatSlider](IBindingFloatSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
