# ITabView.HitTest

ITabView.HitTest
-


# ITabView.HitTest


## Синтаксис


HitTest(X: Integer; Y: Integer): [TabViewArea](../../Enums/TabViewArea.htm);


## Параметры


X. Координата Х;


Y. Координата Y.


## Описание


Метод HitTest возвращает область
 таблицы, содержащую точку, координаты которой передаются в качестве входных
 параметров X и Y.


## Комментарии


Координаты X и Y можно получить любыми событиями таблицы, аргумент которого
 содержит свойство pPoint.


## Пример


	Sub TabSheetBox1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	Var

	    s: String;

	Begin

	    s := UiTabSheet1.TabSheet.View.HitTest(Args.pPoint.X, Args.pPoint.y).ToString;

	End Sub TabSheetBox1OnMouseDown;


После выполнения примера в переменной «s» будет содержаться числовое
 значение области, в которой была нажата кнопка мыши.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
