# IEaxDataAreaSlice.IndicatorAggregation

IEaxDataAreaSlice.IndicatorAggregation
-


# IEaxDataAreaSlice.IndicatorAggregation


## Синтаксис


IndicatorAggregation(IndicatorType: Integer): [EaxAggregationFunction](../../Enums/EaxAggregationFunction.htm);


## Параметры


IndicatorType. Тип метрики
 среза аналитической области данных.


## Описание


Свойство IndicatorAggregation
 определяет метод агрегации для указанного типа метрики среза аналитической
 области данных.


## Комментарии


Типы метрик среза аналитической области данных представлены в перечислении
 [EaxSliceIndicatorType](../../Enums/EaxSliceIndicatorType.htm).


Агрегация данных - это расчет данных верхнего уровня на основе данных
 нижнего уровня.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS, содержащего таблицу.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    DataArea: IEaxDataArea;

	    Slice: IEaxDataAreaSlice;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    // Получим область данных

	    DataArea := Express.DataArea;

	    // Получим срез данных

	    Slice := DataArea.Slices.Item(0);

	    // Зададим метод агрегации

	    Slice.IndicatorAggregation(EaxSliceIndicatorType.Color) := EaxAggregationFunction.Sum;

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера будет выполнена агрегация для указанного типа
 метрики.


См. также:


[IEaxDataAreaSlice](IEaxDataAreaSlice.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
