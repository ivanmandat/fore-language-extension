# IPivotFilterAttributeLink.SecondDimensionAllowNull

IPivotFilterAttributeLink.SecondDimensionAllowNull
-


# IPivotFilterAttributeLink.SecondDimensionAllowNull


## Синтаксис


SecondDimensionAllowNull: Boolean;


## Описание


Свойство SecondDimensionAllowNull
 определяет, будет ли учитываться связь при пустом значении атрибута во
 втором измерении.


## Комментарии


Допустимые значения:


	- True. Связь не учитывается
	 для элементов, у которых по атрибуту [SecondDimensionAttrId](IPivotFilterAttributeLink.SecondDimensionAttrId.htm)
	 имеется пустое значение. Данный элемент будет рассматриваться как
	 элемент, привязанный ко всем элементам второго измерения.


	- False. Связь учитывается
	 для элементов, у которых по атрибуту [SecondDimensionAttrId](IPivotFilterAttributeLink.SecondDimensionAttrId.htm)
	 имеется пустое значение. Данные по этим элементам будут скрыты.


## Пример


Пример использования приведен в описании метода [IPivotFilterAttributeLinks.Add](../IPivotFilterAttributeLinks/IPivotFilterAttributeLinks.Add.htm).


См. также:


[IPivotFilterAttributeLink](IPivotFilterAttributeLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
