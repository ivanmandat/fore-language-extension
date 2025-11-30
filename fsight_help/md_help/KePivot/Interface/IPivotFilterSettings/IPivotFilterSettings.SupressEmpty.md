# IPivotFilterSettings.SupressEmpty

IPivotFilterSettings.SupressEmpty
-


# IPivotFilterSettings.SupressEmpty


## Синтаксис


SupressEmpty: Boolean;


## Описание


Свойство SupressEmpty определяет,
 будут ли фильтроваться ячейки с пустыми значениями.


## Комментарии


Допустимые значения:


	- True. Ячейки с пустыми
	 значениями будут фильтроваться;


	- False. По умолчанию.
	 Ячейки с пустыми значениями фильтроваться не будут.


Для использования свойства необходимо, чтобы свойство [IPivotFilterSettings.Enabled](IPivotFilterSettings.Enabled.htm)
 принимало значение True.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_FILTER. Отчет содержит таблицу. Хотя бы один
 элемент последнего измерения таблицы не должен попадать под условие фильтрации.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Express: IEaxAnalyzer;

		    Pivot: IPivot;

		    LeftHeader: IPivotHeader;

		    Filter: IPivotFilter;

		    FilterSet: IPivotFilterSettings;

		Begin

		    MB := MetabaseClass.Active;

		    Express := MB.ItemById("EXPRESS_FILTER").Edit As IEaxAnalyzer;

		    Pivot := Express.Pivot;

		    // Измерения, расположенные по строкам

		    LeftHeader := Pivot.LeftHeader;

		    // Параметры фильтрации в таблице

		    Filter := Pivot.Filter;

		    FilterSet := Filter As IPivotFilterSettings;

		    // Включим параметры фильтрации для таблицы

		    FilterSet.Enabled := True;

		    // Включим фильтрацию пустых значений
		 ячеек

		    FilterSet.SuppressEmpty := True;

		    // Включим фильтрацию нулевых
		 значений ячеек

		    FilterSet.SuppressZeros := True;

		    // Включим фильтрацию нечисловых
		 значений ячеек

		    FilterSet.SuppressNoNumeric := True;

		    // Оставим владельцев
		 неисключенных элементов

		    FilterSet.KeepParent := True;

		   // Отфильтруем данные по уровням иерархии последнего измерения

		    FilterSet.KeepNeighbors := True;

		    // Сохраним изменения

		    (Express As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в таблице будут отфильтрованы пустые,
 нулевые и нечисловые значения ячеек. После фильтрации также будут отображаться
 владельцы неисключенных элементов. Будет отображаться последний уровень
 измерения, т.к. один из его элементов не попадет под фильтрацию.


См. также:


[IPivotFilterSettings](IPivotFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
