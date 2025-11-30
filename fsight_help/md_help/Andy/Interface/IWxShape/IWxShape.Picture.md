# IWxShape.Picture

IWxShape.Picture
-


# IWxShape.Picture


## Синтаксис


Picture: [IGxImage](ModDrawing.chm::/Interface/IGxImage/IGxImage.htm);


## Описание


Свойство Picture определяет
 изображение, которое будет использоваться в качестве заливки для фигуры.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего фигуру. Также необходимо
 наличие изображения ConnectedCPs.gif.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    Mb: Imetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    Wsp.BeginUpdate;

	    Shape := Wsp.Shapes.Item(0);

	    Shape.Picture := New GxImage.CreateFromFile("C:\ConnectedCPs.gif");

	    Shape.Style.PictureStretch := True;

	    Shape.TransparentColor := GxColor.FromName("Red");

	    Wsp.EndUpdate;

	    // Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в качестве заливки для фигуры будет использоваться
 изображение, размер которого будет растягиваться при изменении размера
 фигуры. На изображении прозрачным будет красный цвет.


См. также:


[IWxShape](IWxShape.htm)
 | [IWxShape.TransparentColor](IWxShape.TransparentColor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
