# ColorCombo.showDropPanel

ColorCombo.showDropPanel
-


**


# ColorCombo.showDropPanel


## Синтаксис


showDropPanel();


## Описание


Метод **showDropPanel
 раскрывает панель для выбора цвета.


## Пример


Для реализации примера необходимо наличие компонента [ColorCombo](../../Components/ColorCombo/ColorCombo.htm),
 с наименованием colorCombo (см. «[Пример
 создания компонента ColorCombo](../../Components/ColorCombo/Example_ColorCombo.htm)»). Добавим обработчик события изменения
 значения цветовой панели:


// Добавляем обработчик события изменения значения цветовой панели
colorCombo.ValueChanged.add(function (sender, args) {
    console.log("Изменилось значение цветовой панели");
});
Раскроем панель для выбора цвета и получаем ее размеры:


// Раскрываем цветовую панель
colorCombo.showDropPanel();
// Получаем размеры панели
console.log("Высота панели: " + colorCombo.getDropPanel().getHeight());
console.log("Ширина панели: " + colorCombo.getDropPanel().getWidth());
В результате в консоль будут выведены размеры цветовой панели:


Высота панели: 193


Ширина панели: 349


Выберем цвет. В консоль будет выведено сообщение об изменении значения
 панели для выбора цвета:


Изменилось значение панели для выбора цвета


См. также:


[ColorCombo](ColorCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
