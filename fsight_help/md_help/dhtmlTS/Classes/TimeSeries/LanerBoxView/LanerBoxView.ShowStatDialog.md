# LanerBoxView.ShowStatDialog

LanerBoxView.ShowStatDialog
-


# LanerBoxView.ShowStatDialog


## Синтаксис


ShowStatDialog: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ShowStatDialog наступает
 при отображении диалога «Статистические характеристики».


## Параметры


Диалог «Статистические характеристики» отображается, используя контекстное
 меню, если рабочая книга используется в качестве блока аналитической панели.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm)
 с наименованием «workbookBox» (см. «[Пример
 создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Обработаем событие ShowStatDialog:


// Получим область данных рабочей книги
var dataView = workbookBox.getDataView();
// Получим таблицу рабочей книги
var lanerBoxView = dataView.getGridView();
// Обработаем событие ShowStatDialog
lanerBoxView.ShowStatDialog.add(function (sender, args) {
    console.log("Аргументы события: ");
    console.log(args);
});
// Инициируем событие
lanerBoxView.ShowStatDialog.fire(this);

После выполнения примера при отображении диалога «Статистические характеристики»
 в консоль будут выведены аргументы события.


См. также:


[LanerBoxView](LanerBoxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
