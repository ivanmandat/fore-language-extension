# EaxCategoryView.ControlsCreated

EaxCategoryView.ControlsCreated
-


# EaxCategoryView.ControlsCreated


## Синтаксис


ControlsCreated: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ControlsCreated наступает
 после создания элементов управления вкладки ленты инструментов экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Добавляем обработчик события создания
 элементов управления вкладки «Вид» ленты инструментов:


// Получаем представление вкладки «Вид»
var category = expressBox.getRibbonView().getViewCategory();
// Добавляем обработчик события создания элементов управления
category.ControlsCreated.add(function(sender, args) {
    console.log("Созданы элементы управления вкладки «Вид»");
});
После нажатия на вкладку «Вид» в консоль будет выведено сообщение о
 загрузке элементов управления:


Созданы элементы управления вкладки «Вид»


См.
 также:


[EaxCategoryView](EaxCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
