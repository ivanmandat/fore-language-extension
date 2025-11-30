# ITabView.HitTestObject

ITabView.HitTestObject
-


# ITabView.HitTestObject


## Синтаксис


HitTestObject(X: Integer; Y: Integer): [ITabObject](../ITabObject/ITabObject.htm);


## Параметры


X. Координата Х;


Y. Координата Y.


## Описание


Метод HitTestObject возвращает
 объект таблицы, содержащий точку, координаты которой передаются в качестве
 входных параметров X и Y. Данные координаты можно получить любыми событиями
 таблицы, аргумент которого, содержит свойство pPoint.


## Пример


	Sub TabSheetBox1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	Var

	    Obj: ITabObject;

	    s: String;

	Begin

	    Obj := UiTabSheet1.TabSheet.View.HitTestObject(Args.pPoint.X, Args.pPoint.y);

	    If Obj <> Null Then

	        s := Obj.Id;

	    Else

	        s := "No_Object";

	    End If;

	End Sub TabSheetBox1OnMouseDown;


После выполнения примера в переменной «s» будет содержаться идентификатор
 объекта таблицы, если на нем была нажата кнопка мыши, иначе "No_Object".


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
