# ITabView.HitTestRegion

ITabView.HitTestRegion
-


# ITabView.HitTestRegion


## Синтаксис


HitTestRegion(X: Integer; Y: Integer): [ITabRegion](../ITabRegion/ITabRegion.htm);


## Параметры


X. Координата Х;


Y. Координата Y.


## Описание


Метод HitTestRegion возвращает
 регион таблицы, содержащий точку, координаты которой передаются в качестве
 входных параметров X и Y. Данные координаты можно получить любым событием
 таблицы, аргумент которого содержит свойство pPoint.


## Пример


	Sub TabSheetBox1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	Var

	    Reg: ITabRegion;

	    s: String;

	Begin

	    Reg := UiTabSheet1.TabSheet.View.HitTestRegion(Args.pPoint.X, Args.pPoint.y);

	    If Reg <> Null Then

	        s := Reg.Range.Address;

	    Else

	        s := "No_Object";

	    End If;

	End Sub TabSheetBox1OnMouseDown;


После выполнения примера в переменной «s»
 будет содержаться адрес региона таблицы, если на нем была нажата кнопка
 мыши, иначе «No_Object».


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
