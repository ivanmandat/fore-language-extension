# ScaleBase.equal

ScaleBase.equal
-


# ScaleBase.equal


## Синтаксис


equal (index, isInactiveItem);


## Параметры


index. Индекс элемента шкалы;


isInactiveItem. Определяет,
 использовать ли [набор данных для подсветки](ScaleBase.ActiveItems.htm).


## Описание


Метод equal возвращает [элемент
 шкалы](ScaleBase.Items.htm) для значения, равного значению, соответствующему заданному индексу.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 (см. «[Размещение
 карты на HTML странице](dhtmlMapChart.chm::/Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](dhtmlMapChart.chm::/Components/MapChart/xml_specification/xml-specification.htm)
 с настройками карты и топоосновы Russia.svg.


Xml-файл должен содержать настройку показателя заливки, который расположен
 первым в списке показателей карты. Фон заливки - объект зависимости, для
 которого настроена шкала, содержащая значения типа [Brush](dhtmlCommon.chm::/Classes/PP/Brush/Brush.htm).


Создадим числовой редактор для выбора индекса элемента шкалы и кнопку
 для получения цветов, соответствующих значениям, равным, большим или меньшим
 значению, соответствующему заданному индексу:


 scale = map.getFirstVisual().getBackground().getMapScale();


 var
 numb = new PP.Ui.NumberEdit({


     ParentNode:
 document.body,


     MinValue: 0,


     MaxValue: scale.getCount(),//Максимальное значение редактора - количество
 элементов шкалы


     Width: 50


 })


 value = numb.getValue();


 var
 but = new PP.Ui.Button({


     ParentNode:
 document.body,


     Content: "Получить цвета по индексу",


     Click: function
 (sender, args) {


         console.log("Цвет «меньше»: " + scale.less(value).getColor()
 + " Цвет «больше»: " +
 scale.greater(value).getColor() + "
 Цвет «равно»: " + scale.equal(value).getColor())


     }


 });


После выполнения примера на странице будут размещены числовой редактор
 и кнопка «Получить цвета по индексу».
 При нажатии на кнопку в консоль браузера будут выводиться цвета в формате
 HTML, которые соответствуют значениям равным, большим и меньшим значению,
 выбранному в числовом редакторе.


См. также:


[ScaleBase](ScaleBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
