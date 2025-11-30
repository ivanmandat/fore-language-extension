# MapContentMilestone.startAnimation

MapContentMilestone.startAnimation
-


# MapContentMilestone.startAnimation


## Синтаксис


startAnimation();


## Описание


Метод startAnimation запускает воспроизведение анимации значка слоя карты.


## Пример


Для выполнения примера необходимо наличие на html-странице объекта класса [MapContentMilestone](MapContentMilestone.htm) с наименованием «milestone» (см. страницу описания метода [MapContentMilestone.getMilestonePosition](MapContentMilestone.getMilestonePosition.htm)). Воспроизведём анимацию значка, перемещая его от середины верхней границы области слоя карты с идентификатором «RU-KYA» к середине нижней границы и обратно. При этом обработаем его события [AnimationStarted](MapContentMilestone.AnimationStarted.htm), [AnimationCycleCompleted](MapContentMilestone.AnimationCycleCompleted.htm), [AnimationCompleted](MapContentMilestone.AnimationCompleted.htm):


// Переменная для хранения времени в миллисекундах
var currentTime = 0;
// Обработаем для значка событие AnimationStarted
milestone.AnimationStarted.add(function () {
    console.log("Начато воспроизведение анимации");
    currentTime = Date.now();
});
// Обработаем для значка событие AnimationCompleted
milestone.AnimationCompleted.add(function () {
    console.log("Обратный цикл воспроизведения анимации воспроизведён за " +
        (Date.now() - currentTime) + " мс");
});
// Обработаем для значка событие AnimationCycleCompleted
milestone.AnimationCycleCompleted.add(function () {
    console.log("Прямой цикл воспроизведения анимации воспроизведён за " +
        (Date.now() - currentTime) + " мс");
});
// Создадим объект анимации карты
var animation = new PP.MapMilestoneAnimation({
    Target: milestone, // Воспроизводим анимацию значка
    AnimationPointsList: "0.5,0 0.5,1", // Конечные точки перемещения значка
    AutoReverse: true, // Разрешим обратный цикл воспроизведения анимации
    StepTime: 3000 // Длительность цикла анимации
});
// Обработаем для значка событие AnimationStarted
animation.AnimationStarted.add(function () {
    milestone.AnimationStarted.fire(this);
});
// Обработаем для значка событие AnimationCompleted
animation.AnimationCompleted.add(function () {
    milestone.AnimationCompleted.fire(this);
});
// Обработаем для значка событие AnimationCycleCompleted
animation.AnimationCycleCompleted.add(function () {
    milestone.AnimationCycleCompleted.fire(this);
});
// Установим для значка объект анимации
milestone._Animation = animation;
// Запустим воспроизведение анимации
milestone.startAnimation();

В результате выполнения примера значок плавно перемещается от середины верхней границы области слоя карты с идентификатором «RU-KYA» к середине нижней границы и обратно.


При запуске воспроизведения анимации значка наступает событие [AnimationStarted](MapContentMilestone.AnimationStarted.htm). При его достижении второй точки генерируется событие [AnimationCycleCompleted](MapContentMilestone.AnimationCycleCompleted.htm), а при возвращении в начальную позицию - событие [AnimationCompleted](MapContentMilestone.AnimationCompleted.htm). Результаты обработки этих событий выводятся в консоли браузера:


Начато воспроизведение анимации


Прямой цикл воспроизведения анимации воспроизведён за 5008 мс


Обратный цикл воспроизведения анимации воспроизведён за 9041 мс


См. также:


[MapContentMilestone](MapContentMilestone.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
