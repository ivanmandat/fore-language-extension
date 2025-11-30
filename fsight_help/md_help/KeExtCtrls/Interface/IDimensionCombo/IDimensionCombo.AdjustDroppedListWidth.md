# IDimensionCombo.AdjustDroppedListWidth

IDimensionCombo.AdjustDroppedListWidth
-


# IDimensionCombo.AdjustDroppedListWidth


## Синтаксис


AdjustDroppedListWidth([MaxWidth: Integer = -1;][MinWidth:
 Integer = -1]);


## Параметры


MaxWidth. Максимальная допустимая
 ширина раскрывающегося списка;


MinWidth. Минимальная допустимая
 ширина раскрывающегося списка.


## Описание


Метод AdjustDroppedListWidth
 осуществляет подгонку ширины раскрывающегося списка компонента, с учетом
 ограничений MinWidth и MaxWidth,
 а также данных отображаемых в компоненте.


## Комментарии


Ширина подгоняется с учетом наличия экспандера, флага, пиктограммы и
 пиктограммы состояния, текста элементов. Если в компоненте отображаются
 столбцы, то учитывается ширина всех столбцов. Вызов метода приводит к
 изменению значения свойства [DroppedListWidth](IDimensionCombo.DroppedListWidth.htm).


Примечание.
 Фактическая ширина раскрывающегося списка будет установлена с учетом ограничений,
 наложенных на значение свойства [DroppedListWidth](IDimensionCombo.DroppedListWidth.htm).


См. также:


[IDimensionCombo](IDimensionCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
