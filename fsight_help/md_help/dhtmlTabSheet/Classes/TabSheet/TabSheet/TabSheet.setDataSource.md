# TabSheet.setDataSource

TabSheet.setDataSource
-


**


# TabSheet.setDataSource


## Синтаксис


setDataSource(value, callback: PP.Delegate);


## Параметры


*value.* Устанавливаемый источник данных;


*callback.* Возвратная функция.


## Описание


Метод setDataSource** устанавливает новый источник данных для таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Установим новый источник данных для таблицы:


// Получим источник данных из модели таблицы
var dataSource = tabSheet.getModel().getDataSource();
// Установим новый источник данных для таблицы
tabSheet.setDataSource(dataSource);

В результате выполнения примера для таблицы был установлен новый источник данных.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
