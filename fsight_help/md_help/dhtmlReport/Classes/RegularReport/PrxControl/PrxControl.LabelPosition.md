# PrxControl.LabelPosition

PrxControl.LabelPosition
-


# PrxControl.LabelPosition


## Синтаксис


LabelPosition: [PP.AnchorStyles](dhtmlCommon.chm::/Enums/AnchorStyles.htm);


## Описание


Свойство LabelPosition определяет
 позиционирование подписи элемента управления регламентного отчета.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setLabelPosition,
 а возвращается с помощью метода getLabelPosition.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Исходный регламентный отчет должен
 содержать как минимум один элемент управления.


// Получим панель с элементами управления
view = reportBox.getDataView();
bar = view.getControlBar();
// Получим элемент управления
control = bar.getControl(1);
// Зададим расположение надписи элемента управления
control.setLabelPosition("Right");
В результате выполнения примера подпись элемента управления была отрисована
 справа от элемента управления.


См. также:


[PrxControl](PrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
