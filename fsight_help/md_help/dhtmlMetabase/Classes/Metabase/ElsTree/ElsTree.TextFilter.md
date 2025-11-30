# ElsTree.TextFilter

ElsTree.TextFilter
-


# ElsTree.TextFilter


## Синтаксис


TextFilter: Object;


## Описание


Свойство TextFilter определяет
 текстовый фильтр, применяемый к элементам дерева.


## Комментарии


В интерфейсе текстовый фильтр задается в строке поиска.


Значение свойства устанавливается из JSON и с помощью метода setTextFilter(text,
 attributes, caseSensitive, wholeWordsOnly), где:


	- text. Строка поиска;


	- attributes. Массив
	 идентификаторов атрибутов, по которым осуществляется поиск;


	- caseSensitive. Учитывать
	 регистр;


	- wholeWordsOnly. Искать
	 слово целиком.


Значение свойства возвращается с помощью метода getTextFilter().


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
// Загрузим элементы дерева
TreeV.loadFirst();
// Установим текстовый фильтр
TreeV.setTextFilter("2000", ["NAME"], false, false);
В результате выполнения примера в боковой панели для отображаемого измерения
 был применен фильтр по элементу «2000».


См. также:


[ElsTree](ElsTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
