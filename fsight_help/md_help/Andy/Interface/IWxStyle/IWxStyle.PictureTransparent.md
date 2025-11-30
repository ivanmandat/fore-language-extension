# IWxStyle.PictureTransparent

IWxStyle.PictureTransparent
-


# IWxStyle.PictureTransparent


## Синтаксис


PictureTransparent: Integer;


## Описание


Свойство PictureTransparent
 определяет прозрачность изображения в процентном соотношении.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «IWSTYLE», содержащего фигуру. Также необходимо наличие
 изображения «ConnectedCPs.gif».


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    Shape: IWxShape;

	    style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Shape := ws.Shapes.Item(0);

	    Shape.Picture := GxImage.FromFile("C:\ConnectedCPs.gif");

	    Style := Shape.Style;

	    Style.PictureTransparent := 50;

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет задана прозрачность изображения.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
