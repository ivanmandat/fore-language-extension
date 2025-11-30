# IPivotFilterAttributeLink

IPivotFilterAttributeLink
-


# IPivotFilterAttributeLink


Сборка: Pivot;


## Описание


Интерфейс IPivotFilterAttributeLink
 содержит свойства фильтра по связи атрибутов измерений.


## Иерархия наследования


           IPivotFilterAttributeLink


## Комментарии


Для настройки фильтрации по связи атрибутов необходимо задать следующие
 параметры:


	- В свойствах [FirstDimensionKey](IPivotFilterAttributeLink.FirstDimensionKey.htm)
	 и [SecondDimensionKey](IPivotFilterAttributeLink.SecondDimensionKey.htm)
	 указать ключи связываемых измерений;


	- В свойствах [FirstDimensionAttrId](IPivotFilterAttributeLink.FirstDimensionAttrId.htm)
	 и [SecondDimensionAttrId](IPivotFilterAttributeLink.SecondDimensionAttrId.htm)
	 указать идентификаторы связываемых атрибутов. Связь доступна по любым
	 атрибутам, включая атрибуты со множественными значениями.


Если по атрибутам допускается наличие пустых значений, то определите
 также свойства [FirstDimensionAllowNull](IPivotFilterAttributeLink.FirstDimensionAllowNull.htm)
 и [SecondDimensionAllowNull](IPivotFilterAttributeLink.SecondDimensionAllowNull.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FirstDimensionAllowNull](IPivotFilterAttributeLink.FirstDimensionAllowNull.htm)
		 Свойство FirstDimensionAllowNull
		 определяет, будет ли учитываться связь при пустом значении атрибута
		 в первом измерении.


		 ![](../../Property_Image.gif)
		 [FirstDimensionAttrId](IPivotFilterAttributeLink.FirstDimensionAttrId.htm)
		 Свойство FirstDimensionAttrId
		 определяет идентификатор атрибута первого связываемого измерения.


		 ![](../../Property_Image.gif)
		 [FirstDimensionKey](IPivotFilterAttributeLink.FirstDimensionKey.htm)
		 Свойство FirstDimensionKey
		 определяет ключ первого связываемого измерения.


		 ![](../../Property_Image.gif)
		 [IsValid](IPivotFilterAttributeLink.IsValid.htm)
		 Свойство IsValid возвращает
		 признак работоспособности связи атрибутов.


		 ![](../../Property_Image.gif)
		 [SecondDimensionAllowNull](IPivotFilterAttributeLink.SecondDimensionAllowNull.htm)
		 Свойство SecondDimensionAllowNull
		 определяет, будет ли учитываться связь при пустом значении атрибута
		 во втором измерении.


		 ![](../../Property_Image.gif)
		 [SecondDimensionAttrId](IPivotFilterAttributeLink.SecondDimensionAttrId.htm)
		 Свойство SecondDimensionAttrId
		 определяет идентификатор атрибута второго связываемого измерения.


		 ![](../../Property_Image.gif)
		 [SecondDimensionKey](IPivotFilterAttributeLink.SecondDimensionKey.htm)
		 Свойство SecondDimensionKey
		 определяет ключ второго связываемого измерения.


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
