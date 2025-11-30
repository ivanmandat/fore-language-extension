# IWxStyle.TextFontBrushTransparent

IWxStyle.TextFontBrushTransparent
-


# IWxStyle.TextFontBrushTransparent


## Синтаксис


TextFontBrushTransparent: Integer;


## Описание


Свойство TextFontBrushTransparent
 определяет степень прозрачности шрифта.


## Комментарии


Допустимые значения берутся из диапазона [0,100]. Значение «100» соответствует
 полной прозрачности, значение «0» соответствует полной непрозрачности.


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

	    Shape.Text := "Текст";

	    Style := Shape.Style;

	    Style.TextFontSize := 14;

	    Style.TextFontFamilyName := "Arial Black";

	    Style.TextFontBrushColor := GxColor.FromName("Red");

	    Style.TextFontBrushTransparent := 50;

	    Wsp.EndUpdate;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера объект будет содержать текст заданного размера,
 типа, цвета и заданной прозрачности.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
