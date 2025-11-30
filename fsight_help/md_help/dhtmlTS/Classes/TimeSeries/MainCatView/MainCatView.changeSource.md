# MainCatView.changeSource

MainCatView.changeSource
-


# MainCatView.changeSource


## Синтаксис


changeSource(rubKey: Number, text: String, isCube: Boolean);


## Параметры


rubKey. Ключ каталога показателей;


text. Наименование выбранного источника;


isCube. Признак того, что выбран куб.


## Описание


Метод changeSource изменяет источник данных рабочей книги.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Предполагается также наличие в репозитории базы данных временных рядов с ключом каталога показателей «3014», который в следующем примере будет установлен в качестве источника данных рабочей книги:


// Получим ленту инструментов
var ribbon = workbookBox.getRibbonView();
// Получим вкладку «Главная»
var mainCatView = ribbon.getMainCategory();
// Определим ключ каталога показателей нового источника данных
var rubKey = 3014;
// Установим новый источник данных
mainCatView.changeSource(rubKey, "Тест", false);

В результате выполнения примера для текущей рабочей книги был установлен источник данных с ключом каталога показателей «3014».


См. также:


[MainCatView](MainCatView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
