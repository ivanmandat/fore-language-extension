# Color.isEqual

Color.isEqual
-


# Color.isEqual


## Синтаксис


isEqual (color)


## Параметры


color. Цвет, с которым сравнивается
 данный цвет. Экземпляр класса [Color](Color.htm).


## Описание


Метод isEqual сравнивает два
 цвета.


## Комментарии


Метод возвращает true, если
 цвета одинаковы и false, если
 цвета разные.


## Пример


Для выполнения примера предполагается наличие на html-странице двух
 компонентов [ColorCombo](dhtmlUi.chm::/components/colorcombo/colorcombo.htm)
 с наименованиями «colCombo» и «colCombo1» (см. «[Пример
 создания компонента ColorCombo](dhtmlUi.chm::/components/colorcombo/example_colorcombo.htm)»). Добавим обработчик события [ColorCombo.ColorChanged](dhtmlUi.chm::/Classes/colorcombo/colorcombo.colorchanged.htm):


colCombo.ColorChanged.add(function (sender, args) {
    var col = colCombo.getColor();
    var col1 = colCombo1.getColor();
    if (col.isEqual(col1) == false) {
        colCombo1.setColor(col)
    }
});
После выполнения примера при изменении цвета в компоненте «colCombo»,
 в компоненте «colCombo1» будет установлен такой же цвет.


[Color](Color.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
