# IGxRect.Contains

IGxRect.Contains
-


# IGxRect.Contains


## Синтаксис


Contains(X: Integer; Y: Integer): Boolean;


## Параметры


X. Координата Х точки;


Y. Координата Y точки.


## Описание


Метод Contains проверяет наличие
 точки с указанными координатами в текущем прямоугольнике.


## Комментарии


Метод возвращает значение True,
 если точка с координатами X и Y содержится в области целочисленного прямоугольника
 и False, ели точка отсутствует.


## Пример


	Sub UserProc;

	Var

	    Rect: IGxRect;

	Begin

	    Rect := New GxRect.Create(0, 0, 10, 10);

	    Debug.WriteLine(Rect.Contains(Math.RandBetweenI(-10, 20), Math.RandBetweenI(-10, 20)));

	End Sub UserProc;


При выполнение примера будет создан прямоугольник. В консоль среды разработки
 будет выведен признак наличия точки со случайными координатами в прямоугольнике.


См. также:


[IGxRect](IGxRect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
