# DataAreaView.ControlBarPosition

DataAreaView.ControlBarPosition
-


# DataAreaView.ControlBarPosition


## Синтаксис


ControlBarPosition: [PP.AnchorStyles](dhtmlCommon.chm::/Enums/AnchorStyles.htm);


## Описание


Свойство ControlBarPosition
 определяет позиционирование панели элементов управления регламентного
 отчета.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setControlBarPosition,
 а возвращается с помощью метода getControlBarPosition.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Исходный регламентный отчет должен
 содержать как минимум один элемент управления.


// Получим представление области данных
view = reportBox.getDataView();
// Зададим расположение панели элементов управления
view.setControlBarPosition("Left");
В результате выполнения примера панель элементов управления была отрисована
 слева.


См. также:


[DataAreaView](DataAreaView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
