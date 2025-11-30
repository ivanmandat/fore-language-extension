# IWxGroup.AllowObjectSelection

IWxGroup.AllowObjectSelection
-


# IWxGroup.AllowObjectSelection


## Синтаксис


AllowObjectSelection: Boolean;


## Описание


Свойство AllowObjectSelection
 определяет возможность выделения объектов внутри группы. Если значение
 свойства True, то выделение объектов
 в группе возможно, при значении False
 - нет.


По умолчанию свойство имеет значение True.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего группу объектов с идентификатором
 «Shape3».


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    Group: IWxGroup;

	    Shapes: IWxShapes;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

	    Shapes := ws.Shapes;

	    ws.BeginUpdate;

	    Group := ws.Shapes.FindById("Shape3") As IWxGroup;

	    Group.AllowObjectSelection := False;

	    ws.EndUpdate;

	    (ws As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера выделение объектов внутри группы будет отключено.


См. также:


[IWxGroup](IWxGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
