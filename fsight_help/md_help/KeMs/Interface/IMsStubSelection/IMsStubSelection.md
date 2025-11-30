# IMsStubSelection

IMsStubSelection
-


# IMsStubSelection


Сборка: Ms;


## Описание


Интерфейс IMsStubSelection предназначен
 для задания фильтра по отметке источника данных.


## Иерархия наследования


           IMsStubSelection


## Комментарии


Фильтр по отметке источника данных можно получить, используя свойства
 и методы интерфейса [IMsStubSelectionFilter](../IMsStubSelectionFilter/IMsStubSelectionFilter.htm).


Фильтр по отметке создаётся путём объединения различных отметок источника
 данных. В дальнейшем будут использоваться только те точки, которые попадают
 в сформированное в соответствии с отметками множество точек.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMsStubSelection.Count.htm)
		 Свойство Count возвращает
		 количество отметок, которые добавлены в коллекцию.


		 ![](../../Property_Image.gif)
		 [DataType](IMsStubSelection.DataType.htm)
		 Свойство DataType возвращает
		 способ формирования данных, который задан для ячеек, сформированных
		 отметкой с указанным индексом.


		 ![](../../Property_Image.gif)
		 [Item](IMsStubSelection.Item.htm)
		 Свойство Item возвращает
		 отметку источника данных с указанным индексом.


		 ![](../../Property_Image.gif)
		 [StubKey](IMsStubSelection.StubKey.htm)
		 Свойство StubKey возвращает
		 ключ источника данных, для которого формируется фильтр по отметке.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IMsStubSelection.Add.htm)
		 Метод Add добавляет
		 указанную отметку источника, формируя множество точек.


		 ![](../../Sub_Image.gif)
		 [Clear](IMsStubSelection.Clear.htm)
		 Метод Clear очищает
		 коллекцию отметок, формирующих фильтр для источника данных.


		 ![](../../Sub_Image.gif)
		 [Remove](IMsStubSelection.Remove.htm)
		 Метод Remove удаляет
		 из коллекции отметку с указанным индексом.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
