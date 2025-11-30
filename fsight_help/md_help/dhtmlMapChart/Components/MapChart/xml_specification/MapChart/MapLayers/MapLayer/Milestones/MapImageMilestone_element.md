# Элемент MapImageMilestone

Элемент MapImageMilestone
-


# Элемент MapImageMilestone


Элемент MapImageMilestone содержит
 описание значка, представляющего собой изображение. Значок-изображение
 является экземпляром класса [MapImageMilestone](../../../../../../../Classes/Map/MapImageMilestone/MapImageMilestone.htm).


Включает в себя элемент [Animation](Animation_element.htm).


[Пример размещения значков](Milestones_exmpl.htm)


## Атрибуты элемента MapImageMilestone


		 Наименование атрибута
		 Тип
		 Описание


		 Shape
		 [MapShape](../../../../../../../Classes/Map/MapShape/MapShape.htm)
		 Идентификатор формы, к которой привязывается значок в формате
		 StartShape: ”{ShapeId}”.
		 Если атрибут не указан, значок привязывается ко всей карте. В
		 данном контексте под привязкой понимается связь с элементом, относительно
		 которого будут рассчитываться координаты.


		 Offset
		 [Point](dhtmlCommon.chm::/Classes/PP/Point/Point.htm)
		 Абсолютное или относительное смещение относительно элемента
		 привязки.


		 OffsetType
		 [MapMilestoneOffsetType](../../../../../../../Enums/MapMilestoneOffsetType.htm)
		 Указывает абсолютное или относительное смещение содержится
		 в атрибуте Offset. Допустимые
		 значения:


			- Absolute;


			- Relative.


		 Source
		 String
		 Указывает путь к изображению.


		 Width
		 Double
		 Ширина изображения.


		 Height
		 Double
		 Высота изображения.


См. также:


[Элемент
 Milestones](Milestones_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
