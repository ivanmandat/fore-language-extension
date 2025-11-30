# IPivotFilterSource.Enable

IPivotFilterSource.Enable
-


# IPivotFilterSource.Enable


## Синтаксис


Enable: Boolean;


## Описание


Свойство Enable определяет возможность
 применения фильтра.


## Комментарии


Допустимые значения:


	- True. Фильтр применяются.
	 Значение по умолчанию;


	- False. Применение фильтра
	 отключено.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчёта
 с идентификатором EXPRESS, к которому подключен фильтр. Пример подключения
 фильтра описан в примере для свойства [IPivotFilterSource.Matrix](IPivotFilterSource.Matrix.htm).


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Eax: IEaxAnalyzer;

		    Pvt: IPivot;

		    Filter: IPivotFilterSettings;

		    FltrSources: IPivotFilterSources;

		    FltrSource: IPivotFilterSource;

		Begin

		    // Получим репозиторий

		    Mb := MetabaseClass.Active;

		    // Получим экспресс-отчёт

		    Eax := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

		    // Получим настройки отображения таблицы данных отчёта

		    Pvt := Eax.Pivot;

		    // Определим параметры фильтрации

		    Filter := Pvt.Filter As IPivotFilterSettings;

		    // Зададим использование внешнего фильтра

		    FltrSources := Filter.FilterSources;

		    // Получим подключенный фильтр

		    FltrSource := FltrSources.Item(0);

		    // Отключим использование фильтра

		    FltrSource.Enable := False;

		    // Сохраним отчёт

		    (Eax As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в отчёте будет отключено использование
 фильтра.


См. также:


[IPivotFilterSource](IPivotFilterSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
