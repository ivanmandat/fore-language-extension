# IPivot.ObtainDataMode

IPivot.ObtainDataMode
-


# IPivot.ObtainDataMode


## Синтаксис


ObtainDataMode: [PivotObtainDataMode](../../Enums/PivotObtainDataMode.htm);


## Описание


Свойство ObtainDataMode определяет
 режим преобразований данных в таблице.


## Комментарии


К преобразованиям относятся:


	- [сортировка
	 данных](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm);


	- [условное
	 форматирование данных](UiAnalyticalArea.chm::/Analysis/Conditional_formatting.htm).


Используйте значение [PivotObtainDataMode.Normal](../../Enums/PivotObtainDataMode.htm)
 свойства IPivot.ObtainDataMode
 только, если в качестве источника данных таблицы используется куб или
 база данных временных рядов с настроенными [единицами измерения](UiNavObj.chm::/Units/Units.htm).


## Пример


Для выполнения примера необходимо наличие экспресс-отчёта с идентификатором
 EXPRESS. Источником данных отчёта является куб, содержащий справочник
 [единиц
 измерения](UiNavObj.chm::/Units/Units.htm).


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

		Var

		    MB: IMetabase;

		    Express: IEaxAnalyzer;

		    Pivot: IPivot;

		    SortItem: IPivotSortItem;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим экспресс-отчет

		    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

		    // Получит таблицу

		    Pivot := Express.Pivot;

		    // Включим режим преобразования для отмасштабированных данных

		    Pivot.ObtainDataMode := PivotObtainDataMode.Normal;

		    // Удалим все сортировки таблицы

		    Pivot.Sorter.Clear;

		    // Добавим сортировку таблицы

		    SortItem := Pivot.Sorter.Add;

		    // Проверим, включена ли сортировка

		    If Not Pivot.Sorter.Enabled Then

		        Pivot.Sorter.Enabled := True;

		    End If;

		    // Сортировка по возрастанию

		    SortItem.Direction := PivotSortDirection.Asc;

		    // Сортировка по первой строке таблицы

		    SortItem.Kind := PivotSortKind.Row;

		    SortItem.IndexInHeader := 0;

		    // Сохраним изменения

		    Express.RefreshAll;

		    (Express As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера для таблицы экспресс-отчёта будет применена
 сортировка по первой строке для отмасштабированных данных.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
