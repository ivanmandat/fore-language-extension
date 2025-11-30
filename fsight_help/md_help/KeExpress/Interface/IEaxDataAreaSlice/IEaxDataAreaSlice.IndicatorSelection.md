# IEaxDataAreaSlice.IndicatorSelection

IEaxDataAreaSlice.IndicatorSelection
-


# IEaxDataAreaSlice.IndicatorSelection


## Синтаксис


IndicatorSelection(Type: Integer): [IDimSelection](KeDims.chm::/interface/IDimSelection/IDimSelection.htm);


## Параметры


Type.
 Тип метрики среза аналитической области данных.


## Описание


Свойство IndicatorSelection
 возвращает отметку измерения метрик.


## Комментарии


Значения параметра Type представлены
 в перечислении [EaxSliceIndicatorType](../../Enums/EaxSliceIndicatorType.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabasee.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	    IndSel: IDimSelection;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим срез данных

	    Slice := Express.DataArea.Slices.Item(0);

	    // Получим отметку измерения метрик

	    IndSel := Slice.IndicatorSelection(EaxSliceIndicatorType.Color);

	    // Выведем в окно консоли идентификатор измерения метрик

	    Debug.WriteLine("Идентификатор измерения метрик - " + IndSel.Dimension.Ident);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведен идентификатор
 измерения метрик.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
