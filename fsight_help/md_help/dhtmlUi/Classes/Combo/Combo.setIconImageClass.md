# Combo.setIconImageClass

Combo.setIconImageClass
-


# Combo.setIconImageClass


Синтаксис


setIconImageClass(value: String);


## Параметры


value. Имя класса компонента
 пиктограммы редактора ввода.


## Описание


Метод setIconImageClass меняет
 имя класса компонента пиктограммы редактора ввода.


## Пример


Для выполнения примера необходимо наличие компонента [Combo](../../Components/Combo/Combo.htm)
 с наименование «combo» (см. «[Пример
 создания компонента Combo](../../Components/Combo/Example_Combo.htm)»). Изменим название класса компонента пиктограммы
 редактора ввода:


// Меняем название класса компонента пиктограммы редактора ввода
combo.setIconImageClass("NewIconImageClass");
Получим полное имя класса компонента, который содержит в названии класса
 строку «NewIconImageClass»:


var elem = document.getElementsByClassName("NewIconImageClass")[0];
console.log("Полное имя класса компонента: " + elem.getAttribute("class"));
В результате в консоль было выведено полное имя класса компонента:


Полное имя класса компонента: PPTextBoxImage NewIconImageClass


См. также:


[Combo](Combo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
