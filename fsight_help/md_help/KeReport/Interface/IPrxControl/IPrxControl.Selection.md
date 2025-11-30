# IPrxControl.Selection

IPrxControl.Selection
-


# IPrxControl.Selection


## Синтаксис


		Selection: [IDimSelection](kedims.chm::/interface/idimselection/idimselection.htm);


## Описание


Свойство Selection возвращает
 отметку элемента управления.


## Комментарии


Свойство актуально для элементов управления типа [DimCombo](ForeSys.chm::/Interface/IBindingManager/Control/UI_DimCombo.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета с идентификатором REPORT. В отчёт добавлен минимум один элемент
 управления.


Добавьте ссылки на системные сборки: Dimensions, Metabase, Report.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Report: IPrxReport;

		    Contrls: IPrxControls;

		    Contrl: IPrxControl;

		    Selection: IDimSelection;

		Begin

		    // Получаем репозиторий

		    Mb := MetabaseClass.Active;

		    // Получаем отчёт

		    Report := MB.ItemById("REPORT").Bind As IPrxReport;

		    // Получаем коллекцию элементов управления отчёта

		    Contrls := Report.Controls;

		    // Получаем элемент управления

		    Contrl := Contrls.Item(0);

		    // Получаем отметку элемента управления

		    Selection := Contrl.Selection;

		    Debug.WriteLine(Selection.ToString);

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены элементы,
 включённые в отметку элемента управления.


См. также:


[IPrxControl](IPrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
