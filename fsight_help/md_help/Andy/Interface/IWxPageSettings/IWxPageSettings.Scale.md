# IWxPageSettings.Scale

IWxPageSettings.Scale
-


# IWxPageSettings.Scale


## Синтаксис


Scale: Double;


## Описание


Свойство Scale определяет масштаб
 рабочего пространства при печати.


## Комментарии


Свойство принимает любые положительные значения. Например, значение
 «0.1» соответствует 10% от натуральной величины, а значение «4» - 400%
 от натуральной величины.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочее
 пространство с идентификатором WSP.


Добавьте ссылки на системные сборки: Andy, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Wsp: IWxWorkspace;

	    PS: IWxPageSettings;

	Begin

	    // Получим репозиторий

	    Mb := MetabaseClass.Active;

	    Wsp := Mb.ItemById("WSP").Edit As IWxWorkspace;

	    PS := Wsp.PageSettings;

	    PS.FitToPages := False;

	    PS.Scale := 0.5;

	    (Wsp As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будут изменены параметры страницы: при печати
 будет использоваться масштаб 50% от оригинального размера рабочего пространства.


См. также:


[IWxPageSettings](IWxPageSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
