# IWxWorkspace.DeglueConnectionPoints

IWxWorkspace.DeglueConnectionPoints
-


# IWxWorkspace.DeglueConnectionPoints


## Синтаксис


DeglueConnectionPoints(Shape1: [IWxShape](../IWxShape/IWxShape.htm);
 Index1: Integer; Shape2:[IWxShape](../IWxShape/IWxShape.htm);
 Index2: Integer;);


## Параметры


Shape1. Фигура;


Index1. Индекс точки соединения
 фигуры Shape1;


Shape2. Фигура,
 которая является связью. В качестве такой фигуры могут быть использованы:
 линии ([IWxLink](../IWxLink/IWxLink.htm)),
 фигурные стрелки ([IWxArrow](../IWxArrow/IWxArrow.htm)),
 фигурные двойные стрелки ([IWxDoubleArrow](../IWxDoubleArrow/IWxDoubleArrow.htm));


Index2. Индекс
 точки соединения фигуры Shape2
 .


## Описание


Метод DeglueConnectionPoints
 разъединяет точки двух объектов.


## Комментарии


Если связь была задана с использованием соединительных линии ([IWxStraightLink](../IWxStraightLink/IWxStraightLink.htm)) - для разъединения
 следует использовать метод [IWxWorkspace.DeglueShapes](IWxWorkspace.DeglueShapes.htm).


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

	    Shapes := wsp.Shapes;

	    Link := Shapes.Item(2) As IWxLink;

	    wsp.DeglueConnectionPoints(Shapes.Item(0), 2, Link, 0);

	    wsp.DeglueConnectionPoints(Shapes.Item(1), 3, Link, 1);

	    //Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера точки соединения линии будут отсоединены от
 точек соединения фигур.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
