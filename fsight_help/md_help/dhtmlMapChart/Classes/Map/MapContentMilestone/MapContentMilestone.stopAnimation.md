# MapContentMilestone.stopAnimation

MapContentMilestone.stopAnimation
-


# MapContentMilestone.stopAnimation


## Синтаксис


stopAnimation();


## Описание


Метод stopAnimation останавливает воспроизведение анимации значка слоя карты.


## Пример


Для выполнения примера необходимо наличие на html-странице объекта класса [MapContentMilestone](MapContentMilestone.htm) с наименованием «milestone» (см. страницу описания метода [MapContentMilestone.getMilestonePosition](MapContentMilestone.getMilestonePosition.htm)), а также должен быть выполнен пример, приведённый на странице описания метода [MapContentMilestone.startAnimation](MapContentMilestone.startAnimation.htm).


Запустим воспроизведение анимации значка и остановим её через 2 секунды:


// Запустим воспроизведение анимации
milestone.startAnimation();
// Остановим воспроизведение анимации через 2 секунды
PP.setTimeout(function () {
    milestone.stopAnimation()
}, 2000);

В результате выполнения примера воспроизведение анимации было остановлено через 2 секунды. При этом значок вернулся в исходное положение, а в консоли браузера было выведено уведомление только о запуске анимации.


См. также:


[MapContentMilestone](MapContentMilestone.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
