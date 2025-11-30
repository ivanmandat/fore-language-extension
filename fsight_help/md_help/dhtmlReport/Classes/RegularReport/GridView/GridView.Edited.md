# PP.Prx.Ui.GridView.Edited

PP.Prx.Ui.GridView.Edited
-


# GridView.Edited


## Синтаксис


Edited: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Edited наступает при редактировании данных в ячейках таблицы регламентного отчета.


## Пример


Для выполнения примера предполагается наличие на html-странице [области данных](../../../Components/RegularReport/DataArea/DataArea.htm) с наименованием «dataArea» (cм. «[Пример размещения компонента DataArea](../../../Components/RegularReport/DataArea/DataArea_Example.htm)»). Добавим обработчик события Edited:


dataArea.getGridView().Edited.add(function (sender, args) {


        dataArea.getGridView().setIsEditable(false)


});


После редактирования ячейки таблицы редактировать другие ячейки таблицы будет невозможно.


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
