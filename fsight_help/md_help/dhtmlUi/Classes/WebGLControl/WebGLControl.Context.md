# WebGLControl.Context

WebGLControl.Context
-


# WebGLControl.Context


## Синтаксис


Context: WebGLRenderingContext


## Описание


Свойство Context определяет
 область отрисовки карты.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 c наименованием «map» (см. «[Пример
 создания компонента MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart_Example.htm)»). Необходимо открыть сферическую карту.
 Получаем размер области отрисовки карты:


// Получаем элемент управления сферической карты
var control = map.getGLControl();
// Получаем размер области
console.log("Ширина области: " + control.getContext().drawingBufferWidth);
console.log("Высота области: " + control.getContext().drawingBufferHeight);
В результате в консоль будет выведен размер области отрисовки карты:


Ширина области: 804


Высота области: 379


См. также:


[WebGLControl](WebGLControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
