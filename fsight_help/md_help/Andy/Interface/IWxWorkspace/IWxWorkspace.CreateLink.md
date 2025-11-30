# IWxWorkspace.CreateLink

IWxWorkspace.CreateLink
-


# IWxWorkspace.CreateLink


## Синтаксис


CreateLink: [IWxLink](../IWxLink/IWxLink.htm);


## Описание


Метод CreateLink создает ломаную
 линию.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    Link: IWxLink;

	    Shapes: IWxShapes;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Получаем фигуру

	    Link := wsp.CreateLink;

	    Shapes := wsp.Shapes;

	    Link.FirstPoint := Shapes.Item(0).ConnectionPoints(0);

	    Link.LastPoint := Shapes.Item(1).ConnectionPoints(0);

	    //Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера будет создана связь между двумя объектами.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
