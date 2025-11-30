# MapChart.HoveredBars

MapChart.HoveredBars
-


# MapChart.HoveredBars


## Синтаксис


HoveredBars: Object;


## Описание


Свойство HoveredBars определяет
 массив столбиковых показателей, для которых установлено наведение.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setHoveredBars,
 а возвращается с помощью метода getHoveredBars.


Свойство содержит объект формата: {<[bar_id](../BarVisual/BarVisual.htm)>: {<mapping_id>:
 true}}.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map», содержащий столбиковые показатели (см. «[Конструктор
 MapBar](../MapBar/Constructor_MapBar.htm)»):


// Получим случайный столбиковый показатель
bar = mapBar.getLayer().getMapBarCollection()[3];
// Установим видимость
bar.setIsVisible(true);
map.refresh();
// Получим идентификатор столбикового показателя
barId = bar.getId();
// Получим идентификатор дата маппинга
barV = bar.getVisual();
dMapId = barV.getColorMappingsId();
// Выделим столбиковый показатель
selBar = {};
selBar[barId] = {};
selBar[barId][dMapId] = true;
map.setSelectedBars(selBar);
// Проверим признак наведения на столбиковые показатели
console.debug(map.getHoveredBars());
В результате выполнения примера было установлено выделение на столбиковый
 показатель с индексом 3. В консоль были выведены идентификаторы столбиковых
 показателей, к которым применено наведение (наведен курсор мыши).


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
