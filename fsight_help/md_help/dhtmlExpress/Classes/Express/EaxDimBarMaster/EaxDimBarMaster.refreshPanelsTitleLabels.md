# EaxDimBarMaster.refreshPanelsTitleLabels

EaxDimBarMaster.refreshPanelsTitleLabels
-


# EaxDimBarMaster.refreshPanelsTitleLabels


## Синтаксис


refreshPanelsTitleLabels();


## Описание


Метод refreshPanelsTitleLabels
 обновляет заголовки панелей.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Создадим обработчик события RequestMetadata, чтобы при наступлении
 события обновлялись заголовки панелей измерений:


var dimBarMaster = expressBox.getPropertyBarView().getDimBarMasterView();
// Покажем мастер управления отметкой
dimBarMaster.show();
// Обработаем событие RequestMetadata
dimBarMaster.RequestMetadata.add(
    function () {
        // Обновим заголовки панелей
        dimBarMaster.refreshPanelsTitleLabels();
    }
);

После выполнения данного примера при наступлении события RequestMetadata будут обновляться
 заголовки панелей измерений.


См. также:


[EaxDimBarMaster](EaxDimBarMaster.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
