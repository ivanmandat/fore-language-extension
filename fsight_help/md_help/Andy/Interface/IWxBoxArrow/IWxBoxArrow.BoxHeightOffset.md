# IWxBoxArrow.BoxHeightOffset

IWxBoxArrow.BoxHeightOffset
-


# IWxBoxArrow.BoxHeightOffset


## Синтаксис


BoxHeightOffset: Double;


## Описание


Свойство BoxHeightOffset определяет
 высоту выноски.


![](BoxHeightOffset.gif)


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP», содержащего выноску со стрелкой.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ws: IWxWorkspace;

	    BArrow: IWxBoxArrow;

	    Shapes: IWxShapes;

	Begin

	    // Получаем рабочее пространство для редактирования

	    mb := MetabaseClass.Active;

	    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

	    Shapes := ws.Shapes;

	    BArrow := ws.Shapes.Item(0) As IWxBoxArrow;

	    BArrow.BoxHeightOffset := 5;

	    BArrow.BoxWidthOffset := 10;

	    (ws As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут изменены размеры выноски.


См. также:


[IWxBoxArrow](IWxBoxArrow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
