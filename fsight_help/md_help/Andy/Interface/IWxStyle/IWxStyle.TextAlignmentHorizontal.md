# IWxStyle.TextAlignmentHorizontal

IWxStyle.TextAlignmentHorizontal
-


# IWxStyle.TextAlignmentHorizontal


## Синтаксис


TextAlignmentHorizontal: [GxAlignment](../../Enums/GxAlignment.htm);


## Описание


Свойство TextAlignmentHorizontal
 определяет выравнивание текста по горизонтали.


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

	    Style.TextFontSize := 12;

	    Style.TextFontBrushColor := GxColor.FromName("Red");

	    Style.TextAlignmentHorizontal := GxAlignment.Far;

	    Wsp.EndUpdate;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера объект будет содержать текст заданного цвета,
 размера и выровненного по правому краю.


См. также:


[IWxStyle](IWxStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
