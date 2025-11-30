# IBindingIntegerSlider.MinValue

IBindingIntegerSlider.MinValue
-


# IBindingIntegerSlider.MinValue


## Синтаксис


MinValue: Integer;


## Описание


Свойство MinValue определяет
 значение параметра «MINVAL» в
 [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MINVAL» определяет
 минимальное значение ползунка. Минимальное значение должно быть меньше
 максимального значения, заданного в свойстве [IBindingIntegerSlider.MaxValue](IBindingIntegerSlider.MaxValue.htm).


Значение свойства MinValue учитывается,
 если свойство [IBindingIntegerSlider.MinValueDefined](IBindingIntegerSlider.MinValueDefined.htm)
 имеет значение True. При изменении
 значения свойства MinValue свойству
 [IBindingIntegerSlider.MinValueDefined](IBindingIntegerSlider.MinValueDefined.htm)
 автоматически присваивается значение True.


## Пример


Использование свойства приведено в примере для [IBindingIntegerSlider.MaxValue](IBindingIntegerSlider.MaxValue.htm).


См. также:


[IBindingIntegerSlider](IBindingIntegerSlider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
