# ParallelCoordinates.AxisSelectionEnabled

ParallelCoordinates.AxisSelectionEnabled
-


# ParallelCoordinates.AxisSelectionEnabled


## Синтаксис


AxisSelectionEnabled: Boolean;


## Описание


Свойство AxisSelectionEnabled
 определяет, можно ли выделять оси диаграммы.


## Комментарии


Допустимые значения:


	- true.
	 Выделение осей разрешено (по умолчанию);


	- false.
	 Выделение осей невозможно.


Значение свойства устанавливается из JSON и с помощью метода setAxisSelectionEnabled,
 а возвращается с помощью метода getAxisSelectionEnabled.


Перед заданием значения данного свойства необходимо также установить
 значение для свойства [DataVisualizer.Visuals](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Visuals.htm).
 Это свойство определяет цвета, в которые будут окрашены линии после выделения
 оси диаграммы. Получить настройки сопоставления данных цветам линии можно
 с помощью метода [ParallelCoordinates.getColorVisual](ParallelCoordinates.getColorVisual.htm).


## Пример


Пример использования свойства приведен в описании свойства [ParallelCoordinates.SelectedAxis](ParallelCoordinates.SelectedAxis.htm).


См. также:


[ParallelCoordinates](ParallelCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
