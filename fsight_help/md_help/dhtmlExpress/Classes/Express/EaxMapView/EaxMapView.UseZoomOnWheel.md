# EaxMapView.UseZoomOnWheel

EaxMapView.UseZoomOnWheel
-


**


# EaxMapView.UseZoomOnWheel


## Синтаксис


UseZoomOnWheel: Boolean


## Описание


Свойство UseZoomOnWheel** содержит признак использования колесика мыши для масштабирования карты экспресс-отчета.


## Комментарии


Значение свойства можно установить с помощью метода set**UseZoomOnWheel** и из JSON, а возвратить - с помощью метода get**UseZoomOnWheel**.


Свойство содержит true, если колесико мыши используется для масштабирования карты, и false, если не используется. По умолчание значение свойства равно true.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной картой в рабочей области. Отключим возможность использования колесика мыши для масштабирования карты экспресс-отчета и обработаем событие MetadataChanged:


// Получим представление карты экспресс-отчета
var eaxMapView = expressBox.getDataView().getMapView();
eaxMapView.MetadataChanged.add(
    function(sender, args) {
        var changedSettings = args.ChangedSettings;
        if(changedSettings != null) {
            console.log("Измененные свойства: ");
            for(var n in changedSettings) {
                // Получим наименование и значение свойства
                console.log(changedSettings[n].Name + ": " + changedSettings[n].Value);
            }
        }
    }
);
eaxMapView.setUseZoomOnWheel(false);

В результате выполнения примера будет отменена возможность использования колесика мыши для масштабирования карты экспресс-отчета, а в консоли браузера будут выведены наименование и значение измененной настройки карты после срабатывания события MetadataChanged:


Измененные свойства:

mapmaster.mainpanel.usezoomonwheel: false


См. также:


[EaxMapView](EaxMapView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
