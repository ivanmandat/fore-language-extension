# NavigationBar.SelectableSelected

NavigationBar.SelectableSelected
-


# NavigationBar.SelectableSelected


## Синтаксис


SelectableSelected: function(sender, args)


## Параметры


sender. Источник
 события;


args. Информация о событии.
 Доступные аргументы: Event - настройки
 события; Element - DOM-элемент,
 на котором произошло событие; Control
 - элемент, по которому было выполнено нажатие.


## Описание


Событие SelectableSelected наступает
 при нажатии кнопки мыши на панели свойств.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [NavigationBar](../../Components/NavigationBar/NavigationBar.htm)
 с наименованием «navigationBar» (см. «[Пример
 создания компонента NavigationBar](../../Components/NavigationBar/Example_NavigationBar.htm)»). Добавляем обработчик события
 нажатия на элемент панели свойств:


// Добавляем обработчик события нажатия на элемент панели свойств
navigationBar.SelectableSelected.add(function(sender, args) {
    console.log("Произошло нажатие на элемент панели свойств");
});
После нажатия на любую вкладку в консоль будет выведено сообщение о
 нажатии:


Произошло нажатие на элемент панели свойств


См. также:


[NavigationBar](NavigationBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
