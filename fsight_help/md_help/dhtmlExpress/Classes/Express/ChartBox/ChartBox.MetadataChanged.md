# ChartBox.MetadataChanged

ChartBox.MetadataChanged
-


**


# ChartBox.MetadataChanged


## Синтаксис


MetadataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MetadataChanged** наступает после изменения метаданных диаграммы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ChartBox](../../../Components/Express/ChartBox/ChartBox.htm) с наименованием «chartBox» (см. «[Пример создания компонента ChartBox](../../../Components/Express/ChartBox/ChartBox_Example.htm)»). Обработаем событие MetadataChanged:


// Обрабатываем событие MetadataChanged
chartBox.MetadataChanged.add(
    function() {
        console.log("Метаданные диаграммы экспресс-отчета изменены.");
    }
);
// Вызовем событие MetadataChanged
chartBox.MetadataChanged.fire(this);

В результате выполнения примера после наступления события MetadataChanged в консоли браузера будет выводиться сообщение о том, что метаданные диаграммы экспресс-отчета изменены.


См. также:


[ChartBox](ChartBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
