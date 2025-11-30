# EaxCategoryView.refreshAll

EaxCategoryView.refreshAll
-


**


# EaxCategoryView.refreshAll


## Синтаксис


refreshAll();


## Описание


Метод refreshAll** обновляет
 все содержимое вкладки ленты инструментов.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). В приведенном ниже примере выводятся
 наименования элементов для различных меню на ленте инструментов:


// Получим представление вкладки «Таблица»
var categoryView= expressBox.getRibbonView().getTableCategory();
// Добавляем обработчик события обновления вкладки
category.Refreshed.add(function(sender, args) {
    console.log("Вкладка «Таблица» обновлена");
});
categoryView.refreshAll();
category.Refreshed.fire(category);
В результате выполнения примера будет обновлено все содержимое вкладки
 ленты инструментов экспресс-отчета. В консоль будет выведено сообщение
 об обновлении вкладки:


Вкладка «Таблица» обновлена


См. также:


[EaxCategoryView](EaxCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
