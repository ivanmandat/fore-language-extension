# IMsDimIteratorAdvancedFilter

IMsDimIteratorAdvancedFilter
-


# IMsDimIteratorAdvancedFilter


Сборка: Ms;


## Описание


Интерфейс IMsDimIteratorAdvancedFilter
 предназначен для работы с расширенным фильтром в измерении многомерного
 итератора.


## Иерархия наследования


           IMsDimIteratorAdvancedFilter


## Комментарии


Расширенный фильтр позволяет выбрать элементы, соответствующие заданному
 условию. Для получения расширенного фильтра используйте свойство [IMsDimIteratorFilter.AdvancedFilter](../IMsDimIteratorFilter/IMsDimIteratorFilter.AdvancedFilter.htm).


Если в фильтре уже заданы элементы в одном из свойств [IMsDimIteratorFilter.ElementGroup](../IMsDimIteratorFilter/IMsDimIteratorFilter.ElementGroup.htm),
 [IMsDimIteratorFilter.ParameterAsGroup](../IMsDimIteratorFilter/IMsDimIteratorFilter.ParameterAsGroup.htm),
 [IMsDimIteratorFilter.ParameterAsSelection](../IMsDimIteratorFilter/IMsDimIteratorFilter.ParameterAsSelection.htm)
 или [IMsDimIteratorFilter.Selection](../IMsDimIteratorFilter/IMsDimIteratorFilter.Selection.htm),
 то именно они проверяются на соответствие заданному условию. Если элементы
 не заданы, то на соответствие условию проверяются все элементы справочника.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMsDimIteratorAdvancedFilter.Count.htm)
		 Свойство Count возвращает
		 количество условий расширенного фильтра.


		 ![](../../Property_Image.gif)
		 [Groups](IMsDimIteratorAdvancedFilter.Groups.htm)
		 Свойство Groups возвращает
		 коллекцию групп условий расширенного фильтра.


		 ![](../../Property_Image.gif)
		 [Item](IMsDimIteratorAdvancedFilter.Item.htm)
		 Свойство Item возвращает
		 заданное условие расширенного фильтра.


		 ![](../../Property_Image.gif)
		 [Owner](IMsDimIteratorAdvancedFilter.Owner.htm)
		 Свойство Owner возвращает
		 фильтр измерения, в состав которого входит расширенный фильтр.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IMsDimIteratorAdvancedFilter.Add.htm)
		 Метод Add добавляет
		 условие расширенного фильтра.


		 ![](../../Sub_Image.gif)
		 [Clear](IMsDimIteratorAdvancedFilter.Clear.htm)
		 Метод Clear удаляет
		 все условия расширенного фильтра.


		 ![](../../Sub_Image.gif)
		 [Remove](IMsDimIteratorAdvancedFilter.Remove.htm)
		 Метод Remove
		 удаляет указанное условие расширенного фильтра.


		 ![](../../Sub_Image.gif)
		 [Test](IMsDimIteratorAdvancedFilter.Test.htm)
		 Метод Test проверяет
		 элемент на соответствие расширенному фильтру.


		 ![](../../Sub_Image.gif)
		 [TestInternal](IMsDimIteratorAdvancedFilter.TestInternal.htm)
		 Метод TestInternal
		 проверяет элемент на соответствие расширенному фильтру с учётом
		 заданных значений [параметров](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_3_MetaModel/Metamodel_params.htm)
		 метамодели.


См. также:


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
