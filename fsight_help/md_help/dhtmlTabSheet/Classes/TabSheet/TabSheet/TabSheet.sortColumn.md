# TabSheet.sortColumn

TabSheet.sortColumn
-


# TabSheet.sortColumn


## Синтаксис


sortColumn (columnSettings);


## Параметры


columnSettings. JSON-объект
  {colIndex, order, comparer} с настройками сортировки для столбца:


colIndex.
 Индекс столбца сортировки;


order.
 Порядок сортировки: 'asc' - по возрастанию, 'desc' - по убыванию;


comparer.
 Имеет значение «string», «number» или в виде определённой пользователем
 функции, возвращающей значения 0, 1, -1.


## Описание


Метод sortColumn устанавливает
 настройки сортировки для столбца.


## Комментарии


Установить сортировку для диапазона ячеек можно при помощи метода [TabSheet.sort](TabSheet.sort.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Отсортируем данные столбца с индексом
 0 по убыванию их числовых значений:


// Определим параметры сортировки
var params = { colIndex: 0, order: "desc", comparer: "number" };
// Отсортируем данные столбца с индексом 0
tabSheet.sortColumn(params);
В результате выполнения примера данные столбца с индексом 0 были отсортированы
 по убыванию их числовых значений.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
