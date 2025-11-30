# DataVisualizer.getItemsByAreaRect

DataVisualizer.getItemsByAreaRect
-


**


# DataVisualizer.getItemsByAreaRect


## Синтаксис


getItemsByAreaRect(rect_selection: PP.Rect|PP.Ui.AreaSelection, fullEntry: Boolean);


## Параметры


rect_selection. Прямоугольник или выделение в координатах относительно диаграммы;


fullEntry. Признак, определяющий, учитывать полное вхождение элементов внутри прямоугольника или также неполное. Если параметр равен значению true, то учитывается только полное вхождение элемента в прямоугольник, если false - то еще и неполное.


## Описание


Метод getItemsByAreaRect** возвращает элементы, входящие в указанную область диаграммы.


## Комментарии


Данный метод должен быть обязательно переопределён в наследнике.


## Пример


Пример использования метода приведён на странице описания свойства [DataVisualizer.AreaSelection](DataVisualizer.AreaSelection.htm).


См. также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
