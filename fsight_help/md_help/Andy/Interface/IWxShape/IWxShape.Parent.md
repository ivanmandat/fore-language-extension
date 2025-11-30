# IWxShape.Parent

IWxShape.Parent
-


# IWxShape.Parent


## Синтаксис


		Parent: [IWxContainer](../IWxContainer/IWxContainer.htm);


## Описание


Свойство Parent возвращает родительский
 контейнер фигуры. Дочерние объекты могут быть только у группы объектов.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего группу объектов, один из которых
 с идентификатором «Shape1».


Добавьте ссылки на системные сборки: Andy, Metabase.


					Sub UserProc;

		Var

		    mb: Imetabase;

		    wsp: IWxWorkspace;

		    Shape: IWxShape;

		    Group: IWxGroup;

		Begin

		    // Получаем рабочее пространство для редактирования

		    mb := MetabaseClass.Active;

		    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

		    // Получаем фигуру

		    wsp.BeginUpdate;

		    Shape := wsp.Shapes.FindById("Shape1");

		    Group := Shape.Parent As IWxGroup;

		    Group.AllowObjectSelection := False;

		    wsp.EndUpdate;

		    // Сохраняем изменения

		    (wsp As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера для группы будет отключена возможность выделения
 объектов внутри группы. Объект с идентификатором «Shape1» является членом
 группы.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
