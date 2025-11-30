# TitleBox.DimTreeMode

TitleBox.DimTreeMode
-


# TitleBox.DimTreeMode


## Синтаксис


DimTreeMode: String;


## Описание


Свойство DimTreeMode определяет представление данных, для которого предназначен заголовок.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setDimTreeMode, а возвращается - с помощью метода getDimTreeMode.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TitleBox](../../../Components/Express/TitleBox/TitleBox.htm) с наименованием «titleBox» (см. «Пример создания компонента EaxTitleMaster»). Определим представление данных, для которого предназначен заголовок:


var dimTreeMode = title.getDimTreeMode();
switch (dimTreeMode) {
case "Grid":
    console.log("Это заголовок для таблицы");
    break;
case "Chart":
    console.log("Это заголовок для диаграммы");
    break;
case "BubbleChart":
    console.log("Это заголовок для пузырьковой диаграммы");
    break;
default:
    console.log("Это заголовок для неизвестного представления данных");
};

В результате выполнения примера в консоли браузера было выведено уведомление, что данный заголовок предназначен для диаграммы.


См. также:


[TitleBox](TitleBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
