# DataVisualizer.UseSelectOnRightClick

DataVisualizer.UseSelectOnRightClick
-


# DataVisualizer.UseSelectOnRightClick


## Синтаксис


UseSelectOnRightClick: Boolean;


## Описание


Свойство UseSelectOnRightClick
 определяет, разрешено ли выделение элемента с помощью правой кнопки мыши.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setUseSelectOnRightClick.


Свойство содержит значение true,
 если разрешено выделение элемента с помощью правой кнопки мыши, иначе
 - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 с наименованием «map» (см. «[Пример
 создания компонента MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart_Example.htm)»). Обработаем события
 ItemSelecting, выводя в консоль браузера
 идентификатор выбираемой области слоя карты:


// Разрешим выбирать области слоя карты с помощью правой кнопки мыши
map.setUseSelectOnRightClick(true);
// Обработаем событие ItemSelecting
map.ItemSelecting.add(function (sender, args) {
    console.log("Идентификатор выбираемой области: " + args.ItemId);
});
Далее выберем правой кнопкой мыши на карте России регион: Красноярский
 край. После этого в консоли браузера будет выведен идентификатор выбираемой
 области слоя карты:


Идентификатор выбираемой области: RU-KYA


См.
 также:


[DataVisualizer](DataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
