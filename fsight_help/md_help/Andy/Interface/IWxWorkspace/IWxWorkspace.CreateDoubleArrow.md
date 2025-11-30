# IWxWorkspace.CreateDoubleArrow

IWxWorkspace.CreateDoubleArrow
-


# IWxWorkspace.CreateDoubleArrow


## Синтаксис


CreateDoubleArrow: [IWxDoubleArrow](../IWxDoubleArrow/IWxDoubleArrow.htm);


## Описание


Метод CreateDoubleArrow создает
 двойную стрелку.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    First, Last: IGxPointF;

	    DArrow: IWxDoubleArrow;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    // Получаем фигуру

	    DArrow := wsp.CreateDoubleArrow;

	    DArrow.FirstPoint := New GxPointF.Create(10, 6);

	    DArrow.LastPoint := New GxPointF.Create(3, 20);

	    DArrow.HeightOffset := 5;

	    DArrow.WidthOffset := 12;

	    //Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера будет создана двойная стрелка.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
