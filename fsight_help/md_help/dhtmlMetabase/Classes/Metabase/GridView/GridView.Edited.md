# PP.Mb.Ui.GridView.Edited

PP.Mb.Ui.GridView.Edited
-


# GridView.Edited


## Синтаксис


Edited: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии;


timeout. Промежуток времени
 в миллисекундах, через который вызовется событие.


## Описание


Событие Edited наступает после
 редактирования данных таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей
 в рабочей области экспресс-отчета.


 Обработаем и вызовем события [StructureChanged](GridView.StructureChanged.htm)
 и Edited. Загрузим файл ресурсов, определим список стилей и загрузим их:


// Получим таблицу экспресс-отчета
var grid = expressBox.getDataView().getGridView();
// Обработаем событие Edited
grid.Edited.add(function (sender, args, timeout) {
    console.log("Инициировано событие Edited");
});
// Обработаем событие StructureChanged
grid.StructureChanged.add(function (sender, args, timeout) {
    console.log("Инициировано событие StructureChanged");
});
// Вызовем обработанные события
grid.Edited.fire(this);
grid.StructureChanged.fire(this);
// Загрузим файл ресурсов
grid.loadFile("../resources/resources.ru.js");
// Определим стили для загрузки
var styles = PP.CSSPath + "settings.css;" + PP.CSSPath + "PP.css";
grid._FileStyles = styles;
// Загрузим стили
grid.loadFiles();
После выполнения примера были загружены файлы ресурсов и стилей, в результате
 чего изменилось оформление таблицы. Также в консоли браузера были выведены
 сообщения о вызове обработанных событий:


Инициировано событие Edited


Инициировано событие StructureChanged


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
