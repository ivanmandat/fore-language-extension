# ScaleBase.removeItemAt

ScaleBase.removeItemAt
-


# ScaleBase.removeItemAt


## Синтаксис


removeItemAt (index: Number);


## Параметры


index. Индекс элемента шкалы.


## Описание


Метод removeItemAt удаляет [элемент шкалы](ScaleBase.Items.htm) по указанному
 индексу.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 (см. «[Размещение
 карты на HTML странице](dhtmlMapChart.chm::/Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm)
 с настройками карты и топоосновы Russia.svg.


Xml-файл должен содержать настройку показателя заливки, который расположен
 первым в списке показателей карты. Фон заливки - объект зависимости, для
 которого настроена шкала, содержащая значения типа [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm).
 Также в xml-файле должна быть [настроена
 легенда](dhtmlMapChart.chm::/Components/MapChart/xml_specification/MapChart/MapLegends/Legend_exmpl.htm) с идентификатором «MapLegend0».


Удалим первый [элемент шкалы](ScaleBase.Items.htm) и первую
 [границу интервала шкалы](ScaleBase.Values.htm).


scale
 = map.getFirstVisual().getBackground().getMapScale();


legend
 = map.getLegends().MapLegend0;


scale.removeItemAt(0);//Удаляем первый элемент шкалы


scale.removeValueAt(0);//Удаляем первую границу интервалов шкалы


legend.draw();//Перерисовываем легенду


map.draw();//Перерисовываем карту


После выполнения примера будет удален первый элемент шкалы и первая
 граница интервалов шкалы, будут перерисованы карта и легенда.


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
