# TabSheet.deleteColumn

TabSheet.deleteColumn
-


**


# TabSheet.deleteColumn


## Синтаксис


deleteColumn(colIndex: Number, count: Number, fireEvent: Boolean, callback: PP.Delegate);


## Параметры


*colIndex.* Индекс первого удаляемого столбца таблицы;


*count.* Количество удаляемых столбцов;


*fireEvent.* *Определяет, генерировать ли событие удаления столбцов таблицы*. Если параметр равен значению true, то данное событие будет сгенерировано, иначе - не будет;


*callback.* Возвратная функция.


## Описание


Метод deleteColumn** удаляет столбцы таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Удалим три столбца с индексами 1, 2 и 3, а также три строки с индексами 0, 1 и 2:


// Удаляем столбцы
tabSheet.deleteColumn(1, 3);
// Удаляем строки
tabSheet.deleteRow(0, 3);

В результате выполнения данного примера будут удалены указанные стоки и столбцы таблицы:


![](TabSheet.deleteColumn.png)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
