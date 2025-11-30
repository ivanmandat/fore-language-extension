# TabSheetDataSource.IsAsync

TabSheetDataSource.IsAsync
-


# TabSheetDataSource.IsAsync


## Синтаксис


IsAsync: Boolean


## Описание


Свойство IsAsync определяет,
 используется ли асинхронная загрузка данных таблицы.


## Комментарии


Значение свойства устанавливается из JSON и при помощи метода
 setIsAsync, а возвращается при
 помощи метода getIsAsync.


Если для свойства установлено значение true
 (по умолчанию), данные таблицы будут загружаться асинхронно. Если установлено
 значение false, данные будут загружаться
 синхронно.


Используйте синхронную загрузку, если необходимо, чтобы все данные таблицы
 загружались сразу при открытии отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей в рабочей
 области экспресс-отчета. Установим синхронную загрузку данных:


grid = expressBox.getDataView().getGridView();
tSource = grid.getTableSource();
tSource.setIsAsync(false);
После выполнения примера для таблицы экспресс-отчета будет установлена
 синхронная загрузка данных.


См. также:


[TabSheetDataSource](TabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
