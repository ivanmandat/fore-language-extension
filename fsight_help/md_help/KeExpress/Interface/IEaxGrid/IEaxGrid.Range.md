# IEaxGrid.Range

IEaxGrid.Range
-


# IEaxGrid.Range


## Синтаксис


Range: [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);


## Описание


Свойство Range возвращает диапазон
 прямоугольной области таблицы.


## Комментарии


Для определения параметров прямоугольной области таблицы используйте
 [IEaxGrid.OutPutRect](IEaxGrid.OutPutRect.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором REPORT, содержащего аналитическую область данных.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Report,
 Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    PivSlice: IEaxDataAreaSlice;

	    Grid: IEaxGrid;

	    NOutputRect, OutputRect: IGxRect;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получим таблицу

	    PivSlice := Report.DataArea.Slices.Item(0);

	    Grid := PivSlice.Views.Item(0) As IEaxGrid;

	    // Выведем в окно консоли адрес диапазона ячеек таблицы

	    Report.Recalc;

	    Debug.WriteLine("Диапазон ячеек таблицы - " + Grid.Range.Address);

	    // Получим параметры  таблицы

	    OutputRect := Grid.OutputRect;

	    // Создадим новую область таблицы

	    NOutputRect := New GxRect.CreateFromRect(OutputRect);

	    NOutputRect.Bottom := OutputRect.Bottom + 1;

	    NOutputRect.Left := OutputRect.Left + 1;

	    NOutputRect.Right := OutputRect.Right + 1;

	    NOutputRect.Top := OutputRect.Top + 1;

	    // Назначим для таблицы новую область

	    Grid.OutputRect := NOutputRect;

	    // Обновим отчет

	    Grid.Refresh;

	    Report.Recalc;

	    // Выведем в окно консоли адрес диапазона ячеек новой области таблицы

	    Debug.WriteLine("Адрес диапазона ячеек новой области таблицы - " + Grid.Range.Address);

	    // Сохраним изменения

	    (Report As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- в регламентном отчете таблицы сместится на одну ячейку правее
	 и ниже;


	- в окно консоли выведутся адреса диапазонов ячеек таблицы до
	 задания новой области и после.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
