# IWxWorkspace.CreateStraightLink

IWxWorkspace.CreateStraightLink
-


# IWxWorkspace.CreateStraightLink


## Синтаксис


CreateStraightLink: [IWxStraightLink](../IWxStraightLink/IWxStraightLink.htm);


## Описание


Метод CreateStraightLink создает
 соединительную линию. Соединительная линия всегда располагается строго
 вертикально или горизонтально.


Примечание.
 Если соединительная линия устанавливает связь между двумя объектами, то
 для каждого объекта будет создана новая точка соединения, которая будет
 использоваться данной соединительной линией.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    StrLink: IWxStraightLink;

	    Shapes: IWxShapes;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Соединяем вторую фигуру с первой

	    StrLink := ws.CreateStraightLink;

	    Shapes := ws.Shapes;

	    ws.GlueConnectionPoints(Shapes.Item(0), 2, StrLink, 0);

	    ws.GlueConnectionPoints(Shapes.Item(1), 3, StrLink, 1);

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера заданные объекты будут соединены соединительной
 линией.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
