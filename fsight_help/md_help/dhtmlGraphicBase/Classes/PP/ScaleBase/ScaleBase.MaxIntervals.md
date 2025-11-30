# ScaleBase.MaxIntervals

ScaleBase.MaxIntervals
-


# ScaleBase.MaxIntervals


## Синтаксис


MaxIntervals: Number;


## Описание


Свойство MaxIntervals определяет
 максимальное количество интервалов шкалы.


## Комментарии


По умолчанию максимальное значение интервалов шкалы равно 25.


Значение свойства можно установить только из JSON, а возвратить - с
 помощью метода getMaxIntervals.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 (см. «[Размещение
 карты на HTML странице](dhtmlMapChart.chm::/Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm)
 с настройками карты и топоосновы Russia.svg.


Xml-файл должен содержать настройку показателя заливки, который расположен
 первым в списке показателей карты. Фон заливки - объект зависимости, для
 которого настроена шкала, содержащая значения типа [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm).


Выведем сообщение с максимальным количеством интервалов шкалы и типом
 элементов шкалы:


function scaleSet() {
    scale = map.getFirstVisual().getBackground().getMapScale();
    alert("Максимальное количество интервалов шкалы: " + scale.getMaxIntervals() + ". Тип элемента шкалы: " + scale.getTypeArguments());
};
map.Loaded.add(scaleSet);
После выполнения примера при загрузке карты на экран будет выводиться
 сообщение с максимальным количеством интервалов шкалы и типом элементов
 шкалы.


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
