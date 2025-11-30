# DataAreaView.getStackPanel

DataAreaView.getStackPanel
-


# DataAreaView.getStackPanel


## Синтаксис


getStackPanel() : PP.Ui.[StackPanel](dhtmlUi.chm::/Classes/StackPanel/StackPanel.htm);


## Описание


Метод getStackPanel возвращает
 контейнер, содержащий объекты области данных и настройки их расположения.


## Комментарии


Метод возвращает объект типа PP.Ui.[StackPanel](dhtmlUi.chm::/Classes/StackPanel/StackPanel.htm),
 содержащий объекты области данных, например, панель элементов управления
 PP.Prx.Ui.[ControlBar](../ControlBar/ControlBar.htm) и таблицу
 данных PP.Prx.Ui.[GridBox](../GridBox/GridBox.htm), и настройки
 их расположения.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Исходный регламентный отчет должен
 содержать как минимум один элемент управления.


// Получим представление области данных
view = reportBox.getDataView();
// Получим контейнер объектов области данных
sPanel = view.getStackPanel();
// Зададим вертикальное расположение элементов
sPanel.setIsHorisontal(true);
В результате выполнения примера элементы были отрисованы вертикально.


См. также:


[DataAreaView](DataAreaView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
