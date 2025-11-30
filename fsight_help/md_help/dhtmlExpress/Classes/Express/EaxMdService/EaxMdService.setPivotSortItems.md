# EaxMdService.setPivotSortItems

EaxMdService.setPivotSortItems
-


**


# EaxMdService.setPivotSortItems


## Синтаксис


setPivotSortItems(report: [PP.Exp.EaxDocument](../EaxDocument/EaxDocument.htm),
 *metadata*: Object, callback: PP.Delegate);


## Параметры


*report.* Документ экспресс-отчёта;


*metadata.* Метаданные, содержащие информацию о сортируемых элементах
 таблицы экспресс-отчёта;


*callback.* Функция обратного вызова на получение метаданных отчёта.


## Описание


Метод setPivotSortItems**
 задает параметры для [области
 действия правила](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm) сортировки таблицы экспресс-отчёта.


## Пример


Для выполнения примера:


	- Создайте html-страницу.


	- Добавьте компонент
	 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
	 с наименованием «expressBox» (см. «[Пример
	 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


	- Перейдите на
	 [таблицу](UiAnalyticalArea.chm::/Table.htm)
	 экспрес-отчёта.


	- Нажмите кнопку
	 «Добавить» в [правилах
	 сортировки](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm) таблицы.


	- Задайте в консоли
	 параметры для [области
	 действия правила](UiAnalyticalArea.chm::/Working_with_table_data/Sorting_table_data.htm):


var dataView = expressBox.getDataView();
var service = dataView.getService();
// Получим документ экспресс-отчёта
var report = expressBox.getSource();
// Зададим параметры сортировки таблицы по второму столбцу и по возрастанию
var metadata = {
    "method":"Set",
    "rules": [{
        key: 21,
        index: 2,
        kind: "Column",
        direction: "Asc"
        }]
};
var callback = function (sender, args) {
    // Обновим экспресс-отчёт
    expressBox.refreshAll();
};
// Применим параметры сортировки
service.setPivotSortItems(report, metadata, callback);
В результате выполнения примера таблица экспрес-отчёта отсортируется
 по второму столбцу и по возрастанию.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
