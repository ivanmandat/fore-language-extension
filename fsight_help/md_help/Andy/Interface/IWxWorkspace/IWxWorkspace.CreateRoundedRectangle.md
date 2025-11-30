# IWxWorkspace.CreateRoundedRectangle

IWxWorkspace.CreateRoundedRectangle
-


# IWxWorkspace.CreateRoundedRectangle


## Синтаксис


CreateRoundedRectangle: [IWxRoundedRectangle](../IWxRoundedRectangle/IWxRoundedRectangle.htm);


## Описание


Метод CreateRoundedRectangle
 создает прямоугольник со скругленными углами.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    Rec: IWxRoundedRectangle;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Получаем фигуру

	    Rec := wsp.CreateRoundedRectangle;

	    Rec.Id := "Rectangle1";

	    Rec.PinPosition := New GxPointF.Create(12.3, -2);

	    Rec.RoundingOffset := 9;

	    Rec.Text := "Фигура";

	    //Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера будет создан прямоугольник со скругленными
 углами.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
