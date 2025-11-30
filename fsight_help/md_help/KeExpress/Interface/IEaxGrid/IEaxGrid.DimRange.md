# IEaxGrid.DimRange

IEaxGrid.DimRange
-


# IEaxGrid.DimRange


## Синтаксис


DimRange(DimKey: Integer; [LevelIndex: Integer =
 -1;] [CheckMergedCells: Boolean = false]): [ITabRange](TabSheet.chm::/Interface/ITabRange/ITabRange.htm);


## Параметры


DimKey. Ключ измерения;


LevelIndex.
 Уровень измерения;


CheckMergedCells. Признак учета
 поджатия ячеек.


## Описание


Свойство DimRange возвращает
 диапазон ячеек таблицы, в котором отображаются элементы указанного по
 ключу измерения.


## Комментарии


Допустимые значения параметра CheckMergedCells:


	- True. Поджатие учитывается;


	- False. Поджатие не учитывается.
	 Значение по умолчанию.


Параметр CheckMergedCells влияет,
 например, на приоритет измерения при оформлении табличной области форм
 ввода.


Уровень измерения игнорируется, если LevelIndex
 принимает значение -1.


Для возвращения диапазона ячеек таблицы, в котором отображаются [итоги по
 столбцам/строкам](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm), используйте [IEaxGrid.TotalsRange](IEaxGrid.TotalsRange.htm).


## Пример


Для выполнения примера необходимо наличие экспресс-отчета с идентификатором
 EXPRESS, содержащего таблицу с [итогами
 по столбцам](UiAnalyticalArea.chm::/Totals/Calculate_totals.htm). Одним из измерений, по которому построена
 таблица, является календарное измерение с ключом 10127.


Добавьте ссылки на системные сборки: Express, Metabase, Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    DimRange, TotalsRange: ITabRange;

	Begin

	    MB := MetabaseClass.Active;

	    Analyzer := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

	    Grid := Analyzer.Grid;

	    DimRange := Grid.DimRange(10127, -1, False);

	    Debug.WriteLine

	    ("Адрес диапазона ячеек, в которых отображаются элементы измерения - " + DimRange.Address);

	    TotalsRange := Grid.TotalsRange(True);

	    Debug.WriteLine

	    ("Адрес диапазона ячеек, в которых отображаются итоги по столбцам - " + TotalsRange.Address);

	End Sub UserProc;


После выполнения примера в окно консоли выведутся адреса диапазонов
 ячеек, в которых отображаются:


	- элементы измерения;


	- итоги по столбцам.


См. также:


[IEaxGrid](IEaxGrid.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
