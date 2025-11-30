# ControlBarView.Orientation

ControlBarView.Orientation
-


# ControlBarView.Orientation


## Синтаксис


Orientation: PP.[Orientation](dhtmlCommon.chm::/Enums/PP.Orientation.htm);


## Описание


Свойство Orientation определяет
 ориентацию панели элементов управления регламентного отчета.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setOrientation,
 а возвращается с помощью метода getOrientation.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Исходный регламентный отчет должен
 содержать как минимум один элемент управления.


// Получим панель с элементами управления
view = reportBox.getDataView();
bar = view.getControlBar();
// Зададим ориентацию панели элементов управления
bar.setOrientation("Vertical");
В результате выполнения примера элементы управления были отрисованы
 вертикально.


См. также:


[ControlBarView](ControlBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
