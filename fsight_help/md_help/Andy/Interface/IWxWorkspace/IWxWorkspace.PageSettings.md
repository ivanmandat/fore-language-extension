# IWxWorkspace.PageSettings

IWxWorkspace.PageSettings
-


# IWxWorkspace.PageSettings


## Синтаксис


PageSettings: [IWxPageSettings](../IWxPageSettings/IWxPageSettings.htm);


## Описание


Свойство PageSettings определяет
 параметры страницы для рабочего пространства.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочего
 пространства с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Userproc;

	Var

	    mb: IMetabase;

	    wsp: IWxWorkspace;

	    PS: IWxPageSettings;

	Begin

	    // Получаем рабочее пространство

	    mb := MetabaseClass.Active;

	    wsp := mb.ItemById("WSP").Edit As IWxWorkspace;

	    PS := wsp.PageSettings;

	    PS.FitToPages := False;

	    PS.Scale := 0.5;

	    //Сохраняем изменения

	    (Wsp As IMetabaseObject).Save;

	End Sub Userproc;


После выполнения примера будут изменены параметры страницы: при печати
 будет использоваться масштаб 50% от оригинального размера рабочего пространства.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
