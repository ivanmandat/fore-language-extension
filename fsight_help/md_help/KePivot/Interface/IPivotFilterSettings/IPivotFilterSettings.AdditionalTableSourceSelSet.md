# IPivotFilterSettings.AdditionalTableSourceSelSet

IPivotFilterSettings.AdditionalTableSourceSelSet
-


# IPivotFilterSettings.AdditionalTableSourceSelSet


## Синтаксис


AdditionalTableSourceSelSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)


## Описание


Свойство AdditionalTableSourceSelSet
 возвращает дополнительную отметку, в соответствии с которой будет
 производиться фильтрация.


## Комментарии


Фильтрация по дополнительной отметке доступна, если свойству [UseAdditionalTableSource](IPivotFilterSettings.UseAdditionalTableSource.htm)
 установлено значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором «EXPRESS_REPORT». Источник отчёта имеет в своей структуре
 три измерения: одно по строкам, одно по столбцам и одно фиксированное.
 Фиксированное измерение имеет идентификатор «INDICATORS».


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


					Sub Button2OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    Mb: IMetabase;

		    Eax: IEaxAnalyzer;

		    PivotFilter: IPivotFilter;

		    FilterSelSet: IDimSelectionSet;

		    FilterSel: IDimSelection;

		Begin

		    Mb := MetabaseClass.Active;

		    Eax := Mb.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

		    PivotFilter := Eax.Pivot.Filter;

		    // Фильтровать пустые значения

		    PivotFilter.SuppressEmpty := True;

		    // Фильтровать нулевые значения

		    PivotFilter.SuppressZeros := True;

		    // Включим фильтрацию по дополнительной отметке в фиксированных измерениях

		    PivotFilter.UseAdditionalTableSource := True;

		    FilterSelSet := PivotFilter.AdditionalTableSourceSelSet;

		    If FilterSelSet <> Null Then

		        // Получим справочник и зададим для него отметку

		        FilterSel := FilterSelSet.FindById("INDICATORS");

		        If FilterSel <> Null Then

		            FilterSel.DeselectAll;

		            FilterSel.SelectElement(FilterSel.Dimension.Elements.FindById("3"), False);

		            Debug.WriteLine(FilterSel.ToString);

		        End If;

		    End If;

		    (Eax As IMetabaseObject).Save;

		End Sub Button2OnClick;


При выполнении примера в экспресс-отчёте будет включена фильтрация пустых
 и нулевых значений. Для фиксированного измерения будет включена фильтрация
 по дополнительной отметке: будет отмечен элемент с указанным идентификатором,
 при этом фильтрация будет выполнена по тем данным, которые имеются по
 отмеченному элементу, а не по фактической отметке в экспресс-отчёте.


См. также:


[IPivotFilterSettings](IPivotFilterSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
