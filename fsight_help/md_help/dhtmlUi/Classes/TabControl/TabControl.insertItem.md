# TabControl.insertItem

TabControl.insertItem
-


# TabControl.insertItem


## Синтаксис


insertItem(value: JSON | PP.Ui.[TabItem](../TabItem/TabItem.htm),
 index: Number, fireEvent: Boolean);


## Параметры


value. Вкладка, экземпляр класса
 PP.Ui.[TabItem](../TabItem/TabItem.htm), или ее представление
 в JSON;


index. Индекс, который определяет
 номер позиции, куда будет вставлена вкладка;


fireEvents. Признак вызова
 событий [TabControl.BeforeAddItem](TabControl.BeforeAddItem.htm)
 и [TabControl.AfterAddItem](TabControl.AfterAddItem.htm)
 при выполнении метода.


## Описание


Метод insertItem добавляет вкладку
 в указанную позицию.


## Комментарии


Допустимые значения параметра fireEvents:


	- true. По умолчанию.
	 При выполнении метода будут генерироваться события [TabControl.BeforeAddItem](TabControl.BeforeAddItem.htm)
	 и [TabControl.AfterAddItem](TabControl.AfterAddItem.htm);


	- false. При выполнении
	 метода события [TabControl.BeforeAddItem](TabControl.BeforeAddItem.htm)
	 и [TabControl.AfterAddItem](TabControl.AfterAddItem.htm)
	 генерироваться не будут.


## Пример


Пример использования метода приведён в описании метода [TabControl.removeItemByIndex](TabControl.removeItemByIndex.htm).


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
