# IMsDimIteratorAdvancedFilterCondition.IgnoreEmptyValues

IMsDimIteratorAdvancedFilterCondition.IgnoreEmptyValues
-


# IMsDimIteratorAdvancedFilterCondition.IgnoreEmptyValues


## Синтаксис


IgnoreEmptyValues: Boolean;


## Описание


Свойство IgnoreEmptyValues определяет
 признак учёта пустых значений, если используется параметр или его атрибут
 измерения в качестве сравниваемого значения.


## Комментарии


Допустимые значения:


	- True. Пустые значения
	 параметра или его атрибута измерения не учитываются при выполнении
	 фильтрации;


	- False. По умолчанию.
	 Пустые значения параметра или его атрибута измерения учитываются при
	 выполнении фильтрации.


Свойство используется при определении параметра или его атрибута измерения,
 задающего сравниваемое значение. Для определения параметра используйте
 свойство [IMsDimIteratorAdvancedFilterCondition.ParamAttributes](IMsDimIteratorAdvancedFilterCondition.ParamAttributes.htm).


Для получения подробной информации обратитесь к разделу «[Настройка фильтрации
 по значениям атрибутов](Uinav.chm::/GUI/UFE/AttributeFiltering.htm)».


## Пример


Использование свойства приведено в примере для [IMsDimIteratorAdvancedFilterCondition.ParamAttributes](IMsDimIteratorAdvancedFilterCondition.ParamAttributes.htm).


См. также:


[IMsDimIteratorAdvancedFilterCondition](IMsDimIteratorAdvancedFilterCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
