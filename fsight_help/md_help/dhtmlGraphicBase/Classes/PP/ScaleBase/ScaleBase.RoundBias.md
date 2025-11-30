# ScaleBase.RoundBias

ScaleBase.RoundBias
-


# ScaleBase.RoundBias


## Синтаксис


RoundBias: Number;


## Описание


Свойство RoundBias определяет
 максимально допустимое значение разницы между исходным значением шкалы
 и значением шкалы при округлении.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setRoundBias,
 а возвращается с помощью метода getRoundBias.


Значение свойства рассчитывается в процентном соотношении к разнице
 между значениями свойств [ScaleBase.MaxValue](ScaleBase.MaxValue.htm)
 и [ScaleBase.MinValue](ScaleBase.MinValue.htm).


При значении свойства в интервале от 0 до 1 значение шкалы будет округляться
 в меньшую или большую сторону соответственно.


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


Создадим массив с данными и рассчитаем интервалы шкалы на его основе.


// Создадим массив данных
data = [0.01, 2, 3, 4, 5, 6, 7, 8, 9, 99.22];
// Зададим количество элементов
var count = data.length;
var scale = map.getFirstVisual().getColorMapping().getScale();
// Зададим и установим минимальное значение
var min = 0;
scale.setMinValue(min);
// Зададим и установим максимальное значение
var max = 99.3;
scale.setMaxValue(max);
scale.setMode("Uniform");// выберем разбиение на интервалы в режиме «Равные интервалы»
scale.setRecalcValues(true); //пересчитаем коллекцию значений шкалы
scale.setRoundBias(1); // установим округление значений в большую сторону
// Построим шкалу по новым данным
scale.constructScaleElements(data);
legend = map.getLegends().FirstLegend;
// Отрисуем легенду
legend.draw();
В результате выполнения примера значения шкалы легенды были округлены
 в большую сторону.


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
