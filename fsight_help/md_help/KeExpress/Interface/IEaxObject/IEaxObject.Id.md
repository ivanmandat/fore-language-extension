# IEaxObject.Id

IEaxObject.Id
-


# IEaxObject.Id


## Синтаксис


Id: String;


## Описание


Свойство Id определяет идентификатор
 объекта.


## Комментарии


В качестве символов идентификатора можно задавать только символы латинского
 алфавита, а также цифры и знак нижнего подчеркивания «_».


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором REG_REPORT. Отчет содержит аналитическую область
 данных.


Добавьте ссылки на системные сборки: Express, Metabase, Report, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Rep: IPrxReport;

	    PivSlice: IEaxDataAreaSlice;

	    GridObject: IEaxObject;

	    Grid: IEaxGrid;

	    Tab: IPrxTable;

	    Sheet: ITabSheet;

	    Range: ITabRange;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Rep := MB.ItemById("REG_REPORT").Edit As IPrxReport;

	    // Получим срез аналитической области данных

	    PivSlice := Rep.DataArea.Slices.Item(0);

	    // Создадим копию среза данных

	    PivSlice.Copy(EaxSliceCopyOptions.All);

	    // Получим объект для работы с таблицей

	    GridObject := PivSlice.Views.Item(0) As IEaxObject;

	    // Изменим идентификатор объекта

	    If GridObject.Id.IsEmpty Then

	        GridObject.Id := "GridTab";

	    End If;

	    // Отключим сохранение данных в источник

	    GridObject.AllowSaveData := False;

	    // Создадим копию таблицы

	    Grid := PivSlice.Views.Item(0) As IEaxGrid;

	    Tab := Rep.Sheets.Item(0) As IPrxTable;

	    Sheet := Tab.TabSheet;

	    Range := Sheet.ParseRange("A0:H6");

	    Grid.Copy(Sheet, Range);

	    // Сохраним изменения в экспресс-отчете

	    (Rep As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- изменится идентификатор аналитической области данных;


	- данные при изменении в таблице не будут сохраняться в источник;


	- будут созданы копии таблицы и среза аналитической области данных.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
