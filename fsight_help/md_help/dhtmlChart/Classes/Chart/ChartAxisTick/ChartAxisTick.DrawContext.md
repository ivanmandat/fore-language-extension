# ChartAxisTick.DrawContext

ChartAxisTick.DrawContext
-


# ChartAxisTick.DrawContext


## Синтаксис


DrawContext: CanvasRenderingContext2D;


## Описание


Свойство DrawContext определяет
 контекст области отрисовки подписи.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setDrawContext,
 а возвращается с помощью метода getDrawContext.


Контекст - объект, который предоставляет методы и свойства для отрисовки
 элементов на канве.


## Пример


Для выполнения примера необходимо наличие экземпляра класса [ChartAxisTick](ChartAxisTick.htm)
 с наименованием «axisTick» (см. «[Конструктор
 ChartAxisTick](Constructor_ChartAxisTick.htm)»). Получим параметры шрифта контекста области отрисовки
 подписи:


console.log("Параметры шрифта контекста области отрисовки: " + axisTick.getDrawContext().font);
В результате в консоль будут выведены параметры шрифта контекста области
 отрисовки подписи:


Параметры шрифта контекста области отрисовки: 16px
 Calibri


См. также:


[ChartAxisTick](ChartAxisTick.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
