# IWxStyle.ShadowBrushBackColor

IWxStyle.ShadowBrushBackColor
-


# IWxStyle.ShadowBrushBackColor


## Синтаксис


ShadowBrushBackColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство ShadowBrushBackColor
 определяет цвет узора тени.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором IWSTYLE, содержащего фигуру.


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

	    Style := Shape.Style;

	    Style.ShadowBrushForeColor := GxColor.FromName("Red");

	    Style.ShadowBrushForeTransparent := 50;

	    Style.ShadowBrushBackColor := GxColor.FromName("Blue");

	    Style.ShadowBrushBackTransparent := 10;

	    Style.ShadowBrushPattern := GxBrushPattern.Diagonals;

	    Wsp.EndUpdate;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для объекта будет отображена тень с заданными
 настройками.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
