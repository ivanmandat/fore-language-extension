# TabSheet.deleteColumns

TabSheet.deleteColumns
-


**


# TabSheet.deleteColumns


## Синтаксис


deleteColumns(indexes: Array, fireEvent: Boolean, callback: PP.Delegate);


## Параметры


*indexes.* Массив индексов столбцов, строго расположенных по возрастанию;


*fireEvent.* *Определяет, генерировать ли событие удаления столбцов таблицы*. Если параметр равен значению true, то данное событие будет сгенерировано, иначе - не будет;


*callback.* Возвратная функция.


## Описание


Метод deleteColumns** удаляет массив столбцов таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Удалим три столбца с индексами 1, 2 и 3, а также три строки с индексами 0, 1 и 2:


// Удаляем столбцы
tabSheet.deleteColumns([1, 2, 3]);
// Удаляем строки
tabSheet.deleteRows([0, 1, 2]);

В результате выполнения данного примера будут удалены указанные стоки и столбцы таблицы:


![](TabSheet.deleteColumn.png)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
