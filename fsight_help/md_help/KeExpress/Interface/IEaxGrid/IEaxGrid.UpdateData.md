# IEaxGrid.UpdateData

IEaxGrid.UpdateData
-


# IEaxGrid.UpdateData


## Синтаксис


UpdateData (Value: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);
 [Options: [EaxGridUpdateDataOptions](../../Enums/EaxGridUpdateDataOptions.htm)
 = 0]);


## Параметры


Value. Отметка, по которой
 будет произведено обновление;


Options. Вариант обновления.


## Описание


Метод UpdateData определяет
 будет ли обновлена часть или вся область данных, без перестроения боковика
 и шапки.


## Комментарии


Для обновления области таблицы используйте свойство [IEaxGrid.RefreshPart](IEaxGrid.RefreshPart.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    PivSlice: IEaxDataAreaSlice;

	    Grid: IEaxGrid;

	    SelSet: IDimSelectionSet;

	    Sel: IDimSelection;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    //Получим срез аналитической области данных

	    PivSlice := Report.DataArea.Slices.Item(0);

	    // Получим представление таблицы

	    Grid := PivSlice.Views.Item(0) As IEaxGrid;

	    // Зададим отметку среза

	    SelSet := PivSlice.Selection.CreateCopy;

	    // Выделим все элементы

	    For Each Sel In SelSet Do

	        Sel.SelectAll;

	    End For;

	    // Обновляем права доступа

	    Grid.UpdateData(SelSet, EaxGridUpdateDataOptions.DataRights);

	    // Сохраняем отчет

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера происходит обновление прав доступа по
 переданной отметке.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
