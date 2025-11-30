# TreeDataVisualizer.animationStop

TreeDataVisualizer.animationStop
-


**


# TreeDataVisualizer.animationStop


## Синтаксис


animationStop();


## Описание


Метод animationStop** останавливает
 выполнение анимации диаграммы.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](dhtmlBubbleTree.chm::/Components/TreeMap/TreeMap.htm)
 с наименованием «treeMap» (см. «[Пример
 создания компонента TreeMap](dhtmlBubbleTree.chm::/Components/TreeMap/TreeMap_example.htm)» ). Запустим воспроизведение анимации,
 выполним шаг анимации, остановим воспроизведение анимации и выведем состояние
 воспроизведения анимации до и после её остановки:


// Получим временную шкалу
var timeline = treeMap.getTimeline();
// Запустим воспроизведение анимации
timeline.play();
// Выполним шаг анимации
treeMap.setAnimationStep(5);
// Выведем состояние воспроизведения анимации
console.log("Признак воспроизведения анимации: " + treeMap.isAnimating());
// Остановим выполнение анимации
treeMap.animationStop();
// Выведем состояние воспроизведения анимации
console.log("Признак воспроизведения анимации: " + treeMap.isAnimating());

В результате в консоли браузера были выведены признаки воспроизведения
 анимации до и после её остановки:


Признак воспроизведения анимации: true


Признак воспроизведения анимации: false


См. также:


[TreeDataVisualizer](TreeDataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
