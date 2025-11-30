# IWxWorkspace.CreateCurveLink

IWxWorkspace.CreateCurveLink
-


# IWxWorkspace.CreateCurveLink


## Синтаксис


CreateCurveLink: [IwxCurveLink](../IWxCurveLink/IWxCurveLink.htm);


## Описание


Метод CreateCurveLink создает
 скругленную линию на рабочем пространстве.


## Комментарии


Для того, чтобы созданная линия стала скругленной необходимо вручную
 соединить ее с двумя точками фигуры.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего несколько фигур.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	    CLink: IWxCurveLink;

	    First, Last: IGxPointF;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Получаем фигуру и координаты двух точек

	    Shape := wsp.Shapes.Item(0);

	    If Shape.ConnectionPointsCount >= 2 Then

	    First := Shape.ConnectionPoints(0);

	    Last := Shape.ConnectionPoints(1);

	    // Создаем скругленную линию, которая соединяет первую

	    // и вторую точку

	    CLink := wsp.CreateCurveLink;

	    CLink.FirstPoint := First;

	    CLink.LastPoint := Last;

	    End If;

	    //Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


В результате выполнения примера создается прямая линия от первой соединительной
 точки объекта до второй. Для того, чтобы линия стала скругленной необходимо
 вручную соединить линию с фигурой.


См. также:


[IWxShape](../IWxShape/IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
