# EaxDimBarView.RequestMetadata

EaxDimBarView.RequestMetadata
-


**


# EaxDimBarView.RequestMetadata


## Синтаксис


RequestMetadata: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие RequestMetadata** генерируется при отсутствии метаданных в источнике панели измерений.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Создадим обработчик события RequestMetadata, чтобы при наступлении события обновлялось все содержимое панели измерений и ее визуальное отображение:


var dimBar = expressBox.getPropertyBarView().getDimBarViewPanel();
// Покажем панель
dimBar.show();
// Раскроем панель
dimBar.expand(true);
// Обработаем событие RequestMetadata
dimBar.RequestMetadata.add(
function () {
    dimBar.refreshAll();
    dimBar.updateVisibilityDims();
});

После выполнения данного примера при наступлении события RequestMetadata будет обновляться все содержимое панели измерений и ее визуальное отображение.


См. также:


[EaxDimBarView](EaxDimBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
