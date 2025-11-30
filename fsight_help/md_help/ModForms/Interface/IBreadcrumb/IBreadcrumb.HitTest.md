# IBreadcrumb.HitTest

IBreadcrumb.HitTest
-


# IBreadcrumb.HitTest


## Синтаксис


HitTest(Point: [IPoint](../IPoint/IPoint.htm)):
 Integer;


## Параметры


Point. Точка в области компонента, в которой нужно
 получить элемент компонента.


## Описание


Метод HitTest позволяет получить
 элемент компонента в заданной точке.


## Комментарии


Метод возвращает номер элемента, находящегося в точке Point,
 либо значение «-1», если в точке Point
 отсутствует элемент компонента.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента Breadcrumb и компонента PopupMenu. В Breadcrumb созданы
 несколько элементов. Компонент PopupMenu установлен в качестве контекстного
 меню для компонента Breadcrumb.


	Sub PopupMenu1OnPopup(Sender: Object; Args: IPopupMenuEventArgs);

	Var

	    Br: IBreadcrumb;

	    Elem: Integer;

	Begin

	    If Args.Control Is Breadcrumb Then

	        Br := Args.Control As IBreadcrumb;

	        Elem := Br.HitTest(Args.Point);

	        If Elem <> -1 Then

	            Debug.WriteLine(Br.Items.Item(Elem).Text);

	        End If;

	    End If;

	End Sub PopupMenu1OnPopup;


После выполнения примера, если в области какого-либо элемента компонента
 Breadcrumb было вызвано контекстное меню, то в консоль среды разработки
 будет выведено наименование данного элемента.


См.
 также:


[IBreadcrumb](IBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
