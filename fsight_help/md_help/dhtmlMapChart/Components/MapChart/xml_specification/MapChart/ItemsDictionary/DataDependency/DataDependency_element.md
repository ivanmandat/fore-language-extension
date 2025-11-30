# Элемент DataDependency

Элемент DataDependency
-


# Элемент DataDependency


Элемент DataDependency представляет
 собой коллекцию объектов зависимости. Элемент коллекции - экземпляр
 класса DataDependency.


[Пример настройки списка объектов
 зависимостей](DataDependency_exmpl.htm)


## Атрибуты элемента коллекции


		 Наименование атрибута
		 Тип
		 Описание


		 TypeArguments
		 [TypeArguments](../../../../../../Enums/TypeArguments.htm)
		 Тип объекта, используемого для отображения показателя. Примеры
		 значений: String, Double, Brush.


		 Id
		 String
		 Идентификатор объекта зависимости.


		 IsDependent
		 Boolean
		 Флажок, указывающий,
		 есть ли привязка к источнику данных или значение статично. Возможные
		 значения:


			- true - есть привязка
			 к источнику данных;


			- false - значение статично.


		 MapScale
		 PP.MapScale
		 Идентификатор
		 [шкалы](../MapScale/MapScale_element.htm), описанной
		 в [словаре элементов](../ItemsDictionary.htm) или полное
		 описание объекта шкалы. Может использоваться как элемент только
		 для полного описания объекта. Идентификатор должен располагаться
		 в фигурных скобках:


		MapScale=”{идентификатор}.


		 Value
		 Object
		 Статическое
		 значение. Тип соответствует типу объекта, указанному в атрибуте
		 TypeArguments.


		 DataSource
		 [PP.DataSource](dhtmlGraphicBase.chm::/Classes/PP/DataSource/DataSource.htm)
		 Идентификатор
		 источника данных в формате DataSource
		 = "{идентификатор}".


		 ValueFormat
		 String
		 Устанавливает
		 формат значения.


		 ValuesStringDelimiter
		 String
		 Устанавливает
		 разделитель значений.


См. также:


[Элемент
 ItemsDictionary](../ItemsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
