# PP.Mb.Ui.GridView.PictureMouseDown

PP.Mb.Ui.GridView.PictureMouseDown
-


**


# GridView.PictureMouseDown


## Синтаксис


PictureMouseDown: function(sender, args, timeout);


## Параметры


sender. Источник события;


args. Информация о событии.
 Доступные аргументы: rowIndex - индекс строки ячейки, в которой
 находится нажатый значок, colIndex - индекс столбца таблицы данной ячейки,
 event - событие нажатия курсора мыши на значок;


timeout. Промежуток времени
 в миллисекундах, через который вызовется событие.


## Описание


Событие PictureMouseDown**
 наступает при нажатии на картинку внутри ячейки таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей
 в рабочей области экспресс-отчета. До выполнения примера таблица экспресс-отчета
 выглядит так, как показано на странице [описания
 класса GridView](GridView.htm).


Обработаем событие нажатия на значок курсором мыши PictureMouseDown
 и получим координаты ячейки с этим значком:


// Получим таблицу экспресс-отчёта
var gridView = expressBox.getDataView().getGridView();
// Обработаем событие PictureMouseDown
gridView.PictureMouseDown.add(function (sender, args) {
    console.log("Координаты ячейки с нажатым значком: (" +
        args.rowIndex + ", " + args.colIndex + ")");
});
В результате выполнения примера при нажатии курсором мыши на значок
 в ячейке таблицы B0 в консоли браузера будут выведены координаты ячейки
 с этим значком:


Координаты ячейки со значком: (0, 1)


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
