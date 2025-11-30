# ISQLCallback

ISQLCallback
-


# ISQLCallback


Сборка: Db;


## Описание


Интерфейс ISQLCallback содержит
 методы, которые используются для обработки процесса формирования запроса
 на извлечение данных куба.


## Иерархия наследования


ISQLCallback


## Комментарии


Методы данного интерфейса должны быть переопределены в пользовательском
 классе. Класс может быть установлен в качестве обработчика для источника
 куба с помощью метода [IStandardCubeDataset.SetCallback](KeCubes.chm::/Interface/IStandardCubeDataset/IStandardCubeDataset.SetCallback.htm).


Запрос на извлечение данных состоит из нескольких частей. Некоторые
 части запроса можно изменить в методе [BeforeConstruction](ISQLCallback.BeforeConstruction.htm).
 Финишные доработки запроса могут быть произведены в методе [AfterConstruction](ISQLCallback.AfterConstruction.htm).


Важно. Модификацию
 запроса на извлечение данных куба стоит производить только в крайних случаях
 при полной уверенности вносимых изменений.


Ниже представлен список частей, которые могут присутствовать в запросе.
 Угловые скобки в запросе отсутствуют, ими выделен тот блок, который может
 быть изменён. Синтаксис каждого блока зависит от типа используемой СУБД.


	- Основная часть запроса, в которой задаются извлекаемые данные:
	 select <a.KEY,a.DATE,a.VALUE>.
	 Изменяется в свойстве [ISQLComponents.Select_](../ISQLComponents/ISQLComponents.Select_.htm).


	- Источник, из которого извлекаются данные: from
	 <DATA_TABLE a>. Изменяется в свойстве [ISQLComponents.From_](../ISQLComponents/ISQLComponents.From_.htm).


	- Полное условие отбора для элементов измерений: <((a.DATE
	 in ({d'2010-01-01'},{d'2011-01-01'},{d'2012-01-01'}))) and ((a.KEY
	 in (1,2,3,4,5,6,7,8,9,10))))>. Изменяется в свойстве [ISQLComponents.Where](../ISQLComponents/ISQLComponents.Where.htm).


	- Группировка результатов: GroupBy
	 <KEY>. Изменяется в свойстве [ISQLComponents.GroupBy](../ISQLComponents/ISQLComponents.GroupBy.htm).


	- Выражение для агрегации: <COUNT(DISTINCT
	 a.VALUE )>. Изменяется в свойстве [ISQLComponents.Aggregation](../ISQLComponents/ISQLComponents.Aggregation.htm).


	- Сортировка результатов: OrderBy
	 <KEY>. Изменяется в свойстве [ISQLComponents.OrderBy](../ISQLComponents/ISQLComponents.OrderBy.htm).


	- Набор отдельных условий, входящих в [ISQLComponents.Where](../ISQLComponents/ISQLComponents.Where.htm).
	 Количество условий можно получить в свойстве [ISQLComponents.ConditionCount](../ISQLComponents/ISQLComponents.ConditionCount.htm),
	 свойство [ISQLComponents.Condition](../ISQLComponents/ISQLComponents.Condition.htm)
	 возвращает отдельное условие. Изменить условие в [ISQLComponents.Condition](../ISQLComponents/ISQLComponents.Condition.htm)
	 нельзя.


	- Псевдоним, используемый в запросе для сокращения наименований
	 таблиц: a. Получить псевдоним
	 можно в свойстве [ISQLComponents.TableAlias](../ISQLComponents/ISQLComponents.TableAlias.htm),
	 изменить его нельзя.


В свойстве [ISQLComponents.SubQuery](../ISQLComponents/ISQLComponents.SubQuery.htm)
 возвращается признак использования подзапросов в запросе. Значение [ISQLComponents.SubQuery](../ISQLComponents/ISQLComponents.SubQuery.htm)
 изменить нельзя, признак необходимости использования подзапросов задаётся
 в свойстве [IStandardCubeDataset.UseSubqueryOptimization](KeCubes.chm::/Interface/IStandardCubeDataset/IStandardCubeDataset.UseSubqueryOptimization.htm).


Наличие определённых частей зависит от настроек куба и его источника
 данных. Какие-либо части могут отсутствовать.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [AfterConstruction](ISQLCallback.AfterConstruction.htm)
		 Метод AfterConstruction вызывается
		 после формирования запроса на выборку данных куба.


		 ![](../../Sub_Image.gif)
		 [BeforeConstruction](ISQLCallback.BeforeConstruction.htm)
		 Метод BeforeConstruction
		 вызывается перед формированием запроса на извлечение данных куба.


См. также:


[Интерфейсы
 сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
