# IEaxDataAreaSlice.Selection

IEaxDataAreaSlice.Selection
-


# IEaxDataAreaSlice.Selection


## Синтаксис


Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство Selection возвращает
 отметку среза аналитической области данных.


## Комментарии


Данное свойство возвращает отметки всех измерений всех источников данных
 среза аналитической области.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    // Получим срез данных

	    Slice := Express.DataArea.Slices.Item(0);

	    // Выведем в окно консоли элементы отметки указанного измерения

	    Debug.WriteLine

	    ("Элементы в отметке указанного измерения  - " + Slice.Selection.Item(3).ToString("", ", ", False));

	End Sub UserProc;


После выполнения примера в окно консоли будут выведены элементы отметки
 указанного измерения.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
