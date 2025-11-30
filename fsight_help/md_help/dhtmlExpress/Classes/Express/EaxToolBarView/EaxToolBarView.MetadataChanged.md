# EaxToolBarView.MetadataChanged

EaxToolBarView.MetadataChanged
-


# EaxToolBarView.MetadataChanged


## Синтаксис


MetadataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MetadataChanged наступает при изменении данных в представлении группы кнопок, используемых для переключения режима отображения данных.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обработаем событие MetadataChanged:


// Получим представление группы кнопок для выбора режима отображения данных
var toolBar = expressBox.getDataView().getToolBarView();
toolBar.MetadataChanged.add(
function() {
     // Обновляем группу кнопок
     toolBar.refreshAll();
}
);

В результате выполнения примера при каждом наступлении события MetadataChanged будет обновляться вся группа кнопок, используемых для переключения режима отображения данных.


См. также:


[EaxToolBarView](EaxToolBarView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
