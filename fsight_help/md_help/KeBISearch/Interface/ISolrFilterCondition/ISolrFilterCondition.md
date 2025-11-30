# ISolrFilterCondition

ISolrFilterCondition
-


# ISolrFilterCondition


Сборка: BISearch;


## Описание


Интерфейс ISolrFilterCondition
 содержит свойства для настройки условия фильтрации результатов поиска.


## Иерархия наследования


ISolrFilterCondition


## Комментарии


Условие фильтрации можно получить используя следующие свойства и методы:


	- [ISolrFilterContext.FilterCondition](../ISolrFilterContext/ISolrFilterContext.FilterCondition.htm);


	- [ISolrFilterConditions.Add](../ISolrFilterConditions/ISolrFilterConditions.Add.htm);


	- [ISolrFilterConditions.Item](../ISolrFilterConditions/ISolrFilterConditions.Item.htm).


В условии фильтрации необходимо определить параметры фильтрации по одному
 полю (свойства [Operator_](ISolrFilterCondition.Operator_.htm),
 [SolrField](ISolrFilterCondition.SolrField.htm), [Values](ISolrFilterCondition.Values.htm))
 или параметры фильтрации по нескольким полям (свойство [Nested](ISolrFilterCondition.Nested.htm)).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Nested](ISolrFilterCondition.Nested.htm)
		 Свойство Nested возвращает
		 коллекцию вложенных условий фильтрации, которые будут применяться
		 после применения текущего условия.


		 ![](../../Property_Image.gif)
		 [Operator_](ISolrFilterCondition.Operator_.htm)
		 Свойство Operator_
		 определяет оператор, который будет использоваться для объединения
		 текущего условия и вложенных условий.


		 ![](../../Property_Image.gif)
		 [SolrField](ISolrFilterCondition.SolrField.htm)
		 Свойство SolrField
		 определяет поле, по значениям которого осуществляется фильтрация.


		 ![](../../Property_Image.gif)
		 [Values](ISolrFilterCondition.Values.htm)
		 Свойство Values возвращает
		 коллекцию значений, по которым осуществляется фильтрация.


См. также:


[Интерфейсы
 сборки BISearch](../KeBISearch_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
