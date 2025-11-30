# IWxShapes.FindById

IWxShapes.FindById
-


# IWxShapes.FindById


## Синтаксис


FindById(Id: String): [IWxShape](../IWxShape/IWxShape.htm);


## Параметры


Id. Идентификатор фигуры.


## Описание


Метод FindById осуществляет
 поиск фигуры по идентификатору.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего группу фигур, одна из которых с идентификатором
 «Shape1».


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    Shapes: IWxShapes;

	    Shape: IWxShape;

	    Group: IWxGroup;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    wsp.BeginUpdate;

	    Shapes := wsp.Shapes;

	    Shape := Shapes.FindById("Shape1");

	    Group := Shape.Parent As IWxGroup;

	    Group.AllowObjectSelection := False;

	    wsp.EndUpdate;

	    (wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для группы будет отключена возможность выделения
 объектов внутри группы. Объект с идентификатором «Shape1» является членом
 группы.


См. также:


[IWxShapes](IWxShapes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
