# WebGLControl.loadTexture

WebGLControl.loadTexture
-


# WebGLControl.loadTexture


## Синтаксис


loadTexture(url: String);


## Параметры


url. Адрес текстуры.


## Описание


Метод loadTexture загружает
 текстуру.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 c наименованием «map» (см. «[Пример
 создания компонента MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart_Example.htm)»). Необходимо открыть сферическую карту.
 Установим обработчик события [TextureLoaded](WebGLControl.TextureLoaded.htm)
 и загрузим текстуру:


// Получаем элемент управления сферической карты
var control = map.getGLControl();
// Устанавливаем обработчик события TextureLoaded
control.TextureLoaded.add(function(sender, args) {
    console.log("Загружена текстура");
});
// Загружаем текстуру
control.loadTexture("../../build/img/Earth.png");
В результате в консоль будет выведена информация о загрузке текстуры:


Загружена текстура


См. также:


[WebGLControl](WebGLControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
