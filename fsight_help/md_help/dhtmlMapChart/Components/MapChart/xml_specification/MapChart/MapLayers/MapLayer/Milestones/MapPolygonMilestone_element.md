# Элемент MapPolygonMilestone

Элемент MapPolygonMilestone
-


# Элемент MapPolygonMilestone


Элемент MapPolygonMilestone
 содержит описание значка, представляющего собой многоугольник.


Включает в себя элемент [Animation](Animation_element.htm).


## Атрибуты элемента MapPolygonMilestone


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


		 Points
		 [List](dhtmlList.chm::/Classes/List/List.htm)
		 Коллекция точек, описывающих многоугольник в виде "Points”: "10,12 15,15 10,19".


		Между
		 запятыми не должно быть пробелов.


См. также:


[Элемент
 Milestones](Milestones_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
