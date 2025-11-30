# PP.Prx.Ui.GridView.Rendered

PP.Prx.Ui.GridView.Rendered
-


# GridView.Rendered


## Синтаксис


Rendered function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Rendered наступает при отрисовке таблицы отчета.


## Комментарии


Отрисовка таблицы осуществляется при открытии отчета, при переходе на другой табличный лист и при обновлении данных в таблице.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (cм. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Добавим обработчик события


Rendered:


reportBox.getDataView().getGridView().Rendered.add(function (sender, args) {


       alert ("Отрисовка таблицы")


});


После выполнения примера при отрисовке таблицы на экран будет выводиться сообщение «Отрисовка таблицы».


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
