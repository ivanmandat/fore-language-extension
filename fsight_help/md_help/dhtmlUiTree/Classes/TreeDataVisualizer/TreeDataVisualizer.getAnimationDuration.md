# TreeDataVisualizer.getAnimationDuration

TreeDataVisualizer.getAnimationDuration
-


**


# TreeDataVisualizer.getAnimationDuration


## Синтаксис


getAnimationDuration();


## Описание


Метод getAnimationDuration**
 возвращает длительность анимации диаграммы.


## Комментарии


Метод возвращает значение типа Numer.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](dhtmlBubbleTree.chm::/Components/TreeMap/TreeMap.htm)
 с наименованием «treeMap» (см. «[Пример
 создания компонента TreeMap](dhtmlBubbleTree.chm::/Components/TreeMap/TreeMap_example.htm)» ). Обработаем следующие события: [ActiveItemChanged](TreeDataVisualizer.ActiveItemChanged.htm),
 [ItemClick](TreeDataVisualizer.ItemClick.htm), [Refreshed](TreeDataVisualizer.Refreshed.htm).
 Получим длительность анимации диаграммы, выведем размеры элемента цепочки
 навигации, выведем размеры экземпляра текущей диаграммы, выведем размеры
 элемента отрисовки, выведем количество дочерних элементов контейнера,
 в котором располагается диаграмма, обновим представление диаграммы:


// Обработаем событие ActiveItemChanged
treeMap.ActiveItemChanged.add(function (sender, args, timeout) {
        console.log("Инициировано событие ActiveItemChanged")
    });
// Обработаем событие ItemClick
treeMap.ItemClick.add(function (sender, args, timeout) {
        console.log("Инициировано событие ItemClick")
    });
// Обработаем событие Refreshed
treeMap.Refreshed.add(function (sender, args, timeout) {
        console.log("Инициировано событие Refreshed")
    });
// Выведем длительность анимации диаграммы
console.log("Длительность анимации: " + treeMap.getAnimationDuration())
// Получим цепочку навигации по уровням элементов диаграммы
var breadcrumb = treeMap.getBreadcrumb();
// Выведем размеры элемента цепочки навигации
console.log("Размеры цепочки навигации: " + breadcrumb.getWidth() + "x" + breadcrumb.getHeight());
// Получим экземпляр текущей диаграммы
var instance = treeMap.getInstance();
// Выведем размеры экземпляра текущей диаграммы
console.log("Размеры экземпляра текущей диаграммы: " + instance.getWidth() + "x" + instance.getHeight());
// Получим SVG-элемент, в котором отрисовывается диаграмма
var paperNode = treeMap.getPaperNode();
// Выведем размеры элемента отрисовки
console.log("Размеры элемента отрисовки: " + paperNode.clientWidth + "x" + paperNode.clientHeight);
// Получим <DIV> контейнер, в котором располагается диаграмма
var rootNode = treeMap.getRootNode();
// Выведем количество дочерних элементов контейнера
console.log("Количество дочерних элементов контейнера, в котором располагается диаграмма: " + rootNode.childElementCount);
// Обновим представление
treeMap.refreshView();

В результате выполнения примера в консоли браузера были выведены длительность
 анимации, размеры цепочки навигации, размеры экземпляра текущей диаграммы,
 размеры элемента отрисовки, количество дочерних элементов контейнера,
 в котором располагается диаграмма, а также сообщение о вызове события
 [Refreshed](TreeDataVisualizer.Refreshed.htm):


Длительность анимации: 5000


Размеры цепочки навигации: 640x24


Размеры экземпляра текущей диаграммы: 640x480


Размеры элемента отрисовки: 640x349


Количество дочерних элементов контейнера, в котором
 располагается диаграмма: 12


Инициировано событие Refreshed


Щёлкнем по любому элементу диаграммы, который представляет
 ветвь.


В результате в консоли браузера были выведены сообщения о вызове событий
 [ActiveItemChanged](TreeDataVisualizer.ActiveItemChanged.htm)
 и [ItemClick](TreeDataVisualizer.ItemClick.htm):


Инициировано событие ItemClick


Инициировано событие ActiveItemChanged


См. также:


[TreeDataVisualizer](TreeDataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
