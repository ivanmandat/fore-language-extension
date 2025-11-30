# ITreeCombo.AdjustDroppedListWidth

ITreeCombo.AdjustDroppedListWidth
-


# ITreeCombo.AdjustDroppedListWidth


## Синтаксис


AdjustDroppedListWidth([MaxWidth: Integer = -1;][MinWidth:
 Integer = -1]);


## Параметры


MaxWidth - максимальная допустимая
 ширина раскрывающегося списка.


MinWidth - минимальная допустимая
 ширина раскрывающегося списка.


## Описание


Метод AdjustDroppedListWidth
 осуществляет подгонку ширины раскрывающегося списка компонента, с учетом
 ограничений MinWidth и MaxWidth,
 а также данных отображаемых в компоненте.


## Комментарии


Ширина подгоняется с учетом наличия экспандера, флажка, пиктограммы
 и пиктограммы состояния, текста элементов. Если в компоненте отображаются
 столбцы, то учитывается ширина всех столбцов. Вызов метода приводит к
 изменению значения свойства [DroppedListWidth](ITreeCombo.DroppedListWidth.htm).


Примечание.
 Фактическая ширина раскрывающегося списка будет установлена с учетом ограничений,
 наложенных на значение свойства [DroppedListWidth](ITreeCombo.DroppedListWidth.htm).


См. также:


[ITreeCombo](ITreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
