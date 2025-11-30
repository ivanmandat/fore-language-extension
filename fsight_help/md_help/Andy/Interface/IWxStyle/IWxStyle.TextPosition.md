# IWxStyle.TextPosition

IWxStyle.TextPosition
-


# IWxStyle.TextPosition


## Синтаксис


TextPosition: [WxTextPosition](../../Enums/WxTextPosition.htm);


## Описание


Свойство TextPosition определяет
 расположение текста относительно картинки, используемой в качестве заливки
 объекта.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего фигуру. Также необходимо
 наличие изображения ConnectedCPs.gif.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    Shape: IWxShape;

	    Style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    Wsp.BeginUpdate;

	    Shape := Wsp.Shapes.Item(0);

	    Shape.Picture := New GxImage.CreateFromFile("C:\ConnectedCPs.gif");

	    Shape.Text := "Текст";

	    Style := Shape.Style;

	    Style.TextFontBrushColor := GxColor.FromName("Red");

	    Style.TextPosition := WxTextPosition.Right;

	    Wsp.EndUpdate;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в качестве заливки для фигуры будет использоваться
 изображение и фигура будет содержать текст, выровненный справа относительно
 картинки.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
