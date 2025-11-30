# IStandardCubeDataset.UseSubqueryOptimization

IStandardCubeDataset.UseSubqueryOptimization
-


# IStandardCubeDataset.UseSubqueryOptimization


## Синтаксис


UseSubqueryOptimization: Boolean;


## Описание


Свойство UseSubqueryOptimization
 определяет, будут ли использоваться подзапросы при формировании запроса
 на извлечение данных текущего источника.


## Комментарии


При работе стандартный куб обращается за данными к своим источникам
 данных. Формат запросов, формируемых для получения данных, зависит от
 значения свойства UseSubqueryOptimization.
 При значении True (значение по
 умолчанию) используются подзапросы, сам запрос формируется примерно следующего
 вида:


select a.*
 from (select
 a.ID,a.VALUE,a.VDATE,... from
 <TableName> a) a where ((a.VDATE
 in (TO_DATE('1995-01-01','YYYY-MM-DD'),...)))
 and ((a.ID in
 (1,...))) and ...


Если свойству UseSubqueryOptimization
 установить значение False, то
 подзапросы использоваться не будут, при этом будет формироваться запрос
 примерно следующего вида:


select a.ID,a.VALUE,a.VDATE,...
 from <TableName> a where ((a.VDATE in
 (TO_DATE('1995-01-01','YYYY-MM-DD'),...))) and
 ((a.ID in (1,...)))...


Также на формат запроса будут влиять [стратегии
 фильтрации](../IStandardCubeDimension/IStandardCubeDimension.QueryStrategy.htm), настроенные для различных измерений куба.


## Пример


Пример использования приведен в описании свойства [IStandardCubeDimension.QueryStrategy](../IStandardCubeDimension/IStandardCubeDimension.QueryStrategy.htm).


См. также:


[IStandardCubeDataset](IStandardCubeDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
