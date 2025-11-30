# IMsStubSelectionFilter

IMsStubSelectionFilter
-


# IMsStubSelectionFilter


Сборка: Ms;


## Описание


Интерфейс IMsStubSelectionFilter
 предназначен для формирования фильтра по отметкам источников данных.


## Иерархия наследования


           IMsStubSelectionFilter


## Комментарии


Фильтр используется свойством [IMsProblemCalculationSettings.ExecutionFilter](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.ExecutionFilter.htm).


Фильтр формируется из отдельных фильтров по отметкам различных источников
 данных. При использовании фильтра будет обрабатываться только то множество
 точек, которое сформировано в соответствии с заданными отметками источников
 данных.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMsStubSelectionFilter.Count.htm)
		 Свойство Count возвращает
		 количество источников данных, для которых созданы фильтры по отметке.


		 ![](../../Property_Image.gif)
		 [Item](IMsStubSelectionFilter.Item.htm)
		 Свойство Item возвращает
		 фильтр по отметке для источника с указанным индексом.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IMsStubSelectionFilter.Add.htm)
		 Метод Add добавляет
		 в коллекцию фильтр по отметке для источника данных с указанным
		 ключом.


		 ![](../../Sub_Image.gif)
		 [Clear](IMsStubSelectionFilter.Clear.htm)
		 Метод Clear очищает
		 коллекцию фильтров.


		 ![](../../Sub_Image.gif)
		 [FindByStubKey](IMsStubSelectionFilter.FindByStubKey.htm)
		 Метод FindByStubKey
		 осуществляет поиск фильтра по ключу источника данных.


		 ![](../../Sub_Image.gif)
		 [Remove](IMsStubSelectionFilter.Remove.htm)
		 Метод Remove удаляет
		 фильтр источника данных с указанным индексом.


		 ![](../../Sub_Image.gif)
		 [RemoveByStubKey](IMsStubSelectionFilter.RemoveByStubKey.htm)
		 Метод RemoveByStubKey
		 удаляет из коллекции фильтр источника данных с указанным ключом.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
