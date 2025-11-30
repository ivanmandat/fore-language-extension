# IEaxDataAreaSlice.Views

IEaxDataAreaSlice.Views
-


# IEaxDataAreaSlice.Views


## Синтаксис


Views: [IEaxDataAreaViews](../IEaxDataAreaViews/IEaxDataAreaViews.htm);


## Описание


Свойство Views возвращает коллекцию
 представлений среза аналитической области данных.


## Комментарии


Для получения свойств среза аналитической области данных используйте
 [IEaxDataAreaSlice.Properties](IEaxDataAreaSlice.Properties.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Express, Metabase.


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

	    // Выведем в окно консоли количество представлений среза

	    Debug.WriteLine("Количество представлений = " + Slice.Views.Count.ToString);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведено количество представлений
 среза аналитической области данных.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
