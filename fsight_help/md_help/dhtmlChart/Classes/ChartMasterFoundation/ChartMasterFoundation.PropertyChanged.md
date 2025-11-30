# ChartMasterFoundation.PropertyChanged

ChartMasterFoundation.PropertyChanged
-


**


# ChartMasterFoundation.PropertyChanged


## Синтаксис


PropertyChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие PropertyChanged наступает при изменении настроек мастера**.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ChartMaster](../../Components/ChartMaster/ChartMaster.htm)
 с наименованием «master» (см. «[Пример
 размещения компонентов MapMaster и EaxMasterBox](dhtmlMapChart.chm::/Components/MapMaster/MapMaster_and_EaxMasterBox.htm)»). Добавим обработчик
 события PropertyChanged:


master.PropertyChanged(function
 () {


   alert("Настройки
 изменены")


});


После выполнения примера после изменении какой-либо настройки мастера
 на экран будет выведено сообщение «Настройки изменены».


См. также:


[ChartMasterFoundation](ChartMasterFoundation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
