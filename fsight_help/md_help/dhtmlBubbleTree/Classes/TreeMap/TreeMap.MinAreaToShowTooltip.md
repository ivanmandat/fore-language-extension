# TreeMap.MinAreaToShowTooltip

TreeMap.MinAreaToShowTooltip
-


# TreeMap.MinAreaToShowTooltip


## Синтаксис


MinAreaToShowTooltip: Number;


## Описание


Свойство MinAreaToShowTooltip
 определяет минимальную площадь для отображения всплывающей подсказки.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setMinAreaToShowTooltip(),
 а возвращается с помощью метода getMinAreaToShowTooltip().


Значение сравнивается с площадью элемента в пикселях.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TreeMap](../../Components/TreeMap/TreeMap.htm) с наименованием
 «treeMap» (см. «[Пример
 создания компонента TreeMap](../../Components/TreeMap/TreeMap_example.htm)» ). Поменяем подсказку ветвей плоского
 дерева:


// Установим минимальную площадь для отображения всплывающей подсказки
treeMap.setMinAreaToShowTooltip(100000);
В результате выполнения примера для элементов площадью менее 100000
 не будет отображаться всплывающая подсказка.


См.
 также:


[TreeMap](TreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
