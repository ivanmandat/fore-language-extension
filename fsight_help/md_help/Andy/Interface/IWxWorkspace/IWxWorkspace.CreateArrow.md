# IWxWorkspace.CreateArrow

IWxWorkspace.CreateArrow
-


# IWxWorkspace.CreateArrow


## Синтаксис


		CreateArrow: [IWxArrow](../IWxArrow/IWxArrow.htm);


## Описание


Метод CreateArrow создает фигурную
 стрелку.


## Пример


Для выполнения примера в репозитории предполагается наличие [рабочего пространства](UiWsp.chm::/1_intro/UiWsp_Intro.htm)
 с идентификатором «WSP».


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ws: IWxWorkspace;

		    Arrow: IWxArrow;

		Begin

		    // Получаем рабочее пространство для редактирования

		    mb := MetabaseClass.Active;

		    ws := mb.ItemById("WSP").Edit As IWxWorkspace;

		    // Соединяем вторую фигуру с первой

		    Arrow := ws.CreateArrow;

		    Arrow.FirstPoint := New GxPointF.Create(1, 2);

		    Arrow.LastPoint := New GxPointF.Create(3, 19);

		    Arrow.Angle := 10;

		    Arrow.HeightOffset := 5;

		    Arrow.WidthOffset := 12;

		    (ws As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера будет создана фигурная стрелка.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
