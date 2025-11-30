# IWxWorkspace.GlueConnectionPoints

IWxWorkspace.GlueConnectionPoints
-


# IWxWorkspace.GlueConnectionPoints


## Синтаксис


GlueConnectionPoints(Shape1: [IWxShape](../IWxShape/IWxShape.htm);
 Index1: Integer; Shape2: [IWxShape](../IWxShape/IWxShape.htm);
 Index2: Integer;);


## Параметры


Shape1. Фигура;


Index1. Индекс точки соединения
 фигуры Shape1;


Shape2. Фигура,
 которая будет являться связью. В качестве такой фигуры могут быть использованы:
 линии ([IWxLink](../IWxLink/IWxLink.htm)),
 соединительные линии ([IWxStraightLink](../IWxStraightLink/IWxStraightLink.htm)),
 фигурные стрелки([IWxArrow](../IWxArrow/IWxArrow.htm)),
 фигурные двойные стрелки ([IWxDoubleArrow](../IWxDoubleArrow/IWxDoubleArrow.htm));


Index2. Индекс
 точки соединения фигуры Shape2.


## Описание


Метод GlueConnectionPoints соединяет
 точки двух объектов.


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
