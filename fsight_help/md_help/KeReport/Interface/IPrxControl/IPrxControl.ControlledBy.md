# IPrxControl.ControlledBy

IPrxControl.ControlledBy
-


# IPrxControl.ControlledBy


## Синтаксис


ControlledBy: [IMetabaseObjectParam](KeSom.chm::/Interface/IMetabaseObjectParam/IMetabaseObjectParam.htm);


## Описание


Свойство ControlledBy определяет
 управляющий параметр регламентного отчета.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT. В отчёте добавлены элементы управления
 и параметры.


Добавьте ссылки на системные сборки: Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Contrls: IPrxControls;

	    Contrl: IPrxControl;

	Begin

	    // Получаем репозиторий

	    Mb := MetabaseClass.Active;

	    // Получаем отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получаем коллекцию элементов управления отчёта

	    Contrls := Report.Controls;

	    // Получаем элемент управления

	    Contrl := Contrls.Item(0);

	    // Задаем управляющий параметр

	    Contrl.ControlledBy := Report.MetabaseObject.Params.Item(0);

	    // Сохраняем отчёт

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для первого элемента управления будет
 задан первый параметр в качестве управляющего.


См. также:


[IPrxControl](IPrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
