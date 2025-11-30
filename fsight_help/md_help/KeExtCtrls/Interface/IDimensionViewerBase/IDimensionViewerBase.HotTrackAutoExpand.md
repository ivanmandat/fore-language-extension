# IDimensionViewerBase.HotTrackAutoExpand

IDimensionViewerBase.HotTrackAutoExpand
-


# IDimensionViewerBase.HotTrackAutoExpand


## Синтаксис


HotTrackAutoExpand: Boolean;


## Описание


Свойство HotTrackAutoExpand
 определяет, будет ли развернута иерархия дочерних элементов при щелчке
 по выделенному элементу.


## Комментарии


Допустимые значения:


	- True. При щелчке по
	 выделенному элементу будет свернута/развернута иерархия его дочерних
	 элементов;


	- False. По умолчанию.
	 Изменение состояния иерархии дочерних элементов не производится.


При щелчке по выделенной вершине происходит изменение ее отметки в соответствии
 с настройками, установленными в свойстве [IDimensionViewerBase.SelectionMode](IDimensionViewerBase.SelectionMode.htm).


Свойство актуально, если свойству [IDimensionViewerBase.HotTrack](IDimensionViewerBase.HotTrack.htm)
 установлено значение True.


Примечание.
 Если свойству HotTrackAutoExpand
 установлено значение True, то
 изменение состояния дерева происходит после щелчка по элементу с небольшой
 задержкой. Изменение состояния дерева при двойном щелчке по элементу будет
 недоступно.


См. также:


[IDimensionViewerBase](IDimensionViewerBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
