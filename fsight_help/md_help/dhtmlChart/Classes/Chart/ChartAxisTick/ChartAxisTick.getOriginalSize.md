# ChartAxisTick.getOriginalSize

ChartAxisTick.getOriginalSize
-


# ChartAxisTick.getOriginalSize


## Синтаксис


getOriginalSize();


## Описание


Метод getOriginalSize возвращает
 первоначальные размеры подписи при отрисовке.


## Пример


Для выполнения примера необходимо наличие экземпляра класса [ChartAxisTick](ChartAxisTick.htm)
 с наименованием «axisTick» (см. «[Конструктор
 ChartAxisTick](Constructor_ChartAxisTick.htm)»). Получим первоначальные размеры подписи:


// Получаем первоначальные размеры созданной подписи оси
console.log("Первоначальная высота подписи: " + axisTick.getOriginalSize().Height);
console.log("Первоначальная ширина подписи: " + axisTick.getOriginalSize().Width);
В результате в консоль были выведены первоначальные размеры подписи:


Первоначальная высота подписи: 0


Первоначальная ширина подписи: 10


См. также:


[ChartAxisTick](ChartAxisTick.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
