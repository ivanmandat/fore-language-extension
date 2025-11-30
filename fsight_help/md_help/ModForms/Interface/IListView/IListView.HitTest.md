# IListView.HitTest

IListView.HitTest
-


# IListView.HitTest


## Синтаксис


HitTest(Pt: [IPoint](../IPoint/IPoint.htm);
 Var Hit: [HitTestResult](../../Enums/HitTestResult.htm)): [IListViewItem](../IListViewItem/IListViewItem.htm);


## Параметры


Pt. Точка, в которой можно
 получить элемент компонента.


Hit. Параметр, содержащий дополнительную
 информацию.


## Описание


Метод HitTest является расширением
 метода [GetItemAt](IListView.GetItemAt.htm).


## Комментарии


После выполнения метода, параметр Hit
 будет содержать дополнительную информацию.


## Пример


	Sub ListView1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	Var

	    s: string;

	    Hit: HitTestResult;

	    LVI: IListViewItem;

	Begin

	    LVI := ListView1.HitTest(Args.pPoint, Hit);

	    Select Case (Hit As Integer)

	        Case 1: s := "Nowhere";

	        Case 2: s := "OnItemIcon";

	        Case 4: s := "OnItemLabel";

	        Case 8: s := "OnItemIndent";

	        Case 16: s := "OnItemButton";

	        Case 32: s := "OnItemRight";

	        Case 64: s := "OnItemStateIcon";

	        Case 256: s := "Above";

	        Case 512: s := "Below";

	        Case 2048: s := "ToLeft";

	        Case 1024: s := "ToRight";

	        Else s := "OutSide";

	    End Select;

	    WinApplication.InformationBox(s);

	End Sub ListView1OnMouseDown;


После выполнения щелчка мышью в области элементов компонента ListView1,
 появится сообщение, содержащее наименование области, в которой находится
 курсор мыши.


См. также:


[IListView](IListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
