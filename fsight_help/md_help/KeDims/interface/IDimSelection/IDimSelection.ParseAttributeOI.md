# IDimSelection.ParseAttributeOI

IDimSelection.ParseAttributeOI
-


# IDimSelection.ParseAttributeOI


## Синтаксис


ParseAttributeOI(Value: Variant; Attribute:
 [IDimAttribute](../IDimAttribute/IDimAttribute.htm); [Strict:
 Boolean = False]);


## Параметры


Value. Значение отметки, из
 которой осуществляется восстановление;


Attribute. Атрибут справочника,
 по которому берется отметка. По данному атрибуту в справочнике должен
 быть создан уникальный индекс;


Strict. Параметр, определяющий,
 будет ли генерироваться исключительная ситуация, если в значении Value имеются элементы, отсутствующие
 в текущей отметке.


## Описание


Метод ParseAttributeOI восстанавливает
 отметку исходной иерархии, если связь между пользовательской иерархией и
 исходным справочником не установлена.


## Комментарии


Если связь пользовательской иерархии и исходного справочника установлена,
 значения отметки будут браться из значения, передаваемого посредством
 параметра Value.


[Пользовательская
 иерархия](UiSelection.chm::/Selection/Dimension_edit.htm#save_hierarchy) - это альтернативная иерархия, которая
 создается в отчете при добавлении в измерение элемента.


Используется вместе с методом [IDimSelection.AttributeToVariantOI](IDimSelection.AttributeToVariantOI.htm).


Для параметра Strict по умолчанию
 установлено значение False,
 при этом отсутствующие элементы пропускаются. Если установить значение True, будет генерироваться исключительная
 ситуация.


## Пример


Использование метода приведено в примере для [IDimSelection.AttributeToVariantOI](IDimSelection.AttributeToVariantOI.htm).


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
