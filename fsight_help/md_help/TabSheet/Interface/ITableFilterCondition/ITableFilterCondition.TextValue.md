# ITableFilterCondition.TextValue

ITableFilterCondition.TextValue
-


# ITableFilterCondition.TextValue


## Синтаксис


TextValue: String;


## Описание


Свойство TextValue определяет
 значение ограничения, которое будет использоваться без преобразования.


## Комментарии


При обработке условия, значение ограничения в свойстве TextValue
 будет использоваться только в заданном виде. Свойство актуально в случае,
 когда нет необходимости интерпретации строки, состоящей из цифр, как числа,
 так как в этом случае происходит преобразование значения в тип Double
 с потерей разрядов. При необходимости данного преобразования используйте
 свойство [Value](ITableFilterCondition.Value.htm).


См. также:


[ITableFilterCondition](ITableFilterCondition.htm)
 | [Value](ITableFilterCondition.Value.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
