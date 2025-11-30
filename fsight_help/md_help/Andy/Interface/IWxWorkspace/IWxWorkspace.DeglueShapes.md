# IWxWorkspace.DeglueShapes

IWxWorkspace.DeglueShapes
-


# IWxWorkspace.DeglueShapes


## Синтаксис


		DeglueShapes(Shape1: [IWxShape](../IWxShape/IWxShape.htm);
		 Shape2: [IWxShape](../IWxShape/IWxShape.htm));


## Параметры


Shape1. Первая фигура рабочего
 пространства;


Shape2. Вторая
 фигура рабочего пространства.


## Описание


Метод DeglueShapes разъединяет
 две фигуры.


## Комментарии


К фигурам также относятся линии. Если две фигуры соединены с помощью
 соединительной линии, то для их разъединения используйте следующий алгоритм:
 сначала отсоедините первую фигуру от соединительной линии, затем - вторую.


## Пример


Для выполнения примера предполагается наличие в репозитории рабочего
 пространства с идентификатором «WSP». На рабочем пространстве созданы
 две фигуры.


Добавьте ссылки на системные сборки: Andy, Metabase.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    wsp: IWxWorkspace;

		    Shapes: IWxShapes;

		    Link: IWxLink;

		Begin

		    // Получаем рабочее пространство

		    mb := MetabaseClass.Active;

		    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

		    Shapes := wsp.Shapes;

		    Link := wsp.AutoLinkShapes(Shapes.Item(0), Shapes.Item(1));

		    wsp.DeglueShapes(Shapes.Item(0), Link);

		    wsp.DeglueShapes(Shapes.Item(1), Link);

		    //Сохраняем изменения

		    (wsp As IMetabaseObject).Save;

		End Sub UserProc;


При выполнения примера между фигурами рабочего пространства будет создана
 связь. После этого фигуры будут разъединены, а соединительная линия останется
 на рабочем пространстве как отдельная фигура. Рабочее пространство будет
 сохранено в репозиторий.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
