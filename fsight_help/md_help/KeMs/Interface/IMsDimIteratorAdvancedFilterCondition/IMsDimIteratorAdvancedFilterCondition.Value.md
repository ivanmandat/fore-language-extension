# IMsDimIteratorAdvancedFilterCondition.Value

IMsDimIteratorAdvancedFilterCondition.Value
-


# IMsDimIteratorAdvancedFilterCondition.Value


## Синтаксис


		Value: Variant;


## Описание


Свойство Value определяет
 сравниваемое значение.


## Комментарии


Для задания сравниваемого атрибута используйте свойство [IMsDimIteratorAdvancedFilterCondition.Attribute](IMsDimIteratorAdvancedFilterCondition.Attribute.htm).


Для задания оператора сравнения используйте свойство [IMsDimIteratorAdvancedFilterCondition.Operator_](IMsDimIteratorAdvancedFilterCondition.Operator_.htm).
 Учитывайте особенности работы со следующими операторами:


	- [MsAdvancedFilterConditionOperator.Between](../../Enums/MsAdvancedFilterConditionOperator.htm).
	 В качестве значения должен быть указан массив из двух элементов;


	- [MsAdvancedFilterConditionOperator.In](../../Enums/MsAdvancedFilterConditionOperator.htm).
	 В качестве значения должен быть указан массив элементов.


Для задания сравниваемого значения в виде параметра используйте свойство
 [IMsDimIteratorAdvancedFilterCondition.ParamAttributes](IMsDimIteratorAdvancedFilterCondition.ParamAttributes.htm).


## Пример


Использование свойства приведено в примере для [IMsDimIteratorFilter.AdvancedFilter](../IMsDimIteratorFilter/IMsDimIteratorFilter.AdvancedFilter.htm).


См. также:


[IMsDimIteratorAdvancedFilterCondition](IMsDimIteratorAdvancedFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
