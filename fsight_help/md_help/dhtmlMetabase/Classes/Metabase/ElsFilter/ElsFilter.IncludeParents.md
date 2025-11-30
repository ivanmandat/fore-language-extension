# ElsFilter.IncludeParents

ElsFilter.IncludeParents
-


# ElsFilter.IncludeParents


## Синтаксис


IncludeParents: Boolean;


## Описание


Свойство IncludeParents определяет
 включение родительских элементов в результат фильтрации.


## Комментарии


Значение свойства устанавливается из JSON. Значение свойства возвращается
 с помощью метода getIncludeParents().


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). На боковой панели
 должна быть выбрана вкладка календарного измерения, установим для измерения
 текстовый фильтр:


// Получим боковую панель
PropBar = expressBox.getPropertyBarView();
// Получим элемент управления боковой панели
Control = PropBar.getControl();
// Получим вкладку боковой панели
Panel = Control.getActiveItem();
// Получим представление дерева элементов измерения
TreeV = Panel.getDimTreeView();
// Зададим фильтр по атрибуту NAME
TreeV.setTextFilter("2000", ["NAME"], true, true);
// Получим фильтр измерения
Filter = TreeV.getCurrentFilter();
// Получим и выведем в консоль различные параметры фильтра
console.debug("Параметры фильтрации:\nВключать родителей: " + Filter.getIncludeParents() +
"\nВключать родителей и соседей: " + Filter.getIncludeParentsWithSiblings() +
"\nПоиск по идентификаторам: " + Filter.getTextAttributes() +
"\nУчитывать регистр: " + Filter.getTextCaseSensitive() +
"\nФильтрация по строке: " + Filter.getTextValue() +
"\nПоиск по целым словам: " + Filter.getTextWholeWordsOnly()
);
// Получим обработчик генерации JSON
Filter.getMbJSONDelegate();
// Сгенерируем параметры фильтрации в виде JSON объекта
console.debug(JSON.stringify(Filter.getFilterJSON(), null, 2));
// Получим и установим хеш-строку параметров фильтрации
cHash = Filter.getHash();
Filter.setCustomHash(cHash);
// Проверим был ли установлен пользовательский хеш
console.debug(Filter.isCustomHash() ? "Установлен пользовательский хеш" : "Хеш вычисляется из параметров");
В результате выполнения примера был установлен фильтр измерения, в консоль
 были выведены различные параметры фильтрации.


См. также:


[ElsFilter](ElsFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
