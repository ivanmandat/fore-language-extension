# IGxPageSettings.Assign

IGxPageSettings.Assign
-


# IGxPageSettings.Assign


## Синтаксис


Assign(Source: [IGxPageSettings](IGxPageSettings.htm));


## Параметры


Source.
 Источник параметров страницы.


## Описание


Метод Assign устанавливает параметры
 страницы в соответствии с параметрами, передаваемыми посредством входного
 параметра.


## Пример


Для выполнения примера в репозитории предполагается наличие двух регламентных
 отчётов с идентификаторами REPORT и REPORT1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report, Report1: IPrxReport;

	    PageSet, PageSet1: IGxPageSettings;

	Begin

	    MB := MetabaseClass.Active;

	    Report := MB.ItemById("Report").Edit As IPrxReport;

	    Report1 := MB.ItemById("Report1").Bind As IPrxReport;

	    PageSet := Report.ActiveSheet.PageSettings;

	    PageSet1 := Report1.ActiveSheet.PageSettings;

	    PageSet.Assign(PageSet1);

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера для активного листа первого регламентного отчёта
 будут установлены параметры страниц в соответствии с настройками активного
 листа второго регламентного отчёта.


См. также:


[IGxPageSettings](IGxPageSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
