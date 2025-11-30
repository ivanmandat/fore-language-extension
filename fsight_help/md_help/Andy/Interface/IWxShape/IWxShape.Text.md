# IWxShape.Text

IWxShape.Text
-


# IWxShape.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст,
 который будет содержать фигура.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP, содержащего фигуру.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    Shape: IWxShape;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Получаем фигуру

	    wsp.BeginUpdate;

	    Shape := wsp.Shapes.Item(0);

	    Shape.Text := Shape.Type.ToString;

	    Shape.Style.TextFontSize := 12;

	    Shape.Style.TextFontBrushColor := GxColor.FromName("Red");

	    wsp.EndUpdate;

	    // Сохраняем изменения

	    (wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера фигура будет содержать текст заданного цвета
 и размера. Текст фигуры будет определен с помощью свойства [IWxShape.Type](IWxShape.Type.htm),
 возвращающего тип фигуры объекта.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
