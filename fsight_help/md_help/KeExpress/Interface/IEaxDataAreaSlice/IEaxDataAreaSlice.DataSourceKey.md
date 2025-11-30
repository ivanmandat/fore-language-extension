# IEaxDataAreaSlice.DataSourceKey

IEaxDataAreaSlice.DataSourceKey
-


# IEaxDataAreaSlice.DataSourceKey


## Синтаксис


DataSourceKey: Integer;


## Описание


Свойство DataSourceKey возвращает
 ключ источника данных среза аналитической области данных.


## Комментарии


Для получения источника данных среза аналитической области данных используйте
 [IEaxDataAreaSlice.DataSource](IEaxDataAreaSlice.DataSource.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
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

	    // Выведем в окно консоли ключ источника среза данных

	    Debug.WriteLine("Ключ источника данных в репозитории - " + Slice.DataSourceKey.ToString);

	End Sub UserProc;


После выполнения примера в окно консоли будет выведен ключ источника
 данных среза.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
