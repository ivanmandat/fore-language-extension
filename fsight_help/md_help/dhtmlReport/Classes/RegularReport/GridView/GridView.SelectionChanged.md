# PP.Prx.Ui.GridView.SelectionChanged

PP.Prx.Ui.GridView.SelectionChanged
-


# GridView.SelectionChanged


## Синтаксис


SelectionChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие SelectionChanged наступает при изменении выделенного диапазона ячеек.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (cм. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Добавим


обработчик события SelectionChanged:


reportBox.getDataView().getGridView().SelectionChanged.add(function (sender, args) {


     alert ("Изменен выделенный диапазон")


);


После выделения диапазона ячеек таблицы на экран будет выдаваться сообщение «Изменен выделенный диапазон».


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
