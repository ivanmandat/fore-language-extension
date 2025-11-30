# Конструктор Color

Конструктор Color
-


# Конструктор Color


## Синтаксис


PP.Color (r_hex, g, b)


## Параметры


r_hex. Либо
 красная компонента цвета от 0 до 255, либо строка с названием цвета ("white"),
 либо строка со значением цвета
 в шестнадцатиричном формате со знаком решетки в начале ("#FFFFFF");


g. Зеленя
 компонента цвета от 0 до 255;


b. Синяя
 компонента цвета от 0 до 255.


## Описание


Конструктор Color создает экземпляр
 класса [Color](Color.htm).


## Комментарии


Если для параметра r_hex задается
 строковое значение, остальные параметры не используются.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [MapChart](dhtmlMapChart.chm::/components/mapchart/mapchart.htm)
 с наименованием «map» (см. «[Размещение
 карты на HTML странице](dhtmlMapChart.chm::/components/mapchart/html_layout.htm)»). Добавим обработчик события [MapChart.Loaded](dhtmlMapChart.chm::/Classes/map/mapchart/mapchart.loaded.htm):
 при загрузке карты будет изменяться ее фон:


        //Пример 1
	map.Loaded.add(function () {
	    var color = new PP.Color(255, 218, 185)
	    map.setBackground(new PP.SolidColorBrush({Color: color}))
	});
       // Пример 2
         map.Loaded.add(function () {
            var color = new PP.Color("lavender")
	    map.setBackground(new PP.SolidColorBrush({Color: color}))
	});
	//Пример 3
	map.Loaded.add(function () {
	    var color = new PP.Color("#BEBEBE")
	    map.setBackground(new PP.SolidColorBrush({Color: color}))
	});

После выполнения примера изменится цвет фона карты.


Примечание.
 Цвет кисти ([SolidColorBrush.Color](../SolidColorBrush/SolidColorBrush.Color.htm))
 можно задавать как строку (см. пример на странице «[Констуктор
 SolidColorBrush](../SolidColorBrush/Constructor_SolidColorBrush.htm)»).


См. также:


[Color](Color.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
