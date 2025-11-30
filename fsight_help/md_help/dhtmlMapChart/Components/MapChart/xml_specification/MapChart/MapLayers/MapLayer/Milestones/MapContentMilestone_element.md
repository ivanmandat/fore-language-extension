# Элемент MapContentMilestone

Элемент MapContentMilestone
-


# Элемент MapContentMilestone


Элемент <MapContentMilestone>
 содержит описание значка с произвольным содержимым.


Включает в себя элементы:


	- [Animation](Animation_element.htm);


	- Content - содержит описание
	 компонента, используемого в качестве значка.


Примечание.
 На данный момент значок с произвольным содержимым не реализован.


## Атрибуты Элемент MapContentMilestone


		 Наименование атрибута
		 Тип
		 Описание


		 Shape
		 [MapShape](../../../../../../../Classes/Map/MapShape/MapShape.htm)
		 Идентификатор формы, к которой привязывается значок в формате
		 StartShape: {ShapeId}”.
		 Если атрибут не указан, значок привязывается ко всей карте. Под
		 привязкой понимается связь с элементом, относительно которого
		 будут рассчитываться координаты.


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


См. также:


[Элемент
 Milestones](Milestones_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
