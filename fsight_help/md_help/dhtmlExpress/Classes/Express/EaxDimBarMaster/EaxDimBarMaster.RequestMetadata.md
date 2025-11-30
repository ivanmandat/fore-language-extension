# EaxDimBarMaster.RequestMetadata

EaxDimBarMaster.RequestMetadata
-


**


# EaxDimBarMaster.RequestMetadata


RequestMetadata: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata**
 генерируется при отсутствии метаданных в источнике панели измерений.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Создадим обработчик события RequestMetadata, чтобы при наступлении
 события обновлялось визуальное отображение панели измерений:


var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Покажем мастер управления отметкой
dimBarMaster.show();
// Обработаем событие RequestMetadata
dimBarMaster.RequestMetadata.add(
    function () {
        // Обновим визуальное отображение панели измерений
        dimBarMaster.updateVisibilityDims();
    }
);

После выполнения данного примера при наступлении события RequestMetadata будет обновляться
 визуальное отображение панели измерений.


См. также:


[EaxDimBarMaster](EaxDimBarMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
