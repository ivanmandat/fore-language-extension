# Конструктор TotalsPanel

Конструктор TotalsPanel
-


**


# Конструктор TotalsPanel


## Синтаксис


PP.Exp.Ui.TotalsPanel(settings);


## Параметры


*settings.* JSON-объект со значениями свойств класса.


## Описание


Конструктор TotalsPanel** создает экземпляр класса **TotalsPanel**.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Далее создадим вкладку «Итоги», добавим ее на панель свойств экспресс-отчета и определим значения флагов «Рассчитывать итоги по иерархии» и «Рассчитывать итоги по уровням»:


// Получим панель свойств экспресс-отчета
var propBar = expressBox.getPropertyBarView().getControl();
// Создадим вкладку «Итоги»
var totalsPanel = new PP.Exp.Ui.TotalsPanel({
    Source: expressBox.getSource(), // Источник данных для вкладки "Итоги"
    Id: PP.Exp.Ui.ControlType.Totals,
    GroupName: PP.Exp.Ui.PropertyGroups.Table,
    IsHeaderControlVisible: false,
    ViewType: PP.Ui.NavigationItem
});
// Добавим вкладку «Итоги» на панель свойств
propBar.addItem(totalsPanel);
// Развернём панель «Итоги»
totalsPanel.expand();
// Сделаем элементы контейнера панели доступными
totalsPanel._Container.setEnabled(true);
// Получим значения элемент управления типа «флажок» на вкладке «Итоги»
var state = totalsPanel.getState();
console.log("Значение признака «Рассчитывать итоги по иерархии»: " + state.byHierarchy);
console.log("Значение признака «Рассчитывать итоги по уровням»: " + state.byLevels);

В результате выполнения примера на панель свойств экспресс-отчета была добавлена вкладка «Итоги»:


![](../../../TotalsPanel.png)


В консоли браузера были выведены значения признаков «Рассчитывать итоги по иерархии» и «Рассчитывать итоги по уровням»:


Значение признака «Рассчитывать итоги по иерархии»: true


Значение признака «Рассчитывать итоги по уровням»: true


См. также:


[TotalsPanel](TotalsPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
