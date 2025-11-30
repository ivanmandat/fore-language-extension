# IPivotHeaderEvaluatedSlots

IPivotHeaderEvaluatedSlots
-


# IPivotHeaderEvaluatedSlots


Сборка: Pivot;


## Описание


Интерфейс IPivotHeaderEvaluatedSlots
 предназначен для работы с коллекцией вычисляемых столбцов/строк в заголовке
 таблицы.


## Иерархия наследования


           IPivotHeaderEvaluatedSlots


## Комментарии


Продукт «Форсайт. Аналитическая платформа»
 с помощью языка программирования Fore
 позволяет выводить вычисляемые значения в заголовках таблицы в виде:


	- отдельных столбцов в боковике таблицы;


	- отдельных строк в шапке таблицы.


Значения в ячейках вычисляемых столбцов и строк рассчитываются по формуле,
 состоящей из атрибутов измерения таблицы.


Примечание.
 Большое количество вычисляемых строк и столбцов может привести к снижению
 производительности таблицы из-за расчета формул вычисляемых строк и столбцов.


Для получения коллекции вычисляемых столбцов/строк используйте свойство
 [IPivotHeader.EvaluatedSlots](../IPivotHeader/IPivotHeader.EvaluatedSlots.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IPivotHeaderEvaluatedSlots.Count.htm)
		 Свойство Count
		 возвращает количество столбцов/строк в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](IPivotHeaderEvaluatedSlots.Item.htm)
		 Свойство Item
		 возвращает вычисляемый столбец/строку с указанным индексом.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IPivotHeaderEvaluatedSlots.Add.htm)
		 Метод Add добавляет
		 вычисляемый столбец/строку в коллекцию.


		 ![](../../Sub_Image.gif)
		 [Clear](IPivotHeaderEvaluatedSlots.Clear.htm)
		 Метод Clear очищает
		 коллекцию столбцов/строк.


		 ![](../../Sub_Image.gif)
		 [FindByKey](IPivotHeaderEvaluatedSlots.FindByKey.htm)
		 Метод FindByKey
		 выполняет поиск столбца/строки с указанным ключом в коллекции.


		 ![](../../Sub_Image.gif)
		 [IndexOf](IPivotHeaderEvaluatedSlots.IndexOf.htm)
		 Метод IndexOf
		 возвращает индекс указанного вычисляемого столбца/строки.


		 ![](../../Sub_Image.gif)
		 [Move](IPivotHeaderEvaluatedSlots.Move.htm)
		 Метод Move перемещает
		 вычисляемый столбец/строку на указанную позицию.


		 ![](../../Sub_Image.gif)
		 [Remove](IPivotHeaderEvaluatedSlots.Remove.htm)
		 Метод Remove
		 удаляет вычисляемый столбец/строку с указанным индексом.


		 ![](../../Sub_Image.gif)
		 [RemoveByKey](IPivotHeaderEvaluatedSlots.RemoveByKey.htm)
		 Метод RemoveByKey удаляет
		 вычисляемый столбец/строку с указанным ключом.


См. также:


[Интерфейсы
 сборки Pivot](../KePivot_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
