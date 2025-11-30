# MapShape.IsHandCursor

MapShape.IsHandCursor
-


# MapShape.IsHandCursor


## Синтаксис


IsHandCursor: Boolean;


## Описание


Свойство IsHandCursor определяет, отображается ли указатель мыши в режиме «Выбор ссылки» при наведении на область слоя карты.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setIsHandCursor, а возвращается с помощью метода getIsHandCursor.


Если свойство равно значению true, то указатель мыши при наведении на область слоя карты будет отображаться в режиме «Выбор ссылки» (![](../MapChart/MapChart_IsHandCursor_1.png)), если значению false (по умолчанию), то в основном режиме (![](../MapChart/MapChart_IsHandCursor_2.png)).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Пример создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»). Разрешим указателю мыши при наведении его на область слоя карты с идентификатором «RU-KYA» переключаться в режим «Выбор ссылки»:


// Определим функцию для обновления указателя мыши
var refreshCursor = function (shape) {
    if (shape.getIsHandCursor()) {
        // Режим «Выбор ссылки»
        shape.getDomNode().style.cursor = 'pointer';
    } else {
        // Основной режим указателя мыши
        shape.getDomNode().style.cursor = 'default';
    }
};
// Получим область слоя карты с идентификатором «RU-KYA»
var shape = map.getShape("RU-KYA");
// Разрешим отображение указателя мыши в режиме «Выбор ссылки»
shape.setIsHandCursor(true);
// Обновим указатель мыши
this.refreshCursor(shape);

В результате выполнения примера указатель мыши при наведении его на область слоя карты с идентификатором «RU-KYA» будет отображаться в режиме «Выбор ссылки»:


![](../MapChart/MapChart_IsHandCursor_3.png)


См. также:


[MapShape](MapShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
