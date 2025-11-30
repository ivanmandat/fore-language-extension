# IPrxBulkSelectionSet

IPrxBulkSelectionSet
-


# IPrxBulkSelectionSet


Сборка: Report;


## Описание


Интерфейс IPrxBulkSelectionSet
 содержит свойства и методы для работы с коллекцией отметок измерений,
 допустимых для использования при пакетных операциях.


## Иерархия наследования


IPrxBulkSelectionSet


## Комментарии


К допустимым отметкам относятся отметки измерений, расположенных в фиксированной
 области и для которых создан элемент управления. Элемент управления должен
 быть общим для тех листов, для которых выполняется пакетная операция.


Коллекция отметок указывается в свойстве [IPrxBulkSettings.SelectionSet](../IPrxBulkSettings/IPrxBulkSettings.SelectionSet.htm).
 Данная коллекция может быть получена автоматически при выполнении метода
 [IPrxReport.GetBulkSelectionSet](../IPrxReport/IPrxReport.GetBulkSelectionSet.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IPrxBulkSelectionSet.Count.htm)
		 Свойство Count возвращает
		 количество допустимых отметок в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](IPrxBulkSelectionSet.Item.htm)
		 Свойство Item возвращает
		 параметры допустимой отметки.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IPrxBulkSelectionSet.Add.htm)
		 Метод Add добавляет
		 в коллекцию отметку измерения, которое связано с указанным элементом
		 управления.


		 ![](../../Sub_Image.gif)
		 [Clear](IPrxBulkSelectionSet.Clear.htm)
		 Метод Clear удаляет
		 из коллекции все отметки измерений.


		 ![](../../Sub_Image.gif)
		 [Remove](IPrxBulkSelectionSet.Remove.htm)
		 Метод Remove удаляет
		 указанную допустимую отметку измерения.


См. также:


[Интерфейсы
 сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
