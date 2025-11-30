# IEaxDataAreaSlice.AdditionalFilterTransformations

IEaxDataAreaSlice.AdditionalFilterTransformations
-


# IEaxDataAreaSlice.AdditionalFilterTransformations


## Синтаксис


AdditionalFilterTransformations: [IEaxDataAreaTransformations](../IEaxDataAreaTransformations/IEaxDataAreaTransformations.htm);


## Описание


Свойство AdditionalFilterTransformations
 возвращает объект для работы с коллекцией трансформаций столбцов при включенной
 раздельной фильтрации для строк и столбцов таблицы.


## Комментарии


Раздельная фильтрация для строк и столбцов определяется свойством [IPivotFilter.SeparateHeaders](KePivot.chm::/Interface/IPivotFilter/IPivotFilter.SeparateHeaders.htm).
 При использовании раздельной фильтрации трансформации для столбцов содержатся
 в данной коллекции. Если раздельная фильтрация не используется, то коллекция
 будет пустой.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчёта с идентификатором EXPRESS_FILTER. Отчёт содержит таблицу. В отчёте
 должна быть включена раздельная фильтрация для строк и столбцов. Для настроек
 фильтрации строк должно быть задано несколько формул. Настройка производится
 с помощью команды [FilterSetup](UiLib.chm::/Interface/IUiCommandTarget/Command/Command_FilterSetup.htm)
 плагина [Express](UiLib.chm::/Interface/IUiCommandTarget/IUiCommandTarget.Execute.htm).


Добавьте ссылку на системные сборки: Express, Metabase, Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Dim: IEaxDataAreaSlice;

	    Top: IEaxDataAreaTransformations;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    Express := MB.ItemById("EXPRESS_FILTER").Bind As IEaxAnalyzer;

	    // Получим настройки отображения таблицы

	    Dim := Express.DataArea.Slices.Item(0);

	    Top := Dim.AdditionalFilterTransformations;

	    Debug.WriteLine("Количество трансформаций, заданных для столбцов = " + Top.Count.ToString);

	End Sub UserProc;


После выполнения примера в окно консоли выведется количество трансформаций
 столбцов при включенной раздельной фильтрации для строк и столбцов таблицы.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
