# NavigationItem.Disposing

NavigationItem.Disposing
-


# NavigationItem.Disposing


## Синтаксис


Disposing: function (sender, args)


## Параметры


sender. Источник
 события;


args. Информация о событии.
 Аргументы: Index - позиция
 уничтоженной вкладки.


## Описание


Событие Disposing наступает
 после уничтожения вкладки.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigationBar](../../Components/NavigationBar/NavigationBar.htm)
 с наименованием «navigationBar» (см. «[Пример
 создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Добавляем к первой вкладке обработчик
 события уничтожения элемента:


navigationBar.getLayoutItems()[0].Disposing.add(function (sender, args) {
    console.log("Удален элемент с индексом: " + args.Index);
});
Полностью удаляем первый элемент:


// Полностью удаляем первый элемент
navigationBar.getLayoutItems()[0].dispose();
В результате в консоль будет выведена информация об удалении первого
 элемента:


Удален элемент с индексом: 0


См. также:


[NavigationItem](NavigationItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
