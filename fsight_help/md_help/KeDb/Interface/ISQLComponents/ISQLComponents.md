# ISQLComponents

ISQLComponents
-


# ISQLComponents


Сборка: Db;


## Описание


Интерфейс ISQLComponents содержит
 свойства для доступа к отдельным частям запроса на извлечение данных куба.


## Иерархия наследования


ISQLComponents


## Комментарии


Если для источника данных куба с помощью метода [IStandardCubeDataset.SetCallback](KeCubes.chm::/Interface/IStandardCubeDataset/IStandardCubeDataset.SetCallback.htm).
 был назначен какой-либо обработчик формирования запроса, то при открытии
 куба будут выполняться методы [ISQLCallback.BeforeConstruction](../ISQLCallback/ISQLCallback.BeforeConstruction.htm)
 и [ISQLCallback.AfterConstruction](../ISQLCallback/ISQLCallback.AfterConstruction.htm).
 Через параметр Components метода [ISQLCallback.BeforeConstruction](../ISQLCallback/ISQLCallback.BeforeConstruction.htm)
 можно получить и изменить отдельные части запроса. Общий список частей
 запроса представлен в описании интерфейса [ISQLCallback](../ISQLCallback/ISQLCallback.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Aggregation](ISQLComponents.Aggregation.htm)
		 Свойство Aggregation
		 определяет часть запроса, в которой указывается выражение для
		 агрегации данных.


		 ![](../../Property_Image.gif)
		 [Condition](ISQLComponents.Condition.htm)
		 Свойство Condition
		 возвращает параметры отдельного условия, входящего в [Where](ISQLComponents.Where.htm).


		 ![](../../Property_Image.gif)
		 [ConditionCount](ISQLComponents.ConditionCount.htm)
		 Свойство ConditionCount
		 возвращает количество отдельных условий, входящих в [Where](ISQLComponents.Where.htm).


		 ![](../../Property_Image.gif)
		 [DalCommandOption](ISQLComponents.DalCommandOption.htm)
		 Свойство DalCommandOption
		 определяет режим выполнения SQL-запроса.


		 ![](../../Property_Image.gif)
		 [From_](ISQLComponents.From_.htm)
		 Свойство From_ определяет
		 часть запроса, в которой указывается источник данных.


		 ![](../../Property_Image.gif)
		 [GroupBy](ISQLComponents.GroupBy.htm)
		 Свойство GroupBy определяет
		 часть запроса, в которой указывается выражение для группировки
		 результатов.


		 ![](../../Property_Image.gif)
		 [OrderBy](ISQLComponents.OrderBy.htm)
		 Свойство OrderBy определяет
		 часть запроса, в которой указывается выражение для сортировки
		 результатов.


		 ![](../../Property_Image.gif)
		 [Select_](ISQLComponents.Select_.htm)
		 Свойство Select_ определяет
		 часть запроса, в которой указывается основная часть запроса, определяющая
		 извлекаемые данные.


		 ![](../../Property_Image.gif)
		 [SubQuery](ISQLComponents.SubQuery.htm)
		 Свойство SubQuery возвращает
		 признак использования подзапросов в запросе.


		 ![](../../Property_Image.gif)
		 [TableAlias](ISQLComponents.TableAlias.htm)
		 Свойство TableAlias
		 возвращает псевдоним, используемый в запросе для сокращения наименований
		 таблиц.


		 ![](../../Property_Image.gif)
		 [Where](ISQLComponents.Where.htm)
		 Свойство Where определяет
		 часть запроса, в которой указывается полное условие отбора для
		 элементов измерений.


См. также:


[Интерфейсы
 сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
