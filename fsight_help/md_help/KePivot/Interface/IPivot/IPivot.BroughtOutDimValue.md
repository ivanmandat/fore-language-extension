# IPivot.BroughtOutDimValue

IPivot.BroughtOutDimValue
-


# IPivot.BroughtOutDimValue


## Синтаксис


BroughtOutDimValue: Integer;


## Описание


Свойство BroughtOutDimValue
 определяет индекс элемента измерения метрик при использовании атрибута
 «[Значение](UiAnalyticalArea.chm::/Work_with_dimensions/Table_metrics.htm)».


## Комментарии


Для использования свойства необходимо определить в свойстве [IPivot.BroughtOutDim](IPivot.BroughtOutDim.htm) измерение метрик.


Если значение данного свойства не указано, то таблица строится по первому
 элементу в отметке.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчёта
 с идентификатором EXPRESS, содержащего таблицу. Роль одного из измерений
 - «Метрики».


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Express: IEaxAnalyzer;

		    Pivot: IPivot;

		    DimInst: IDimInstance;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим экспресс-отчет

		    Express := MB.ItemById("EXPRESS").Bind As IEaxAnalyzer;

		    // Получим настройки отображения таблицы данных отчета

		    Pivot := Express.Pivot;

		    // Получим данные указанного измерения

		    DimInst := Pivot.BroughtOutDim;

		    // Выведем в окно консоли

		    If DimInst <> Null Then

		        Debug.WriteLine("Измерение метрик - " + DimInst.Name);

		        Debug.WriteLine("Наименование атрибута - " + DimInst.Elements.Name(Pivot.BroughtOutDimValue));

		        Debug.WriteLine("Индекс элемента измерения метрик - " + Pivot.BroughtOutDimValue.ToString);

		    Else

		        Debug.WriteLine("Указанное измерение не является измерением
		 метрик");

		    End If;

		End Sub UserProc;


После выполнения примера в окно консоли будет выведено наименование
 измерения метрик, наименование атрибута, индекс элемента измерения метрик.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
