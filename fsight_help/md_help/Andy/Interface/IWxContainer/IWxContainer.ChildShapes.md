# IWxContainer.ChildShapes

IWxContainer.ChildShapes
-


# IWxContainer.ChildShapes


## Синтаксис


ChildShapes: [IWxShape](../IWxShape/IWxShape.htm);


## Описание


Свойство ChildShapes возвращает
 коллекцию фигур, которые являются непосредственными дочерними объектами.


## Комментарии


Дочерние объекты могут быть только у группы объектов или у самого рабочего
 пространства.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего группу объектов с идентификатором
 «Shape3».


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    Group: IWxGroup;

	    Shapes: IWxShapes;

	    Shape: IWxShape;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

	    Shapes := ws.Shapes;

	    ws.BeginUpdate;

	    Group := ws.Shapes.FindById("Shape3") As IWxGroup;

	    Shape := Group.ChildShapes.Item(0);

	    Shape.Style.BackgroundBrushForeColor := GxColor.FromName("Red");

	    ws.EndUpdate;

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет изменен фон одного объекта, входящего
 в группу.


См. также:


[IWxContainer](IWxContainer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
