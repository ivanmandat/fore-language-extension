# IWxLink.PointCount

IWxLink.PointCount
-


# IWxLink.PointCount


## Синтаксис


PointCount: Integer;


## Описание


Свойство PointCount возвращает
 количество точек линии.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего линию.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    Link: IWxLink;

	    Shapes: IWxShapes;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

	    Shapes := ws.Shapes;

	    Link := ws.Shapes.Item(0) As IWxLink;

	    Link.RemovePoint(Link.PointCount - 2);

	    (ws As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера будет удалена предпоследняя точка линии.


См. также:


[IWxLink](IWxLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
