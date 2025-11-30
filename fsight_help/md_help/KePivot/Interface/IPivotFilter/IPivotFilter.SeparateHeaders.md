# IPivotFilter.SeparateHeaders

IPivotFilter.SeparateHeaders
-


# IPivotFilter.SeparateHeaders


## Синтаксис


SeparateHeaders: Boolean;


## Описание


Свойство SeparateHeaders определяет,
 будут ли использоваться настройки фильтрации раздельно для строк и столбцов.


## Комментарии


Допустимые значения:


	- True. Настройки фильтрации
	 будут использоваться для строк и столбцов раздельно;


	- False. По умолчанию.
	 Будут использоваться настройки фильтрации для всей таблицы.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором «EXPRESS_FILTER». Отчет содержит таблицу.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Express: IEaxAnalyzer;

    Pivot: IPivot;

    LeftHeader: IPivotHeader;

    LeftFilter: IPivotHeaderFilterSettings;

    TopHeader: IPivotHeader;

    TopFilter: IPivotHeaderFilterSettings;

    Filter: IPivotFilter;

Begin

    MB := MetabaseClass.Active;

    Express := MB.ItemById("EXPRESS_FILTER").Edit As IEaxAnalyzer;

    Pivot := Express.Pivot;

    //Параметры фильтрации в таблице

    Filter := Pivot.Filter;

    Filter.SeparateHeaders := True;

    // Измерения, расположенные по строкам

    LeftHeader := Pivot.LeftHeader;

    LeftFilter := LeftHeader.Settings.Filter;

    LeftFilter.Enabled := True;

    LeftFilter.SuppressZeros := True;

    // Измерения, расположенные по столбцам

    TopHeader := Pivot.TopHeader;

    TopFilter := TopHeader.Settings.Filter;

    LeftFilter.Enabled := True;

    TopFilter.SuppressEmpty := True;

    // Сохраним изменения

    (Express As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера отфильтруются строки, имеющие ячейки с нулевыми
 значениями, и столбцы, имеющие ячейки с пустыми значениями.


См. также:


[IPivotFilter](IPivotFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
