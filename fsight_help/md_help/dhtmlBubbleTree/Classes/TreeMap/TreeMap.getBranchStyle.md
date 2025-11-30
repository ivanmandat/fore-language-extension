# TreeMap.getBranchStyle

TreeMap.getBranchStyle
-


# TreeMap.getBranchStyle


## Синтаксис


getBranchStyle(level: Number);


## Описание


level. уровень иерархии.


## Описание


Метод getBranchStyle возвращает
 стиль заголовка ветви с учетом уровня иерархии.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)» ):


// Получим стиль заголовка ветви второго уровня
var stl = treeMap.getBranchStyle(1);
// Выведем значение в виде JSON структуры
alert(JSON.stringify(stl, null, 4));

В результате выполнения примера стиль заголовка ветви второго уровня
 был выведен в виде JSON структуры.


См. также:


[TreeMap](TreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
