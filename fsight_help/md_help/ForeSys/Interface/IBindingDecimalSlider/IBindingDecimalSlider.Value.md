# IBindingDecimalSlider.Value

IBindingDecimalSlider.Value
-


# IBindingDecimalSlider.Value


## Синтаксис


Value: Decimal;


## Описание


Свойство Value определяет значение
 параметра «VALUE» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «VALUE» определяет
 значение ползунка по умолчанию. Данное значение должно быть задано в диапазоне
 между [минимальным](IBindingDecimalSlider.MinValue.htm) и [максимальным](IBindingDecimalSlider.MaxValue.htm) значениями.


Значение свойства Value учитывается,
 если свойство [IBindingDecimalSlider.ValueDefined](IBindingDecimalSlider.ValueDefined.htm)
 имеет значение True. При изменении
 значения свойства Value свойству
 [IBindingDecimalSlider.ValueDefined](IBindingDecimalSlider.ValueDefined.htm)
 автоматически присваивается значение True.


## Пример


Использование свойства приведено в примере для [IBindingDecimalSlider.MaxValue](IBindingDecimalSlider.MaxValue.htm).


См. также:


[IBindingDecimalSlider](IBindingDecimalSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
