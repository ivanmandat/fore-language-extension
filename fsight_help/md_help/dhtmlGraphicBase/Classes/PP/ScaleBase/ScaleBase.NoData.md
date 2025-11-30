# ScaleBase.NoData

ScaleBase.NoData
-


# ScaleBase.NoData


## Синтаксис


NoData: PP.[Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm)


## Описание


Свойство NoData устанавливает
 элемент шкалы, соответствующий отсутствию данных.


## Комментарии


Значение свойства - идентификатор объекта, описанного в словаре элементов,
 или полноценное описание объекта, возвращаемого при отсутствии данных.


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


При загрузке карты изменим цвет элемента шкалы, который соответствует
 отсутствию данных, и добавим обработчик события [ScaleBase.ItemsChanging](ScaleBase.ItemsChanging.htm):


        function scaleSet()
 {


            scale
 = map.getFirstVisual().getBackground().getMapScale();


            legend
 = map.getLegends().MapLegend0;


            legend.show();//Отобразим легенду


            scale.setNoData(new PP.SolidColorBrush({


                Color:
 "Yellow"


            }));


            scale.ItemsChanging.add(function (sender,
 args) {


                alert("Установлен новый цвет для NoData")


            })


        }


        map.Loaded.add(scaleSet);


После выполнения примера для элемента шкалы, соответствующего отсутствию
 данных будет установлен желтый цвет, при этом на экран будет выведено
 соответствующее сообщение.


Пример использования свойства из JSON приведен на странице «[Пример
 настройки списка шкал](dhtmlMapChart.chm::/Components/MapChart/xml_specification/MapChart/ItemsDictionary/MapScale/MapScale_exmpl.htm)».


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
