# IPivotFilterSettings.AttributeLinks

IPivotFilterSettings.AttributeLinks
-


# IPivotFilterSettings.AttributeLinks


## Синтаксис


AttributeLinks: [IPivotFilterAttributeLinks](../IPivotFilterAttributeLinks/IPivotFilterAttributeLinks.htm);


## Описание


Свойство AttributeLinks возвращает
 параметры фильтрации по связям атрибутов измерений.


## Комментарии


Данный вид фильтрации позволяет управлять отображаемыми данными не по
 фактическим значениям в ячейках, а на основании значений определенных
 атрибутов у элементов измерений. Устанавливаемая связь работает по такому
 же принципу, по которому организуется работа управляющих измерений в кубах.


Фильтрация производится по следующему алгоритму:


	- в первом измерении выставляется отметка элементов;


	- из значений атрибута, определяемого свойством [IPivotFilterAttributeLink.FirstDimensionAttrId](../IPivotFilterAttributeLink/IPivotFilterAttributeLink.FirstDimensionAttrId.htm),
	 у отмеченных элементов формируется набор значений - A;


	- во втором измерении отбираются отмеченные элементы;


	- среди этих элементов отбираются те значения атрибута, определяемого
	 свойством [IPivotFilterAttributeLink.SecondDimensionAttrId](../IPivotFilterAttributeLink/IPivotFilterAttributeLink.SecondDimensionAttrId.htm),
	 которые содержат хотя бы одно значение из списка A.


	- по отобранным элементам данные останутся в таблице, по остальным
	 элементам данные будут скрыты.


Если в результате
 фильтрации для элемента первого измерения не осталось ни одного элемента
 второго измерения, то этот элемент первого измерения также исключается
 из выборки.


Связь между двумя измерениями является двусторонней и зависит от расположения
 измерений:


	- фиксированное
	 измерение фильтрует измерение в шапке/боковике;


	- измерение, которое расположено «выше», фильтрует «нижележащие»
	 измерения;


	- связи между измерениями шапки и боковика игнорируются.


## Пример


Использование свойства приведено в примере для [IPivotFilterAttributeLinks.Add](../IPivotFilterAttributeLinks/IPivotFilterAttributeLinks.Add.htm).


См. также:


[IPivotFilterSettings](IPivotFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
