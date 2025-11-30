# IWxStyle.TextFontStyleItalic

IWxStyle.TextFontStyleItalic
-


# IWxStyle.TextFontStyleItalic


## Синтаксис


TextFontStyleItalic: Boolean;


## Описание


Свойство TextFontStyleItalic
 определяет использование курсивного начертания шрифта.


## Комментарии


Если значение True, то используется
 курсивное начертание, при значении False
 - нет.


По умолчанию значение свойства False.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «IWSTYLE», содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    Shape: IWxShape;

	    Style: IWxStyle;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("IWSTYLE").Edit As IWxWorkspace;

	    ws.BeginUpdate;

	    Shape := ws.Shapes.Item(0);

	    Shape.Text := "Текст";

	    Style := Shape.Style;

	    Style.TextFontSize := 12;

	    Style.TextFontBrushColor := GxColor.FromName("Red");

	    Style.TextFontStyleItalic:= True;

	    ws.EndUpdate;

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера объект будет содержать текст заданного цвета,
 размера и будет курсивного начертания.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
