# IWxWorkspace.AutoLinkShapes

IWxWorkspace.AutoLinkShapes
-


# IWxWorkspace.AutoLinkShapes


## Синтаксис


		AutoLinkShapes(Shape1: [IWxShape](../IWxShape/IWxShape.htm);
		 Shape2: [IWxShape](../IWxShape/IWxShape.htm)): [IWxLink](../IWxLink/IWxLink.htm);


## Параметры


Shape1. Первая фигура рабочего
 пространства;


Shape2. Фигура рабочего пространства,
 которую необходимо соединить с первой фигурой.


## Описание


Метод AutoLinkShapes соединяет
 две фигуры с помощью линии.


## Комментарии


Выбор
 точек соединения на обеих фигурах происходит автоматически.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором WSP, содержащего не менее двух фигур.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ws: IWxWorkspace;

		    Shapes: IWxShapes;

		    Link: IWxLink;

		Begin

		    // Получаем рабочее пространство для редактирования

		    mb := MetabaseClass.Active;

		    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

		    Shapes := ws.Shapes;

		    // Соединяем вторую фигуру с первой

		    Link := ws.AutoLinkShapes(Shapes.Item(0), Shapes.Item(1));

		    (ws As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера между заданными фигурами будет создана связь.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
