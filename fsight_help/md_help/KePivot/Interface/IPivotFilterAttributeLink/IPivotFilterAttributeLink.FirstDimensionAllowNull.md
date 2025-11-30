# IPivotFilterAttributeLink.FirstDimensionAllowNull

IPivotFilterAttributeLink.FirstDimensionAllowNull
-


# IPivotFilterAttributeLink.FirstDimensionAllowNull


## Синтаксис


FirstDimensionAllowNull: Boolean;


## Описание


Свойство FirstDimensionAllowNull
 определяет, будет ли учитываться связь при пустом значении атрибута в
 первом измерении.


## Комментарии


Допустимые значения:


	- True. Связь не учитывается
	 для элементов, у которых по атрибуту [FirstDimensionAttrId](IPivotFilterAttributeLink.FirstDimensionAttrId.htm)
	 имеется пустое значение. Данный элемент будет рассматриваться как
	 элемент, привязанный ко всем элементам второго измерения.


	- False. Связь учитывается
	 для элементов, у которых по атрибуту [FirstDimensionAttrId](IPivotFilterAttributeLink.FirstDimensionAttrId.htm)
	 имеется пустое значение. Данные по этим элементам будут скрыты.


## Пример


Пример использования приведен в описании метода [IPivotFilterAttributeLinks.Add](../IPivotFilterAttributeLinks/IPivotFilterAttributeLinks.Add.htm).


См. также:


[IPivotFilterAttributeLink](IPivotFilterAttributeLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
