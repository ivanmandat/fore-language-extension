# IPivotTableHeader.IsDimensionMergeAllowed

IPivotTableHeader.IsDimensionMergeAllowed
-


# IPivotTableHeader.IsDimensionMergeAllowed


## Синтаксис


IsDimensionMergeAllowed(DimKey: Integer): Boolean;


## Параметры


DimKey.
 Ключ измерения.


## Описание


Свойство IsDimensionMergeAllowed
 возвращает признак того, доступно ли измерение, которое содержится в заголовке
 таблицы, для поджатия.


## Комментарии


Допустимые значения:


	- True. Измерение доступно
	 для поджатия;


	- False. Измерение недоступно
	 для поджатия.


## Пример


Для выполнения примера убедитесь, что в репозитории содержится экспресс-отчёт
 с идентификатором EXPRESS. Эспресс-отчёт содержит 2 измерения, расположенные
 в строках и объединённых в один слот.


Добавьте ссылки на системные сборки: Express, Dimensions, Metabase,
 Pivot.


			Sub Main;

Var

    MB: IMetabase;

    Report: IEaxAnalyzer;

    Pivot: IPivot;

    info: String;

    TableHeader: IPivotTableHeader;

    dimKey: Integer;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Report := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

    // Получим объект, на основе которого строится таблица данных

    Pivot := Report.Pivot;

    // Получим свойства боковика таблицы

    TableHeader := Pivot.ObtainTable.LeftHeader;

    // Проверка на поджатие 1-го измерения

    dimKey := Pivot.LeftHeader.Dim(0).Key;

    info := Pivot.ObtainTable.LeftHeader.IsDimensionMergeAllowed(dimKey).ToString;

    Debug.WriteLine(info);

    // Проверка на поджатие 2-го измерения

    dimKey := Pivot.LeftHeader.Dim(1).Key;

    info := Pivot.ObtainTable.LeftHeader.IsDimensionMergeAllowed(dimKey).ToString;

    Debug.WriteLine(info);

End Sub Main;


В результате выполнения примера в окно консоли будет выведено для первого
 измерения значение False, так
 как поджатие доступно для всех измерений кроме первого, а для второго
 измерения значение True.


См. также:


[IPivotTableHeader](IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
