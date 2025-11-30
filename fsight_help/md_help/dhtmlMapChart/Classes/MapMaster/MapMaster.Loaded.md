# MapMaster.Loaded

MapMaster.Loaded
-


**


# MapMaster.Loaded


## Синтаксис


Loaded: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Loaded** наступает при загрузке мастера.


## Пример


Для выполнения примера предполагается наличие на странице компонента [MapMaster](../../Components/MapMaster/MapMaster.htm) с наименованием «master» (см. «[Пример размещения компонентов MapMaster и EaxMasterBox](../../Components/MapMaster/MapMaster_and_EaxMasterBox.htm)»). Добавим обработчик события Loaded:


master.Loaded(function () {


   alert("Мастер загружен")


});


После выполнения примера после загрузки мастера карты на экран будет выведено соответствующее сообщение.


См. также:


[MapMaster](MapMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
