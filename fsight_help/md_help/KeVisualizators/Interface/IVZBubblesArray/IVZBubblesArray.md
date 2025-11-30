# IVZBubblesArray

IVZBubblesArray
-


# IVZBubblesArray


Сборка: Visualizators;


## Описание


Интерфейс IVZBubblesArray используется
 для работы с массивом пузырьковых показателей на слое карты.


## Иерархия наследования


           IVZBubblesArray


## Комментарии


Для получения массива пузырьковых показателей на слое карты используйте
 [IVZMapChartLayer.Bubbles](../IVZMapChartLayer/IVZMapChartLayer.Bubbles.htm).


Пузырьковый показатель позволяет
 отобразить дополнительную информацию о территориях, например соотношение
 значений показателя.


Для включения данного вида показателей используйте настройку в реестре:
 [HKEY_CURRENT_USER\Software\Foresight\Foresight Analytics Platform\10.0\Visualizers\MapChart\EnableBubbleIndicator]
 = 1. Если конечного раздела «MapChart»
 и параметра EnableBubbleIndicator =1»
 типа REG_DWORD нет в реестре, то создайте их вручную.


Работа с пузырьковыми показателями осуществляется по тому же принципу,
 что и с [круговыми показателями](../IVZPiesArray/IVZPiesArray.htm).


Пример карты с пузырьковыми показателями:


![](../IVZMapChartLayer/bubbles.png)


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IVZBubblesArray.Count.htm)


		 Свойство Count возвращает
		 количество пузырьковых показателей в коллекции на слое карты.


		 ![](../../Property_Image.gif)
		 [Item](IVZBubblesArray.Item.htm)


		 Свойство Item возвращает
		 пузырьковый показатель по его индексу.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IVZBubblesArray.Add.htm)


		 Метод Add добавляет
		 указанный пузырьковый показатель в коллекцию на слое карты.


		 ![](../../Sub_Image.gif)
		 [Clear](IVZBubblesArray.Clear.htm)


		 Метод Clear очищает
		 коллекцию пузырьковых показателей на слое карты.


		 ![](../../Sub_Image.gif)
		 [InsertAt](IVZBubblesArray.InsertAt.htm)


		 Метод InsertAt вставляет
		 указанный пузырьковый показатель в указанную позицию в коллекции.


		 ![](../../Sub_Image.gif)
		 [Remove](IVZBubblesArray.Remove.htm)


		 Метод Remove удаляет
		 пузырьковый показатель из коллекции по его индексу.


См. также:


[Интерфейсы сборки
 Visualizators](../KeVisualizators_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
