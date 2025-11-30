# DataPanel.getDataViewState

DataPanel.getDataViewState
-


**


# DataPanel.getDataViewState


## Синтаксис


getDataViewState();


## Описание


Метод getDataViewState** возвращает объект со значениями, определяемыми элементами управления в разделе «Преобразовать данные» на вкладке «Данные».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [EaxPropertyBar](../../../Components/Express/EaxPropertyBar/EaxPropertyBar.htm) с наименованием «eaxPropBar» (см. «[Пример совместного размещения EaxPropertyBar и EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)»). Далее получим объект класса DataPanel, покажем соответствующую вкладку, раскроем её и выведем массивы значений, определяемых элементами управления на ней:


var dataPanel = eaxPropBar.getDataPanel(); // Получаем вкладку "Данные"
dataPanel.show(); // Показываем вкладку
dataPanel.expand(true); // Раскрываем вкладку
// Получим массив значений для раздела "Преобразовать данные"
console.log(dataPanel.getDataViewState());
// Получим массив значений для раздела "Фильтровать по значениям таблицы"
console.log(dataPanel.getFilterState());
// Получим массив значений для раздела "Агрегировать данные в фикс. измерениях"
console.log(dataPanel.getPivotState());
// Получим массив значений для раздела "Отобразить как ранги"
console.log(dataPanel.getRankState());
// Получим массив значений для раздела "Фильтровать по значениям таблицы "
// и "Агрегировать данные в фикс. измерениях"
console.log(dataPanel.getState());

После выполнения данного примера будут выведены массивы значений, определяемых элементами управления на вкладке «Данные».


См. также:


[DataPanel](DataPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
