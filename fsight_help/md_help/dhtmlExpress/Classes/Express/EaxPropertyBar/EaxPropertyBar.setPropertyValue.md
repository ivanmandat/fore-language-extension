# EaxPropertyBar.setPropertyValue

EaxPropertyBar.setPropertyValue
-


**


# EaxPropertyBar.setPropertyValue


## Синтаксис


setPropertyValue(propertyName, value);


## Параметры


*propertyName. Наименование свойства;*


*value. Значение, которое будет присвоено указанному свойству.*


## Описание


Метод setPropertyValue** управляет доступностью панелей «Преобразовать данные» и «Отобразить как ранги» на вкладке «Данные» панели свойств экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [EaxPropertyBar](../../../Components/Express/EaxPropertyBar/EaxPropertyBar.htm) с наименованием «eaxPropBar» (см. «[Пример совместного размещения EaxPropertyBar и EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)»). Отобразим и развернём панель «Данные», пункты «Преобразовать данные» и «Отобразить как ранги» сделаем недоступными, а также обработаем событие [PropertyChanged](EaxPropertyBar.PropertyChanged.htm):


// Обработаем событие PropertyChanged
eaxPropBar.PropertyChanged.add(function (sender, args) {
    console.log("Наименование свойства: %s", args.getPropertyName());
});
// Получим панель «Данные»
var dataPanel = eaxPropBar.getDataPanel();
// Отобразим и развернём данную панель
dataPanel.show();
dataPanel.expand();
// Сделаем пункты «Преобразовать данные» и «Отобразить как ранги» недоступными
eaxPropBar.setPropertyValue(PP.Exp.Ui.EaxPropertyViews.GridChangeData, false);

В результате выполнения примера была отображена и развёрнута панель «Данные», пункты «Преобразовать данные» и «Отобразить как ранги» стали недоступными:


![](EaxPropertyBar_setPropertyValue.png)


Вручную выберем другое значение из раскрывающегося списка «Фильтровать по значениям таблицы». После этого в консоли браузера будет выведено наименование изменившегося свойства:


Наименование свойства: Filter


См. также:


[EaxPropertyBar](EaxPropertyBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
