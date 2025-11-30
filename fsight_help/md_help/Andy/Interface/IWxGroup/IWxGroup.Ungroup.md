# IWxGroup.Ungroup

IWxGroup.Ungroup
-


# IWxGroup.Ungroup


## Синтаксис


Ungroup;


## Описание


Метод Ungroup разгруппировывает
 группу объектов.


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

	    Group.Ungroup;

	    ws.EndUpdate;

	    (ws As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера группа будет разгруппирована.


См. также:


[IWxGroup](IWxGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
